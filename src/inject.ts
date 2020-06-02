const provides = Object.create(null)

// @ts-ignore
export interface InjectionKey<T> extends Symbol {}


/**
 * 注入
 * @param key 
 * @param value 
 */
export function provide<T> (key: InjectionKey<T> | string, value: T): void{
	// TS doesn't allow symbol as index type
	provides[key as string] = value
}


/**
 * 取出
 * @param key 
 */
export function inject<T> (key: InjectionKey<T> | string): T | undefined
export function inject<T> (key: InjectionKey<T> | string, defaultValue: T): T
export function inject (key: InjectionKey<any> | string, defaultValue?: unknown): unknown{
	if (key in provides) {
		// TS doesn't allow symbol as index type
		return provides[key as string]
	}

	if (arguments.length > 1) {
		return defaultValue
	}

	/* istanbul ignore else */
	console.warn(`injection "${String(key)}" not found.`)
}
