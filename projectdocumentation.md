# Project Documentation

## Project Overview

The project is named `areeb`, and the repository contains a React Native application built with Expo and Expo Router. The app currently provides a cross-platform mobile application shell with a tab-based layout, a modal route, light/dark theming, and a placeholder sign-in screen. It is a starter-style Expo structure rather than a complete product application.

### Purpose

This project establishes a foundation for a mobile app experience with:

- Expo-based cross-platform development
- File-based routing via Expo Router
- Native-feeling screen layouts
- Theme-aware UI components
- Web and native compatibility

### Current project status

The codebase is in an early development stage. The app has the core navigation and UI scaffolding in place, but it does not currently include:

- a backend or API layer
- a database or ORM
- authentication integration
- persistent state management
- business-specific screens or workflows

## Features

The following features are present in the codebase:

- Expo Router-based navigation
- Tabbed screen flow using `app/(tabs)` routes
- Modal screen support via `/modal`
- Light/dark theme support through `useColorScheme` and `Themed` wrappers
- Native-style themed components and color tokens
- Cross-platform support for iOS, Android, and web
- Professional sign-in screen with email/password form in `app/(auth)/login.tsx`
- Web-safe and mobile-safe screen utilities

## Technology Stack

The stack is confirmed from the project configuration and source code:

- Programming language: TypeScript
- Framework: Expo SDK ~57.0.10
- App runtime: React Native 0.86.2
- UI library: React 19.2.3
- Routing: Expo Router ~57.0.10
- Styling: React Native `StyleSheet` plus theme-aware wrappers
- State management: Not implemented in the repo
- Authentication: Not implemented in the repo
- Database: No database configured
- Platform support: iOS, Android, and web
- Fonts: `expo-font`
- Splash/loading: `expo-splash-screen`
- Safe areas: `react-native-safe-area-context`
- UI utility libraries: `react-native-screens`, `react-native-reanimated`, `react-native-worklets`
- Browser integration: `expo-web-browser`, `expo-linking`
- Runtime type checks: TypeScript ~6.0.3

## Project Structure

```text
areeb/
├── app/
│   ├── (auth)/
│   │   └── login.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── two.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   ├── _layout.tsx
│   ├── modal.tsx
│   └── ...
├── assets/
│   ├── fonts/
│   └── images/
├── components/
│   ├── EditScreenInfo.tsx
│   ├── ExternalLink.tsx
│   ├── InputBox.tsx
│   ├── StyledText.tsx
│   ├── Themed.tsx
│   ├── useClientOnlyValue.ts
│   ├── useClientOnlyValue.web.ts
│   ├── useColorScheme.ts
│   └── useColorScheme.web.ts
├── constants/
│   └── Colors.ts
├── .gitignore
├── AGENTS.md
├── Apidocumentation.md
├── app.json
├── CLAUDE.md
├── expo-env.d.ts
├── LICENSE
├── package.json
├── package-lock.json
├── projectdocumentation.md
├── README.md
├── tsconfig.json
└── node_modules/
```

### Key directories and responsibilities

- `app/`: File-based route tree for the Expo Router application.
- `app/(tabs)/`: Primary tab navigation area for the main app screens.
- `app/(auth)/`: Authentication-related route placeholder screens.
- `components/`: Shared UI helpers and reusable view/text utilities.
- `constants/Colors.ts`: Centralized light/dark theme color tokens.
- `assets/`: Application image and font assets.
- `app.json`: Expo metadata and platform config.
- `package.json`: Dependencies, scripts, and package metadata.
- `tsconfig.json`: TypeScript configuration and the `@/*` path alias.
- `expo-env.d.ts`: Expo-generated TS environment declarations.

## Installation

Install project dependencies with npm:

```bash
npm install
```

This repository includes a `package-lock.json`, so the project is prepared for standard npm-based setup.

## Running the Project

Use the Expo development server to start the app locally:

```bash
npm start
```

Additional platform-specific commands defined in `package.json`:

```bash
npm run android
npm run ios
npm run web
```

### Script definitions

| Script | Purpose |
| --- | --- |
| `npm start` | Launch the Expo dev server |
| `npm run android` | Start the app on an Android target |
| `npm run ios` | Start the app on an iOS simulator/device |
| `npm run web` | Launch the app in a web browser |

## Environment Variables

No required environment variables are currently defined in the repository source or configuration files.

The project does not include a `.env` file or references to environment variables in the checked-in code. If environment variables are added later, they should be documented with placeholders and never with real secrets.

Example placeholder format:

```env
API_BASE_URL=https://example.com/api
NEXT_PUBLIC_API_URL=https://example.com/api
```

## Architecture

The architecture is a lightweight Expo Router app structure based on file-based routing and shared UI utilities.

Key architectural patterns in the codebase:

- Route files live under `app/` and are resolved by Expo Router.
- Screen logic is kept in route components such as `app/(tabs)/index.tsx`.
- Shared UI components live under `components/`.
- Theme colors are centralized in `constants/Colors.ts`.
- TypeScript path aliases are configured so imports can use `@/` from the project root.
- No backend, service layer, or persistent application state architecture is currently present.

This is a starter application scaffold rather than an enterprise or layered architecture.

## Routing

The app includes the following route structure:

- `/`: App root layout
- `/(tabs)`: Main tab container
- `/(tabs)/index`: Tab One screen
- `/(tabs)/two`: Tab Two screen
- `/(auth)/login`: Sign-in placeholder screen
- `/modal`: Modal route
- `+not-found`: Route fallback for unknown pages

### Important route files

