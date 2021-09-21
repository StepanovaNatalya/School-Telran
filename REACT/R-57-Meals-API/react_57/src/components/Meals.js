import Loader from "./Loader"
import React, { useState, useEffect } from "react"
import Error from "./Error"
import Meal from "./Meal"
import FoodApi from "../data"

const Meals = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null)

    const category = match.params.category

    useEffect(() => {
            setLoading(true);
            setError(null)
            FoodApi.getMealsByCategory(category)
                .then(data => {
                    setTimeout(() => {
                        if(data.meals){
                        setLoading(false)
                        setMeals(data.meals)
                        }else{
                            setError('no such category')
                            setLoading(false)
                        }
                        
                    }, 1000)})
                .catch((error) => {
                    setLoading(false);
                    setError(error.message)
                })
    },[category])



    const renderMeals = () => {
        return loading && !error ? <Loader /> : error ? <Error message={error} /> :
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
    }

    /* componentDidMount(){
        this.componentChangeCountry(this.props.country)
    }

    componentDidUpdate(prevProps){
        if (prevProps.country !== this.props.country)
            this.componentChangeCountry(this.props.country)

    } */

        return (
            <div className ='container'>
                <h2 className = 'text-primary text-center my-5'>{category}</h2>
            <div className='row'>
                {renderMeals()}
            </div>
            </div>
        )
  
}

export default Meals