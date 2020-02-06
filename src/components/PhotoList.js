import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 850
  }
}));
const imageConveter = file => {
  return URL.createObjectURL(file);
};
export const PhotoList = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.images.map((item, index) => (
          <GridListTile key={index} cols={item.cols || 1}>
            <img src={imageConveter(item)} alt={item.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
