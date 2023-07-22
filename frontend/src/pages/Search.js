import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Train from "../component/Train";
import axios from "axios";

const Search = () => {
    const [data, setData] = useState(false);
  const url = "";
  // const trains = async axios.get(url)
  return (
    <div>
      <Navbar />
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>
      {/* data &&  {trains.map(train => {<Train />})} */}
    </div>
  );
};

export default Search;