import avatar from '../../images/profile-avatar.jpg';

export default function Main() {
  return(
    <main className="root__main">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" alt="Аватар" src={avatar} />
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
  )
}
