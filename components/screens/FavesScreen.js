// basic React import
import React from 'react'

// react-native imports
import { StyleSheet, View, Text } from 'react-native'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

const FavesScreen = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>This will be the Schedule Screen!</Text>
			<Icon name='calendar' size={30} color='#900' />
			<View style={styles.iconButton}>
				<Icon.Button
					name='sitemap'
					title='Session'
					onPress={() => {
						// try {
						// 	await AsyncStorage.setItem('storage', value1)
						// 	console.log('this is AsyncStorage: ', value1)
						// } catch (e) {
						// 	throw e.message
						// }
						props.navigation.navigate('Session', {
							title: 'Session',
						})
					}}
				>
					Session
				</Icon.Button>
			</View>
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

export default FavesScreen
