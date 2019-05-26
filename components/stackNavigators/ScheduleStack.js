// import react
import React from 'react'
// packages imports
import LinearGradient from 'react-native-linear-gradient'
import { createStackNavigator } from 'react-navigation'

import ScheduleScreen from '../screens/ScheduleScreen'
import SessionScreen from '../screens/SessionScreen'

export const ScheduleStack = createStackNavigator(
	{
		Schedule: {
			screen: ScheduleScreen,
			navigationOptions: {
				headerTitle: 'Schedule',
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
			initialRouteName: 'Schedule',
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
			tabBarLabel: 'Schedule',
		},
	}
)
