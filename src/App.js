import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <header classNameName="header">
        <img classNameName="logo" alt="Логотип Mesto Russia" src="./images/logo.svg" />
      </header>

      <main classNameName="root__main">
        <section classNameName="profile">
          <div classNameName="profile__avatar">
            <img classNameName="profile__avatar-image" alt="Аватар" src="./images/profile-avatar.jpg" />
            <div classNameName="profile__avatar-edit"></div>
          </div>
          <div classNameName="profile__profile-wrapper">
            <div classNameName="profile__name-wrapper">
              <h1 classNameName="profile__name" id="profile__name">Имя профиля</h1>
              <button classNameName="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
            <p classNameName="profile__description" id="profile__description">Описание</p>
          </div>
          <button classNameName="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section classNameName="cards">
          <ul classNameName="cards__items">

          </ul>
        </section>

      </main>

      <footer classNameName="footer">
        <p classNameName="footer__copyright">Георгий Горчев &copy; 2020 Mesto Russia</p>
      </footer>

      <div classNameName="popup" data-type="place">
        <form className="popup__container" name="place" id="place" novalidate>
          <h3 className="popup__title">Новое место</h3>
            <fieldset className="popup__form" form="place">
              <div className="popup__form-item-group">
                <input id="title" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Название" name="title" minlength="1" maxlength="30" required />
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
        <form className="popup__container" name="account" id="account" novalidate>
          <h3 className="popup__title">Редактировать профиль</h3>
            <fieldset className="popup__form" form="account">
              <div className="popup__form-item-group">
                <input id="username" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Имя" name="name" minlength="2" maxlength="40" required />
                <span id="username-error" className="popup__form-error"></span>
              </div>
              <div className="popup__form-item-group">
                <input id="description" className="popup__form-item popup__form-item_input_description" type="text" placeholder="Описание профиля" name="about" minlength="2" maxlength="200" required />
                <span id="description-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
          </fieldset>
            <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        </form>
      </div>

      <div className="popup" data-type="avatar">
        <form className="popup__container" name="avatar" id="avatar" novalidate>
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
        <form className="popup__container" name="confirm-delete" id="confirm-delete" novalidate>
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

    </>
  )
}

export default App;
