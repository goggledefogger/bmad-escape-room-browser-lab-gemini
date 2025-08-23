# The Browser Lab

"The Browser Lab" is a 5-minute, beginner-friendly web escape room designed to teach core browser DevTools skills (Inspect, Console, Network) in a fun and accessible way. It provides a gamified experience with an in-game fallback "Coach" panel, ensuring anyone can participate regardless of technical barriers.

This project was built using the **BMad Method** with agentic AI.

## Features

- **Three Core Puzzles**: Focused on teaching the basics of the DevTools Console, CSS Inspector, and Network tab.
- **In-Game "Coach" Panel**: A fallback UI that mirrors the necessary information from the real DevTools, making the puzzles solvable without leaving the main window.
- **Session Randomization**: Puzzle codes and words are randomized on each page load.
- **Responsive Design**: While designed for desktop, the "Coach" panel ensures a functional experience on mobile devices.

## Tech Stack

This project is a monorepo built with PNPM workspaces.

- **Frontend (`apps/web`)**:
  - **Framework**: SvelteKit
  - **Styling**: Tailwind CSS
  - **Testing**: Playwright for E2E tests, Vitest for unit tests.
- **Backend (`apps/api`)**:
  - A lightweight mock API server using `tsx`, designed for Vercel Serverless Functions.

For a more detailed breakdown of the architecture, see the [Brownfield Architecture Document](./docs/brownfield-architecture.md).

## Running the Project

### Prerequisites
- Node.js (~20.x)
- pnpm

### Setup
1. Clone the repository.
2. Install dependencies from the root directory:
   ```bash
   pnpm install
   ```

### Development
To run the development servers for both the frontend and the mock API:
```bash
pnpm dev
```
The application will be available at `http://localhost:5173`.

### Testing
To run the unit tests:
```bash
pnpm --filter web test
```
