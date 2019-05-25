// basic React import
import React from 'react'

// react-native imports
import { StyleSheet, View, Text } from 'react-native'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

const FavesScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>This will be the Schedule Screen!</Text>
			<Icon name='calendar' size={30} color='#900' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})

export default FavesScreen
