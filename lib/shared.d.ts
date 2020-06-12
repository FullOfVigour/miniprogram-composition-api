import { ICurrentModuleInstance } from './instance';
export declare const deepToRaw: (x: unknown) => any;
/**
 * Page/Component 与 watch 中转
 * @return {function} 抛弃监听
 */
export declare function deepWatch(target: any, key: string, value: any): () => void;
/**
 *
 * 绑定函数, 基于target对象绑定实例
 * @param target - 页面/组件 实例
 * @param callback - 执行方法
 * @param props - props内容
 * @return {function} - 停止内部所有依赖的监听
 */
export declare const setup: (target: ICurrentModuleInstance, callback: Function, props?: unknown) => () => any;
/**
 * setData 变种, 能够解析 ref 并 动态更新
 * @param target - 页面实例
 * @param binding - 绑定的属性
 * @return {function} 移除方法
 */
export declare function useSetData(target: ICurrentModuleInstance, binding: Object): () => any;
