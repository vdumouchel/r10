import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	r10: {
		fontSize: 60,
		fontWeight: '800',
		textAlign: 'center',
		margin: 10,
		color: '#CF392A',
	},
	horizontalRule: {
		marginTop: 5,
		marginBottom: 20,
		borderBottomColor: '#E6E6E6',
		borderBottomWidth: 1,
		marginHorizontal: 20,
	},
	marginHeader: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
	},
	h3: {
		fontFamily: 'Montserrat-Regular',
		fontSize: 22,
	},
	h5: {
		fontFamily: 'Montserrat-Regular',
		color: '#9963EA',
		fontSize: 18,
		marginBottom: 20,
		marginHorizontal: 40,
	},
	p: {
		marginHorizontal: 20,
		fontSize: 18,
		flexWrap: 'wrap',
	},
	montserratRegular: {
		fontFamily: 'Montserrat-Regular',
	},
	montserratLight: {
		fontFamily: 'Montserrat-Light',
	},
	accordionIcon: {
		marginLeft: 20,
	},
	accordionH5: {
		marginLeft: 40,
		marginRight: 20,
		fontFamily: 'Montserrat-Regular',
		color: '#9963EA',
		fontSize: 18,
		marginTop: -17,
		marginBottom: 20,
	},
	accordionContent: {
		marginHorizontal: 20,
		flex: 1,
		marginBottom: 20,
		fontSize: 18,
		fontFamily: 'Montserrat-Light',
	},
	copyright: {
		fontFamily: 'Montserrat-Light',
		fontSize: 21,
		marginHorizontal: 20,
	},
	scheduleTime: {
		marginBottom: 5,
		marginHorizontal: 0,
		paddingLeft: 20,
		paddingVertical: 5,
		fontSize: 16,
		fontFamily: 'Montserrat-Regular',
		backgroundColor: '#E6E6E6'
	},
	scheduleTitle: {
		marginVertical: 10,
		marginHorizontal: 20,
		fontSize: 18,
		fontFamily: 'Montserrat-Regular'
	},
	scheduleLocation: {
		marginBottom: 10,
		marginLeft: 20,
		fontSize: 16,
		fontFamily: 'Montserrat-Regular',
		color: '#999999',
		borderBottomColor: '#E6E6E6',
		borderBottomWidth: 1,
	},
	allWidthRuler: {
		paddingTop: 5,
		borderBottomColor: '#E6E6E6',
		borderBottomWidth: 1,
	},
	sessionContainer: {
		marginHorizontal: 20,
	},
	sessionLocation: {
		marginTop: 25,
		fontFamily: 'Montserrat-Regular',
		color: '#999999',
		fontSize: 18,
	},
	sessionTitle: {
		marginTop: 20,
		fontFamily: 'Montserrat-Regular',
		fontWeight: '700',
		fontSize: 30,
	},
	sessionStartTime: {
		marginTop: 20,
		fontFamily: 'Montserrat-Regular',
		color: '#CF392A',
		fontSize: 18,
	},
	sessionDescription: {
		marginTop: 20,
		fontFamily: 'Montserrat-Light',
		fontSize: 21,
		lineHeight: 30,
	},
	sessionPresentedBy: {
		marginTop: 30,
		color: '#999999',
		fontFamily: 'Montserrat-Regular',
		fontSize: 18,
	},
	sessionSpeaker: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	sessionSpeakerImage: {
		height: 70,
		width: 70,
		borderRadius: 70 / 2,
		marginRight: 20,
	},
	sessionSpeakerText: {
		fontFamily: 'Montserrat-Regular',
		fontWeight: '500',
		fontSize: 18,
	},
	sessionHorizontalRuler: {
		marginTop: 25,
		borderBottomColor: '#E6E6E6',
		borderBottomWidth: 1,
	},
	sessionFavesContainer: {
		backgroundColor: 'transparent',
		alignItems: 'center',
	},
	sessionFavesLinearGradient: {
		marginTop: 30,
		paddingLeft: 15,
		maxWidth: 230,
		height: 50,
		paddingRight: 15,
		borderRadius: 50,
		justifyContent: 'center',
	},
	sessionFavesButton: {
		fontSize: 20,
		fontFamily: 'Montserrat-Regular',
		textAlign: 'center',
		color: '#ffffff',
		marginHorizontal: 10,
	},
})

export default styles
