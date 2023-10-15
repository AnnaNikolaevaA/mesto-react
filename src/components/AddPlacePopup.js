import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {

    const [placeName, setPlaceName] = useState('');
    const [placeLink, setPlaceLink] = useState('');

    const changePlaceNameInput = (e) => {
        setPlaceName(e.target.value);
    }

    const changePlaceLinkInput = (e) => {
        setPlaceLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        onAddPlace({
            name: placeName,
            link: placeLink,
        });
    }

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            textButton="Сохранить"
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                onChange={changePlaceNameInput}
                value={placeName}
                id="name-place-input"
                className="popup__input popup__input_type_name-place"
                name="name" type="text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
            />
            <span className="popup__error name-place-input-error">Вы пропустили это поле</span>
            <input
                onChange={changePlaceLinkInput}
                value={placeLink}
                id="link-input"
                className="popup__input popup__input_type_link"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="popup__error link-input-error">Вы пропустили это поле</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;