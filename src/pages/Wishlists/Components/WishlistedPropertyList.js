import React from 'react';
import { useStateValue } from '../../../shared/DataLayer/Context';
import WishlistedPropertyCard from './WishlistedPropertyCard';

const WishlistedPropertyList = () => {
  const [{ favList }] = useStateValue();
  debugger;
  return (
    <>
      {favList?.length === 0 && (
        <span>You have not wishlited any property.</span>
      )}
      {favList.map((fav) => {
        return <WishlistedPropertyCard property={fav} key={fav.id} />;
      })}
    </>
  );
};

export default WishlistedPropertyList;
