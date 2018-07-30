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
          <code>
            {`
            onWheel(e) {
              e.preventDefault();        // запрещаем стандартное пролистывание страницы

              if (e.deltaY > 0) {        // определяем в какую сторону прокручено колесико
                this.currentPosition++;
              } else {
                this.currentPosition--;
              }

              // проверяем не уперлись ли в начало или конец страницы
              if (this.currentPosition === this.slidesList.length) this.currentPosition = this.slidesList.length - 1;
              if (this.currentPosition < 0) this.currentPosition = 0;

              // тригерим событие скроллинга к указанному слайду
              this.changeSlide(this.currentPosition);
            }
            `}

          </code>
        </section>
      </article>
    )
  }
}

export default OnwheelArticle;