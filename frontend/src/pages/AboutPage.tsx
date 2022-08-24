const AboutPage = () => {
  return (
    <>
      <h2>About this project</h2>

      <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
        This is a website that simulates Veikkaus Eurojackpot, the design is
        also inspired by Veikkaus with "minimal concept". Users can play lotto
        with the instant result responses from backend. Users can topup their
        game account by using Paypal Sandbox. Moreover, users can view their
        game history, purchse history. Website is fully responsive. User stay
        login when refresh the page.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Technologies</h2>

      <ul
        style={{ fontSize: "0.8rem", marginTop: "1rem", marginBottom: "1rem" }}
      >
        <li>
          <strong>Frontend:</strong> React JS, TypeScript, Redux, React Router
          DOM, Material UI.
        </li>
        <li>
          <strong>Backend:</strong> Mongo DB, Express JS, Node JS
        </li>
        <li>
          <strong>Other libraries:</strong> Mongo DB Atlas and Compass, Nodemon,
          Mongoose, Bcrypt, Express Async Handler, Postman, JSON Web Token,
          Axios, React Paypal, React Helmet
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
