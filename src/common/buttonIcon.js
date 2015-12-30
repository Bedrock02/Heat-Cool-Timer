var React = require('react-native'),
	{ Icon, } = require('react-native-icons');

var {
	Text,
	TouchableHighlight,
	StyleSheet
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				style={[styles.button]}
				underlayColor='none'
				onPress={this.props.onPress}>

				<Icon
					name={this.props.name}
					size={this.props.size}
					color={this.props.color}
					style={[styles.icon, this.dimensions(this.props.size)]}/>

			</TouchableHighlight>
		);
	},

	dimensions: function(size) {
		return {
			height: size,
			width: size
		};
	}
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
});