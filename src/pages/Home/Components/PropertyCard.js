import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../shared/DataLayer/Context';
import { ACTIONS } from '../../../shared/DataLayer/reducer';
import FavoriteBorderIcon from '../../../shared/Images/favorite_border-white-18dp.svg';
import FavoriteIcon from '../../../shared/Images/favorite-white-18dp.svg';
import Fab from '@material-ui/core/Fab';
// import summary from '../../DetailedView/PropertyDetailedView';
import { useAxios } from '../../../shared/hooks/useAxios';

const PropertyCard = ({ propertyDetails }) => {
  const {
    id,
    type,
    pictures,
    details: { price },
    address: { pincode, city, state, street },
  } = propertyDetails;
  const [{ favList, user }, dispatch] = useStateValue();
  const [ifwishListed, setIfwishListed] = useState(
    favList.find((elem) => elem.id === id) && true,
  );
  const { sendRequest } = useAxios();
  const addToWishlist = async () => {
    sendRequest(
      'post',
      'wishlist',
      {
        propertyId: 1,
        userId: user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then(() => {
        dispatch({
          type: ACTIONS.ADD_TO_WISHLIST,
          property: propertyDetails,
          user: user,
        });
        setIfwishListed(true);
        console.log('user', user);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const removeFromWishlist = () => {
    sendRequest(
      'delete',
      'removewishlist',
      {
        propertyId: 1,
        userId: user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then(() => {
        dispatch({
          type: ACTIONS.REMOVE_FROM_WISHLIST,
          propertyID: id,
          property: propertyDetails,
          user: user,
        });
        setIfwishListed(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
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
