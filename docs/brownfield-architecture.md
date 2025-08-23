# The Browser Lab Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the The Browser Lab codebase, including technical debt, workarounds, and real-world patterns. It serves as a reference for AI agents working on enhancements.

### Document Scope

Focused on areas relevant to: The Browser Lab, a 5-minute, beginner-friendly web escape room designed to teach core browser DevTools skills (Inspect, Console, Network).

### Change Log

| Date   | Version | Description                 | Author    |
| ------ | ------- | --------------------------- | --------- |
| 2024-07-29 | 1.0     | Initial brownfield analysis | Gemini 2.5 Pro |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry**: `apps/web/src/routes/+page.svelte`
- **Core UI Components**: `apps/web/src/lib/components/`
- **State Management**: `apps/web/src/lib/stores/`
- **Mock API**: `apps/api/local-server.ts`

## High Level Architecture

### Technical Summary

The project is a monorepo managed with pnpm. It consists of a SvelteKit frontend application (`apps/web`) and a lightweight mock API server (`apps/api`) intended for serverless deployment. The frontend is a single-page application (SPA) designed as a web-based escape room.

### Actual Tech Stack

| Category      | Technology      | Version | Notes                                        |
| ------------- | --------------- | ------- | -------------------------------------------- |
| Runtime       | Node.js         | >=18    | Inferred from modern tooling                 |
| Package Manager | pnpm          | ~9      | Defined in `pnpm-lock.yaml`                  |
| Frontend      | SvelteKit       | ^2.22.0 | Full-stack Svelte framework                   |
|               | Svelte          | ^5.0.0  | UI Component Framework                       |
| Build Tool    | Vite            | ^7.0.4  | Modern frontend build tool                   |
| Styling       | Tailwind CSS    | ^3.4.9  | Utility-first CSS framework                  |
| API Backend   | tsx & Vercel    | -       | Lightweight server for mock API              |
| Language      | TypeScript      | ^5.0.0  | Superset of JavaScript                       |
| Linting       | ESLint/Prettier | -       | For code quality and consistency             |

### Repository Structure Reality Check

- Type: Monorepo
- Package Manager: pnpm
- Notable: Clear separation between frontend (`web`) and backend (`api`) applications inside the `apps` directory.

## Source Tree and Module Organization

### Project Structure (Actual)

```text
/
├── apps/
│   ├── api/          # Mock API server (Vercel function)
│   └── web/          # SvelteKit frontend application
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/ # Core Svelte components
│       │   │   └── stores/     # Svelte stores for state management
│       │   └── routes/     # SvelteKit file-based routing
│       └── svelte.config.js
├── docs/             # Project documentation
└── package.json      # Root package.json with workspace scripts
```

### Key Modules and Their Purpose

- **`apps/web`**: The main user-facing application. Contains all UI, logic, and assets for the escape room.
- **`apps/web/src/lib/components`**: Contains the core UI components like `Workbench.svelte`, `CoachPanel.svelte`, and `ExitPanel.svelte`.
- **`apps/web/src/lib/stores`**: Manages the application's state, including puzzle states and UI visibility, using Svelte stores.
- **`apps/api`**: Provides a mock API endpoint required for the "Network" puzzle.

## Data Models and APIs

### Data Models

There are no complex data models. The application state is managed client-side via Svelte stores in `apps/web/src/lib/stores/`. The primary data includes puzzle codes and UI state flags.

### API Specifications

A single mock API endpoint is defined in `apps/api/local-server.ts`. It's a simple HTTP server that responds with a JSON object and a custom header containing one of the puzzle's secret codes.

## Technical Debt and Known Issues

- The project is a small, focused MVP, so significant technical debt has not been accrued.
- The testing strategy relies primarily on manual testing, with some unit tests. More comprehensive automated testing could be added in the future.

## Integration Points and External Dependencies

### External Services

There are no external service integrations. The application is self-contained.

### Internal Integration Points

- The frontend (`apps/web`) communicates with the mock API (`apps/api`) to solve the network puzzle.

## Development and Deployment

### Local Development Setup

1.  Install `pnpm` if you haven't already.
2.  Run `pnpm install` in the root directory.
3.  Run `pnpm dev` to start both the web and api servers concurrently.

### Build and Deployment Process

- **Build Command**: `pnpm --filter web build`
- **Deployment**: The `api` is designed to be deployed as a Vercel serverless function, and the `web` app as a static site on a platform like Vercel or Netlify.

## Testing Reality

### Current Test Coverage

- **Unit Tests**: `vitest` is configured, but no tests are implemented yet.
- **E2E Tests**: None.
- **Manual Testing**: The primary method for QA as stated in the PRD.

### Running Tests

```bash
# To run Vitest unit tests (if any)
pnpm --filter web test

```

## Appendix - Useful Commands and Scripts

### Frequently Used Commands

```bash
# Start development servers for web and api
pnpm dev

# Build the web application for production
pnpm --filter web build

# Run linters and formatters
pnpm --filter web lint
pnpm --filter web format
```
