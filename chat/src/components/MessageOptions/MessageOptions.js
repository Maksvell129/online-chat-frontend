import "../MessageOptions/MessageOptions.css";

const MessageOptions = ({onClose}) => (
    <div className={'optionsBg'}>
        <div className={'optionsContainer'}>
            <div className="close-options-btn">
                <button onClick={onClose} className="close-options-btn-style">
                    <img width={10} src="images/close.png"/>
                </button>
            </div>
            <div>
                <span>dadasd</span>
                <span>dadasd</span>
            </div>
        </div>
    </div>
);

export default MessageOptions;