import React, { Component } from 'react'
import { uuid } from 'uuidv4';
import '../styles/Checkout.css'

class Checkout extends Component {
  render() {
    const { shoppingList, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="Shopping">
          <div className="Shopping-list">
            {shoppingList.map(item => (
              <div className="Shopping-list-item" key={uuid()}>
                <img className="Shopping-list-item_cover" src={item.cover} alt={item.title} />
                <div className="Shopping-list-item_title">{item.title}</div>
                <div className="Shopping-list-item_quantity">quantity: 1</div>
                <div className="Shopping-list-item_price">$19.99</div>
                <button onClick={onDelete.bind(this, item.id)} >remove</button>
              </div>)
            )}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default Checkout;
