
# React Components

## What is a Component?

A **component** is the basic building block of a React application.  
It represents a **reusable and independent part of the UI**.

Examples:
- Navbar
- Button
- Card
- Form
- Footer
- Page sections

---

## Importance of Components

Components help in organizing and managing the UI efficiently.

- Breaks large UI into smaller parts
- Improves code reusability
- Makes debugging easier
- Helps scale applications
- Keeps code clean and structured

---

## Types of Components

### Functional Components
- Written as JavaScript functions
- Return JSX
- Most commonly used in modern React
- Support React Hooks

### Class Components
- Written using ES6 classes
- Use the `render()` method
- Older approach and less commonly used now

---

## Props and State

### Props
- Used to pass data from parent to child components
- Read-only
- Helps make components reusable

### State
- Used to store data inside a component
- Can change over time
- When state changes, the component re-renders

---

## Component Re-rendering

- React automatically re-renders components when **state or props change**
- Keeps UI in sync with application data
- No need for manual DOM manipulation
