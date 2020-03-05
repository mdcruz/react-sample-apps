import React, { Component } from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's go to the beach",
    iconName: 'sun',
    styleContainer: 'summerStyle'
  },
  winter: {
    text: 'Brrr it is chilly',
    iconName: 'snowflake',
    styleContainer: 'winterStyle'
  }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth);
    const { text, iconName, styleContainer } = seasonConfig[season];

    return (
      <div className={`container ${styleContainer}`}>
        <i className={`massive ${iconName} outline icon iconLeft`} />
        <div className="seasonText">{text}</div>
        <i className={`massive ${iconName} outline icon iconRight`} />
      </div>
    );
  }
}

export default SeasonDisplay;
