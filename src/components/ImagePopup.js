function ImagePopup({ card, onClose }) {
    return (
        <>
            {card && (
                <div className="popup popup_view-card popup_opened">
                    <div className="popup__card-info">
                        <button
                            className="popup__cross"
                            type="button"
                            onClick={onClose}
                        ></button>
                        <img
                            className="popup__image"
                            src={card.link}
                            alt={card.name}
                        />
                        <p className="popup__sign">{card.name}</p>
                    </div>
                </div>
            )}
        </>
    )
}
export default ImagePopup;