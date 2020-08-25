import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import './Categories.scss';

const birds = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

function Categories(props) {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <nav>
      <ul>
        {birds.map((name, index) => {
          return selectedCategory === index ? (
            <li
              key={uuid()}
              className="selected-category"
              onClick={() => setSelectedCategory(index)}
            >
              {name}
            </li>
          ) : (
            <li
              key={uuid()}
              className="category"
              onClick={() => setSelectedCategory(index)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Categories.propTypes = {
  selectedCategory: PropTypes.number.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Categories;
