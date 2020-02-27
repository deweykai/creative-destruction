import React from 'react';

class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.quantity = props.quantity;
    }

    render() {
        return (
            <div>{this.quantity}</div>
        );
    }
}

export default Quantity;
