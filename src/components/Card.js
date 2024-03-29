import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card ({ onCardClick, card, onCardLike, onCardDelete }) {
    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_value_active' : ''}`;

    return (
        <>
            <img
                className="card__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            {isOwn && (
                <button
                    className="card__delete"
                    type="button"
                    aria-label="удалить"
                    onClick={handleDeleteClick}
                ></button>
            )}
            <div className="card__info">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="лайк"
                        onClick={handleLikeClick}
                    ></button>
                    <p className="card__count">{card.likes.length}</p>
                </div>
            </div>
        </>
    )
}

export default Card;