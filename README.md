# Toodle Pagination

## Table of Contents

* [Installation](#installation)
* [Example](#example)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install toodle-pagination
    $ yarn add toodle-pagination


## Example

Here is a simple example of toodle-pagination 

```jsx
import Pagination from "toodle-pagination";

const App = () => {
  const handlePageNumber = (value) => {
    console.log("value", value);
  }

  return (
    <div className="App">
      <Pagination 
        nextLabel="next >"
        previousLabel="< previous"
        pageRangeDisplayed={10} 
        total={10} 
        handlePageNumber={handlePageNumber} />
    </div>
  );
}

export default App;

```
