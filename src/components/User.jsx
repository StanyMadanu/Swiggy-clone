import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  let [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count += 1));
  };

  useEffect(() => {
    let time = setInterval(() => {
      console.log("useEffect Interval");
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <section className="user-section">
      <h1>Count : {count}</h1>
      <button onClick={handleIncrease}>count increase</button>

      <h3>Name : {name}</h3>
      <h4>Location : {location}</h4>
      <h4>Role : React Developer</h4>
    </section>
  );
};

export default User;
