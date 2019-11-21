import React, { Component } from 'react'
import { uuid } from 'uuidv4';
import { withStyles } from '@material-ui/core/styles';
import sadFace from '../img/sad.png'

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
    backgroundColor: "#f6e7ff",
    borderRadius: "5px"
  },
  "Shopping-list-item_cover": {
    height: "10rem",
    width: "auto",
    borderRadius: "5px"
  },
  "Shopping-list-item_button": {
    height: "3.5rem",
    width: "auto",
    padding: "1rem",
    marginRight: "2rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#451e5e",
    border: "none",
    borderRadius: "50rem",
    textAlign: "center",
    lineHeight: "1.5rem",
    cursor: "pointer",
    boxShadow: "2px 2px 4px grey",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "4px 4px 6px grey",
      transform: "scale(1.1)",
      transition: "0.3s"
    },
    "&:focus": {
      outline: "none"
    }
  },
  empty: {
    backgroundImage: "linear-gradient(to bottom,rgb(0, 0, 0, 0.7),rgb(24, 13, 28, 0.7),rgb(38, 20, 49, 0.7),rgb(53, 25, 71, 0.7),rgb(69, 30, 94, 0.7),rgb(85, 34, 119, 0.7))",
    backgroundPosition: "center",
    height: "120vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  "empty-message": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "70%",
    height: "35%",
    padding: "3rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    "& h1": {
      fontSize: "3rem"
    }
  }
}

class Checkout extends Component {

  render() {
    const { shoppingList, onDelete, classes } = this.props;
    return (
      <React.Fragment>
        {shoppingList.length === 0 && (
          <div className={classes.empty}>
            <div className={classes["empty-message"]}>
              <h1>your shopping cart is empty</h1><img src={sadFace} alt="sad-face" />
            </div>
          </div>
        )}

        {shoppingList.length > 0 && (
          <div className={classes.Shopping}>
            <div className={classes["Shopping-list"]}>
              {shoppingList.map(item => (
                <div className={classes["Shopping-list-item"]} key={uuid()}>
                  <img className={classes["Shopping-list-item_cover"]} src={item.cover} alt={item.title} />
                  <div className={classes["Shopping-list-item_title"]}>{item.title}</div>
                  <div className={classes["Shopping-list-item_price"]}>{item.price}</div>
                  <button className={classes["Shopping-list-item_button"]} onClick={onDelete.bind(this, item.id)}>remove</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </React.Fragment >
    )
  }
}

// Checkout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Checkout);
