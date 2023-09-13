function ImagePopup(props) {
    return (
        <>
            {props.card && (
                <div className="popup popup_view-card popup_opened">
                    <div className="popup__card-info">
                        <button className="popup__cross" type="button" onClick={props.onClose}></button>
                        <img className="popup__image" src={props.card.link} alt="изображение места" />
                        <p className="popup__sign">{props.card.name}</p>
                    </div>
                </div>
            )}
        </>
    )
}
export default ImagePopup;