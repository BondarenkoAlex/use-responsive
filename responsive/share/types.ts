// todo вять из единого источника истины
export type TDeviceType = 'mobile' | 'tablet' | 'desktop';

export type TDeviceTypeTrueFalse = {
	[key: string]: boolean;
};

export type TObserver = {
	[key: string]: (width: number) => boolean;
};

export type TMedia = {
	[key: string]: string;
};

export type TQueries = {
	observer?: TObserver;
	media?: TMedia;
};

export type TResponsiveProps = {
	device: TDeviceType;
	queries?: TQueries;
};
