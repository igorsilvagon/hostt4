/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer" id="Contato">
          <Container>
            <Row>
              <Col lg="6">
                <h4 className="font-weight-light mb-2">Você é proprietário e tem interesse em nossos serviços?</h4>
                <button className="btn btn-primary text-3">Cadastre o seu Imóvel</button>
                </Col>
                <Col lg="6">
                <h4 className="font-weight-light mb-2">
                  Entre com contato conosco
                </h4><br></br>
                <h5 className="text-primary mb-0 font-weight-light">
                  hostt@hostt.com.br
                </h5>
                <br></br>
                <h5 className="text-primary mb-0 font-weight-light">(11) 9 9245-8043</h5>
            <br></br>

                <i class="fa fa-facebook-square icon-2"></i>
           
         
                <i class="fa fa-twitter icon-2"></i>
          
                <i class="fa fa-instagram icon-2"></i>
  
             
              </Col>
              
               {/*  <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="dribbble"
                  href="https://dribbble.com/creativetim"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Star on Github
                </UncontrolledTooltip> */}
            
            </Row>
            <hr />
            
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
