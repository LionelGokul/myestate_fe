import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../shared/hooks/useAxios';
import Title from '../../shared/components/UIElements/Title';
import UploadPropertyForm from './Components/UploadPropertyForm';
import './UploadProperty.css';

const UploadProperty = (props) => {
  const { sendRequest } = useAxios();
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    if (props.isEdit) {
      sendRequest('get', `property/${id}`)
        .then((res) => {
          setProperty(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="cmn_section">
      <Title title="Upload Property" />
      {props.isEdit ? (
        property.id && <UploadPropertyForm property={property} />
      ) : (
        <UploadPropertyForm />
      )}
    </div>
  );
};

export default UploadProperty;
