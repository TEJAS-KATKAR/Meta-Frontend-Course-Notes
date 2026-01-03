## Inline styling 

### Inline styling is done by applying styles directly inside the JSX using a JavaScript object.

## How it Works

- Styles are written as JavaScript objects

- CSS properties are written in camelCase

- Applied using the style attribute

## Ex ------------------------------------

function App() {
  const headingStyle = {
    color: "green",
    fontSize: "24px",
  };

  return <h1 style={headingStyle}>Hello React</h1>;
}

export default App;

---------------------------------------------


## Important Points

- Values are written as strings

- Hyphenated CSS properties become camelCase (e.g., font-size → fontSize)

## Pros

- No external CSS file needed

- Useful for dynamic styling

## Cons

- Not suitable for large styling

- No pseudo-classes like :hover