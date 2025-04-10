import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/App.css";

function HeaderSection() {
  return (
    <div className="header">
      <div className="header-cover ">
        <div className="justify-content-center align-items-center d-flex">
          <Navbar expand="lg" className="bg-body-transparent  nav-width ">
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  alt=""
                  src="/src/assets/logo/logo.png"
                  width="180"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="custom-toggle "
              />
              <Navbar.Collapse
                id="navbarScroll"
                className=" justify-content-between mx-5"
              >
                <Nav.Link href="#action1" className="text-light fontsize1">
                  OUR EXPERTISE
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light fontsize1">
                  OUR ADVANTAGES
                </Nav.Link>
                <Nav.Link href="#action1" className="text-light fontsize1">
                  DATA CENTERS
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light fontsize1">
                  OUR TEAM
                </Nav.Link>

                <Form className="d-flex">
                  <Button
                    variant="outline-light"
                    className=" rounded-0 border-2 fw-bold contact-buttons"
                  >
                    Contact Us
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="row main-row-header">
          <div className="col-sm-6">
            <br />
            <div className=" text-light h6">WELCOME TO DATAPRANA</div> <br />
            <div className="text-light h1 ">CONNECTING DATA AND ENERGY</div>
            <br />
            <div className="p text-light">
              We build and Operate Data Centers for High Performance <br />{" "}
              Quality powering the Decentralized Economy <br /> of the Future
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
