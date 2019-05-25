/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// Basic imports
import React from 'react'

// Package imports
import apolloClient from './apolloClient'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

// CSS & Styles imports
import Icons from 'react-native-vector-icons/FontAwesome5'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from '@ant-design/react-native'

// Stack Imports

// Component imports

// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// 	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// })

// declaring variables

// const AppContainer = createAppContainer(
// 	createBottomTabNavigator(
// 		{
// 			Home: { screen: HomeStack },
// 			Profile: { screen: ProfileStack },
// 			Dogs: { screen: DogStack },
// 		},
// 		{
// 			defaultNavigationOptions: ({ navigation }) => ({
// 				tabBarIcon: ({ tintColor }) => {
// 					const { routeName } = navigation.state
// 					let IconComponent = Icons
// 					let iconName
// 					if (routeName === 'Home') {
// 						iconName = `home`
// 						// Sometimes we want to add badges to some icons.
// 						// You can check the implementation below.
// 						// IconComponent = HomeIconWithBadge
// 					} else if (routeName === 'Profile') {
// 						iconName = `user-circle`
// 					} else if (routeName === 'Dogs') {
// 						iconName = `dog`
// 					}
// 					// } else if (routeName === 'Profile') {
// 					// 	iconName = `user-circle`
// 					// }

// 					// You can return any component that you like here!
// 					return <IconComponent name={iconName} size={25} color={tintColor} />
// 				},
// 			}),
// 			tabBarOptions: {
// 				activeTintColor: 'tomato',
// 				inactiveTintColor: 'gray',
// 			},
// 		}
// 	)
// )

const App = () => {
	return (
		<ApolloProvider client={apolloClient}>
			<ApolloHooksProvider client={apolloClient}>
				<View style={styles.container}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.js</Text>
					{/* <Text style={styles.instructions}>{instructions}</Text> */}
					<Button type='primary'>Hello World!</Button>
				</View>
			</ApolloHooksProvider>
		</ApolloProvider>
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
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})

export default App
