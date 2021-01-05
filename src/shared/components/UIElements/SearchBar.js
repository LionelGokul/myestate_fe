import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const SearchBar = (params) => {
  const [query, setQuery] = useState('');
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
      {query.length > 3 ? (
        <Link to={`/search/${query}`}>
          <button className="search_btn">
            <BsSearch />
          </button>
        </Link>
      ) : (
        <button className="search_btn">
          <BsSearch />
        </button>
      )}
    </div>
  );
};
