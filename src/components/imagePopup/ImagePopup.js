import React from 'react';
export default function ImagePopup({card, onClose}) {
  const openClass = card ? 'popup_opened' : '';
  const cardLink = card.link ? card.link : '#';
  const cardtitle = card.title ? card.title : '#'

  return(
    <div className={`popup popup_darkness_lightbox ${openClass}`} data-type="lightbox">
      <figure className="lightbox">
        <button className="popup__close-button" type="reset" aria-label="Закрыть" onClick={onClose}></button>
        <img className="lightbox__image" src={cardLink} alt={cardtitle} />
        <figcaption className="lightbox__caption">{cardtitle}</figcaption>
      </figure>
    </div>
  )
}
