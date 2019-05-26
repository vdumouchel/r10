import React from 'react'
import { View, Text } from 'react-native'

const defaultText = props => {
	style = [{ fontFamily: 'Montserrat-Light', fontSize: 10 }]
	if (props.style) {
		if (Array.isArray(props.style)) {
			style = style.concat(props.style)
		} else {
			style.push(props.style)
		}
	}

	return (
		<View>
			<Text {...props} style={style}>
				{props.children}
			</Text>
		</View>
	)
}

export default defaultText
