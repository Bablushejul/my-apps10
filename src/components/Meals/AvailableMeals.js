import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
//import CartItem from "../Cart/CartItem";
const DUMY_MEALS = [
  {
    id: "m1",
    name: "paracitama",
    description: "uses for cold ",
    price: 11.99,
  },
  {
    id: "m2",
    name: "dolo ",
    description: "a headache",
    price: 12,
  },
  {
    id: "m3",
    name: "combiflame",
    description: "painclear",
    price: 5,
  },
  {
    id: "m4",
    name: "omi",
    description: "acidity",
    price: 9,
  },
];
const AvailableMeals = () => {
  const mealList = DUMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id ={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        form
      </Card>
      <Card>
        <ul>{mealList}</ul>
      </Card>
      
      
    </section>
  );
};

export default AvailableMeals;
