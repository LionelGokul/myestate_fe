import React, { useContext } from 'react';
import { useAxios } from '../../hooks/useAxios';
import AlertMesageContext from '../../datalayer/AlertMesageContext';
import { useStateValue } from '../../datalayer/Context';
import Grid from '@material-ui/core/Grid';
import Form from '../FormElements/Form';
import FooterElements from './FooterElements';

const Footer = () => {
  const { sendRequest } = useAxios();
  const alertContext = useContext(AlertMesageContext);
  const [{ user }] = useStateValue();
  const onSubmit = (data) => {
    sendRequest(
      'post',
      'feedback',
      {
        feedback: data.feedback,
        userId: user.id === undefined ? null : user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then(() => {
        alertContext.setOpen(true);
        alertContext.setSuccess(true);
        alertContext.setMsg('Thanks for your feedback!');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Grid container className="cmn_footer" id="footer">
      <Grid item xs={12} style={{ backgroundColor: 'black' }}>
        <Form onSubmit={onSubmit}>
          <FooterElements />
        </Form>
      </Grid>
    </Grid>
  );
};

export default Footer;