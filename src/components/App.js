import React, { useState } from "react";
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ChildEditProfile from './ChildEditProfile';
import ChildAddCard from './ChildAddCard';
import ChildChangeAvatar from './ChildChangeAvatar';
import ImagePopup from './ImagePopup';

function App() {

    const [isAvatarPopup, setIsAvatarPopup] = useState(false);
    const [isProfilePopup, setIsProfilePopup] = useState(false);
    const [isPlacePopup, setIsPlacePopup] = useState(false);

    const [selectedCard, setSelectedCard] = useState(false);

    const isEditAvatarPopupOpen = () => {
        setIsAvatarPopup(!isAvatarPopup);
    }

    const isEditProfilePopupOpen = () => {
        setIsProfilePopup(!isProfilePopup);
    }

    const isAddPlacePopupOpen = () => {
        setIsPlacePopup(!isPlacePopup);
    }

    const closeAllPopups = () => {
        setIsAvatarPopup(false);
        setIsProfilePopup(false);
        setIsPlacePopup(false);
        setSelectedCard(false);
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
                <ChildEditProfile />
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="add-card" textButton="Сохранить" isOpen={isPlacePopup} onClose={closeAllPopups}>
                <ChildAddCard />
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="change-avatar" textButton="Сохранить" isOpen={isAvatarPopup} onClose={closeAllPopups}>
                <ChildChangeAvatar />
            </PopupWithForm>
            <PopupWithForm title="Вы уверены?" name="confirmation" textButton="Да" onClose={closeAllPopups} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </>
    );
}

export default App;
