import { useEffect, useState } from 'react';
import personAvatar from '../images/person-avatar.jpg';
import api from '../utils/api';
import Card from './Card'

function Main(props) {

    const [userName, setUserName] = useState('Жак-ив Кусто');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = useState(personAvatar);

    function handleError(error) {
        console.log(error);
    }

    useEffect(() => {
        api.getUserInfo().then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        .catch(handleError);
    }, [])

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getCards().then((data) => {
            setCards(data);
        })
        .catch(handleError);
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__person">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__avatar-pic" src={userAvatar}
                            alt="улыбающийся мужчина в красной шапке на фоне моря" />
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__first-row">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile} aria-label="редактировать профиль"></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace} aria-label="добавить карточку места"></button>
            </section>
            <section>
                <ul className="cards">
                    {cards.map((card) => <Card card={card} key={card._id} onCardClick={props.onCardClick} />)}
                </ul>
            </section>
        </main>

    )
}

export default Main;