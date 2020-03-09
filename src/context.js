import React, { Component } from "react";

const TourContext = React.createContext();

class TourProvider extends Component {
  state = {
    tours: [],
    featuredTours: [],
    sortedTours: [],
    loading: true,
    price: 0,
    minPrice: 0,
    authUser: null
  };

  componentDidMount() {
    //get the data
    fetch(
      "https://www.triposo.com/api/20190906/tour.json?location_ids=Melbourne",
      {
        headers: {
          "X-Triposo-Account": "A8Y2YRTV",
          "X-Triposo-Token": "hgiq3zyo304rc0p3kfkh19zd224lunxh"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        let tours = data.results.map(x => {
          return {
            image: x.images[0].sizes.thumbnail.url,
            bgimage: x.images[0].sizes.original.url,
            id: x.id,
            title: x.name,
            price: x.price.currency + " " + x.price.amount,
            amount: x.price.amount,
            vendor: x.vendor,
            vendor_tour_url: x.vendor_tour_url
          };
        });
        let maxPrice = Math.max(...tours.map(tour => tour.amount));
        this.setState({
          tours,
          loading: false,
          price: maxPrice,
          maxPrice,
          sortedTours: tours
        });
      })
      .catch(console.log);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterTours
    );
  };

  filterTours = () => {
    let { tours, price } = this.state;

    let tempTours = [...tours];

    price = parseInt(price);

    // filter by price
    tempTours = tempTours.filter(tour => tour.amount <= price);

    this.setState({
      sortedTours: tempTours
    });
  };

  getTour = slug => {
    let tempTours = [...this.state.tours];
    const tour = tempTours.find(tour => tour.id === slug);
    return tour;
  };

  render() {
    return (
      <TourContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          getTour: this.getTour
        }}
      >
        {this.props.children}
      </TourContext.Provider>
    );
  }
}

const TourConsumer = TourContext.Consumer;

export { TourContext, TourConsumer, TourProvider };
