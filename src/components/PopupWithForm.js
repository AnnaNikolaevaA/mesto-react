function PopupWithForm(props) {
    return (
        <>
            {props.isOpen && (
                <div className={`popup popup_${props.name} popup_opened`}>
                    <div className="popup__container">
                        <button className="popup__cross" type="button" onClick={props.onClose}></button>
                        <form className="popup__form" name={`${props.name}-form`} noValidate>
                            <h3 className="popup__title">{props.title}</h3>
                            {props.children}
                            <button className={`popup__button popup__button_type_${props.name}`} type="submit">{props.textButton}</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopupWithForm;