import React, { Component } from 'react'
import { uuid } from 'uuidv4';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

const styles = {
  Shopping: {
    minHeight: "100vh",
    margin: "0 15rem 0 15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  "Shopping-list": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20rem 0",
    width: "60%",
    fontSize: "2rem"
  },
  "Shopping-list-item": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "1rem",
    backgroundColor: "#f3f3f3"
  },
  "Shopping-list-item_cover": {
    height: "10rem",
    width: "auto"
  }
}

class Checkout extends Component {

  render() {
    const { shoppingList, onDelete, classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.Shopping}>
          <div className={classes["Shopping-list"]}>
            {shoppingList.map(item => (
              <div className={classes["Shopping-list-item"]} key={uuid()}>
                <img className={classes["Shopping-list-item_cover"]} src={item.cover} alt={item.title} />
                <div className={classes["Shopping-list-item_title"]}>{item.title}</div>
                <div className={classes["Shopping-list-item_quantity"]}>quantity: 1</div>
                <div className={classes["Shopping-list-item_price"]}>$19.99</div>
                <button onClick={onDelete.bind(this, item.id)} >remove</button>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

// Checkout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Checkout);
