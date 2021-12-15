import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import BusinessDetails from "./BusinessDetails";
import { withNavigation } from "react-navigation"; // add withNavigation call to "export default" line
const Businesses = ({priceHeader, businesses, navigation}) => {
    if (businesses.length === 0){
        return null
    }

    return <View style={styles.container}> 
        <Text style={styles.priceHeader}>{priceHeader}</Text>
        <FlatList
            horizontal // equivalent to horizontal={true}
            showsHorizontalScrollIndicator = "false"
            data={businesses}
            keyExtractor={(business) => business.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("BusinessDetail", { id: item.id })}>
                    <BusinessDetails business={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    priceHeader: {
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: "bold",
    },
    container: {
        marginBottom: 15,
    }
});

export default withNavigation(Businesses);