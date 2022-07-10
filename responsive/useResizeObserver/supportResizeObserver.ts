// todo npm i -D @types/resize-observer-browser https://bobbyhadz.com/blog/typescript-cannot-find-name-resizeobserver

export const supportResizeObserver =
	// @ts-ignore
	typeof window !== 'undefined' && typeof window.ResizeObserver !== 'undefined';
