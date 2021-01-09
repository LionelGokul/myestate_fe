import React from 'react';
import CustomTextAreaField from '../FormElements/CustomTextAreaField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const FooterElements = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={7}>
        <CustomTextAreaField
          name="feedback"
          id="feedback"
          className="cmn_feedback_textarea"
          placeholder="Feedback"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default FooterElements;
