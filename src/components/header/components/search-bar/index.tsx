import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Input from "../../../input";
import "./index.css";

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <form className='search-bar__container'>
      <Input icon={faSearch} name={'search-bar'} type={'search'} placeholder={'O que você está procurando?'}/>
    </form>
  )
};

export default SearchBar;