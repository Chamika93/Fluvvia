import React, { Component } from "react";
import { withAuthorization } from "../Session";
import { Grid, Card, Image } from "semantic-ui-react";
import PasswordChangeForm from "../PasswordChange";
import Title from "../Title";

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {}
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.onAuthUserListener(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: {} });
    });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div style={{ width: "26%", margin: "0 auto" }}>
          <Card>
            <Image
              src="https://justice.org.au/wp-content/uploads/2017/08/avatar-icon.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header> {this.state.authUser.username}</Card.Header>
              <Card.Meta>
                <span className="date">{this.state.authUser.email}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
        <Title title="Change Your Password" style={{ marginTop: "50px" }} />
        <Grid columns={1} style={{ padding: "50px" }}>
          <Grid.Column>
            <Card fluid={true}>
              <Card.Content>
                <Card.Header>New Password</Card.Header>
                <Card.Description>
                  <PasswordChangeForm />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
