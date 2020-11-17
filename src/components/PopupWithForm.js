export default function PopupWithForm(props) {
  const openClass = props.isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup popup_type_${props.name} ${openClass}`} data-type="place">
          <form className="popup__container" name={props.name} id={props.name} noValidate>
            <h3 className="popup__title">{props.title}</h3>
              <fieldset className="popup__form" form={props.name}>
              {props.children}
              </fieldset>
              <button className="popup__close-button" type="reset" aria-label="Закрыть" onClick={props.onClose}></button>
          </form>
        </div>
  )
}
