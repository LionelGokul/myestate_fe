import React from 'react';
import WishlistedPropertyList from './Components/WishlistedPropertyList';
import Grid from '@material-ui/core/Grid';

const Wishlists = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="prop_cards_container"
      spacing={3}
    >
      <WishlistedPropertyList />
    </Grid>
  );
};

export default Wishlists;
