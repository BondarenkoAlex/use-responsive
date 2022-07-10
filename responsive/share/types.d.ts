export declare type TDeviceType = 'mobile' | 'tablet' | 'desktop';
export declare type TDeviceTypeTrueFalse = {
    [key: string]: boolean;
};
export declare type TObserver = {
    [key: string]: (width: number) => boolean;
};
export declare type TMedia = {
    [key: string]: string;
};
export declare type TQueries = {
    observer?: TObserver;
    media?: TMedia;
};
export declare type TResponsiveProps = {
    device: TDeviceType;
    queries?: TQueries;
};
