import { supportMatchMedia } from './supportMatchMedia';

export const matchMedia = (query: string) => supportMatchMedia && window.matchMedia(query);
