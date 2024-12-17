# CreditBerry

**CreditBerry** is an application for fast and efficient loan processing. Built using modern technologies and designed with the Feature-Sliced Design (FSD) methodology for scalable and maintainable architecture.

## 🛠️ Tech Stack

- **Vite**: A lightning-fast build tool.
- **React + TypeScript**: For building a type-safe and dynamic UI.

## 📦 Key Packages

- **Core**:
    - `axios`: For API communication.
    - `formik` + `yup`: Simplified form handling and validation.
    - `zustand`: Lightweight state management.
    - `react-toastify`: Elegant notifications.
    - `swiper`: Customizable sliders for a rich UI.
    - Explore more in `package.json`.

- **Development Tools**:
    - `eslint`: Enforce coding standards.
    - `vite-plugin-svgr`: SVG icon integration.
    - `typescript`: Strong static typing.

## 🚀 Project Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs linter to catch errors and enforce coding style.
- `deploy`: Deploys the project to GitHub Pages.

## 🌐 Deployment

The project is live at:  
[CreditBerry on GitHub Pages](https://Vlad-Polyakov-24.github.io/creditBerry)

## 📂 Directory Structure

CreditBerry follows the **Feature-Sliced Design (FSD)** methodology for organizing the codebase into scalable layers.

```bash
src/
├── app/               # Global app setup (routing, providers, styles, etc.)
├── pages/             # Full pages or nested routing components
├── widgets/           # Large UI or functional sections of the app
├── features/          # Implementations of core product features
├── entities/          # Domain-specific entities like user or loan
├── shared/            # Reusable utilities, components, and helpers
├── __tests__/         # Application-wide test cases
└── index.tsx          # Application entry point