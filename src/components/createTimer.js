
var React = require('react-native'),
  DigitInput = require('./digitInput'),
  ButtonIcon = require('../common/buttonIcon'),
  { Icon, } = require('react-native-icons');

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
module.exports = React.createClass({
  getInitialState: function() {
    return {
      heat: 3,
      cool: 1,
      total: 15
    };
  },

  render: function() {
    return (

      <View style={[styles.body]}>

        <DigitInput
          label='Heat Time'
          minutes={this.state.heat}
          onAddTime={() => {this.onAddTimePress('heat')}}
          onReduceTime={() => {this.onReduceTime('heat')}}/>

        <DigitInput
          label='Cool Time'
          minutes={this.state.cool}
          onAddTime={() => {this.onAddTimePress('cool')}}
          onReduceTime={() => {this.onReduceTime('cool')}}/>

        <DigitInput
          label='Total Time'
          minutes={this.state.total}
          onAddTime={() => {this.onAddTimePress('total')}}
          onReduceTime={() => {this.onReduceTime('total')}}/>

        <ButtonIcon
          name='fontawesome|plus-square-o'
          color='FF1111'
          onPress={this.onCreateTimer}
          size={50}
          style={styles.createIcon}/>
      </View>
    );
  },

  onCreateTimer: function() {
    this.props.navigator.push({
      name: 'timer',
      total: this.state.total,
      heat: this.state.heat,
      cool: this.state.cool
    });
  },

  validateTimer: function() {

    if (this.state.heat < 0) {
      this.setState({heat: 0});
    }

    if (this.state.cool < 0) {
      this.setState({cool: 0});
    }

    if (this.state.cool + this.state.heat > this.state.total) {
      this.setState({total: this.state.cool + this.state.heat});
    }
  },

  // make sure you are adjusting the total time
  onAddTimePress: function(attribute) {
    var newState = {};

    if (attribute === 'heat') {
      newState.heat = this.state.heat + 1;
    } else if (attribute === 'cool') {
      newState.cool = this.state.cool + 1;
    } else if (attribute === 'total') {
      newState.total = this.state.total + 1;
    } else {
      return;
    }
    this.setState(newState);
    this.validateTimer();
  },

  // make sure you are adjusting the total time
  onReduceTime: function(attribute) {
    var newState = {};
    // Need to make sure that we are not getting negative values
    if (attribute === 'heat') {
      newState.heat = this.state.heat - 1;
      if (newState.heat === 0 && this.state.cool == 0) {
        return;
      }
    } else if (attribute === 'cool') {
      newState.cool = this.state.cool - 1;
      if (newState.cool === 0 && this.state.heat == 0) {
        return;
      }
    } else if (attribute === 'total') {
      newState.total = this.state.total - 1;
    } else {
      return;
    }
    this.setState(newState);
    this.validateTimer();
  }
});

var styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'DED9D9'
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
  },
  createIcon: {
    width: 50,
    height: 50,
  }
});