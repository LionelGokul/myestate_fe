import React from 'react';
import SearchResultsPropertyCard from './SearchResultsPropertyCard';

const SearchResultPropertyList = ({ propertyList }) => {
  console.log('propertyList', propertyList);
  return (
    <>
      {propertyList.length === 0 && <span>Sorry No Results Found.</span>}
      {propertyList.map((property) => {
        return <SearchResultsPropertyCard property={property} />;
      })}
    </>
  );
};

export default SearchResultPropertyList;
