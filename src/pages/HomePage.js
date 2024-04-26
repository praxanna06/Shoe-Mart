import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import CategoryCard from "../components/Home/CategoryCard";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "auto", // Add this line to enable vertical scrolling
  },
  content: {
    flex: "1",
    padding: theme.spacing(2),
    backgroundColor: "none",
    color: "white",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  img: {
    width: "300px",
    height: "auto",
    margin: "0 10px",
    borderRadius: "10px",
  },
  div3: {
    position: "absolute",
    top: "0%",
  },
  darkText: {
    color: "white",
    textShadow: "1px 1px 3px black",
  },
  Text: {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "bold",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  secondDiv: {
    backgroundImage: `url('https://i.pinimg.com/originals/51/2a/89/512a899e0f03ce8e530bc4c3c67867c4.png')`,
    backgroundSize: "100% 100%", // Set the background-size to 100% width and 100% height
    padding: "2rem", // Add some padding for better spacing
  },
  bold:{
    fontWeight: 'bold',
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div style={{ backgroundColor: "transparent", backgroundImage: 'url("bg1.jpg")' }}>
        <Container className={classes.content}>
        <Typography variant="h1" align="center" className={`${classes.darkText} ${classes.bold}`} >
          Find Your Kicks
        </Typography>
          <Typography variant="h4" align="center" className={classes.darkText}>
            Streetwear / Lifestyle / Sports
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={classes.cardContainer}>
            <CategoryCard
              name="MEN"
              imageURL="https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg"
              onClick={() => navigate("/men")}
              cardShadow
            />
            <CategoryCard
              name="WOMEN"
              imageURL="https://5.imimg.com/data5/SELLER/Default/2022/8/EX/RX/YV/26198267/4.jpg"
              onClick={() => navigate("/women")}
              cardShadow
            />
            <CategoryCard
              name="KIDS"
              imageURL="https://cdn.shopify.com/s/files/1/2541/5718/products/product-image-327426219_1200x1200.jpg"
              onClick={() => navigate("/kids")}
              cardShadow
            />
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className={classes.secondDiv}>
        <br />
        <br />
        <div className={classes.Text}>
          Our Brands
          <br />
          <br />
        </div>
        <div className={classes.imageContainer}>
          <img
            src="https://st2.depositphotos.com/3047529/47665/i/450/depositphotos_476656414-stock-photo-copenhagen-denmark-august-2020-adidas.jpg"
            alt=""
            className={classes.img}
          />
          <img
            src="https://www.brandvertising.ch/wp-content/uploads/2023/07/nike-logo-just-do-it-clothes-design-icon-free-vector-jpg.webp"
            alt=""
            className={classes.img}
          />
          <img
            src="https://www.affinitydevon.com/assets/cms/storebrands/skechers-logo-blue-background.jpg"
            alt=""
            className={classes.img}
          />
        </div>
        <div className={classes.imageContainer}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/076/746/non_2x/puma-logo-and-art-free-vector.jpg"
            alt=""
            className={classes.img}
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/871/616/original/jordan-logo-brand-symbol-with-name-design-clothes-sportwear-illustration-free-vector.jpg"
            alt=""
            className={classes.img}
          />
          <img
            src="https://i.pinimg.com/736x/70/f7/50/70f7501316bed39f031ced4444d3e9a0.jpg"
            alt=""
            className={classes.img}
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default HomePage;