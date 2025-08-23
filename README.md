# The Browser Lab

This project is a 5-minute, beginner-friendly web escape room designed to teach core browser DevTools skills (Inspect, Console, Network) in a fun and accessible way.

It was built using the **BMad Method** with agentic AI.

## Running the Project

### Prerequisites
- Node.js (~20.x)
- pnpm

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development
To run the development server, which includes the SvelteKit frontend and the Vercel serverless function backend:
```bash
pnpm dev
```
The application will be available at `http://localhost:5173`.

### Testing
To run the end-to-end tests:
```bash
pnpm test:e2e
```
