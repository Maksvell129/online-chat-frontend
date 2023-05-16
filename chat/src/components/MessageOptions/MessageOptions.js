import "../MessageOptions/MessageOptions.css";

const MessageOptions = ({onClose, onMessageStartEdit, onMessageDelete}) => (
    
    <div className={'optionsBg'}>
        <div className={'optionsContainer'}>
            <div className="close-options-btn">
                <button onClick={onClose} className="close-options-btn-style">
                    <img width={10} src="images/close.png"/>
                </button>
            </div>
            <div className="options-btns">
                <button onClick={onMessageStartEdit}>Edit</button>
                <button onClick={onMessageDelete}>Delete</button>
            </div>
        </div>
    </div>
);

export default MessageOptions;