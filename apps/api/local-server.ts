import http from 'http';
import handler from './permit';

const PORT = 3001;

const server = http.createServer((req, res) => {
	// Simple router
	if (req.url === '/api/permit') {
		// Add CORS headers to allow the frontend dev server to call this API
		res.setHeader('Access-Control-Allow-Origin', '*');
		return handler(req, res);
	}

	res.writeHead(404);
	res.end('Not Found');
});

server.listen(PORT, () => {
	console.log(`[api] Local server running at http://localhost:${PORT}`);
});
