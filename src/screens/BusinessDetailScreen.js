import React, { useState, useEffect }  from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const BusinessDetailScreen = ({ navigation }) => {
    const [business, setBusiness] = useState(null) // starts at null because data hasn't been fetched yet
    const [errorMsg, setErrorMsg] = useState("")
    const id = navigation.getParam("id")
    
    
    const getBusiness = async (id) => {
        try{
            const response = await yelp.get(`/${id}`)
            setBusiness(response.data)
        }
        catch(e) {
            setErrorMsg("something's up...")
        }
    }

    // here, useEffect is calling getBusiness once, when the component first loads
    useEffect(() => {
        getBusiness(id)
    }, [])

    if (!business) { // don't show anything on the screen until yelp data loads 
        return null
    }

    return <View>
        <Text> {business.name} </Text>
        <FlatList
            horizontal
            data = {business.photos}
            keyExtractor= {photo => photo} // photo is a unique string, so you can just return it as the key
            renderItem = {({ item }) => {
                return <Image style = {styles.image} source = {{uri: item}}/>
            }}
        />
        <Text> {errorMsg} </Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
})

export default BusinessDetailScreen;