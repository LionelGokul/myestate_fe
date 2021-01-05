import React from 'react';
import MyPropertiesList from './Components/MyPropertiesList';
import Grid from '@material-ui/core/Grid';

const MyProperties = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="prop_cards_container"
      spacing={3}
    >
      <MyPropertiesList />
    </Grid>
  );
};

export default MyProperties;
