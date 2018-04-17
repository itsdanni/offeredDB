/**
 * Renders list of companies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../store';
/**
 * unconnected component
 */
class Companies extends Component {
  constructor() {
    super()
    // component state will store the search parameters user entered, initial empty
    this.state = {
      param: ''
    }
  }
  componentDidMount() {
    this.props.getCompanies(this.state.param)
  }

  render() {
    const { companies } = this.props;
    return (
      <div>
      {
        (companies.length !== 0) && companies.map((company, i) =>
          <h2 key={i.toString()}>{company.name}</h2>
        )
      }
      </div>
    )

  }
}

/**
 * connect to store
 */
const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: (param) => dispatch(action.getCompanies(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);

