# Bitcoin Interactive Pricing Component

## Objective

The objective of this project is to implement an interactive pricing component using TypeScript and React.

## Features

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Use the slider and toggle to see prices for different page view numbers.
- Prices are displayed in both USD and BTC (rounded to the nearest integer).
- Option to switch between monthly and yearly billing, applying a 25% discount on yearly plans.

## Usage

The application provides an interactive pricing component that allows users to select different page view ranges and billing frequencies. The component dynamically updates the pricing details based on user interactions.

## Demo Instructions

For detailed instructions on how to run the demo locally, refer to the [demo-instructions.md](demo-instructions.md) file.

## Technologies Used

- **React**: React provides a powerful and efficient way to build interactive user interfaces. Its component-based architecture makes it easy to manage complex UIs and ensures reusability of code.
- **TypeScript**: TypeScript is a statically typed superset of JavaScript that adds optional types to the language. It helps catch errors early in the development process, improves code quality, and enhances developer productivity by providing better tooling and code navigation.
- **Styled-components**: Styled-components allows us to write CSS-in-JS, which provides better component encapsulation and reduces the risk of style clashes. It also offers features like dynamic styling and theming, which are essential for building a customizable and themeable UI.
- **Vitest**: Vitest is a lightweight testing library for React applications. It provides utilities for writing unit tests using a simple and intuitive API, making it easier to test React components and ensure code quality.
- **RTL (React Testing Library)**: React Testing Library is a popular testing utility for React applications. It encourages writing tests that resemble how users interact with the application, making tests more maintainable and less brittle. It also provides a wide range of utility functions for interacting with and asserting on React components.

## Challenge

Based on the described features above, write a comprehensive end-to-end test using a tool familiar to you, e.g.

- Cucumber
- Cypress
- Puppeteer
- etc.
