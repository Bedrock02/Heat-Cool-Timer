var React = require('react-native');
var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 3,
    justifyContent: 'space-around',
  },
  footer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
  	justifyContent: 'center',
  	alignItems: 'center'
  }
})