import React, { lazy, Suspense } from 'react';
import Loader from '../../shared/components/UIElements/Loader';
import Title from '../../shared/components/UIElements/Title';

const Categories = lazy(() => import('./Components/Categories'));
const Services = lazy(() => import('./Components/Services'));
const PropertyList = lazy(() => import('./Components/PropertyList'));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Title title="Categories" />
      <Categories />
      <div className="margin_top" />
      <div className="margin_top" />
      <div className="margin_top" />
      <div className="cmn_section">
        <Title title="Featured Properties" />
        <PropertyList />
      </div>
      <Services />
    </Suspense>
  );
};

export default Home;
