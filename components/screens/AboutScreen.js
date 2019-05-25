// basic React import
import React from 'react'

// react-native imports
import { StyleSheet, View, Text } from 'react-native'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

const AboutScreen = props => {
	navigationOptions = {
		title: 'About',
		/* No more header config here! */
	}
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>This will be the About screen!</Text>
			<Icon name='info-circle' size={30} color='#900' />
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

export default AboutScreen
