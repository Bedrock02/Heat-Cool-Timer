var React = require('react-native'),
	ButtonIcon = require('../common/buttonIcon'),
	moment = require('moment'),
	{ Icon, } = require('react-native-icons');

var {
	Text,
	View,
	StyleSheet
} = React;

var timerId = null;

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentTotalTime: moment(this.props.route.total, 'minutes').format('m:ss'),
			heatTime: moment(this.props.route.heat, 'minutes').format('m:ss'),
			coolTime: moment(this.props.route.cool, 'minutes').format('m:ss'),
			playing: false,
			session: 'Heat',
			finished: false
		}
	},
	render: function() {
		var heatStyle = this.isHeat() ? styles.heat : {};
		return (
			<View style={[styles.body, heatStyle]}>
				<View style={styles.temp}>
					<Text style={styles.label}>{this.state.session}</Text>
					<Text style={styles.time}>{this.getSessionTime()}</Text>
				</View>

				<View style={styles.temp}>
					{this.isHeat() ? this.getHeatIcon() : this.getCoolIcon()}
				</View>

				<View style={styles.temp}>
					<Text style={styles.label}>Time Left</Text>
					<Text style={styles.time}>{this.state.currentTotalTime}</Text>
				</View>

				<View style={styles.footer}>

					<ButtonIcon
						name='fontawesome|chevron-left'
						color='DED9D9'
						onPress={this.onBackPressed}
						size={30}/>

					{this.state.playing ? this.getPauseIcon() : this.getPlayIcon()}

					<ButtonIcon
						name='fontawesome|undo'
						color='DED9D9'
						onPress={this.onUndoPressed}
						size={30}/>
				</View>
			</View>
		);
	},

	isHeat: function() {
		return this.state.session === 'Heat';
	},

	getSessionTime: function() {
		if (this.isHeat()) {
			return this.state.heatTime;
		}
		return this.state.coolTime;
	},

	getCoolIcon: function() {
		return(
			<Icon
				name='ion|waterdrop'
				size={70}
				color='DED9D9'
				style={styles.icon}/>
		);
	},

	getHeatIcon: function() {
		return (
			<Icon
				name='ion|fireball'
				size={70}
				color='DED9D9'
				style={styles.icon}/>
		);
	},

	getPlayIcon: function() {
		return (
			<ButtonIcon
				name='fontawesome|play'
				color='DED9D9'
				onPress={this.onStartPressed}
				size={30}/>
		);
	},

	getPauseIcon: function() {
		return (
			<ButtonIcon
				name='fontawesome|pause'
				color='DED9D9'
				onPress={this.onPausePressed}
				size={30}/>
		);
	},

	onBackPressed: function() {
		this.onPausePressed();
		this.props.navigator.pop();
	},

	onPausePressed: function() {
		clearInterval(timerId);
		timerId = null;
		this.setState({playing: !this.state.playing});
	},

	onStartPressed: function() {
		this.setState({playing: !this.state.playing});

		timerId = setInterval(() => {
			this.generalCountDown();
			this.sessionCountDown();
		}, 1000);
	},

	sessionCountDown: function() {
		var timeNow,
			newTime,
			nextSession,
			nextTime;

		if (this.isHeat()) {
			timeNow = moment(this.state.heatTime, 'm:ss');
			newTime = timeNow.subtract({"seconds": "1"});
			this.setState({heatTime: this.formatTime(newTime)});
		} else {
			timeNow = moment(this.state.coolTime, 'm:ss');
			newTime = timeNow.subtract({"seconds": "1"});
			this.setState({coolTime: this.formatTime(newTime)});
		}

		if (newTime.minutes() === 0 && newTime.seconds() === 0) {
			this.nextSession();
		}

	},

	nextSession: function() {
		nextSession = this.isHeat() ? "Cool" : "Heat";
		this.resetSessionTimers();
		this.setState({session: nextSession});
		if (this.getSessionTime() === "0:00") {
			this.nextSession();
		}
	},

	resetSessionTimers: function() {
		this.setState({
			heatTime: moment(this.props.route.heat, 'minutes').format('m:ss'),
			coolTime: moment(this.props.route.cool, 'minutes').format('m:ss')
		});
	},

	onUndoPressed: function() {
		clearInterval(timerId);
		this.setState({
			currentTotalTime: moment(this.props.route.total, 'minutes').format('m:ss'),
			heatTime: moment(this.props.route.heat, 'minutes').format('m:ss'),
			coolTime: moment(this.props.route.cool, 'minutes').format('m:ss'),
			playing: !this.state.playing
		});
	},

	generalCountDown: function() {
		var timeNow = moment(this.state.currentTotalTime, "m:ss");
				newTime = timeNow.subtract({"seconds": "1"});

		if (newTime.seconds() === 0 && newTime.minutes() === 0) {
			this.onDone();
		} else {
			this.setState({currentTotalTime: this.formatTime(newTime)});
		}
	},

	onDone: function() {
		clearInterval(timerId);
		timerId = null;
		this.setState({playing: !this.state.playing, finished: true, currentTotalTime: "00:00"});
	},

	formatTime: function(momentTime) {
		if (momentTime.seconds() < 10) {
			return `${momentTime.minutes()}:0${momentTime.seconds()}`
		}
		return `${momentTime.minutes()}:${momentTime.seconds()}`
	}
});

var styles= StyleSheet.create({
	body: {
		flex: 1
	},
	label: {
		color: 'DED9D9',
		fontSize: 30
	},
	time: {
		color: 'DED9D9',
		fontSize: 70
	},
	temp: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	heat: {
		backgroundColor: 'red'
	},
	icon: {
		height: 70,
		width: 70,
	}
});