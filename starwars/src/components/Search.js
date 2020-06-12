import React from "react";
import { MDBCol } from "mdbreact";

const Search = () => {
  return (
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </MDBCol>
  );
};

export { Search };

//found resource: https://mdbootstrap.com/docs/react/forms/search/
//installed: npm install mdbreact
//I'm missing something; can't get it to work
