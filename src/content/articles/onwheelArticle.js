import React from 'react';

class OnwheelArticle extends React.Component {
  render() {
    return (
      <article>
        <h1>Стоит ли трогать onwheel?</h1>
        <h2>Ситуация</h2>
        <p>
          На рабочем проекте пришлось столкнуться со страницей-слайдером.
          Обычная посадочная страница, разделенная на слайды.
          <ul>Слайды пролистываются:
            <li>при пролистывании страницы</li>
            <li>нажатии стрелки вверх\вниз</li>
            <li>pageUp, pgDown</li>
            <li>Home, End</li>
            <li>Space</li>
          </ul>
        </p>
        <p>Повесили события на кнопки:</p>
      </article>
    )
  }
}

export default OnwheelArticle;