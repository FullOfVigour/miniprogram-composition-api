import { ICurrentModuleInstance } from './instance'
import { deepToRaw, deepWatch } from './shared'
import { mitt } from './mitt'
import { isFunction } from './utils'

import { Emitter } from './mitt'

export type IContext = {
	setData: (params: { [key: string]: any }) => () => void
} & { event: Emitter }

export function createContext (target: ICurrentModuleInstance): IContext{
	function setData (this: ICurrentModuleInstance, binding: Object): () => any{
		if (!binding) return () => {}

		const stopHandels = Object.keys(binding).map((key) => {
			const value = binding[key]

			if (isFunction(value)) {
				this[key] = value
				return
			}

			this.setData({
				[key]: deepToRaw(value)
			})

			return deepWatch(this, key, value)
		})

		return () => {
			stopHandels.forEach((stopHandle) => {
				stopHandle && stopHandle()
			})
		}
	}

	return Object.assign(
		{
			setData: setData.bind(target)
		},
		{
			event: mitt()
		}
	)
}
