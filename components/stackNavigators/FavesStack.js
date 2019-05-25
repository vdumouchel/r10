import React from 'react'

import { createStackNavigator } from 'react-navigation'

import FavesScreen from '../screens/FavesScreen'
import SessionScreen from '../screens/SessionScreen'

export const FavesStack = createStackNavigator(
	{
		Faves: FavesScreen,
		Session: SessionScreen,
	},
	{
		initialRouteName: 'Faves',
	}
)
