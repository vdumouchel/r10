// import react
import React from 'react'
// packages imports
import { Button, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { createStackNavigator } from 'react-navigation'

// CSS & Styles
import styles from '../../assets/styles/styles'
import Icon from 'react-native-vector-icons/AntDesign'

//Component imports
import FavesScreen from '../screens/FavesScreen'
import SessionScreen from '../screens/SessionScreen'
import SpeakerScreen from '../screens/SpeakerScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
		Speaker: {
			screen: SpeakerScreen,
			navigationOptions: ({ navigate, navigation }) => ({
				headerLeft: (
					<TouchableOpacity
						onPress={() => navigation.navigate('Session')}
					>
						<Icon name='close' style={styles.closeIcon}></Icon>
					</TouchableOpacity>
				),
				headerTitle: 'About the Speaker',
				headerStyle: {
					color: '#fff',
					backgroundColor: '#000',
				},
				headerTitleStyle: {
					fontFamily: 'Montserrat-Light'
				},
				headerTintColor: '#fff',
				headerBackground: (
					<LinearGradient
						colors={['#000', '#000']}
						style={{ flex: 1 }}
						start={{ x: 0, y: 0 }}
						end={{ x: 2, y: 1 }}
					/>
				),
			})
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
				fontFamily: 'Montserrat-Light',
				color: '#fff',
			},
		},
		navigationOptions: {
			tabBarLabel: 'Faves',
		},
	}
)
