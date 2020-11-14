import React from 'react';
import Header from './header/Header.js'
import Main from './main/Main.js'
import Footer from './footer/Footer.js'
import PopupWithForm from './popupWithForm/PopupWithForm.js'
import ImagePopup from './imagePopup/ImagePopup.js'


function App() {
  // useState
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false)

  // Хенделры onclick
  const handleEditProfileClick = () => {setEditProfilePopupOpen(true)};
  const handleAddPlaceClick = () => {setAddPlacePopupOpen(true)};
  const handleEditAvatarClick = () => {setEditAvatarPopupOpen(true)}
  const handleCardClick = (card) => {setSelectedCard(card)}
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  // Разметка приложения
  return (
    <>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profle"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <div className="popup__form-item-group">
                <input id="username" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" required />
                <span id="username-error" className="popup__form-error"></span>
              </div>
              <div className="popup__form-item-group">
                <input id="description" className="popup__form-item popup__form-item_input_description" type="text" placeholder="Описание профиля" name="about" minLength="2" maxLength="200" required />
                <span id="description-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
            </>
          )}
        />

        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
              <div className="popup__form-item-group">
                <input id="title" className="popup__form-item popup__form-item_input_name" type="text" placeholder="Название" name="title" minLength="1" maxLength="30" required />
                <span id="title-error" className="popup__form-error"></span>
              </div>
              <div className="popup__form-item-group">
                <input id="link" className="popup__form-item popup__form-item_input_description" type="url" placeholder="Ссылка на картинку" name="link" required />
                <span id="link-error" className="popup__form-error"></span>
              </div>
              <button className="popup__save-button" type="submit">Сохранить</button>
            </>
          )}
        />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={(
            <>
                <div className="popup__form-item-group">
                  <input id="link" className="popup__form-item popup__form-item_input_name" type="url" placeholder="Ссылка на картинку" name="link" required />
                  <span id="link-error" className="popup__form-error"></span>
                </div>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </>
          )}
        />

        

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
         />

      </div>
    </>
  )
}

export default App;
