// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
    <body class="root">
      <header className="header">
        <img className="logo" alt="Логотип Mesto Russia" src="./images/logo.svg" />
      </header>

      <main className="root__main">
        <section className="profile">
          <div className="profile__avatar">
            <img className="profile__avatar-image" alt="Аватар" src="./images/profile-avatar.jpg" />
            <div className="profile__avatar-edit"></div>
          </div>
          <div className="profile__profile-wrapper">
            <div className="profile__name-wrapper">
              <h1 className="profile__name" id="profile__name">Имя профиля</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
            <p className="profile__description" id="profile__description">Описание</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="cards">
          <ul className="cards__items">

          </ul>
        </section>

      </main>

      <footer className="footer">
        <p className="footer__copyright">Георгий Горчев &copy; 2020 Mesto Russia</p>
      </footer>

      <div className="popup" data-type="place">
        <form className="popup__container" name="place" id="place" noValidate>
          <h3 className="popup__title">Новое место</h3>
            <fieldset className="popup__form" form="place">
              <div className="popup__form-item-group">
                <input id="title" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Название" name="title" minLength="1" maxLength="30" required />
                <span id="title-error" className="popup__form-error"></span>
              </div>
              <div className="popup__form-item-group">
                <input id="link" className="popup__form-item popup__form-item_input_description" type="url" placeholder="Ссылка на картинку" name="link" required />
                <span id="link-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
            <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        </form>
      </div>

      <div className="popup" data-type="account">
        <form className="popup__container" name="account" id="account" noValidate>
          <h3 className="popup__title">Редактировать профиль</h3>
            <fieldset className="popup__form" form="account">
              <div className="popup__form-item-group">
                <input id="username" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" required />
                <span id="username-error" className="popup__form-error"></span>
              </div>
              <div className="popup__form-item-group">
                <input id="description" className="popup__form-item popup__form-item_input_description" type="text" placeholder="Описание профиля" name="about" minLength="2" maxLength="200" required />
                <span id="description-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
            <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        </form>
      </div>

      <div className="popup" data-type="avatar">
        <form className="popup__container" name="avatar" id="avatar" noValidate>
          <h3 className="popup__title">Обновить аватар</h3>
            <fieldset className="popup__form" form="avatar">
              <div className="popup__form-item-group">
                <input id="link" className="popup__form-item popup__form-item_input_name" type="url" placeholder="Ссылка на картинку" name="link" required />
                <span id="link-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
            <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        </form>
      </div>

      <div className="popup popup_darkness_lightbox" data-type="lightbox">
        <figure className="lightbox">
          <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
          <img className="lightbox__image" src="#" alt="#" />
          <figcaption className="lightbox__caption"></figcaption>
        </figure>
      </div>

      <div className="popup" data-type="confirm-delete">
        <form className="popup__container" name="confirm-delete" id="confirm-delete" noValidate>
          <h3 className="popup__title">Вы уверены?</h3>
          <fieldset className="popup__form" form="confirm-delete">
            <button className="popup__save-button popup__save-button_context_confirm-delete" type="submit">Да</button>
          </fieldset>
          <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        </form>
      </div>

      {/* <template id="card">
        <li className="card">
          <img className="card__image" src="#" alt="#" />
          <button className="card__delete-button" type="button" aria-label="Удалить"></button>
          <div className="card__content">
            <h2 className="card__title"></h2>
            <div>
            <button className="card__like-button" type="button" aria-label="Нравится"></button>
            <p className="card__likes">0</p>
            <div>
          </div>
        </li>
      </template> */}
    </body>
    </>
  )
}

export default App;
