// basic React import
import React, { useState, useEffect } from 'react'

//packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import moment from 'moment-timezone'
import AsyncStorage from '@react-native-community/async-storage'

// react-native imports
import { ScrollView, View, Text, Image, Linking } from 'react-native'
import styles from '../../assets/styles/styles'
import _ from 'lodash'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Speaker = gql`
query Speaker($speakerId: ID!){
  Speaker(id: $speakerId ) {
    id
    bio
    image
    name
    session {
      id
      location
      title
      startTime
    }
    url
  }
}
`

const SpeakerScreen = props => {
  const { navigation } = props
  const speakerId = navigation.getParam('speakerId', 'No Speaker Id Provided!')

  const { data, error, loading } = useQuery(Speaker, { variables: { speakerId } })

  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error! {error.message}</Text>
  }
  return (
    <ScrollView style={styles.speakerContainer}>
      <View style={styles.speakerCard}>
        <View>
          <Image source={{ uri: data.Speaker.image }} style={styles.speakerImage}></Image>
        </View>
        <View>
          <Text style={styles.speakerName}>{data.Speaker.name}</Text>
        </View>
        <View>
          <Text style={styles.speakerBio}>{data.Speaker.bio}</Text>
        </View>
        <View style={styles.sessionFavesContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(data.Speaker.url)}>
            <LinearGradient colors={['#9963EA', '#8F80DF', '#8797D6']} style={styles.sessionFavesLinearGradient} start={{ x: 0, y: -0.4 }}
              end={{ x: 1.2, y: 1.5 }}>
              <Text style={styles.sessionFavesButton}>
                Read More on Wikipedia
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SpeakerScreen