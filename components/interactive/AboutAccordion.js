import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import styles from '../../assets/styles/styles'

import Icons from 'react-native-vector-icons/FontAwesome5'

const SECTIONS = [
	{
		title: 'Purpose',
		content:
			'R10 believes our community should be truly open for everyone. As such, we are committed to providinga friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion and preferred ice cream flavour.',
	},
	{
		title: 'Open Source Citizenship',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Expected Behaviour',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Unacceptable Behaviour',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Consequences of Unacceptable Behaviour',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'What To Do If You Witness Or Are Subject To Unacceptable Behaviour',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Scope',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Contact Information',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'License and Attribution',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
]

export default class AboutAccordion extends Component {
	state = {
		activeSections: [],
	}

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
				<Text style={styles.accordionContent}>{section.content}</Text>
			</View>
		)
	}

	_updateSections = activeSections => {
		this.setState({ activeSections })
	}

	render() {
		return (
			<Accordion
				sections={SECTIONS}
				activeSections={this.state.activeSections}
				renderHeader={this._renderHeader}
				renderContent={this._renderContent}
				onChange={this._updateSections}
				underlayColor={'#fff'}
			/>
		)
	}
}
