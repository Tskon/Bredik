import React from 'react';

class OnwheelArticle extends React.Component {
  render() {
    return (
      <article>
        <h1>Стоит ли трогать onwheel?</h1>
        <section>
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
          <p>
            Повесили событие переключения слайда на кнопки с кодами 32, 40, 34, 38, 33, 36, 35 и задача почти решена!
            Осталось обработать скролл, вот тут подойдем подробнее.
          </p>
        </section>
        <section>
          <h2>Событие обработки скролла</h2>

        </section>
      </article>
    )
  }
}

export default OnwheelArticle;