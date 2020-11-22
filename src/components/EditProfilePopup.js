import React from 'react';
import { CurrentUserContext } from '../contexts/currentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser, submitButtonText, loadingText, isLoading}) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.description);

  const [nameValue, setNameValue] = React.useState(currentUser.name);
  const [descriptionValue, setDescriptionValue] = React.useState(currentUser.description);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: nameValue,
      about: descriptionValue
    });
  }

  return (
    <PopupWithForm
      name="profle"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonText={submitButtonText}
      loadingText={loadingText}
      isLoading={isLoading}
      children={(
        <>
          <div className="popup__form-item-group">
            <input
            id="username"
            className="popup__form-item popup__form-item_input_name"
            type="text"
            placeholder="Имя"
            defaultValue={name}
            onChange={(e) => {setNameValue(e.target.value)}}
            name="name"
            minLength="2"
            maxLength="40"
            required />
            <span id="username-error" className="popup__form-error"></span>
          </div>
          <div className="popup__form-item-group">
            <input
            id="description"
            className="popup__form-item popup__form-item_input_description"
            type="text"
            placeholder="Описание профиля"
            defaultValue={description}
            onChange={(e) => setDescriptionValue(e.target.value)}
            name="about"
            minLength="2"
            maxLength="200"
            required />
            <span id="description-error" className="popup__form-error"></span>
          </div>
        </>
      )}
  />)
}
