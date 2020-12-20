import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "@material-ui/core/Input";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Profile = ({ handleProfileName }) => {
  const initialProfile = {
    name: "",
    lastName: "",
  };

  const [profile, setProfile] = useState(initialProfile);
  const classes = useStyles();

  if (profile.name === "none") throw new Error("Profile name cannot be none");

  function handleChange(event) {
    const { name, value } = event.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, lastName } = profile;
    handleProfileName(` (${name} ${lastName})`);
    setProfile(initialProfile);
  }

  return (
    <form className={classes.root} autoComplete='off' onSubmit={handleSubmit}>
      <Input
        name='name'
        placeholder='Name'
        inputProps={{ "aria-label": "description" }}
        onChange={handleChange}
        value={profile.name}
        required
      />
      <Input
        name='lastName'
        placeholder='Last name'
        inputProps={{ "aria-label": "description" }}
        onChange={handleChange}
        value={profile.lastName}
        required
      />

      <Button
        variant='contained'
        color='primary'
        onClick={handleSubmit}
        type='submit'
      >
        Submit
      </Button>
    </form>
  );
};

export default Profile;

Profile.propTypes = {
  handleProfileName: PropTypes.func.isRequired,
};
