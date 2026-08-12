# Areeb

Areeb is a React Native application built with Expo and Expo Router. The project currently appears to be an Expo starter/scaffold app with file-based routing, tab navigation, a modal route, and a simple login screen placeholder. It is not yet connected to a backend, database, authentication service, or persistent state store.

## Project Overview

- Project name: `areeb`
- Purpose: Provide a cross-platform mobile app foundation using Expo and React Native.
- Problem it solves: Establishes a mobile app structure with native-friendly navigation, themed UI components, and a simple app shell.
- Main functionality: Tab-based navigation, modal screen, theme-aware components, and a minimal login screen.
- Current project status: Early-stage scaffold / starter application. Core app structure exists, but business logic, APIs, persistence, and real user flows are not implemented yet.

## Features

The project currently includes the following implemented features:

- Expo Router-based navigation
- Tabbed screen layout
- Modal screen flow
- Login screen placeholder
- Light/dark theme support via React Native color scheme hooks
- Cross-platform web/native support through Expo
- Reusable themed UI components
- Custom alias import support via `@/*` paths

## Technology Stack

The following stack is confirmed by the project configuration:

- Programming language: TypeScript
- Framework: Expo SDK 57
- App framework: React Native 0.86.2
- UI library: React 19.2.3
- Routing: Expo Router 57
- Styling: React Native StyleSheet with theme-aware component wrappers
- Navigation: Expo Router + tab navigation
- Platform support: iOS, Android, and web
- Browser integration: `expo-web-browser`
- Fonts: `expo-font`
- Splash/loading support: `expo-splash-screen`
- Reanimated / gesture support: `react-native-reanimated` and `react-native-worklets`
- Safe area support: `react-native-safe-area-context`
- Screen utilities: `react-native-screens`

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
├── READ.md
├── tsconfig.json
├── README.md
└── node_modules/
```

### Important folders and files

- `app/`: File-based app routes and screens for the Expo Router application.
- `app/(tabs)/`: Tabbed navigation area containing the main screens.
- `app/(auth)/`: Authentication-related screen placeholders.
- `components/`: Shared UI helpers and reusable screen-building utilities.
- `constants/Colors.ts`: Central color palette for light and dark theme support.
- `assets/`: App assets such as images and fonts.
- `app.json`: Expo application metadata and native/web configuration.
- `package.json`: Project dependencies, scripts, and package metadata.
- `tsconfig.json`: TypeScript configuration with `@/*` path aliasing.
- `expo-env.d.ts`: Expo TypeScript environment declaration.

## Installation

Install the project dependencies with npm:

```bash
npm install
```

This project includes a `package-lock.json`, so the repository is already prepared for npm-based local installation.

## Running the Project

Use the following commands to run the app locally:

```bash
npm start
```

Additional platform-specific commands:

```bash
npm run android
npm run ios
npm run web
```

### Scripts from package.json

- `npm start`: Launch the Expo development server.
- `npm run android`: Start Expo on an Android emulator or connected device.
- `npm run ios`: Start Expo on an iOS simulator or connected device.
- `npm run web`: Start the app in the web browser using Expo web bundling.

## Environment Variables

This project does not currently define any required environment variables in the source code or configuration files. There are no `.env` references in the checked-in codebase.

If environment variables are added later, they should be documented here with placeholders instead of real secrets.

Example:

```env
API_BASE_URL=https://example.com/api
NEXT_PUBLIC_API_URL=https://example.com/api
```

## Architecture

The codebase follows a lightweight Expo Router architecture:

- File-based routing under the `app/` directory
- Screen components in route files
- Shared UI utilities in `components/`
- Theme values centralized in `constants/Colors.ts`
- TypeScript path aliases configured for imports such as `@/components/...`
- Minimal app shell with tab navigation and modal support

This is a simple starter architecture rather than a feature-heavy enterprise layout. There is no backend API layer, service layer, ORM, or state-management library in place.

## Routing

The app currently includes the following route structure:

- `/`: Root layout for app navigation
- `/(tabs)`: Main tab-based section
- `/(tabs)/index`: Tab One screen
- `/(tabs)/two`: Tab Two screen
- `/(auth)/login`: Login screen placeholder
- `/modal`: Modal route
- `+not-found`: Fallback route for missing screens

### Route responsibilities

- `app/_layout.tsx`: Root layout and app theme provider
- `app/(tabs)/_layout.tsx`: Bottom tab configuration with icon and header behavior
- `app/(tabs)/index.tsx`: Primary tab screen
- `app/(tabs)/two.tsx`: Secondary tab screen
- `app/(auth)/login.tsx`: Authentication placeholder screen
- `app/modal.tsx`: Modal presentation screen
- `app/+not-found.tsx`: Not-found view for invalid routes

## API / Services

No API layer or service module is currently implemented.

The project does not include:

- API clients
- HTTP service wrappers
- Data fetching hooks
- Backend integration files
- Authentication API integration

Any future API integration should be added as new service modules and documented in this section.

## Database

No database is configured in this project.

Confirmed project state:

- No Prisma configuration
- No ORM setup
- No schema files
- No migration scripts
- No database connection string in source or configuration files

## Components

The main reusable or shared components in the project include:

- `components/Themed.tsx`: Theme-aware `Text` and `View` wrappers with light/dark color handling.
- `components/useColorScheme.ts`: Small utility to resolve the current color scheme.
- `components/useClientOnlyValue.ts`: Web-only compatibility helper for client-only values.
- `components/EditScreenInfo.tsx`: Starter informational block displaying a file path with a documentation link.
- `components/ExternalLink.tsx`: Link wrapper that opens external URLs through the system browser on native devices.
- `components/StyledText.tsx`: Text wrapper for a monospace font style.
- `components/InputBox.tsx`: Placeholder input component; currently not implemented beyond a simple stub.

## State Management

There is no application state-management library in use.

The current state handling is minimal and local to the app:

- `useColorScheme()` reads the current light/dark theme state from React Native
- Theme values are passed through the root layout and shared component wrappers
- No Redux, MobX, Zustand, Context API store, or persisted app state is configured

## Authentication & Authorization

No formal authentication or authorization flow is implemented.

Confirmed facts:

- The project contains `app/(auth)/login.tsx`, but it is a placeholder screen
- No login form logic exists
- No session handling exists
- No token storage is configured
- No protected route logic exists
- No user roles or permissions are defined

## Dependencies

The following key dependencies are present and confirmed from `package.json`:

- `expo`: Core Expo SDK and runtime
- `expo-router`: File-based navigation and routing
- `expo-font`: Font loading
- `expo-splash-screen`: Splash screen handling
- `expo-status-bar`: Status bar integration
- `expo-web-browser`: External browser integration
- `react`: App UI runtime
- `react-native`: Native mobile app framework
- `react-native-safe-area-context`: Safe-area support
- `react-native-screens`: Screen container management
- `react-native-reanimated`: UI animation support
- `react-native-worklets`: Reanimated-related worklet support
- `react-native-web`: Web rendering support
- `typescript`: Static typing

## Scripts

The package scripts currently defined in `package.json` are:

```bash
npm start
npm run android
npm run ios
npm run web
```

### Script behavior

- `npm start`: Starts the Expo development server.
- `npm run android`: Runs the app in Android mode.
- `npm run ios`: Runs the app in iOS mode.
- `npm run web`: Runs the app in a browser through Expo web bundling.

## Development Guidelines

The repository currently reflects a few clear conventions:

- TypeScript is used throughout the app.
- File-based routing is the primary navigation model.
- Shared UI logic is placed under the `components/` folder.
- Path alias `@/*` is used for app imports.
- Theme-aware UI is handled through wrapper components instead of inline theme logic.
- The app is intentionally structured as a simple starter template rather than a production-ready feature app.

## Git Workflow

No explicit Git workflow is defined in the repository.

Confirmed state:

- Git is initialized for the project
- No branch naming policy is documented in the repo
- No release or PR workflow is enforced in the project files
- No contribution policy is defined in the checked-in configuration

## Deployment

No deployment configuration is currently present in this repository.

Confirmed state:

- No deployment platform configuration file is included
- No production build pipeline is defined in the repo
- No CI/CD workflow files are present in the project structure reviewed
- No environment-specific deployment instructions are set up

This project is currently a local development Expo app scaffold rather than a deployed application configuration.

## Troubleshooting

### Problem: The app is not starting locally

**Likely cause:** Dependencies have not been installed or the Expo development server has not started correctly.

**Solution:**

```bash
npm install
npm start
```

### Problem: The project looks like a starter template rather than a full product

**Cause:** This repository is currently an Expo scaffold with placeholder screens and no backend or auth integration.

**Solution:** Add the required screens, API services, state management, and backend connections as part of the actual product implementation. The current README reflects the code that exists today, not an unimplemented feature set.

### Problem: Missing environment variables

**Cause:** No environment variables are required by the current codebase.

**Solution:** If you add configuration later, store secrets in a local `.env` file that is not committed and document the variable names here.

## Changelog

### 2026-08-12 - Initial README documentation

- Added: Initial project overview, feature list, stack documentation, and architecture summary based on the codebase.
- Changed: Documented the current Expo Router scaffold structure and actual project capabilities.
- Fixed: Clarified that there is no backend, database, or authentication implementation currently in the app.
- Removed: No useful documentation was removed; the README reflects the project as it exists today.
- Updated: Included installation, scripts, routing, components, and troubleshooting details grounded in the repository.

---

This README is intended to stay synchronized with the actual project state. As features, dependencies, routes, or configuration change, update this document and add a relevant changelog entry.
