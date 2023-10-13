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

    const [isAvatarPopup, setIsAvatarPopup] = useState(false);
    const [isProfilePopup, setIsProfilePopup] = useState(false);
    const [isPlacePopup, setIsPlacePopup] = useState(false);

    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setСurrentUser] = useState(defaultCurrentUser);

    const [cards, setCards] = useState([]);

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
        setSelectedCard(null);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    function handleError(error) {
        console.log(error);
    }

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setСurrentUser(data);
            })
            .catch(handleError);
    }, [])

    function handleUpdateUser(data) {
        api.changeUserInfo(data)
            .then((newData) => {
                setСurrentUser(newData);
                closeAllPopups();
            })
            .catch(handleError);
    }

    function handleUpdateAvatar(data) {
        api.changeUserAvatar(data)
            .then((newData) => {
                setСurrentUser(newData);
                closeAllPopups();
            })
            .catch(handleError);
    }

    useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch(handleError);
    }, [])

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
                setCards(cards.filter((item) => item._id !== card._id));
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
                onEditPlace={isAddPlacePopupOpen}
                onCardClick={handleCardClick}
                handleError={handleError}
                cards={cards}
            />
            <Footer />
            <EditProfilePopup
                isOpen={isProfilePopup}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />
            <AddPlacePopup
                isOpen={isPlacePopup}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
            />
            <EditAvatarPopup
                isOpen={isAvatarPopup}
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
