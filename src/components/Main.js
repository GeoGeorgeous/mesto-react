import React, { useEffect } from 'react';
import api from '../utils/Api.js';
import Card from '../components/Card.js';
import { CurrentUserContext } from '../contexts/currentUserContext'; // Импортируем контекст

export default function Main(props) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  // Эффект при монтировании компонента
  useEffect(() => {
    api.getCards()
    .then(serverCards => {
      setCards(serverCards);
    })
    .catch(errorCode => console.error(`${errorCode}: не удалось загрузить карточки. 📛`))
  }, []) // Ограничили количество API запросов — 1 раз, при рендере


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
    });
  }

  function handleCardDelete(card){
  // Снова проверяем, являемся ли мы овнером карточки
  const isOwner = card.owner._id === currentUser._id;
  api.deleteCard(card)
  .then(() => {
    // Обновляем стейт
    setCards(cards.filter( c => c._id !== card._id))
  })
  }

  return(
    <main className="root__main">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" alt="Аватар" src={currentUser.avatar} />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-wrapper">
          <div className="profile__name-wrapper">
            <h1 className="profile__name" id="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description" id="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__items">
          {cards && cards.map((card) => {
            return (
              <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}/>
            )
          }
          )}
        </ul>
      </section>
    </main>
  )
}
