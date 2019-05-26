// basic React import
import React from 'react'

// react-native imports
import { View } from 'react-native'
import styles from '../../assets/styles/styles'
import Text from '../../assets/styles/defaultText'

// CSS & Style imports
import Icon from 'react-native-vector-icons/FontAwesome5'

// component imports
import AboutAccordion from '../interactive/AboutAccordion'

const AboutScreen = props => {
	navigationOptions = {
		title: 'About',
		/* No more header config here! */
	}
	return (
		<View style={styles.container}>
			<Text style={styles.r10}>&#60;R10&#62;</Text>
			<View style={styles.horizontalRule} />
			<View>
				<Text style={styles.p}>R10 is a conference that focuses on just about any topics related to dev.</Text>
			</View>
			<View style={styles.marginHeader}>
				<Text style={styles.h3}>Dates & Venues</Text>
			</View>
			<View>
				<Text style={styles.p}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
			</View>
			<View style={styles.marginHeader}>
				<Text style={styles.h3}>Code of Conduct</Text>
			</View>
			<View>
				<AboutAccordion />
			</View>
			{/* <Icon name='info-circle' size={30} color='#900' /> */}
		</View>
	)
}

export default AboutScreen
