var React = require('react-native'),
	styles = require('../styles/style');
var {
	Text,
	View,
	StyleSheet
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View style={[this.border(2, 'blue')]}>
				<View style={styles.label}>
	        <Text>{this.props.label}</Text>
	      </View>

	      <View style={[styles.row]}>
	        <Text>+</Text>
	        <Text>{this.props.minutes}</Text>
	        <Text>-</Text>
	      </View>
			</View>
		);
	},

	border: function(width, color) {
    return {
      borderWidth: width,
      borderColor: color
    };
  }
});
