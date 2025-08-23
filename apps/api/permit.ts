import type { IncomingMessage, ServerResponse } from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse) {
	const pass = '370';
	res.setHeader('X-PASS', pass);
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(
		JSON.stringify({
			message: `Access permit processed. Check headers for details.`,
			pass: pass
		})
	);
}
