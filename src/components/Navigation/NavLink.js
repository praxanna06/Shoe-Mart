


import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  const pContrastText = theme.palette.primary.contrastText;

  return {
    container: {
      padding: theme.spacing(1),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      paddingTop: "0.5%",
      paddingBottom: "0.5%",
      border: `0px solid transparent`,
      borderBottomWidth: "4px",
      color: pContrastText,
      textDecoration: "none",
      transition: "0.3s ease-in-out",
      position: "relative", // Add position relative to the container
      "&:hover": {
        cursor: "pointer",
        borderColor: theme.palette.grey[400],
        "&::after": {
          content: '""', // Add a pseudo-element
          position: "absolute", // Position it absolutely
          bottom: 0, // Align it to the bottom
          left: 0, // Align it to the left
          width: "100%", // Set the width to 100%
          height: "2px", // Set the height
          backgroundColor: pContrastText, // Set the background color
          transform: "scaleX(0)", // Initially scale it to 0 width
          transition: "transform 0.3s ease-in-out", // Add a transition for smooth animation
        },
        "&:hover::after": {
          transform: "scaleX(1)", // Scale it to full width on hover
        },
      },
    },
    active: {
      borderColor: pContrastText,
    },
    nameText: {
      color: pContrastText,
      fontWeight: "bolder",
      margin: "2%",
      fontSize: "150%",
    },
  };
});

const NavLinkz = ({ name, to, end }) => {
  const classes = useStyles();

  return (
    <NavLink
      to={to}
      className={classes.container}
      activeClassName={classes.active}
      end={end}
    >
      <Typography variant="button" className={classes.nameText}>
        {name}
      </Typography>
    </NavLink>
  );
};

export default NavLinkz;