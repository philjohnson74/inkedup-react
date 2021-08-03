const PenList = ({pens, loading, error}) => {
    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error...</p>
    }

    return <div data-test="pen-list">
        {
            pens.map(pen => (<div className="pen-item" key={pen.id}>
                <h2 className="display-name">{pen.displayName}</h2>
            </div>))
        }
    </div>;
}

export default PenList;