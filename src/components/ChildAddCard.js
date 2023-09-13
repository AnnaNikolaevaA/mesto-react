function ChildAddCard() {
    return (
        <>
            <input id="name-place-input" className="popup__input popup__input_type_name-place" name="name" type="text" placeholder="Название"  minLength="2" maxLength="30" required />
            <span className="popup__error name-place-input-error">Вы пропустили это поле</span>
            <input id="link-input" className="popup__input popup__input_type_link" name="link" type="url"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error">Вы пропустили это поле</span>
        </>
    )
}

export default ChildAddCard;