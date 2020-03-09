import React, { Component } from "react";
import { TourContext } from "../../context";
import StyledHeader from "../../components/StyledHeader";

export default class SingleTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = TourContext;

  render() {
    const { getTour } = this.context;
    const tour = getTour(this.state.slug);

    if (!tour) {
      return (
        <div className="error">
          <h3> no such tour could be found...</h3>
        </div>
      );
    }
    const { bgimage, title, price, vendor, vendor_tour_url } = tour;

    return (
      <>
        <StyledHeader img={bgimage}></StyledHeader>
        <section className="single-tour">
          <div className="single-tour-info">
            <article className="desc">
              <h2>Details</h2>
              <h3>{title}</h3>
              <h3>Price : {price}</h3>
            </article>
            <article className="desc">
              <h2>Vendor Info</h2>
              <h3>Vendor : {vendor}</h3>
              <h3>
                Check at the their site :
                <a href={vendor_tour_url} target="">
                  Click Here
                </a>
              </h3>
            </article>
          </div>
        </section>
      </>
    );
  }
}
