import React from 'react';

class MutationObserverArticle extends React.Component{
  render(){
    return(
      <article>
        <h1>MutationObserver спешит на помощь</h1>
        <section>
          <h2>Проблема</h2>
          <p>
            Есть минифицированная внешняя библиотека, которую асинхронно загружаем на одной конкретной странице,
            поскольку она имеет конкретное назначение и больше нигде на сайте не нужна. Библиотечка принимает на вход
            контейнер внутрь которого будет рендерить свое тело, например аккордион с обыкновенной формой, условиями
            договора, прочей информацией или интерактивными элементами.
          </p>
          <p>
            Мы в свою очередь не хотим начальное состояние библиотеки, мы хотим выбрать конкретные пункты в выподающих
            списках, нажать на кнопки или активировать определенный раздел аккордиона и т.д. чтобы привести эту форму к
            определенному виду сразу после загрузки. Однако когда закончится рендер? Мы можем отследить конец
            загрузки скрипта, но не рендера этим скриптом. Да и не всегда мы будем заново грузить этот скрипт, вполне
            вероятно что клиент выйдет в рдругой разденл нашего сайта (например SPA) и вернется назад, библиотека уже
            загружена, нужен другой способ отслеживать конец рендера, но создатели библиотеки не дали нам колбека.
            Можно играть с таймаутами например, но ведь это лишние костыли, нестабильно да и лишнее ожидание для
            пользователя. Самое время выйти на сцену герою статьи.
          </p>
        </section>
        <section>
          <h2>Mutation observer</h2>
        </section>
      </article>
    )
  }
}