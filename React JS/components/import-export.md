## Here are the contents of the Heading.js file:

function Heading() {
    return (
        <h1>This is an h1 heading</h1>
    )
}

export default Heading;


---


## Here are the contents of the App.js file:

import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;

