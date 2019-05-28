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
 query Session($sessionKey: ID!){
   Session(id: $sessionKey ){
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

	// navigation options
	navigation = props
	navigationOptions = navigation => {
		return {
			title: navigation.getParam('title'),
		}
	}
	// retrieve data from Async Storage
	let [sessionKey, setSelectedSession] = useState('')

	useEffect(() => {
		_retrieveData()
	}, [])

	_retrieveData = async () => {
		try {
			var tempKey = await AsyncStorage.getItem('selectedSession')
			setSelectedSession(tempKey)
			if (tempKey !== null) {
				console.log('this is sessionKey: ', tempKey)
				return tempKey
			}
		} catch (e) {
			throw e.message
		}
	}
	console.log("SessionKey: ", sessionKey)
	const { data, error, loading } = useQuery(Session, { variables: { sessionKey } })
	// let dataThisSession = data.thisSession
	// console.log('this is dataThisSession: ', dataThisSession)
	if (loading) {
		return <Text>Loading...</Text>
	}
	if (error) {
		return <Text>Error! {error.message}</Text>
	}

	return (
		<View style={styles.container}>
			<View style={styles.sessionContainer}>
				<View>
					<Text style={styles.sessionLocation}>{data.Session.location}</Text>
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
						console.log('this is dataSpeakerId: ', data.Session.speaker.id),
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
					<TouchableOpacity>
						<LinearGradient colors={['#9963EA', '#8F80DF', '#8797D6']} style={styles.sessionFavesLinearGradient} start={{ x: 0, y: -0.4 }}
							end={{ x: 1.2, y: 1.5 }}>
							<Text style={styles.sessionFavesButton}>
								Add to Faves
              </Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}



export default SessionScreen
