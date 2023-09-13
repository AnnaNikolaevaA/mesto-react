function ChildEditProfile() {
    return (
        <>
            <input id="name-input" className="popup__input popup__input_type_name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error name-input-error">Вы пропустили это поле</span>
            <input id="description-input" className="popup__input popup__input_type_description" name="about" type="text"
                placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__error description-input-error">Вы пропустили это поле</span>
        </>
    )
}

export default ChildEditProfile;