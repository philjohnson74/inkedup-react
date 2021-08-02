const PenList = ({pens}) => {
    return <div data-test="pen-list">
        {
            pens.map(pen => (<div className="pen-item">
                <h2 className="display-name">{pen.displayName}</h2>
            </div>))
        }
    </div>;
}

export default PenList;