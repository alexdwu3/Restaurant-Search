import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BusinessDetails = ({business}) => {
    return <View style={styles.container}>
        <Image style = {styles.image} source={{ uri: business.image_url}} />
        <Text style= {styles.restaurantName}> {business.name}</Text>
        <Text style= {styles.starRating}>
            {business.rating} stars, {business.review_count} reviews
        </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 8,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    starRating: {
        marginHorizontal: 5,
        fontSize: 14,
    }
});

export default BusinessDetails;