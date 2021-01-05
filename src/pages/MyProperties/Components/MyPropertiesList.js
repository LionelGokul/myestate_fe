import React, { useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../../../shared/DataLayer/Context';
import MyPropertiesCard from './MyPropertiesCard';
import { useAxios } from '../../../shared/hooks/useAxios';
import NoItems from '../../../shared/components/UIElements/NoItems';
import AlertMessageContext from '../../../shared/DataLayer/AlertMesageContext';

const MyPropertiesList = () => {
  const { sendRequest } = useAxios();
  const alertContext = useContext(AlertMessageContext);
  const [properties, setProperties] = useState();
  const [{ user }] = useStateValue();
  useEffect(() => {
    sendRequest(
      'post',
      'my-properties',
      {
        userId: user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then((response) => {
        setProperties(response);
      })
      .catch((err) => {
        alertContext.setOpen(true);
        alertContext.setMsg(err);
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {properties !== undefined ? (
        properties.length === 0 ? (
          <NoItems>
            <Typography variant="h4" gutterBottom className="noitems_msg">
              Sorry you have'nt created any properties.
            </Typography>
          </NoItems>
        ) : (
          properties.map((property) => {
            return <MyPropertiesCard property={property} key={property.id} />;
          })
        )
      ) : null}
    </>
  );
};

export default MyPropertiesList;
