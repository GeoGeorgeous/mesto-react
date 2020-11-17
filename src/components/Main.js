import React, { useEffect } from 'react';
import avatar from '../images/profile-avatar.jpg';
import api from '../utils/Api.js'
import Card from '../components/Card.js'

export default function Main(props) {

  const [userName, setUserName] = React.useState('Loading');
  const [userDescription, setUserDescription] = React.useState('Loading');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {

    Promise.all([
      api.getUser(),
      api.getCards()
    ])
    .then(values => {
      console.log('👍 Успешно подключились к серверу и получили данные!');
      return {
        user: values[0],
        cards: values[1]};
      }
    )
    .then(data => {
      setUserName(data.user.name);
      setUserDescription(data.user.about);
      setUserAvatar(data.user.avatar);
      setCards(data.cards.map((card) => {
        return {
        id: card._id,
        title: card.name,
        link: card.link,
        likes: card.likes.length
        }
      }));
    })
    .catch(errorCode => console.error(`${errorCode}: не удалось загрузить карточки. 📛`))
  }, []) // Ограничили количество API запросов — 1 раз, при рендере

  return(
    <main className="root__main">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" alt="Аватар" src={userAvatar} />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-wrapper">
          <div className="profile__name-wrapper">
            <h1 className="profile__name" id="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description" id="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__items">
          {
          cards.map((card) => { return (
          <Card data={card} key={card.id} onCardClick={props.onCardClick}/>
          )})  }
        </ul>
      </section>
    </main>
  )
}
