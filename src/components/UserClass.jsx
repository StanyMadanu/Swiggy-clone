import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
      },
    };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      console.log("Set Time Interval");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    console.log("Child Render");

    return (
      <section className="user-section">
        <img src="" alt="avatar_url" />
        <h3>Name : Stany</h3>
        <h4>Location : Hyd</h4>
        <h4>Role : React Developer</h4>
      </section>
    );
  }
}

export default UserClass;
