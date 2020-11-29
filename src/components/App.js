import React, { useEffect } from 'react';
import CurrentUserContext from '../contexts/currentUserContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup.js';


function App() {
  // useState
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [cards, setCards] = React.useState([]);

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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card, isLiked)
    .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch(err => console.error(err))
  }

  function handleCardDelete(card){
  // Снова проверяем, являемся ли мы овнером карточки
  const isOwner = card.owner._id === currentUser._id;
  api.deleteCard(card)
  .then(() => {
    // Обновляем стейт
    setCards(cards.filter( c => c._id !== card._id))
  })
  .catch(err => console.error(err))
  }


  function handleUpdateUser(userData) {
    setLoading(true)
    api.setUser(userData)
    .then(user => {
      setCurrentUser(user)
      closeAllPopups();
    })
    .catch(err => console.error(err))
    .finally(() => {
      setLoading(false)
    })
  }

  function handleUpdateAvatar(imgSrc) {
    setLoading(true);
    api.setAvatar(imgSrc)
    .then(user => {
      setCurrentUser(user);
      closeAllPopups();
    })
    .catch(err => console.error(err))
    .finally(() => {
      setLoading(false)
    })
  }

  function handleAddPlaceSubmit(card) {
    setLoading(true)
    api.uploadCard(card)
    .then(uploadedCard => {
      setCards([uploadedCard, ...cards]);
      closeAllPopups()
    })
    .catch(err => console.error(err))
    .finally(() => {
      setLoading(false)
    })
  }


  useEffect( () => {
    Promise.all([
      api.getUser(),
      api.getCards()
    ])
    .then(values => {
      console.log('👍 Успешно подключились к серверу и получили данные!');
      const [user, cards] = values
      setCurrentUser(user);
      setCards(cards);
    })
    .catch(err => console.error(err))
  }, [])

  // Разметка приложения
  return (
      <CurrentUserContext.Provider value={currentUser}>
       <div className="root">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
          submitButtonText='Сохранить'
          loadingText='Загрузка...'
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitButtonText='Добавить'
          loadingText='Добавление...'
          isLoading={isLoading}
          onAddPlace={handleAddPlaceSubmit}
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
  )
}

export default App;
