export default function Card({data, onCardClick}) {

  function handleClick() {
    // Передаём название и ссылку нажатой картинки в компонент App для открытия lightbox:
    onCardClick(data)
  }

  return(
    <li className="card" key={data.id} >
      <img className="card__image" src={data.link} alt={data.title} onClick={handleClick} />
      <button className="card__delete-button" type="button" aria-label="Удалить"></button>
      <div className="card__content">
        <h2 className="card__title">{data.title}</h2>
        <div>
        <button className="card__like-button" type="button" aria-label="Нравится"></button>
          <p className="card__likes">{data.likes}</p>
        </div>
      </div>
    </li>
  )
}
