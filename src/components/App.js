import React, { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext, defaultCurrentUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

    const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState(defaultCurrentUser);

    const [cards, setCards] = useState([]);

    const isEditAvatarPopupOpen = () => {
        setIsAvatarPopupOpen(true);
    }

    const isEditProfilePopupOpen = () => {
        setIsProfilePopupOpen(true);
    }

    const isAddPlacePopupOpen = () => {
        setIsPlacePopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsAvatarPopupOpen(false);
        setIsProfilePopupOpen(false);
        setIsPlacePopupOpen(false);
        setSelectedCard(null);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    function handleError(error) {
        console.log(error);
    }

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then((data) => {
                const [userInfo, cards] = data;
                setCurrentUser(userInfo);
                setCards(cards);
            })
            .catch(handleError);
    }, [])

    function handleUpdateUser(data) {
        api.changeUserInfo(data)
            .then((newData) => {
                setCurrentUser(newData);
                closeAllPopups();
            })
            .catch(handleError);
    }

    function handleUpdateAvatar(data) {
        api.changeUserAvatar(data)
            .then((newData) => {
                setCurrentUser(newData);
                closeAllPopups();
            })
            .catch(handleError);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(handleError);
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((item) => item._id !== card._id));
            })
            .catch(handleError);
    }

    function handleAddPlaceSubmit(data) {
        api.addCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]); 
                closeAllPopups();
            })
            .catch(handleError);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main 
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onEditAvatar={isEditAvatarPopupOpen}
                onEditProfile={isEditProfilePopupOpen}
                onAddPlace={isAddPlacePopupOpen}
                onCardClick={handleCardClick}
                cards={cards}
            />
            <Footer />
            <EditProfilePopup
                isOpen={isProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />
            <AddPlacePopup
                isOpen={isPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
            />
            <EditAvatarPopup
                isOpen={isAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
            /> 
            <PopupWithForm
                title="Вы уверены?"
                name="confirmation"
                textButton="Да"
                onClose={closeAllPopups}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;
