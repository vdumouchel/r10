import React from 'react'

import { createStackNavigator } from 'react-navigation'

import ScheduleScreen from '../screens/ScheduleScreen'
import SessionScreen from '../screens/SessionScreen'

export const ScheduleStack = createStackNavigator(
	{
		Schedule: ScheduleScreen,
		Session: SessionScreen,
	},
	{
		initialRouteName: 'Schedule',
	}
)
