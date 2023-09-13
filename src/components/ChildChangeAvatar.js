function ChildChangeAvatar() {
    return (
        <>
            <input id="link-avatar-input" className="popup__input popup__input_type_link" name="avatar" type="url"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error link-avatar-input-error">Вы пропустили это поле</span>
        </>
    )
}

export default ChildChangeAvatar;