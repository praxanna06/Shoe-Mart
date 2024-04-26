// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//     margin: theme.spacing(2),
//     borderRadius: "8px",

//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   media: {
//     height: 160,
//   },

//   cardContent: {

//     // backgroundColor: theme.palette.secondary.main,
//   },

//   name: {
//     textAlign: "center",
//   },
// }));

// const CategoryCard = ({ name, imageURL, onClick }) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root} onClick={onClick}>
//       <CardMedia className={classes.media} image={imageURL} title={name} />
//       <CardContent className={classes.cardContent}>
//         <Typography variant="h6" component="h3" className={classes.name}>
//           {name}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CategoryCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 300,
    height: 300,
    margin: theme.spacing(2),
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
      },
      "& $cardContent": {
        transform: "translate(-50%, -50%) scale(1.1)",
        "& $name": {
          opacity: 0.5, // Change text opacity to 0.5 on hover
        },
      },
    },
  },
  media: {
    height: "100%",
  },
  cardContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  name: {
    color: "white",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.3s ease-in-out", // Add a transition for smooth animation
  },
}));

const CategoryCard = ({ name, imageURL, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardMedia className={classes.media} image={imageURL} title={name} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h3" className={classes.name}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;