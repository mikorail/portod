import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Pratita Sujatmika</h1>
                  <h5 className="text-on-back">361°</h5>
                  <p className="profile-description">
                  The life that you seek you never will find: 
                  when the gods created mankind, 
                  death they dispensed to mankind, 
                  life they kept for themselves.

                  Humans come then go, that is the way fate decreed on the Tablets of Destiny. 
                  So someday you will depart, but till that distant day 
                  Sing, and dance. 
                  Eat your fill of warm cooked food and cool jugs of beer. 
                  Cherish the children your love gave life. 
                  Bathe away life's dirt in warm drawn waters. 
                  Pass the time in joy with your chosen wife. 
                  On the Tablets of Destiny it is decreed 
                  For you to enjoy short pleasures for your short days.                  
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/pandasmu"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow me
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/pratito.sujatmiko"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Close to me :
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="instagram"
                      href="https://instagram.com/prasmiko_"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Send me Love :
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="me,myselft,i"
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/pp/Untitled.png")}
                      />
                      <h4 className="title">Pratita Sujatmika</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Education
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Biological
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Interest
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">start</th>
                                <th className="header">end</th>
                                <th className="header">instance</th>
                                <th className="header">major</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>2017</td>
                                <td>now</td>
                                <td>Gadjah Mada University</td>
                                <td>Computer and Information System Diploma</td>
                              </tr>
                              <tr>
                                <td>2014</td>
                                <td>2017</td>
                                <td>Yogyakarta 2 Vocational Highschool</td>
                                <td>Multimedia</td>
                              </tr>
                              <tr>
                                <td>2011</td>
                                <td>2014</td>
                                <td>Bambanglipuro 2 Junior Highschool</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                        <Table className="tablesorter" responsive>
                            <tbody>
                              <tr>
                                <td>Born on August,6th 1999</td>
                              </tr>
                              <tr>
                                <td>19 years old</td>
                              </tr>
                              <tr>
                                <td>First of Two children</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <tbody>
                              <tr>
                                <td>Game</td>
                                <td>:</td>
                                <td>Game Development, Game Design, Game Asset Creation, Game Programming</td>
                              </tr>
                              <tr>
                              <td>Design</td>
                                <td>:</td>
                                <td>Design Idea, Design Thinking, Design Process </td>
                              </tr>
                              <tr>
                                <td>Books</td>
                                <td>:</td>
                                <td>Classic Literature, Art Books, Science Books, History Books</td>
                              </tr>
                              <tr>
                                <td>Misc</td>
                                <td>:</td>
                                <td>Football, Technology, Art Oriented Technology, AI, Big Data</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
