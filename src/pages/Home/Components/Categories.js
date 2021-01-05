import React from 'react';
import { Link } from 'react-router-dom';

let CategoriesImages = [
  {
    id: 1,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2020/11/athens-thumb-1.jpg',
    name: 'FLAT',
  },
  {
    id: 2,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2018/09/pallagio1a_compressed.jpg',
    name: 'VILLA',
  },
  {
    id: 3,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2018/09/uptown1a_compressed.jpg',
    name: 'LAND',
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__type">
        <div className="categories_types_center">
          {CategoriesImages.map((categories, id) => {
            return (
              <article className="category" key={id}>
                <div className="img_container">
                  <img src={categories.image} alt={categories.name} />
                  <Link className="categories_button">View all</Link>
                </div>
                <p className="categories_info">{categories.name}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
