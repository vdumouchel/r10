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
import { ScheduleStack } from './components/stackNavigators/ScheduleStack'
import { FavesStack } from './components/stackNavigators/FavesStack'
import { MapStack } from './components/stackNavigators/MapStack'
import { AboutStack } from './components/stackNavigators/AboutStack'

// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// 	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// })

// declaring variables

const AppContainer = createAppContainer(
	createBottomTabNavigator(
		{
			Schedule: { screen: ScheduleStack },
			Map: { screen: MapStack },
			Faves: { screen: FavesStack },
			About: { screen: AboutStack },
		},
		{
			defaultNavigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					const { routeName } = navigation.state
					let IconComponent = Icons
					let iconName
					if (routeName === 'Schedule') {
						iconName = `calendar`
						// Sometimes we want to add badges to some icons.
						// You can check the implementation below.
						// IconComponent = HomeIconWithBadge
					} else if (routeName === 'Map') {
						iconName = `map`
					} else if (routeName === 'Faves') {
						iconName = `heart`
					} else if (routeName === 'About') {
						iconName = `info-circle`
					}

					// You can return any component that you like here!
					return <IconComponent name={iconName} size={25} color={tintColor} />
				},
			}),
			tabBarOptions: {
				activeTintColor: '#ffffff',
				inactiveTintColor: '#999999',
				style: {
					backgroundColor: '#000000',
					minHeight: '10%',
				},
			},
		}
	)
)

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

// class HomeScreen extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 				<Text>Home!</Text>
// 			</View>
// 		)
// 	}
// }

// class SettingsScreen extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 				<Text>Settings!</Text>
// 			</View>
// 		)
// 	}
// }

// const TabNavigator = createBottomTabNavigator({
// 	Home: HomeScreen,
// 	Settings: SettingsScreen,
// })

// const AppContainer = createAppContainer(TabNavigator)

const App = () => {
	return (
		<ApolloProvider client={apolloClient}>
			<ApolloHooksProvider client={apolloClient}>
				<AppContainer />
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
