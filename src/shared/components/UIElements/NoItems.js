import React from 'react';
import Grid from '@material-ui/core/Grid';
import undraw_No_data_re_kwbl from '../../Icons/undraw_No_data_re_kwbl.svg';

const NoItems = (props) => {
  return (
    <Grid item xs={12}>
      <img src={undraw_No_data_re_kwbl} style={{ height: 200, margin: 0 }} />
      {props.children}
    </Grid>
  );
};

export default NoItems;
