import React from 'react';
import { v4 as uuid } from 'uuid';
import "./Categories.scss";

const birds = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

export default function Categories(props) {
  const { selectedCategory, setCategory } = props;


  return (
    <nav>
      <ul>
        {birds.map((name, index) => {
          return (selectedCategory === index)
            ?
            <li
              key={uuid()}
              className="selected-category"
              onClick={() => setCategory(index)}
            >
              {name}
            </li>
            :
            <li
              key={uuid()}
              className="category"
              onClick={() => setCategory(index)}
            >
              {name}
            </li>
        })}
      </ul>
    </nav>
  );
}
