import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../shared/DataLayer/Context';
import FavoriteBorderIcon from '../../../shared/Images/favorite_border-white-18dp.svg';
import FavoriteIcon from '../../../shared/Images/favorite-white-18dp.svg';
import Fab from '@material-ui/core/Fab';
import { useWishList } from '../../../shared/hooks/useWishList';

const PropertyCard = ({ propertyDetails }) => {
  const {
    id,
    type,
    pictures,
    details: { price },
    address: { pincode, city, state, street },
  } = propertyDetails;
  const { addItem, removeItem } = useWishList();
  const [{ favList, user }] = useStateValue();
  const [ifwishListed, setIfwishListed] = useState(
    favList.find((elem) => elem.id === id) && true,
  );
  const addToWishlist = async () => {
    addItem(propertyDetails);
  };

  const removeFromWishlist = () => {
    removeItem(propertyDetails);
  };

  useEffect(() => {
    setIfwishListed(favList.find((elem) => elem.id === id) && true);
  }, [favList]);

  return (
    <>
      <div className="property">
        <Link to={`/property/${id}`} idofitem={id}>
          <img
            src={pictures[0]}
            alt={propertyDetails.name}
            className="prop_img"
          />
        </Link>
        <div className="property__info">
          <div className="property__address">
            <p className="address">
              {`${street}, ${city}, ${state} - ${pincode}`}
            </p>
          </div>
          <div className="property__details">
            <div className="property__price">
              <small>$</small>
              <strong>{price}</strong>
            </div>
            <div className="property__rating">
              <strong>Type: {type}</strong>
            </div>
          </div>
        </div>
        {ifwishListed ? (
          <Fab
            aria-label="like"
            color="secondary"
            size="medium"
            className="wishlist_btn"
          >
            <img
              alt="wishlist icon"
              onClick={removeFromWishlist}
              className="wishlist_icn"
              src={FavoriteIcon}
            />
          </Fab>
        ) : (
          <Fab
            aria-label="like"
            color="secondary"
            size="medium"
            className="wishlist_btn"
          >
            <img
              alt="wishlist icon"
              onClick={addToWishlist}
              src={FavoriteBorderIcon}
              className="wishlist_icn"
            />
          </Fab>
        )}
      </div>
    </>
  );
};

export default React.memo(PropertyCard);
