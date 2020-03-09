import React, { Component } from "react";
import TourSearch from "../../components/TourSearch";
import { TourConsumer } from "../../context";
import ToursList from "../../components/ToursList";
import ToursFilter from "../../components/ToursFilter";

export default class Tours extends Component {
  render() {
    return (
      <TourConsumer>
        {value => {
          const { tours, sortedTours } = value;

          return (
            <>
              <TourSearch tours={tours} />
              <ToursFilter />
              <div style={{ padding: "50px" }}>
                <ToursList tours={sortedTours} />
              </div>
            </>
          );
        }}
      </TourConsumer>
    );
  }
}
