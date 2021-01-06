import React from 'react';
import SearchResultsPropertyCard from './SearchResultsPropertyCard';
import NoItems from '../../../shared/components/UIElements/NoItems';

const SearchResultPropertyList = ({ propertyList }) => {
  console.log('propertyList', propertyList);
  return (
    <>
      {propertyList !== undefined ? (
        propertyList.length === 0 ? (
          <NoItems
            text="Sorry no properties matched your filter. please clear filter and
              try again."
          />
        ) : (
          propertyList.map((property) => {
            return <SearchResultsPropertyCard property={property} />;
          })
        )
      ) : null}
    </>
  );
};

export default SearchResultPropertyList;
