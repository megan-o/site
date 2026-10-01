import "./App.css";
import MyTabs from "./Components/MyTabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <br />

      <Container>
        <Row>
          <Col>
            <img
              src="obrien-megan.jpg"
              className="App-logo"
              alt="logo"
            />
            <br />
            <br />
            <h3>Megan O'Brien</h3>
            <p>Associate Director - Primary Research</p>
          </Col>
          <Col sm={8}>
            <MyTabs />
          </Col>
        </Row>
      </Container>

      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/meganscobrien/">
        <img
          src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          alt="LinkedIn"
        />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:meganscobrien@gmail.com?subject=Hello%20From%20Your%20Site&body=Hi%20Megan,">
        <img
          src="https://img.icons8.com/fluent/48/000000/mail.png"
          alt="Email"
        />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://x.com/meganscobrien">
        <img
          src="https://img.icons8.com/fluent/48/000000/twitter.png"
          alt="Twitter"
        />
      </a>
      <p className="small">2026 Megan</p>
    </div>
  );
}


export default App;
