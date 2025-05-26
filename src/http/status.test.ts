import * as http from 'node:http';
import {Status} from './status.js';

describe('Status', () => {
	it('has no invalid status codes', () => {
		const expected = new Set(Object.keys(http.STATUS_CODES));

		const names = Object.values(Status).filter(element => typeof element === 'number');

		for (const received of names) {
			expect(expected).toContain(received.toString());
		}
	});

	it('has correct status codes', () => {
		expect(Status.Continue).toBe(100);
		expect(Status.SwitchingProtocols).toBe(101);
		expect(Status.EarlyHints).toBe(103);
		expect(Status.Ok).toBe(200);
		expect(Status.Created).toBe(201);
		expect(Status.Accepted).toBe(202);
		expect(Status.NonAuthoritativeInformation).toBe(203);
		expect(Status.NoContent).toBe(204);
		expect(Status.ResetContent).toBe(205);
		expect(Status.PartialContent).toBe(206);
		expect(Status.MultipleChoices).toBe(300);
		expect(Status.MovedPermanently).toBe(301);
		expect(Status.Found).toBe(302);
		expect(Status.SeeOther).toBe(303);
		expect(Status.NotModified).toBe(304);
		expect(Status.TemporaryRedirect).toBe(307);
		expect(Status.PermanentRedirect).toBe(308);
		expect(Status.BadRequest).toBe(400);
		expect(Status.Unauthorized).toBe(401);
		expect(Status.PaymentRequired).toBe(402);
		expect(Status.Forbidden).toBe(403);
		expect(Status.NotFound).toBe(404);
		expect(Status.MethodNotAllowed).toBe(405);
		expect(Status.NotAcceptable).toBe(406);
		expect(Status.ProxyAuthenticationRequired).toBe(407);
		expect(Status.RequestTimeout).toBe(408);
		expect(Status.Conflict).toBe(409);
		expect(Status.Gone).toBe(410);
		expect(Status.LengthRequired).toBe(411);
		expect(Status.PreconditionFailed).toBe(412);
		expect(Status.PayloadTooLarge).toBe(413);
		expect(Status.UriTooLong).toBe(414);
		expect(Status.UnsupportedMediaType).toBe(415);
		expect(Status.RangeNotSatisfiable).toBe(416);
		expect(Status.ExpectationFailed).toBe(417);
		expect(Status.ImATeapot).toBe(418);
		expect(Status.UnprocessableEntity).toBe(422);
		expect(Status.TooEarly).toBe(425);
		expect(Status.UpgradeRequired).toBe(426);
		expect(Status.PreconditionRequired).toBe(428);
		expect(Status.TooManyRequests).toBe(429);
		expect(Status.RequestHeaderFieldsTooLarge).toBe(431);
		expect(Status.UnavailableForLegalReasons).toBe(451);
		expect(Status.InternalServerError).toBe(500);
		expect(Status.NotImplemented).toBe(501);
		expect(Status.BadGateway).toBe(502);
		expect(Status.ServiceUnavailable).toBe(503);
		expect(Status.GatewayTimeout).toBe(504);
		expect(Status.HttpVersionNotSupported).toBe(505);
		expect(Status.VariantAlsoNegotiates).toBe(506);
		expect(Status.InsufficientStorage).toBe(507);
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		expect(Status.LoopDetected).toBe(508);
		expect(Status.NotExtended).toBe(510);
		expect(Status.NetworkAuthenticationRequired).toBe(511);
	});
});
