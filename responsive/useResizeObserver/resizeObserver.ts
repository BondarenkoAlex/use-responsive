export const resizeObserver = (callback: (width: number) => void) => {
	let entry;
	let contentBoxSize;
	let width: number;
	return new ResizeObserver((entries) => {
		entry = entries[0];
		if (entry.contentBoxSize) {
			contentBoxSize = Array.isArray(entry.contentBoxSize)
				? entry.contentBoxSize[0]
				: entry.contentBoxSize;
			width = contentBoxSize.inlineSize;
		} else if (entry.contentRect) {
			width = entry.contentRect.width;
		}
		callback(width);
	});
}
