import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Options.scss';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLevel: {}
    };
  }

  render() {
    return (
      <div className={styles.options}>
        <Link to="/game">Play</Link>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.options;
const connectedOptions = connect(mapStateToProps)(Options);
export default connectedOptions;
