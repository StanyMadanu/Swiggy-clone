import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <section className="about-wrapper">
        <div>
          <UserContext.Consumer>
            {({ loginUser }) => (
              <h1 className="font-bold">UserName: {loginUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>Welcome to About Page</h1>
      </section>
    );
  }
}

export default About;
