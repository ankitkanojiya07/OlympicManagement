import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';





const App = () => {

  return (
    <>
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Olympics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Medals</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Player profiles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Rules</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    About
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>
        <br /><br />
        <div class="avx">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
        </div>

        <br />
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
          <div>
            {/* Navbar ended */}
            {/* Carousel started */}
            <div>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./pexels-diego-f-parra-15238868.jpg')}
                    alt="First slide"
                    height={400}
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./pexels-pixabay-34514.jpg')}
                    alt="Second slide"
                    height={400}
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./pexels-浩-刘-16783048.jpg')}
                    alt="Third slide"
                    height={400}
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>


          </div>
          <p>...</p>
          {/* cards */}
          <br /><br /><br />
          <h1>Emerging Player's Profile</h1>
          <br /><br /><br />

          <div class="container">
            <div class="cards">
              <div class="card">
                <img class="card-img-top" src={require('./mirabai.webp')} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Mirabai Chanu</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require('./Neeraj Chopra.jpg')} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Neeraj Chopra</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require('./Ravi.jpg')} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Ravi Kumar Dahiya</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require('./Bajrang punia.jpg')} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Bajrang Punia</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require("./PV Sindhu.jpg")} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">P.V Sindhu</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require("./Sakshi Malik.jpg")} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Sakshi Malik</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require("./Lovlina.jpg")} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Lovlina</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require("./aditi ashok.webp")} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Aditi Ashok</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={require("./Mary Kom.jpg")} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Mary Kom</h4>
                  <p class="card-text">Some example text.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <br /><br />
      <h1 style={{ margin: 30 }}>Country wise performance</h1>
      <br /><br />
      <div class="card-group">
        <div class="carde">
          <img src={require('./India.png')} class="card-img-top" alt="..." height={100} />
          <br /><br />
          <div class="card-bodyw">
            <h5 class="card-title">India</h5>
            <br />
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Button variant="primary">Click here!</Button>
          </div>
        </div>
        <div class="carde">
          <img src={require('./China.png')} class="card-img-top" alt="..." height={100} />
          <br /><br />
          <div class="card-bodyw">
            <h5 class="card-title">China</h5>
            <br />
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Button variant="primary">Click here!</Button>
          </div>
        </div>
        <div class="carde">
          <img src={require('./Sri Lanka.jpg')} class="card-img-top" alt="..." height={100} />
          <br /><br />
          <div class="card-bodyw">
            <h5 class="card-title">Sri Lanka</h5>
            <br />
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Button variant="primary">Click here!</Button>
          </div>
        </div>
        <div class="carde">
          <img src={require('./ROA.jpg')} class="card-img-top" alt="..." height={100} />
          <br /><br />
          <div class="card-bodyw">
            <h5 class="card-title">ROA</h5>
            <br />
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Button variant="primary">Click here!</Button>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <div class="Form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <footer>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        Where does it come from?
      </footer>
    </>
  )

}
export default App;
