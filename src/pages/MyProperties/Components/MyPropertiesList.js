import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../../shared/DataLayer/Context';
import { ACTIONS } from '../../../shared/DataLayer/reducer';
import MyPropertiesCard from './MyPropertiesCard';
import { useAxios } from '../../../shared/hooks/useAxios';

const MyPropertiesList = () => {
  const { sendRequest } = useAxios();
  const [properties, setProperties] = useState([]);
  const [{ user }, dispatch] = useStateValue();
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
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {properties?.length === 0 && (
        <span>You have not Creayed any property.</span>
      )}
      {properties.map((property) => {
        return <MyPropertiesCard property={property} key={property.id} />;
      })}
    </>
  );
};

export default MyPropertiesList;
