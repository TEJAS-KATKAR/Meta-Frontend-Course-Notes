# Styling in React

React supports multiple ways to style components. The most commonly used styling methods are:
1. CSS Stylesheets
2. Inline Styling
3. CSS Modules

Each method has its own use case depending on the project size and requirement.

---

## 1. CSS Stylesheets (External CSS)

This is the **traditional way** of styling React components using normal `.css` files.

### How it Works
- Styles are written in a separate CSS file
- The CSS file is imported into the React component
- Class names are applied using `className`

### Example
----------------------------------------------
**style.css**
```css
.heading {
  color: blue;
  font-size: 24px;
}
``` 

----------------------------------------------
## inside of App() file 

import "./style.css";

function App() {
  return <h1 className="heading">Hello React</h1>;
}

export default App;

---------------------------------------------

Pros

Easy to understand

Reusable styles

Best for beginners

Cons

Class name conflicts in large projects
