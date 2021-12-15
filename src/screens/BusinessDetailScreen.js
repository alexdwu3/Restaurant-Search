import React, { useState, useEffect }  from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const BusinessDetailScreen = ({ navigation }) => {
    const [business, setBusiness] = useState(null) // starts at null because data hasn't been fetched yet
    const [errorMsg, setErrorMsg] = useState("")
    const id = navigation.getParam("id")
    
    console.log(business)
    
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
        <Text style={styles.businessName}> {business.name}  ({business.rating} stars)</Text>
        <Text style={styles.text}> Category: {business.categories[0].title}</Text>
        <Text style={styles.text}> Phone: {business.display_phone}</Text>
        <Text style={styles.text}> Location: {business.location.address1}, {business.location.city}, {business.location.country}</Text>


        <Text style={styles.photoHeader}>Yelp User Photos:</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = "false"
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
        width: 150,
        height: 150,
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 8,
    },
    businessName: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: "bold",
        marginVertical: 30,
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
        // fontWeight: "bold",
    },
    photoHeader: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 50,
        marginBottom: 15,
        fontWeight: "bold",
    }
})

export default BusinessDetailScreen;