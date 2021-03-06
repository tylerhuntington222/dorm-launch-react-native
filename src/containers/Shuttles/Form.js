import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Shuttles/Form';

class ShuttlesFormContainer extends Component {
  constructor() {
    super();
    this.state = { error: null, success: null, loading: false };
  }

  /**
   * On Form Submission
   */
  onFormSubmit = async (data) => {
    const { onFormSubmit } = this.props;

    this.setState({ success: null, error: null, loading: true });

    try {
      const success = await onFormSubmit(data);
      this.setState({ success, error: null, loading: false });
    } catch (error) {
      this.setState({ loading: false, success: null, error: error.message });
    }
  }

  /**
   * Render
   */
  render = () => {
    const { userInput } = this.props;
    const { error, loading, success } = this.state;

    return (
      <Layout
        error={error}
        loading={loading}
        success={success}
        defaultValues={userInput}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

ShuttlesFormContainer.propTypes = {
  userInput: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userInput: state.shuttles.userInput || {},
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: dispatch.shuttles.save,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShuttlesFormContainer);
