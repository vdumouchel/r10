import React from 'react'

import { createStackNavigator } from 'react-navigation'

import AboutScreen from '../screens/AboutScreen'

export const AboutStack = createStackNavigator(
	{
		About: AboutScreen,
	},
	{
		initialRouteName: 'About',
	}
)
