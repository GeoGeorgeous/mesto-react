export default function Card(props) {
  return(
    <li className="card" key={props.id}>
      <img className="card__image" src={props.link} alt={props.title} />
      <button className="card__delete-button" type="button" aria-label="Удалить"></button>
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <div>
        <button className="card__like-button" type="button" aria-label="Нравится"></button>
          <p className="card__likes">{props.likes}</p>
        </div>
      </div>
    </li>
  )
}
