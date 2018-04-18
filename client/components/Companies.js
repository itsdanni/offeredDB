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
        <div key={i.toString()} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{company.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">A company</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={company.website} className="card-link">website</a>
            <a href={company.builtinnyc} className="card-link">BuiltInNYC</a>
          </div>
        </div>
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

