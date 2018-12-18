import React, { Component } from 'react';
import moment from 'moment';
import CountdownTimerBlock from './CountdownTimerBlock'

const secondsInAminute = 60;
const secondsInAnHour = secondsInAminute * 60;
const secondsInADay =  secondsInAnHour * 24;

class CountdownTimer extends Component {
    state = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    calculateTimer = () => {
        const secondsToDate = this.props.date.diff(moment(), "seconds");

        if(secondsToDate > 0) {
            const missingTimes = this.calculateMissings(secondsToDate);

            this.setState({ ...missingTimes });
        } else {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    }

    calculateMissings = (secondsToDate) => {
        let remaining = secondsToDate;

        // Calculate in order: days, hours, minutes
        // and calculate remaining seconds for the following calculation
        const missingDays = Math.floor(remaining / secondsInADay);
        remaining %= secondsInADay;

        const missingHours = Math.floor(remaining / secondsInAnHour);
        remaining %= secondsInAnHour;

        const missingMinutes = Math.floor(remaining / secondsInAminute);
        remaining %= secondsInAminute;

        return {
            days: missingDays,
            hours: missingHours,
            minutes: missingMinutes,
            seconds: remaining
        };
    }

    componentDidMount() {
        // Update the timer every second
        this.interval = setInterval(this.calculateTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state

        return (
            <div className="Countdown-timer">
                <CountdownTimerBlock number={days} label="Days" />
                <CountdownTimerBlock number={hours} label="Hours" />
                <CountdownTimerBlock number={minutes} label="Minutes" />
                <CountdownTimerBlock number={seconds} label="Seconds" />
            </div>
        );
    }
}

export default CountdownTimer;