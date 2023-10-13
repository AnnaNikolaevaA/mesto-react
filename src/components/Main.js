import { useContext } from 'react';
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__person">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__avatar-pic" src={currentUser.avatar}
                            alt="улыбающийся мужчина в красной шапке на фоне моря" />
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__first-row">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile} aria-label="редактировать профиль"></button>
                        </div>
                        <p className="profile__description">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onEditPlace} aria-label="добавить карточку места"></button>
            </section>
            <section>
                <ul className="cards">
                    {props.cards.map((card) => 
                        <Card 
                            card={card}
                            key={card._id}
                            onCardClick={props.onCardClick}
                            onDeleteClick={props.onDeleteClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    )}
                </ul>
            </section>
        </main>

    )
}

export default Main;