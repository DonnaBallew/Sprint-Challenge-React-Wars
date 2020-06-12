import React from "react";
import ReactDOM from "react-dom";

function SearchTerm() {
  const [search, setSearch] = React.useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export { SearchTerm };

//Resource: https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg
//didn't finish coding to point to array or filter
