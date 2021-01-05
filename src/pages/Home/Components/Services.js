import React from 'react';
import Title from '../../../shared/components/UIElements/Title';
import { FaShuttleVan, FaBeer, FaAward, FaHandsHelping } from 'react-icons/fa';

let services = [
  {
    icon: <FaAward />,
    title: 'Freebies',
    info:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Refer and Earn',
    info:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
  },
  {
    icon: <FaShuttleVan />,
    title: 'Free Installation',
    info:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
  },
  {
    icon: <FaBeer />,
    title: 'Cost Free HouseWarming Party',
    info:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
  },
];
const Services = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item) => {
          return (
            <article key={`item-${item.title}`} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
