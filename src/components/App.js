import React, { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isAvatarPopup, setIsAvatarPopup] = useState(false);
    const [isProfilePopup, setIsProfilePopup] = useState(false);
    const [isPlacePopup, setIsPlacePopup] = useState(false);

    const [selectedCard, setSelectedCard] = useState();

    const isEditAvatarPopupOpen = () => {
        setIsAvatarPopup(true);
    }

    const isEditProfilePopupOpen = () => {
        setIsProfilePopup(true);
    }

    const isAddPlacePopupOpen = () => {
        setIsPlacePopup(true);
    }

    const closeAllPopups = () => {
        setIsAvatarPopup(false);
        setIsProfilePopup(false);
        setIsPlacePopup(false);
        setSelectedCard();
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    return (
        <>
            <Header />
            <Main onEditAvatar={isEditAvatarPopupOpen} onEditProfile={isEditProfilePopupOpen} onAddPlace={isAddPlacePopupOpen} onCardClick={handleCardClick} />
            <Footer />
            <PopupWithForm title="Редактировать профиль" name="edit-profile" textButton="Сохранить" isOpen={isProfilePopup} onClose={closeAllPopups}>
                <input id="name-input" className="popup__input popup__input_type_name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="popup__error name-input-error">Вы пропустили это поле</span>
                <input id="description-input" className="popup__input popup__input_type_description" name="about" type="text"
                    placeholder="О себе" minLength="2" maxLength="200" required />
                <span className="popup__error description-input-error">Вы пропустили это поле</span>
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="add-card" textButton="Сохранить" isOpen={isPlacePopup} onClose={closeAllPopups}>
                <input id="name-place-input" className="popup__input popup__input_type_name-place" name="name" type="text" placeholder="Название"  minLength="2" maxLength="30" required />
                <span className="popup__error name-place-input-error">Вы пропустили это поле</span>
                <input id="link-input" className="popup__input popup__input_type_link" name="link" type="url"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error link-input-error">Вы пропустили это поле</span>
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="change-avatar" textButton="Сохранить" isOpen={isAvatarPopup} onClose={closeAllPopups}>
                <input id="link-avatar-input" className="popup__input popup__input_type_link" name="avatar" type="url"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error link-avatar-input-error">Вы пропустили это поле</span>
            </PopupWithForm>
            <PopupWithForm title="Вы уверены?" name="confirmation" textButton="Да" onClose={closeAllPopups} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </>
    );
}

export default App;
