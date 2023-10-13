import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function EditAvatarPopup(props) {
    const avatarLink = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarLink.current.value,
        });
    } 

    return (
        <PopupWithForm onSubmit={handleSubmit} title="Обновить аватар" name="change-avatar" textButton="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input ref={avatarLink} id="link-avatar-input" className="popup__input popup__input_type_link" name="avatar" type="url"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error link-avatar-input-error">Вы пропустили это поле</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;