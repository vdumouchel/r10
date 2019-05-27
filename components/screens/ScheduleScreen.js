// basic React import
import React, { useState } from 'react'

//packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

// react-native imports
import { StyleSheet, View, Text } from 'react-native'
import styles from '../../assets/styles/styles'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

const allSessions = gql`
	{
		allSessions {
			id
			title
			description
			location
			speaker
			startTime
		}
	}
`

const ScheduleScreen = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>This will be the Schedule Screen!</Text>
			<Icon name='calendar' size={30} color='#900' />
			<View style={styles.iconButton}>
				<Icon.Button
					name='sitemap'
					title='Session'
					onPress={() => {
						// try {
						// 	await AsyncStorage.setItem('storage', value1)
						// 	console.log('this is AsyncStorage: ', value1)
						// } catch (e) {
						// 	throw e.message
						// }
						props.navigation.navigate('Session', {
							title: 'Session',
						})
					}}
				>
					Session
				</Icon.Button>
			</View>
		</View>
	)
}

export default ScheduleScreen
