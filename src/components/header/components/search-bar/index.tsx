import React from "react";
import "./index.css";

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <form>
      <input type="search" placeholder="O que você está procurando?" />
    </form>
  )
};

export default SearchBar;