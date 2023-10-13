import PopupWithForm from "./PopupWithForm";
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    const changeNameInput = (e) => {
        setName(e.target.value);
    }

    const changeDescriptionInput = (e) => {
        setDescription(e.target.value);
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about)
    }, [currentUser])

    function handleSubmit(e) {
        e.preventDefault();
        
        props.onUpdateUser({
          name,
          about: description,
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} title="Редактировать профиль" name="edit-profile" textButton="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="name-input" onChange={changeNameInput} className="popup__input popup__input_type_name" value={name} name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error name-input-error">Вы пропустили это поле</span>
            <input id="description-input"  onChange={changeDescriptionInput} className="popup__input popup__input_type_description" value={description} name="about" type="text"
                placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__error description-input-error">Вы пропустили это поле</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;