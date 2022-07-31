import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleSignUp = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        enrollIntroTimeout: 5,
        userConsent: true,
        payload: {
          email: "bla@mai.com",
          pin: "asdf1234",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioa782f");
  }, []);

  return (
    <section>
      <h1>FaceID Auth</h1>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
    </section>
  );
}

export default App;
