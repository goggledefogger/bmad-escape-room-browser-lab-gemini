import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
	const pass = '370';
	res.setHeader('X-PASS', pass);
	res.status(200).json({
		message: `Access permit processed. Check headers for details.`,
		pass: pass // Also include in body for accessibility
	});
}
