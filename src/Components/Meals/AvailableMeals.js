import Card from '../UI/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Gucci',
        description: '100% cotton',
        price: 2000,


    },
    {
        id: 'm2',
        name: 'Adidas',
        description: '100% confortable and cotton',
        price: 1000,
    },

    {
        id: 'm3',
        name: 'H&M',
        description: 'comfortable cotton febric',
        price: 2000,

    },

    {
        id: 'm4',
        name: 'Nike',
        description: 'Cotton blend',
        price: 2500,
    }

];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => 
    <MealItem 
    key={meal.id}
    id={meal.id} 
    name={`Tshirt Name: ${meal.name}`} 
    description={meal.description} 
    price={meal.price} 
    
    />
    );
    return (

    <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
);
    };


export default AvailableMeals;

