import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => { // onTermChange updates term through useState
  return (
    <View style={styles.background}>
        <MaterialIcons style={styles.icon} name="search" size={35} color="black" />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search" 
            style={styles.text}
            value={term}
            onChangeText={onTermChange} // when text is updated, call onTermChange (prop from SearchScreen)
            onEndEditing={onTermSubmit} // when text is updated, call onTermSubmit (prop from SearchScreen)
        />
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e9e9e9',
        height: 60,
        justifyContent: 'flex-start',
        borderRadius: 5,
        marginHorizontal: 20,
        flexDirection: 'row',
        paddingLeft: 25,
        alignItems: 'center',
    },
    text: {
        color: '#a0a0a0',
        fontSize: 20,
        marginLeft: 5,
        // borderColor: 'black',
        // borderWidth: 1,
        alignSelf: 'stretch',
        flex: 1,
    },
    icon: {
        margin: 5,
    }
});

export default SearchBar;