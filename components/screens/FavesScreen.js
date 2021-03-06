// basic React import
import React, { useState, useEffect } from 'react'

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
import Icon from 'react-native-vector-icons/AntDesign'
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

const FavesScreen = props => {

	// retrieve data from Async Storage
	let [faves, setFaves] = useState([])

	useEffect(() => {
		_retrieveData()
	}, [])

	_retrieveData = async () => {
		try {
			// let tempFaves = await AsyncStorage.clear()
			let tempFaves = await AsyncStorage.getItem('faves')
			let parsedFaves = JSON.parse(tempFaves) || []
			setFaves(parsedFaves)
			if (parsedFaves !== null) {
				console.log('this is ScheduleScreen parsedFaves: ', parsedFaves)
				return parsedFaves
			} else {
				console.log('this is ScheduleScreen parsedFaves: ', parsedFaves)
			}

		} catch (e) {
			throw e.message
		}
	}

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
							{timeSlot.map((session, index) => (
								<View key={index}>
									{faves.includes(session.id) && <Text style={styles.scheduleTime}>{moment(timeSlot[0].startTime).subtract(3, 'hours').format('LT')}</Text>}
									{faves.includes(session.id) && <TouchableOpacity key={session.id} onPress={async () => {
										await props.navigation.navigate('Session', {
											selectedSessionId: session.id,
										})
									}}>
										<Text style={styles.scheduleTitle}>{session.title}
										</Text>
										<View style={styles.scheduleLocationContainer}>
											<Text style={styles.scheduleLocation}>{session.location}</Text>
											<View style={styles.scheduleHeartContainer}>
												{console.log('this is fav list ', faves)}
												{console.log('this is session.id: ', session.id)}
												{faves.includes(session.id) && <Icon name='heart' size={18} color="#CF392A" style={styles.scheduleHeart} />}
											</View>
										</View>
									</TouchableOpacity>}
								</View>
							))}
						</View>
					)
				} else {
					return (
						<View style={styles.container} key={index}>
							{timeSlot.map((session, index) => (
								<View key={index}>
									{faves.includes(session.id) && <Text style={styles.scheduleTime}>{moment(timeSlot[0].startTime).subtract(3, 'hours').format('LT')}</Text>}
									{faves.includes(session.id) && <TouchableOpacity key={session.id} onPress={async () => {
										await props.navigation.navigate('Session', {
											selectedSessionId: session.id,
										})
									}}>
										<Text style={styles.scheduleTitle}>{session.title}
										</Text>
										<View style={styles.scheduleLocationContainer}>
											<Text style={styles.scheduleLocation}>{session.location}</Text>
											<View style={styles.scheduleHeartContainer}>
												{console.log('this is fav list ', faves)}
												{console.log('this is session.id: ', session.id)}
												{faves.includes(session.id) && <Icon name='heart' size={18} color="#CF392A" style={styles.scheduleHeart} />}
											</View>
										</View>
										<View style={styles.allWidthRuler}></View>
									</TouchableOpacity>}
								</View>
							))}
						</View>
					)
				}
			}
			)}
		</ScrollView>
	)
}

export default FavesScreen
