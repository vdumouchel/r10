// basic React import
import React from 'react'

// react-native imports
import { StyleSheet, View, Text } from 'react-native'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

const SessionScreen = props => {
	navigation = props
	navigationOptions = navigation => {
		return {
			title: navigation.getParam('title'),
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>This will be the Session Screen!</Text>
			<Icon name='dog' size={30} color='#900' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	iconButton: {
		marginTop: 30,
	},
})

export default SessionScreen
