import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
    render() {
        const { details } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable? 'Add To Order' : 'Sold Out!';

        return(
            <li className="menue-fish">
                <img src={this.props.details.image} alt={this.props.details.name}/>
                <h3 className="fish-name">
                {details.name}
                <span className="price">{formatPrice(details.price)}</span>
            </h3>
            <p>{details.desc}</p>
            <button button={!isAvailable}>{buttonText}</button>
            <button>Add To Order</button>
            </li>
        )
    }
}

export default Fish;
