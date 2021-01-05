import React from 'react';
import propertyDatas from '../../../shared/DummyData/PropertyData';
import PropertyCard from './PropertyCard';
import Slider from '../../../shared/components/UIElements/Slider';

const PropertyList = () => {
  let Propertycontent = [];

  propertyDatas.forEach((propertydata, id) => {
    Propertycontent.push(
      <div className="item" key={id}>
        <PropertyCard propertyDetails={propertydata} key={propertydata.id} />
      </div>,
    );
  });

  return (
    <>
      <Slider Content={Propertycontent} className="featured_prop" />
    </>
  );
};
export default PropertyList;
