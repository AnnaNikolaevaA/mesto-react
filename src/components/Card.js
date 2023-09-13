function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
    }  

    return (
        <li className="card">
            <img className="card__image" src={props.card.link} alt="изображение места" onClick={handleClick}/>
            <button className="card__delete" type="button" aria-label="удалить"></button>
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like" type="button" aria-label="лайк"></button>
                    <p className="card__count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;