// basic React import
import React, { useState, useEffect } from 'react'

//packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import moment from 'moment-timezone'
import AsyncStorage from '@react-native-community/async-storage'

// react-native imports
import { ScrollView, View, Text } from 'react-native'
import styles from '../../assets/styles/styles'
import _ from 'lodash'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SessionScreen = props => {

	// navigation options
	navigation = props
	navigationOptions = navigation => {
		return {
			title: navigation.getParam('title'),
		}
	}

	// declare variable
	let [sessionKey, setSelectedSession] = useState('')

	useEffect(() => {
		_retrieveData()
	}, [])

	_retrieveData = async defaultValue => {
		try {
			sessionKey = await AsyncStorage.getItem('selectedSession')
			setSelectedSession(sessionKey)
			if (sessionKey !== null) {
				console.log('this is selectSession: ', sessionKey)
				return sessionKey
			}
		} catch (e) {
			throw e.message
		}
	}



	return (
		<View style={styles.container}>
			<Text>This is Session Screen!</Text>
			<Text>{sessionKey}</Text>
			<Icon name='dog' size={30} color='#900' />
		</View>
	)
}



export default SessionScreen
