import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.card)
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    const currentUser = useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = `card__like ${isLiked && 'card__like_value_active'}`;

    return (
        <li className="card">
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            {isOwn && <button className="card__delete" type="button" aria-label="удалить" onClick={handleDeleteClick}></button>}
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                    <button className={cardLikeButtonClassName} type="button" aria-label="лайк" onClick={handleLikeClick}></button>
                    <p className="card__count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;