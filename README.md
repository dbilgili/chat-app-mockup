## Intro

[Online demo](https://chat-app-mockup.vercel.app/)

This codebase uses Vite as the build tool to kickstart a React project with TypeScript, and Bun is used as the package manager.

To run the project locally, use your preferred package manager with the `dev` script (e.g., `bun dev`, `yarn dev`, or `npm run dev`).

## Some Details

- This is only front-end code with no back-end implementation.
- The app state is initialized with mock data, which is under `/src/store/initialValues.ts`
- The codebase is configured to use CSS modules with SCSS for styling.
- For global state management, signals from `Preact` is used. [For more details](https://preactjs.com/blog/introducing-signals/).
- It has only been tested on Chrome, so there may be inconsistencies across other browsers.
- It was not specifically implemented with responsiveness in mind, although it is somewhat responsive.
