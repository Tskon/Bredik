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
          <pre><code className="language-js">
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
          </code></pre>
          <p>Проверяем - теперь можно колесиком листать слайды.</p>
          <p>
            Однако при тестировании на ноутбуке получаем неожиданный результат - даже при небольшом пролистывании в
            лучшем случае пролистывается несколько слайдов, а обычно до конца страницы сразу. Проблема заключается в том,
            что тачпад для эмуляции плавного скроллинга делает много событий onWheel с совершенно разными значениями
            e.deltaY
            (от самых маленьких и до 200-300). Более того эти события продолжают гененрироваться в зависимости от
            резкости
            движения по тачпаду еще в течении 0.5-2.5 секунд. Все приведенные значения отличаются на разных моделях
            ноутбуков, особенно между apple и обычными.
          </p>
          <p>
            На ум приходит решение через короткий таймаут после каждой итерации события onWheel, т.к. тачпады их генерируют почти беспрерывно.
            Однако сталкиваемся с другой проблемой - задержкой в пролистывании страниц и иногда продолжительной.
            Данный фикс приемлимо работает на большинстве ноутбуков, за исключением в первую очередь apple. Можем
            исключить эппл из собвтия onwheel, как и мобильные устройства. Есть ли лучшее решение?
          </p>
        </section>
      </article>
    )
  }
}

export default OnwheelArticle;