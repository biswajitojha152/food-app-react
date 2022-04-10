import React from "react";
import HeroCard from "./HeroCard/HeroCard";
import MealItems from "./MealItems/MealItems";
import heroImage from "../../img/meals.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className={classes["img-container"]}>
          <img src={heroImage} alt="A table full of delicious food!" />
        </div>
        <HeroCard />
        <MealItems />
      </main>
    </React.Fragment>
  );
};

export default Home;
