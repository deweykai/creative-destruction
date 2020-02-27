import React from 'react';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.price = props.price;
    }

    render() {
        return (
            <div>{this.price}</div>
        );
    }
}

export default Price;
