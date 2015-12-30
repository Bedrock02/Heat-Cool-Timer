
var React = require('react-native'),
  CreateTimer = require('./components/createTimer'),
  Timer = require('./components/timer');

var {
  StyleSheet,
  Navigator
} = React;
// To Do's
// 1. Make Digital Input change minutes dynamically with touchablehighlights
// 2. have footer turn into a touchable highlight
// 3. Insert Navigator
// 4. Create Timer
// 5. Create Stop State

var ROUTES = {
  create: CreateTimer,
  timer: Timer
}

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'create'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;} }/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '0A2A51',
  },

});

