var React = require('react-native');

var {
	Text,
	TouchableHighlight,
	StyleSheet
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				style={styles.button}
				underlayColor={'gray'}
				onPress={this.props.onPress}>
				<Text style={styles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
    borderColor: 'black',
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});