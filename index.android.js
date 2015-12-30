
var React = require('react-native'),
  DigitInput = require('./src/components/digitInput'),
  styles = require('./src/styles/style');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;
// To Do's
// 1. Make Digital Input change minutes dynamically with touchablehighlights
// 2. have footer turn into a touchable highlight
// 3. Insert Navigator
// 4. Create Timer
// 5. Create Stop State
var coldHeatTimer = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.heading, this.border(2, 'yellow')]}>
          <Text>Heat & Cool Timer</Text>
        </View>

        <View style={[styles.body, this.border(2, 'red')]}>
          <DigitInput label='Heat Time' minutes='5' />
          <DigitInput label='Cool Time' minutes='5' />
          <DigitInput label='Total Time' minutes='10' />
        </View>

        <View style={styles.footer}>
          <Text>Start</Text>
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

AppRegistry.registerComponent('coldHeatTimer', () => coldHeatTimer);
