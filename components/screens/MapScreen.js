// basic React import
import React from 'react'
import MapView from 'react-native-maps'
// react-native imports
import { Image } from 'react-native'

// CSS & Style imports

import r10 from '../../assets/img/map_pin.png'

const MapScreen = props => {
	return (
		<MapView
			style={{ flex: 1 }}
			initialRegion={{
				latitude: 43.643884,
				longitude: -79.397609,
				latitudeDelta: 0.0082,
				longitudeDelta: 0.0021,
			}}
		>
			<MapView.Marker
				coordinate={{ latitude: 43.643884, longitude: -79.397609 }}
				title={'R10'}
				description={'The best tech conference in the Six!'}
			>
				<Image source={r10} />
			</MapView.Marker>
		</MapView>
	)
}

export default MapScreen
