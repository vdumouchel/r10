// import react
import React from 'react'
// packages imports
import LinearGradient from 'react-native-linear-gradient'
import { createStackNavigator } from 'react-navigation'

// screen imports
import AboutScreen from '../screens/AboutScreen'

// const GradientHeader = props => (
// 	<View style={{ backgroundColor: '#eee' }}>
// 		<LinearGradient colors={['red', 'blue']} style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}>
// 			<Header {...props} />
// 		</LinearGradient>
// 	</View>
// )

export const AboutStack = createStackNavigator(
	{
		About: AboutScreen,
	},
	{
		defaultNavigationOptions: {
			title: 'About',
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
			tabBarLabel: 'About!',
		},
	}
)
