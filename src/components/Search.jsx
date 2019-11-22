import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: " 100%",
    height: "25vh",
    backgroundColor: "#180d1c",
    borderRadius: "15rem",
    transform: "translateY(-50%)",
    "& input": {
      width: "35%",
      border: "2px solid #ccc",
      borderRadius: "5rem",
      fontSize: "2.3rem",
      backgroundColor: "white",
      backgroundImage: "url(https://img.icons8.com/dusk/64/000000/search.png)",
      backgroundPosition: "2rem",
      backgroundSize: "4%",
      backgroundRepeat: "no-repeat",
      padding: "1.5rem 1.5rem 1.5rem 8rem",
      webkitTransition: "width 0.4s ease-in-out",
      transition: "width 0.4s ease-in-out",
      "&:focus": {
        width: "70%",
        outline: "none"
      }
    }
  }
}

function Search({ classes, onChange }) {
  return (
    <div className={classes.search}>
      <input type="text" name="search" placeholder="Search..." onChange={onChange} />
    </div>
  )
}

export default withStyles(styles)(Search);