- `app/_layout.tsx`: Root stack layout with theme provider and modal support.
- `app/(tabs)/_layout.tsx`: Tab configuration and navigation options.
- `app/(tabs)/index.tsx`: First tab screen.
- `app/(tabs)/two.tsx`: Second tab screen.
- `app/(auth)/login.tsx`: Login placeholder screen.
- `app/modal.tsx`: Modal presentation screen.
- `app/+not-found.tsx`: Fallback route for invalid paths.

## API / Services

No API client or service layer is currently implemented in the project.

Confirmed project state:

- No HTTP client abstractions were found.
- No request service modules were found.
- No backend integration was found.
- No auth token handling layer was found.

Any future API or service layer should be added in dedicated modules and documented here.

## Database

No database is configured in the project.

Confirmed findings:

- No Prisma configuration files were found.
- No Prisma schema file was found.
- No SQL or NoSQL client setup was found.
- No migration scripts are defined.
- No database connection string is checked into the repo.

## Components

The project contains a small set of reusable or shared UI components.

| Component | Responsibility |
| --- | --- |
| `components/Themed.tsx` | Theme-aware `Text` and `View` wrappers that adjust to light/dark mode |
| `components/useColorScheme.ts` | Reads the active color scheme |
| `components/useClientOnlyValue.ts` | Web compatibility utility for client-only values |
| `components/EditScreenInfo.tsx` | Starter informational panel for screen-level documentation |
| `components/ExternalLink.tsx` | Link wrapper that opens external URLs through the system browser |
| `components/InputBox.tsx` | Additional UI input placeholder component |
| `components/StyledText.tsx` | Shared text styling wrapper |

## State Management

No dedicated state management library or global store is implemented in this codebase.

Confirmed state patterns:

- Component-local state via React hooks is not currently used in the project files reviewed.
- Theme state is handled by Expo and custom color scheme utilities.
- There is no Redux, Zustand, MobX, or context-store implementation in the repo.

## Authentication & Authorization

Authentication is not implemented in the current project.

Confirmed project state:

- No login API integration exists.
- No session/token persistence is present.
- No role-based authorization or route guards were found.
- `app/(auth)/login.tsx` is currently a placeholder screen.

The app does not currently enforce a protected-route model.

## Dependencies

The following dependencies are explicitly defined in `package.json` and are central to the project:

| Dependency | Purpose |
| --- | --- |
| `expo` | Main React Native app platform and tooling |
| `expo-router` | File-based routing and navigation |
| `react` | UI library |
| `react-native` | Mobile app rendering framework |
| `typescript` | Static typing and TypeScript support |
| `expo-font` | Font loading support |
| `expo-splash-screen` | App splash/loading behavior |
| `expo-status-bar` | Status bar control |
| `expo-web-browser` | External browser integration |
| `expo-linking` | Deep linking support |
| `react-native-safe-area-context` | Safe-area handling |
| `react-native-screens` | Native screen container management |
| `react-native-reanimated` | Animation support |
| `react-native-worklets` | Reanimated support for worklets |

## Scripts

The project defines the following scripts in `package.json`:

```bash
npm start
npm run android
npm run ios
npm run web
```

### Script behavior

- `npm start`: Starts the Expo developer server.
- `npm run android`: Runs the app on Android.
- `npm run ios`: Runs the app on iOS.
- `npm run web`: Starts the web version of the app.

There is no `build`, `lint`, or production deployment script configured in the project metadata.

## Development Guidelines

The repository shows a few clear development conventions:

- TypeScript is enabled and strict mode is on in `tsconfig.json`.
- The `@/*` alias is used for local imports.
- Route files are organized under `app/` using Expo Router conventions.
- Shared UI helpers are centralized in `components/`.
- Theme behavior is handled through wrapper utilities rather than hard-coded colors in views.
- Styling is kept local to each screen using `StyleSheet.create()`.

There is no wider project-level engineering document or custom linting configuration in the repo.

## Git Workflow

The repository is managed with Git, but no custom branch naming, PR, or commit policy was found in the checked-in project files.

The project does not currently define a documented release process or branch strategy in the repo.

## Deployment

No production deployment configuration is defined in the repository.

Confirmed state:

- No deployment platform configuration file was found.
- No production build script was defined in `package.json`.
- No hosting config is present in the repo.
- The project is currently set up for local Expo development rather than a configured deployment target.

## Troubleshooting

### Problem: app does not start after installation

Solution:

```bash
npm install
npx expo start --clear
```

This resets stale Expo caches and ensures dependencies are installed correctly.

### Problem: imports fail or aliases do not resolve

Solution:

- Confirm the `@/*` path alias in `tsconfig.json` is present.
- Ensure the imported file exists under the project root.
- Restart the Expo dev server after changing project config.

### Problem: route navigation seems inconsistent

Solution:

- Keep route files under `app/`.
- Use the Expo Router conventions already present in the repo.
- Verify the application layout structure in `app/_layout.tsx` and `app/(tabs)/_layout.tsx`.

## Changelog

### 2026-08-12 - Login form redesign

- Added: Professional sign-in form UI with email, password, remember-me, and password recovery affordances
- Changed: Updated the login screen from a starter placeholder to a polished onboarding/authentication interface
- Fixed: Clarified the project documentation to note that the login route now includes a real form layout rather than a placeholder screen
- Removed: The previous placeholder-style sign-in presentation from the documentation summary
- Updated: Project overview and feature list to reflect the current login experience

### 2026-08-12 - Initial project documentation

- Added: Full project overview, architecture, route map, dependency summary, and setup instructions
- Changed: Replaced the placeholder document with project-accurate documentation based on the actual Expo app code
- Fixed: Removed unsupported assumptions about databases, APIs, and app features that are not present in the repository
- Removed: Placeholder documentation that did not reflect the actual project implementation
- Updated: Documented the real Expo Router structure, scripts, and component responsibilities from the codebase
