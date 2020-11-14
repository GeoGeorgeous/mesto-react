export default function ImagePopup(){
  return(
    <div className="popup popup_darkness_lightbox" data-type="lightbox">
      <figure className="lightbox">
        <button className="popup__close-button" type="reset" aria-label="Закрыть"></button>
        <img className="lightbox__image" src="#" alt="#" />
        <figcaption className="lightbox__caption"></figcaption>
      </figure>
    </div>
  )
}
