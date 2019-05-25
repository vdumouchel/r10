import React from 'react'

import { createStackNavigator } from 'react-navigation'

import MapScreen from '../screens/MapScreen'

export const MapStack = createStackNavigator(
	{
		Map: MapScreen,
	},
	{
		initialRouteName: 'Map',
	}
)
