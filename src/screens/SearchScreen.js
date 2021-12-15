import React, { useState } from 'react'; // useEffect runs arrow function a specified amount of times
import useBusinesses from '../hooks/useBusinesses';
import Businesses from '../components/Businesses';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    const [searchHelper, businesses, errorMessage] = useBusinesses();
    const [term, setTerm] =  useState('');

    // only return results of the given price
    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price;
        })
    }

    return (
        <> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm} // equivalent to (newTerm) => setTerm(newTerm)
                onTermSubmit={() => searchHelper(term)} // equivalent to () => searchHelper ... in both these cases, this syntax does the same thing
            />
            {/* conditionally show errorMessage if it's not the empty string */}
            {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}  
            <ScrollView>
                <Businesses priceHeader='$' businesses={filterBusinessesByPrice('$')} />
                <Businesses priceHeader='$$' businesses={filterBusinessesByPrice('$$')} />
                <Businesses priceHeader='$$$' businesses={filterBusinessesByPrice('$$$')} />
            </ScrollView>
        </>
  );
};

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 20,
    },

});

export default SearchScreen;