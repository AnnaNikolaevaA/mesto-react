import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const avatarLink = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarLink.current.value,
        });
    } 

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            title="Обновить аватар"
            name="change-avatar"
            textButton="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                ref={avatarLink}
                className="popup__input popup__input_type_link"
                name="avatar"
                type="url"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="popup__error link-avatar-input-error">Вы пропустили это поле</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;