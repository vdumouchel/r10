import React, { useState } from 'react'

// packages imports
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

// CSS & Styles imports
import { View, Text } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import styles from '../../assets/styles/styles'

import Icons from 'react-native-vector-icons/FontAwesome5'

const allConducts = gql`
	{
		allConducts {
			id
			title
			description
			order
		}
	}
`

const AboutAccordion = props => {
	const [section, setSection] = useState([])

	_renderHeader = (section, index, isActive) => {
		return (
			<View>
				<Text style={styles.accordionIcon}>
					{!isActive && <Icons name='plus' size={12} color='#9963EA' style={{ justifyContent: 'center' }} />}
					{isActive && <Icons name='minus' size={12} color='#9963EA' style={{ justifyContent: 'center' }} />}
				</Text>
				<Text style={styles.accordionH5}>{section.title}</Text>
			</View>
		)
	}

	_renderContent = section => {
		return (
			<View style={styles.content}>
				<Text style={styles.accordionContent}>{section.description}</Text>
			</View>
		)
	}

	_updateSections = activeSections => {
		setSection(activeSections)
	}

	const { data, error, loading } = useQuery(allConducts)
	if (loading) {
		return <Text>Loading...</Text>
	}
	if (error) {
		return <Text>Error! {error.message}</Text>
	}
	return (
		<Accordion
			sections={data.allConducts}
			activeSections={section}
			renderHeader={_renderHeader}
			renderContent={_renderContent}
			onChange={_updateSections}
			underlayColor={'#fff'}
		/>
	)
}

export default AboutAccordion
