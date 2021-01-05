import React from 'react';
import PropertyList from './Components/PropertyList';
import Services from './Components/Services';
import Title from '../../shared/components/UIElements/Title';
import Categories from './Components/Categories';
const Home = () => {
  return (
    <>
      <Title title="Categories" />
      <Categories />
      <div className="cmn_section">
        <Title title="Featured Properties" />
        <PropertyList />
      </div>
      <Services />
    </>
  );
};

export default Home;
