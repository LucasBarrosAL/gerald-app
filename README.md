This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Running Tests

Run the test suite with Jest:

```sh
npm test
```

# Architecture decisions and reasoning

This project was designed with a focus on scalability, maintainability, and user experience, following common patterns used in production-grade React Native applications.

## Project Structure

```
src/
├── api/              # Network layer and API abstraction
├── components/       # Reusable and presentational UI components
├── hooks/            # Encapsulated logic (data fetching, state, etc.)
├── screens/          # Screen-level components (composition layer)
├── model/            # TypeScript interfaces and domain models
├── theme/            # Centralized design system (colors, spacing)
├── utils/            # Shared helpers (formatting, etc.)
└── stack/            # Navigation configuration
```

### Reasoning

- **Separation of concerns:** each layer has a clear responsibility
- **Scalability:** easy to grow without creating tight coupling
- **Testability:** logic is isolated (hooks, utils)
- **Reusability:** UI components are decoupled from business logic

### Libraries Overview

- **Navigation:** Stack Navigation chosen for simplicity and linear flow, making it easy to maintain. Can be extended with tabs/drawers if needed.

- **Data Fetching:** TanStack Query handles server state with caching, retries, and background updates, improving UX and scalability.

- **List Rendering:** FlashList used for better performance and memory efficiency on large datasets.

- **UI & Theming:** Centralized `theme/` ensures consistency and easy design evolution.

- **Mocking:** Mock layer simulates latency and errors for realistic development without a backend.

- **Reusability:** Components are small, composable, and mostly stateless (e.g., `EmptyState`, `TransactionTypeFilter`).

- **Testing:** Focus on business logic and critical UI behavior.

- **Scalability:** Structure supports growth, easy refactoring, and seamless transition to real APIs.

## Trade-offs due to time constraint

- **Avoid create a ThemeProvider:** Instead of implementing a complete theming system with a ThemeProvider, only a simple Colors file was created to store color constants.
- **Styles on the same component file:** Styles were kept in the same file as their respective components. While this reduces file navigation and keeps related code together, it may lead to less reusability and slightly harder maintenance as the project grows.
- **Folder structure (mainly inside components and screens):** The folder organization was kept intentionally simple, focusing on functional grouping rather than deep modularization. This speeds up development but may not represent the ideal long-term structure for larger projects.
- **Avoid animations:** Just to make it simple.
- **Merchant filter implemented without a request:** The merchant filter was implemented by simply filtering an existing array on the client side, rather than making a new request to the backend.
- **Pagination on the list:** It will increase time to mock real server to pagination, so I decided not include because of time.

# Whats Next?

1. Pagination on transactions history list
2. UX Improvements (such as add Animations and styling StatusBar on Android)
3. Theming
4. Increase unit test coverage
