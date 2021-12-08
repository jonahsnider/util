/**
 * A 2-dimensional table of type `T`.
 *
 * @public
 * @category Array
 */
export type Table<T> = T[][];

/**
 * An array with at least 1 element.
 *
 * @public
 * @category Array
 */
export type NonEmptyArray<T> = [T, ...T[]];

export * from './binary-search';
export * from './chunk';
export * from './fill';
export * from './find-index-all';
export * from './first-index-of-last-group';
export * from './holes';
export * from './index-of-all';
export * from './large-to-small';
export * from './map-fill';
export * from './overwrite';
export * from './pad-end';
export * from './pad-start';
export * from './pull';
export * from './pull-all';
export * from './replace';
export * from './replace-all';
export * from './sample';
export * from './shuffle';
export * from './trim-start';
