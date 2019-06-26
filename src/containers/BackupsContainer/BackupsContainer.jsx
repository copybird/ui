import React from 'react';
import { connect } from 'react-redux';
import { fetchBackups } from '../../actions'
import { withRouter } from 'react-router-dom';
import Backups from '../../components/Backups/Backups';


class BackupsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBackups()
  }

  createBackup = () => {
    this.props.history.push('/new');
  }

  render() {
    return (<Backups createBackup={this.createBackup} {...this.props}/>);
  }
}

const mapStateToProps = (state) => {
  return {
    backups: state.backups
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBackups: () => dispatch(fetchBackups())
  };
};

BackupsContainer.propTypes = {

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BackupsContainer));