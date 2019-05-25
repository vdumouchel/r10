// import react
import React from 'react'
// packages imports
import LinearGradient from 'react-native-linear-gradient'
import { createStackNavigator } from 'react-navigation'

import MapScreen from '../screens/MapScreen'

export const MapStack = createStackNavigator(
	{
		Map: MapScreen,
	},
	{
		defaultNavigationOptions: {
			title: 'Map',
			headerTintColor: '#fff',
			headerBackground: (
				<LinearGradient
					colors={['#C5414D', '#9963E9']}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 2, y: 1 }}
				/>
			),
			headerTitleStyle: { color: '#fff' },
		},
		navigationOptions: {
			tabBarLabel: 'Map!',
		},
	}
)
