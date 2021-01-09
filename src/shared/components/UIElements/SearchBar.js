import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../DataLayer/Context';
import { ACTIONS } from '../../DataLayer/reducer';
import { useAxios } from '../../hooks/useAxios';
const SearchBar = (params) => {
  const [query, setQuery] = useState('');
  const [{ propertytype }, dispatch] = useStateValue();
  const searchQueryHandle = () => {
    dispatch({
      type: ACTIONS.SEARCH,
      query: query,
    });
    setQuery(query);
  };
  console.log(' in searcg', propertytype);
  return (
    <div className="search_container active">
      <input
        className="search_bar"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        id="gsearch"
        name="gsearch"
        placeholder="Search Place,City,Zip"
      />
      <Link to={`/search/${query}`}>
        <button
          className="search_btn"
          onClick={searchQueryHandle}
          disabled={query.length > 3 ? false : true}
        >
          <BsSearch />
        </button>
      </Link>
      )
    </div>
  );
};

export default SearchBar;
