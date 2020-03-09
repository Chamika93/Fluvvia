import React, { Component } from "react";
import _ from "lodash";
import { Search, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const initialState = { loading: false, results: [], value: "" };

class TourSearch extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    const { history } = this.props;
    let navigateLink = "/tour/" + result.id;
    history.push(navigateLink);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ loading: true, value });
    setTimeout(() => {
      // if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        loading: false,
        results: _.filter(this.props.tours, isMatch)
      });
    }, 300);
  };

  render() {
    const { loading, value, results } = this.state;

    return (
      <div className="search">
        <Grid>
          <Grid.Column width={12}>
            <Search
              className="searchT"
              fluid
              loading={loading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(TourSearch);
