import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const ToursList = props => {
  let handleResultSelect = (e, x) => {
    const { history } = props;
    let navigateLink = "/tour/" + x.id;
    history.push(navigateLink);
  };

  return (
    <Grid relaxed columns={4}>
      {props.tours.map(x => {
        return (
          <Grid.Column key={x.id}>
            <Card id={x.id} onClick={handleResultSelect}>
              <Image src={x.image} wrapped ui={false} />
              <div className="price-top">
                <h6>{x.price}</h6>
              </div>
              <Card.Content>
                <Card.Header>{x.title}</Card.Header>
                <Card.Meta>
                  <span className="date">By {x.vendor}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default withRouter(ToursList);
