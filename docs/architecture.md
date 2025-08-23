# The Browser Lab Fullstack Architecture Document

## 1. Introduction

This document outlines the complete fullstack architecture for "The Browser Lab," a beginner-friendly web escape room designed to teach browser DevTools skills. It covers the frontend implementation, the serverless backend components, and their integration. This unified architecture serves as the single source of truth for all development, ensuring consistency and a streamlined workflow.

### Starter Template or Existing Project
N/A - This is a greenfield project that will be built from scratch.

### Change Log
| Date       | Version | Description                          | Author  |
|------------|---------|--------------------------------------|---------|
| YYYA-MM-DD | 1.0     | Initial draft of the architecture    | Winston |

## 2. High-Level Architecture

### Technical Summary
The architecture for "The Browser Lab" is a modern, lightweight Jamstack application. It consists of a static frontend single-page application (SPA) built with **Svelte** and hosted on a global CDN for optimal performance. The dynamic puzzle elements (randomized codes) and the mock network request are handled by a single, simple **serverless function**. This serverless approach ensures scalability, low operational overhead, and cost-effectiveness, perfectly aligning with the PRD's goals of creating a fast, simple, and highly available educational tool. The entire project will be managed within a **monorepo** to streamline development and code sharing.

### Platform and Infrastructure Choice
- **Platform:** Vercel
- **Key Services:**
    - Vercel Edge Network for static hosting and CDN.
    - Vercel Serverless Functions for the backend API.
- **Rationale:** Vercel provides a best-in-class developer experience for modern web applications, particularly those built with frameworks like Svelte. Its seamless Git integration, automatic deployments, global CDN, and integrated serverless functions make it the ideal, all-in-one platform for this project, minimizing infrastructure management and accelerating development.

### High-Level Architecture Diagram
```mermaid
graph TD
    subgraph Browser
        A[User]
    end

    subgraph Vercel Edge Network
        B[Svelte SPA]
    end

    subgraph Vercel Serverless
        C[/api/permit]
    end

    A -- Loads --> B
    B -- Interacts --> B
    B -- fetch() --> C
```

### Architectural Patterns
- **Jamstack:** The core architecture is Jamstack (JavaScript, APIs, and Markup). The frontend is a pre-built static site, and all dynamic functionality is handled via a serverless API, providing excellent performance, security, and scalability.
- **Component-Based UI:** The frontend will be built using small, reusable Svelte components, promoting modularity, maintainability, and testability.
- **Serverless Functions:** All backend logic is encapsulated in a single, stateless serverless function, which simplifies development and eliminates the need for server management.

## 3. Tech Stack

| Category           | Technology  | Version | Purpose                                        | Rationale                                                              |
|--------------------|-------------|---------|------------------------------------------------|------------------------------------------------------------------------|
| Frontend Language  | TypeScript  | ~5.3.3  | Primary language for type safety in the UI     | Catches errors early, improves code quality and maintainability.         |
| Frontend Framework | Svelte      | ~4.2.7  | UI framework for building the application      | Compiles to highly optimized vanilla JS, resulting in fast performance.  |
| State Management   | Svelte Stores| N/A     | For managing shared state across components    | Built-in, simple, and reactive state management solution.                |
| API Style          | REST        | N/A     | For communication with the serverless backend  | Simple, well-understood standard for the single API endpoint needed.     |
| Backend Language   | TypeScript  | ~5.3.3  | Primary language for the serverless function   | Consistent language across the stack, type safety.                     |
| E2E Testing        | Manual      | N/A     | For end-to-end testing of the user flow        | Per user request, automated E2E tests will be omitted in favor of manual testing. |
| Build Tool         | Vite        | ~5.0.12 | Frontend build tool and dev server             | Extremely fast, modern, and provides a great developer experience.       |
| CI/CD              | GitHub Actions| N/A     | For continuous integration and deployment      | Tightly integrated with GitHub, easy to configure for Vercel deployments. |
| CSS Framework      | Tailwind CSS| ~3.4.1  | For styling the application                    | Utility-first CSS for rapid, consistent, and maintainable styling.       |

## 4. Unified Project Structure

The project will be organized as a monorepo using `pnpm workspaces`.

```plaintext
/
├── apps/
│   ├── web/                # The Svelte frontend application
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── components/ # Svelte components
│   │   │   │   ├── stores/     # Svelte stores for state
│   │   │   │   └── types/      # Shared types
│   │   │   ├── routes/       # File-based routing
│   │   │   └── app.html
│   │   └── svelte.config.js
│   └── api/                # The serverless function
│       └── permit.ts       # The /api/permit endpoint
├── tests/
│   └── e2e/                # Playwright E2E tests
│       └── smoke.spec.ts
├── package.json
├── pnpm-workspace.yaml
└── vercel.json             # Vercel deployment configuration
```

## 5. Development Workflow

### Local Development Setup
1.  **Prerequisites:** Node.js (~20.x), pnpm
2.  **Initial Setup:**
    ```bash
    git clone <repo_url>
    cd bmad-escape-room-browser-lab
    pnpm install
    ```
3.  **Development Commands:**
    - `pnpm dev`: Starts the Vite dev server for the Svelte app and the Vercel dev server for the API.
    - `pnpm test:e2e`: Runs the Playwright end-to-end tests.

## 6. Security and Performance

### Security Requirements
- All puzzle answers are generated server-side and are valid only for the current session.
- The application uses HTTPS exclusively.
- No user data is stored or transmitted.
- Dependencies will be regularly scanned for vulnerabilities.

### Performance Optimization
- The frontend will be statically generated and served from Vercel's global CDN.
- Svelte's compile-step optimization ensures a minimal JavaScript bundle size.
- The serverless function will have a low cold-start time, ensuring quick API responses.

## 7. Testing Strategy

The primary testing focus will be on end-to-end (E2E) tests using Playwright. This ensures that the core user journey and all puzzle interactions work as expected in a real browser environment. Unit tests will be added for any complex utility functions (e.g., code generation logic) as needed.

## 8. Next Steps

This architecture document provides the technical foundation for "The Browser Lab." The next step is to hand this off to the **Developer** agent to begin implementing the project structure and the first epic as defined in the PRD.
