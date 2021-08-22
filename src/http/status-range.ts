import {Range} from '../range';

/**
 * A {@link range | Range} of 1xx HTTP response status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses | MDN docs}
 *
 * @example
 * ```js
 * if (Http.StatusRange.informational.has(statusCode)) {
 *    // ...
 * }
 * ```
 */
export const informational: Readonly<Range> = Object.freeze(new Range(100, 200));
/**
 * A {@link range | range.Range} of 2xx HTTP response status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses | MDN docs}
 *
 * @example
 * ```js
 * if (Http.StatusRange.success.has(statusCode)) {
 *   // ...
 * }
 * ```
 */
export const success: Readonly<Range> = Object.freeze(new Range(200, 300));
/**
 * A {@link range | Range} of 3xx HTTP response status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages | MDN docs}
 *
 * @example
 * ```js
 * if (Http.StatusRange.redirects.has(statusCode)) {
 *   // ...
 * }
 * ```
 */
export const redirects: Readonly<Range> = Object.freeze(new Range(300, 400));
/**
 * A {@link range | Range} of 4xx HTTP response status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses | MDN docs}
 *
 * @example
 * ```js
 * if (Http.StatusRange.clientErrors.has(statusCode)) {
 *   // ...
 * }
 * ```
 */
export const clientErrors: Readonly<Range> = Object.freeze(new Range(400, 500));
/**
 * A {@link range | Range} of 5xx HTTP response status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses | MDN docs}
 *
 * @example
 * ```js
 * if (Http.StatusRange.serverErrors.has(statusCode)) {
 *   // ...
 * }
 * ```
 */
export const serverErrors: Readonly<Range> = Object.freeze(new Range(500, 600));
