import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import About from "./About";
import Resume from "./Resume";
import Contact from "./New"

function MyTabs() {
  return (
    <Tabs
      defaultActiveKey="about"
      id="fill-tab-example"
      className="tabs"
      fill
    >
      <Tab eventKey="about" title="About" >
        <About />
      </Tab>
      <Tab eventKey="resume" title="Resume">
        <Resume />
      </Tab>
      <Tab eventKey="contact" title="What's New" >
        <Contact />
      </Tab>
    </Tabs>
  );
}

export default MyTabs;
