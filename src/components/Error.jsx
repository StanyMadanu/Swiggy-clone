import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <section className="error-wrapper" style={{ textAlign: "center" }}>
      <h1>
        Oops..! {err.status} {err.statusText}{" "}
      </h1>
    </section>
  );
};

export default Error;
