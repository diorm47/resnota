import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import "./search.css";

function Search() {
  const serchingItem = useSelector((state) => state.search.searched);
  const searchings = useSelector((state) => state.search.searchings);

  const search = (searchings) => {
    return searchings
      .flat()
      .filter((searchings) =>
        searchings.name.toLowerCase().includes(serchingItem.toLowerCase())
      );
  };
  

  return (
    <div className="search_wrapper">
      {<Card items={search(searchings)} /> || (
        <div className="item_not_found">
          <span>{serchingItem}</span> <p>not found(</p>
        </div>
      )}
    </div>
  );
}

export default Search;
