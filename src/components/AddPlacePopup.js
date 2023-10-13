import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const [placeName, setPlaceName] = useState();
    const [placeLink, setPlaceLink] = useState();

    const changePlaceNameInput = (e) => {
        setPlaceName(e.target.value);
    }

    const changePlaceLinkInput = (e) => {
        setPlaceLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        props.onAddPlace({
            name: placeName,
            link: placeLink,
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} title="Новое место" name="add-card" textButton="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input onChange={changePlaceNameInput} id="name-place-input" className="popup__input popup__input_type_name-place" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error name-place-input-error">Вы пропустили это поле</span>
            <input onChange={changePlaceLinkInput} id="link-input" className="popup__input popup__input_type_link" name="link" type="url"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error">Вы пропустили это поле</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;