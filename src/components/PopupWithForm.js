function PopupWithForm({ name, isOpen, onClose, onSubmit, title, children, textButton }) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__cross"
                    type="button"
                    onClick={onClose}
                ></button>
                <form
                    className="popup__form"
                    name={`${name}-form`}
                    onSubmit={onSubmit}
                    noValidate
                >
                    <h3 className="popup__title">{title}</h3>
                    {children}
                    <button
                        className={`popup__button popup__button_type_${name}`}
                        type="submit"
                    >{textButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;