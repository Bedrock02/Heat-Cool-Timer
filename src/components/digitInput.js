var React = require('react-native'),
	ButtonIcon = require('../common/buttonIcon');

var {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View>
				<View style={styles.label}>
	        <Text style={styles.titleText}>{this.props.label}</Text>
	      </View>

	      <View style={[styles.row]}>

	      	<ButtonIcon
	      		name='fontawesome|angle-left'
	      		color='FF1111'
	      		onPress={this.props.onReduceTime}
	      		size={40}
            underlayOption={'none'}/>

	        <Text style={styles.minuteText}>{this.props.minutes} min.</Text>

				  <ButtonIcon
      			name='fontawesome|angle-right'
      			color='FF1111'
      			onPress={this.props.onAddTime}
      			size={40}
            underlayOption={'none'}/>

	      </View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  label: {
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  titleText: {
  	fontSize: 24,
  	color: 'DED9D9'
  },
  minuteText: {
  	fontSize: 22,
  	color: 'FF1111'
  },
  plus: {
  	height: 50,
  	width: 50,
  },
  minus: {
  	height: 50,
  	width: 50,
  }
});