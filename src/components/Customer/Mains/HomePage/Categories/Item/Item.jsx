import { Grid, makeStyles } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import React from "react";
import imageCategory1 from "../../../../../../assests/images/categories-1.jpeg";
import imageCategory2 from "../../../../../../assests/images/categories-2.jpeg";
import imageCategory3 from "../../../../../../assests/images/categories-3.jpeg";

Item.propTypes = {
  categories: PropTypes.array,
};

Item.defaultProps = {
  categories: [],
};

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: "0 1rem",
    cursor: "pointer",
  },
}));

function Item(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} wrap="nowrap">
        <Grid item xs={4} className={`${classes.center} category__hover`}>
          <img
            src={imageCategory1}
            alt={imageCategory1}
            className="category__img"
          />
          <h2 className="category__title">Table Tree Plant</h2>
          <p className="category__count">(50 Items)</p>
        </Grid>
        <Grid
          item
          xs={4}
          className="category__item"
          className={`${classes.center} category__hover`}
        >
          <img
            src={imageCategory2}
            alt={imageCategory2}
            className="category__img"
          />
          <h2 className="category__title">Table Tree Plant</h2>
          <p className="category__count">(50 Items)</p>
        </Grid>
        <Grid
          item
          xs={4}
          className="category__item"
          className={`${classes.center} category__hover`}
        >
          <img
            src={imageCategory3}
            alt={imageCategory3}
            className="category__img"
          />
          <h2 className="category__title">Table Tree Plant</h2>
          <p className="category__count">(50 Items)</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Item;
