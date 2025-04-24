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

export * from './binary-search.js';
export * from './fill.js';
export * from './find-index-all.js';
export * from './first-index-of-last-group.js';
export * from './holes.js';
export * from './index-of-all.js';
export * from './large-to-small.js';
export * from './map-fill.js';
export * from './overwrite.js';
export * from './pad-end.js';
export * from './pad-start.js';
export * from './pull.js';
export * from './pull-all.js';
export * from './replace.js';
export * from './replace-all.js';
export * from './sample.js';
export * from './shuffle.js';
export * from './trim-end.js';
export * from './trim-start.js';
