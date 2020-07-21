
  
import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";

// style
const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setstate] = useState();
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  // After Login Navbar
  
  

  const guestLinks = (
    <div>
       
      
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="">
        <Toolbar className="navbar bg-dark">
          <Typography variant="h6" className={classes.title}>
            <Link to="/table">
              Resto
            </Link>
          </Typography>
          <Typography variant="h6" >
        <Link to="/table">
            Table
        </Link>
        </Typography>
        <Typography variant="h6" >
            <Link to="/waiter">
              Waiter
            </Link>
          </Typography>
          <Typography variant="h6" >
            <Link to="/order">
              Order
            </Link>
          </Typography>

          <Fragment>

            {guestLinks}
          </Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}





export default Navbar;

