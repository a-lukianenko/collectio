import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ handleClick, profileName }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Header
          </Typography>
          <Button color='inherit' onClick={handleClick}>
            Posts
          </Button>
          <Button color='inherit' onClick={handleClick}>
            Add post
          </Button>
          <Button color='inherit' onClick={handleClick}>
            {`Profile ${profileName}`}
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  profileName: PropTypes.string,
};

Header.defaultProps = {
  profileName: "",
};

export default Header;
