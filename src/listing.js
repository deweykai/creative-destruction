import React from 'react';
import Item from './item.js';
import Price from './price.js';
import Quantity from './quantity.js';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.selling = props.selling;
        this.name = props.name;
        this.price = props.price;
        this.state = {
            quantity: props.quantity,
        };
    }

    render() {
        return (
            <div>
                <Item name={this.name} />
                <Price price={this.price} />
                <Quantity quantity={this.state.quantity} />
            </div>
        );
    }
}

export default Listing;
