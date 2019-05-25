// import react
import React from 'react'
// packages imports
import LinearGradient from 'react-native-linear-gradient'
import { createStackNavigator } from 'react-navigation'

import FavesScreen from '../screens/FavesScreen'
import SessionScreen from '../screens/SessionScreen'

export const FavesStack = createStackNavigator(
	{
		Faves: {
			screen: FavesScreen,
			navigationOptions: {
				headerTitle: 'Faves',
			},
		},
		Session: {
			screen: SessionScreen,
			navigationOptions: {
				headerTitle: 'Session',
			},
		},
	},
	{
		defaultNavigationOptions: {
			initialRouteName: 'Faves',
			headerStyle: {
				color: '#fff',
				backgroundColor: 'transparent',
			},
			headerTintColor: '#fff',
			headerBackground: (
				<LinearGradient
					colors={['#C5414D', '#9963E9']}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 2, y: 1 }}
				/>
			),
			headerTitleStyle: {
				fontWeight: 'bold',
				color: '#fff',
			},
		},
		navigationOptions: {
			tabBarLabel: 'Faves!',
		},
	}
)
