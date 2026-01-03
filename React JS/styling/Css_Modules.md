# CSS Modules

###  CSS Modules provide locally scoped styles, preventing class name conflicts.

## How it Works

- CSS file is created with .module.css extension

- Imported as an object

- Class names are accessed using dot notation

## Ex--------------------------------------

.title {
  color: red;
  font-size: 24px;
}

--------------------------------------

import styles from "./styles.module.css";

function App() {
  return <h1 className={styles.title}>Hello React</h1>;
}

export default App;


--------------------------------------------