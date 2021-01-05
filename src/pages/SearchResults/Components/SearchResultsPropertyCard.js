import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../../../shared/DataLayer/Context';
import { ACTIONS } from '../../../shared/DataLayer/reducer';
import FavoriteBorderIcon from '../../../shared/Images/favorite_border-white-18dp.svg';
import FavoriteIcon from '../../../shared/Images/favorite-white-18dp.svg';
import Fab from '@material-ui/core/Fab';
import { useAxios } from '../../../shared/hooks/useAxios';

const SearchResultsPropertyCard = ({ property }) => {
  const [{ favList, user }, dispatch] = useStateValue();
  const { sendRequest } = useAxios();
  const [ifwishListed, setIfwishListed] = useState(
    favList.find((elem) => elem.id === property.id) && true,
  );
  const addToWishlist = async () => {
    sendRequest(
      'post',
      'wishlist',
      {
        propertyId: property.id,
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
          property: property,
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
        propertyId: property.id,
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
          propertyID: property.id,
        });
        setIfwishListed(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  return (
    <Grid item xs={12} className="prop_card">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        style={{ height: '100%', padding: 5 }}
      >
        <Grid item xs style={{ width: '40%' }}>
          <img
            className="cmn_card_media"
            src={property.pictures[0]}
            alt={property.name}
          />
        </Grid>
        <Grid item xs sm container style={{ height: 200 }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {property.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {property.details.roomtype}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card_prop_details"
              >
                {property.address.city}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {property.details.sqft}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {property.details.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            {ifwishListed ? (
              <Fab aria-label="like" color="secondary" size="medium">
                <img
                  alt="wishlist icon"
                  onClick={removeFromWishlist}
                  className="wishlist_icn"
                  src={FavoriteIcon}
                />
              </Fab>
            ) : (
              <Fab aria-label="like" color="secondary" size="medium">
                <img
                  alt="wishlist icon"
                  onClick={addToWishlist}
                  src={FavoriteBorderIcon}
                  className="wishlist_icn"
                />
              </Fab>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchResultsPropertyCard;
