import { useEffect, useState } from "react";
// useEffect(() => {}) runs the function every time the component is rendered
// useEffect(() => {}, [ ]) runs the function only when the component is first rendered
// useEffect(() => {}, [value]) runs the function only when the component is first rendered, and when 'value' changes
import yelp from "../api/yelp";

export default () => {
    const [businesses, setBusinesses] = useState([]); // businesses will be returned as an array of data (rating, price, phone)
    const [errorMessage, setErrorMessage] = useState('')
    const searchHelper = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: { // axios takes the strings you put in "params" and adds them to the query string
                    limit: 50,
                    term: searchTerm, // just writing term is the same syntax
                    location: 'milwaukee'
                }
            }) // waits for a response for yelp.get to come back, then assigns result to response
        setBusinesses(response.data.businesses)
        } catch(e) {
            setErrorMessage('Something went wrong :(');
            console.log(e)
        }
    };

    useEffect( ()=> {
        searchHelper('')
    }, []);

    return [searchHelper, businesses, errorMessage];
}