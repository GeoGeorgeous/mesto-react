import React, { useEffect } from 'react';
import { CurrentUserContext } from '../contexts/currentUserContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
  // useState
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  // Хенделры onclick
  const handleEditProfileClick = () => {setEditProfilePopupOpen(true)};
  const handleAddPlaceClick = () => {setAddPlacePopupOpen(true)};
  const handleEditAvatarClick = () => {setEditAvatarPopupOpen(true)};
  const handleDeleteButtonClick = () => {setConfirmDeletePopupOpen(true)};
  const handleCardClick = (card) => {setSelectedCard(card)};
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  // Эффект при монтировании
  useEffect(() => {
    api.getUser()
    .then(user => {
      setCurrentUser(user)
    }, [])
    // .catch()
  })

  function handleUpdateUser(userData) {
    setLoading(true)
    console.log(userData)
    // api.setUser(userData)
    // .then(user => {
    //   setCurrentUser(user)
    //   closeAllPopups();
    //   setLoading(false)
    // })
    // .catch()
  }

  function handleUpdateAvatar(imgSrc) {
    api.setAvatar(imgSrc)
    .then(user => {
      setCurrentUser(user)
      closeAllPopups()
    })
    // .catch()
  }

  // Разметка приложения
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
       <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          submitButtonText='Сохранить'
          loadingText='Загрузка...'
          isLoading={isLoading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
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
            </>
          )}
        />

        <PopupWithForm
          name="confirm-delete"
          title="Вы уверены?"
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          children={(
            <button className="popup__save-button popup__save-button_context_confirm-delete" type="submit">Да</button>
          )}
        />



        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
         />

      </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App;
