// basic React import
import React, { useState, useEffect } from 'react'

//packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import moment from 'moment-timezone'
import AsyncStorage from '@react-native-community/async-storage'

// react-native imports
import { ScrollView, View, Text, Image } from 'react-native'
import styles from '../../assets/styles/styles'
import _ from 'lodash'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


const Session = gql`
 query Session($selectedSessionId: ID!){
   Session(id: $selectedSessionId ){
    id
    title
    description
    location
    speaker {
      id
      name
      image
      session{
        id
        location
        startTime
        title
      }
    }
    startTime
  }
}
`;



const SessionScreen = props => {



	const { navigation } = props
	const selectedSessionId = navigation.getParam('selectedSessionId', 'No session Id Provided!')

	// retrieve data from Async Storage
	let [faves, setFaves] = useState('')

	useEffect(() => {
		_retrieveData()
	}, [])

	_retrieveData = async () => {
		try {
			let tempFaves = await AsyncStorage.getItem('faves')
			let parsedFaves = JSON.parse(tempFaves)
			setFaves(parsedFaves)
			if (parsedFaves !== null) {
				console.log('this is SessionScreen parsedFaves: ', parsedFaves)
				return parsedFaves
			} else {
				console.log('this is SessionScreen parsedFaves: ', parsedFaves)
			}
		} catch (e) {
			throw e.message
		}
	}

	const { data, error, loading } = useQuery(Session, { variables: { selectedSessionId } })

	if (loading) {
		return <Text>Loading...</Text>
	}
	if (error) {
		return <Text>Error! {error.message}</Text>
	}

	return (
		<View style={styles.container}>
			<View style={styles.sessionContainer}>
				<View style={styles.sessionLocationContainer}>
					<Text style={styles.sessionLocation}>{data.Session.location}</Text>
					<View style={styles.sessionHeartContainer}>
						{console.log('this is fav list ', faves)}
						{console.log('this is session.id: ', data.Session.id)}
						{faves.includes(data.Session.id) && <Icon name='heart' size={18} color="#CF392A" style={styles.sessionHeart} />}
					</View>
				</View>
				<View>
					<Text style={styles.sessionTitle}>{data.Session.title}</Text>
				</View>
				<View>
					<Text style={styles.sessionStartTime}>{moment(data.Session.startTime).subtract(3, 'hours').format('LT')}</Text>
				</View>
				<View>
					<Text style={styles.sessionDescription}>{data.Session.description}</Text>
				</View>
				<View>
					<Text style={styles.sessionPresentedBy}>Presented by:</Text>
				</View>
				<View>
					<TouchableOpacity style={styles.sessionSpeaker} onPress={() => {
						props.navigation.navigate('Speaker', {
							speakerId: data.Session.speaker.id,
						})
					}}>
						<Image source={{ uri: data.Session.speaker.image }} style={styles.sessionSpeakerImage}></Image>
						<Text style={styles.sessionSpeakerText}>{data.Session.speaker.name}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.sessionHorizontalRuler} />
				<View style={styles.sessionFavesContainer}>
					{faves.includes(data.Session.id) ?
						// if TRUE , then TouchableOpacity provides a Remove from Faves Button
						<TouchableOpacity onPress={async () => {
							try {
								let faves = await AsyncStorage.getItem('faves')
								if (faves != null) {
									try {
										let parsedFaves = JSON.parse(faves)
										await parsedFaves.splice(parsedFaves.indexOf(data.Session.id), 1)
										await AsyncStorage.setItem('faves', JSON.stringify(parsedFaves))
										console.log('this is AsyncStorage AddToFaves data.Session.id: ', JSON.stringify(parsedFaves))
									} catch (e) {
										throw e.message
									}
								}
							} catch (e) {
								throw e.message
							}
						}} >
							<LinearGradient colors={['#9963EA', '#8F80DF', '#8797D6']} style={styles.sessionFavesLinearGradient} start={{ x: 0, y: -0.4 }}
								end={{ x: 1.2, y: 1.5 }}>
								<Text style={styles.sessionFavesButton}>
									Remove from Faves
										</Text>
							</LinearGradient>
						</TouchableOpacity>
						// condition
						:
						// if FALSE, TouchableOpacity provides a Add to Faves Button
						<TouchableOpacity onPress={async () => {
							try {
								let faves = await AsyncStorage.getItem('faves')
								if (faves != null) {
									try {
										let parsedFaves = JSON.parse(faves)
										await parsedFaves.push(data.Session.id)
										await AsyncStorage.setItem('faves', JSON.stringify(parsedFaves))
										console.log('this is AsyncStorage AddToFaves data.Session.id: ', JSON.stringify(parsedFaves))
									} catch (e) {
										throw e.message
									}
								} else {
									try {
										let newFavesArray = []
										await newFavesArray.push(data.Session.id)
										await AsyncStorage.setItem('faves', JSON.stringify(newFavesArray))
										console.log('this is AsyncStorage newFavesArray: ', JSON.stringify(newFavesArray))
									} catch (e) {
										throw e.message
									}
								}
							} catch (e) {
								throw e.message
							}
						}} >
							<LinearGradient colors={['#9963EA', '#8F80DF', '#8797D6']} style={styles.sessionFavesLinearGradient} start={{ x: 0, y: -0.4 }}
								end={{ x: 1.2, y: 1.5 }}>
								<Text style={styles.sessionFavesButton}>
									Add to Faves
		          </Text>
							</LinearGradient>
						</TouchableOpacity>
					}
				</View>
			</View>
		</View>
	)
}



export default SessionScreen
