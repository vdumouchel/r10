// basic React import
import React, { useState } from 'react'

//packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import moment from 'moment-timezone'
import AsyncStorage from '@react-native-community/async-storage';

// react-native imports
import { ScrollView, View, Text } from 'react-native'
import styles from '../../assets/styles/styles'
import _ from 'lodash'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const allSessions = gql`
	{
		allSessions {
			id
			title
			description
			location
			startTime
		}
	}
`

const ScheduleScreen = props => {
	// const [session, setSession] = useState([])

	// _renderSessions = likedSession => {
	// 	setSession(likedSession)
	// }

	// _renderHeader = (session, index, isActive) => {
	// 	return (
	// 		<View>
	// 			<Text>{session.startTime}</Text>
	// 		</View>
	// 	)
	// }

	const { data, error, loading } = useQuery(allSessions)
	let dataAllSessions = data.allSessions
	let groups = _.groupBy(dataAllSessions, 'startTime')
	let newArrayofGroups = (Object.values(groups))



	if (loading) {
		return <Text>Loading...</Text>
	}
	if (error) {
		return <Text>Error! {error.message}</Text>
	}
	return (
		<ScrollView>
			{newArrayofGroups.map((timeSlot, index) => {
				if (timeSlot.length === 1) {
					return (
						<View style={styles.container} key={index}>
							<Text style={styles.scheduleTime}>{moment(timeSlot[0].startTime).subtract(3, 'hours').format('LT')}</Text>
							{timeSlot.map(session => (
								<TouchableOpacity key={session.id} onPress={async () => {
									try {
										AsyncStorage.setItem('selectedSession', session.id)
										console.log('this is AsyncStorage SelectedSession: ', session.id)

									} catch (e) {
										throw e.message
									}
									props.navigation.navigate('Session', {
										title: 'Session',
									})
								}}>
									<Text style={styles.scheduleTitle}>{session.title}</Text>
									<Text style={styles.scheduleLocation}>{session.location}</Text>
								</TouchableOpacity>
							))}
						</View>
					)
				} else {

					return (
						<View style={styles.container} key={index}>
							<Text style={styles.scheduleTime}>{moment(timeSlot[0].startTime).subtract(3, 'hours').format('LT')}</Text>
							{timeSlot.map(session => (
								<TouchableOpacity key={session.id} onPress={async () => {
									try {
										AsyncStorage.setItem('selectedSession', session.id)
										console.log('this is AsyncStorage: ', session.id)

									} catch (e) {
										throw e.message
									}
									props.navigation.navigate('Session', {
										title: 'Session',
									})
								}} >
									<Text style={styles.scheduleTitle}>{session.title}</Text>
									<Text style={styles.scheduleLocation}>{session.location}</Text>
									<View style={styles.allWidthRuler}></View>
								</TouchableOpacity>
							))}
						</View>
					)
				}
			})}
		</ScrollView>
	)
}

export default ScheduleScreen
