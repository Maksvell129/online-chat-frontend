function BarHeader(props) {
    const {spanText, headerTitle} = props;

    return(
        <div className="bar-header">
            <div className="header-title abel-normal-black-16px">
                <span className="abel-normal-black-16px">{spanText}</span>
            </div>
            <div className="subheader abel-normal-boulder-12px">
                {headerTitle}
            </div>
        </div>
    );
}

export default BarHeader;