/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/prefer-literal-enum-member */
import {Status} from './status';

/**
 * An enum mapping HTTP status codes to their names.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status | MDN docs}
 *
 * @public
 * @category HTTP
 */
export enum StatusName {
	'Continue' = Status.Continue,
	'Switching Protocols' = Status.SwitchingProtocols,
	'Early Hints' = Status.EarlyHints,
	'OK' = Status.Ok,
	'Created' = Status.Created,
	'Accepted' = Status.Accepted,
	'Non-Authoritative Information' = Status.NonAuthoritativeInformation,
	'No Content' = Status.NoContent,
	'Reset Content' = Status.ResetContent,
	'Partial Content' = Status.PartialContent,
	'Multiple Choices' = Status.MultipleChoices,
	'Moved Permanently' = Status.MovedPermanently,
	'Found' = Status.Found,
	'See Other' = Status.SeeOther,
	'Not Modified' = Status.NotModified,
	'Temporary Redirect' = Status.TemporaryRedirect,
	'Permanent Redirect' = Status.PermanentRedirect,
	'Bad Request' = Status.BadRequest,
	'Unauthorized' = Status.Unauthorized,
	'Payment Required' = Status.PaymentRequired,
	'Forbidden' = Status.Forbidden,
	'Not Found' = Status.NotFound,
	'Method Not Allowed' = Status.MethodNotAllowed,
	'Not Acceptable' = Status.NotAcceptable,
	'Proxy Authentication Required' = Status.ProxyAuthenticationRequired,
	'Request Timeout' = Status.RequestTimeout,
	'Conflict' = Status.Conflict,
	'Gone' = Status.Gone,
	'Length Required' = Status.LengthRequired,
	'Precondition Failed' = Status.PreconditionFailed,
	'Payload Too Large' = Status.PayloadTooLarge,
	'URI Too Long' = Status.UriTooLong,
	'Unsupported Media Type' = Status.UnsupportedMediaType,
	'Range Not Satisfiable' = Status.RangeNotSatisfiable,
	'Expectation Failed' = Status.ExpectationFailed,
	"I'm a Teapot" = Status.ImATeapot,
	'Misdirected Request' = Status.MisdirectedRequest,
	'Unprocessable Content' = Status.UnprocessableEntity,
	'Too Early' = Status.TooEarly,
	'Upgrade Required' = Status.UpgradeRequired,
	'Precondition Required' = Status.PreconditionRequired,
	'Too Many Requests' = Status.TooManyRequests,
	'Request Header Fields Too Large' = Status.RequestHeaderFieldsTooLarge,
	'Unavailable For Legal Reasons' = Status.UnavailableForLegalReasons,
	'Internal Server Error' = Status.InternalServerError,
	'Not Implemented' = Status.NotImplemented,
	'Bad Gateway' = Status.BadGateway,
	'Service Unavailable' = Status.ServiceUnavailable,
	'Gateway Timeout' = Status.GatewayTimeout,
	'HTTP Version Not Supported' = Status.HttpVersionNotSupported,
	'Variant Also Negotiates' = Status.VariantAlsoNegotiates,
	'Insufficient Storage' = Status.InsufficientStorage,
	/**
	 * @deprecated This is a status code only used in the WebDAV protocol, which is not supported by the `Status` enum.
	 */
	'Loop Detected' = Status.LoopDetected,
	'Not Extended' = Status.NotExtended,
	'Network Authentication Required' = Status.NetworkAuthenticationRequired,
}
