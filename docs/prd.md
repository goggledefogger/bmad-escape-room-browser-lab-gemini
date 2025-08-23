# The Browser Lab Product Requirements Document (PRD)

## 1. Goals and Background Context

### Goals
- To create a fast, fun, and non-intimidating educational tool for learning browser DevTools fundamentals.
- To achieve a high user completion rate and positive feedback, establishing the product as a valuable learning resource.
- To validate the "gamified escape room" model for teaching technical skills.
- To build a foundational product that can be expanded into a series of labs covering more advanced topics.

### Background Context
The project brief for "The Browser Lab" outlines a clear problem: browser DevTools are powerful but intimidating for newcomers. This PRD translates that brief into actionable requirements for an MVP. The core concept is a 5-minute, single-page web application that teaches Inspect, Console, and Network basics through a series of simple, interactive puzzles. A key feature is the in-game "Coach" panel, which mirrors DevTools functionality to ensure accessibility and provide a fallback for users who cannot or will not use the native browser tools.

### Change Log
| Date       | Version | Description              | Author |
|------------|---------|--------------------------|--------|
| YYYY-MM-DD | 1.0     | Initial draft of the PRD | John   |

## 2. Requirements

### Functional
- **FR1:** The application MUST present a single-scene web interface consisting of a main puzzle area, a collapsible "Coach" panel, and an "Exit Panel."
- **FR2:** The application MUST include a CSS-based puzzle where a secret code is hidden by a CSS property that the user can disable.
- **FR3:** The application MUST include a Console-based puzzle where a secret word is returned by calling a predefined global JavaScript function.
- **FR4:** The application MUST include a Network-based puzzle where a secret code is found within the response header of a mock API request initiated by a button click.
- **FR5:** The application MUST provide an in-game "Coach" panel that allows the user to solve all puzzles without using the browser's native DevTools.
- **FR6:** The "Coach" panel MUST contain three tabs: a "Styles" inspector, a "Logs" console emulator, and a "Requests" network monitor.
- **FR7:** The application MUST implement a progressive hint system for each puzzle, revealing hints after a set period of user inactivity.
- **FR8:** All puzzle solutions (codes, words) MUST be randomized per session to prevent users from sharing direct answers.
- **FR9:** The application MUST display a summary screen upon successful completion that recaps the skills learned.
- **FR10:** The application MUST include an onboarding sequence that briefly explains the option to use native DevTools or the built-in Coach panel.

### Non-Functional
- **NFR1:** The application MUST be a single-page application (SPA) with no backend dependencies for its core logic, aside from serving initial files and a mock API endpoint.
- **NFR2:** The application MUST load quickly and feel responsive, with all interactions providing immediate feedback.
- **NFR3:** The application MUST be compatible with the latest versions of major desktop browsers (Chrome, Firefox, Safari, Edge). Mobile accessibility will be primarily handled via the Coach panel.
- **NFR4:** The application MUST NOT collect any personally identifiable information (PII). All activity is anonymous and session-based.
- **NFR5:** The visual design MUST be clean, modern, and accessible, with a "doc-lab" aesthetic. Color should not be the only means of conveying information.
- **NFR6:** All text content, including hints and instructions, MUST be clear, concise, and written in an encouraging tone.

## 3. User Interface Design Goals

### Overall UX Vision
The user experience should feel like a modern, intriguing, and slightly playful science lab. It must be intuitive and curiosity-driven, celebrating small victories to build user confidence. The primary goal is to make a potentially dry topic (DevTools) feel engaging and accessible. The interface should be minimal to keep the focus on the puzzles themselves.

### Core Screens and Views
1.  **Main Workbench:** The single, primary view containing all interactive elements.
2.  **Onboarding Tooltips:** An initial, dismissible overlay explaining the DevTools/Coach choice.
3.  **"Coach" Panel:** A collapsible sidebar with tabs for Styles, Logs, and Requests.
4.  **Exit Panel:** A section with a keypad for entering the final codes.
5.  **Success Screen:** A final modal or view that congratulates the user and summarizes the learning.

### Accessibility: WCAG AA
The application will adhere to WCAG 2.1 AA standards. This includes sufficient color contrast, keyboard navigability (especially for the Coach panel), and descriptive text for all interactive elements.

### Branding
The aesthetic is a "clean doc-lab" vibe: primarily white and charcoal with a single, vibrant accent color for interactive elements and highlights. Monospaced fonts should be used sparingly for code-related text to enhance the "developer" feel.

### Target Device and Platforms: Web Responsive
The primary target is desktop browsers, as this is the native environment for DevTools. The experience must be functional on mobile devices, with the understanding that users on these devices will rely exclusively on the in-game Coach panel.

## 4. Technical Assumptions

### Repository Structure: Monorepo
A monorepo is suitable for this project, allowing the simple frontend application and any potential future serverless functions (for the mock API) to coexist in a single repository.

### Service Architecture: Serverless
The core application is a client-side SPA. The single network puzzle will be powered by a mock endpoint. This can be a static JSON file or a simple serverless function (e.g., Vercel, Netlify, or Cloudflare Worker) to allow for easy randomization of the response header.

### Testing Requirements: Unit + Integration
- **Unit Tests:** For individual components and utility functions (e.g., the code randomizer).
- **Integration/E2E Tests:** A small suite of end-to-end tests (using a tool like Playwright or Cypress) to validate the core puzzle flows from a user's perspective, including interactions with the Coach panel.

## 5. Epic List

- **Epic 1: Workbench Foundation & CSS Puzzle:** Establish the core application shell, UI layout, state management, and implement the complete CSS toggle puzzle, including the Coach panel's "Styles" tab and hint system.
- **Epic 2: Console & Network Puzzles:** Implement the Console puzzle (including the "Logs" tab in the Coach) and the Network puzzle (including the "Requests" tab and mock API endpoint), along with their respective hint systems.
- **Epic 3: Final Polish & Launch Readiness:** Implement the onboarding flow, the final success screen, analytics tracking, and conduct final QA testing to prepare for launch.

## 6. Next Steps

### UX Expert Prompt
"Please create a set of high-fidelity mockups and a style guide for 'The Browser Lab' based on the PRD. The aesthetic is a clean, modern 'doc-lab' vibe. Focus on the main workbench, the collapsible 'Coach' panel, and the final success screen."

### Architect Prompt
"Please create a technical architecture and project setup plan for 'The Browser Lab' based on the PRD. The project is a client-side SPA (Svelte or Vue preferred) with a mock serverless endpoint, to be developed in a monorepo. Please define the component structure, state management approach, and a plan for the testing suite."
