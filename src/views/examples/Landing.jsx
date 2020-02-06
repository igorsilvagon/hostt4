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
import React from "react";
// nodejs library that concatenates classes
/* import classnames from "classnames"; */

// reactstrap components
import {
 /*  Badge, */
  // Button,
   Card,
/*   CardBody, */
  CardImg,
 /*  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup, */
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
/* import Download from "../IndexSections/Download.jsx"; */

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
        <div className="position-relative ">
             <section className="">
               <img className="background-1" width="100%" alt="Cidade de São Paulo" src={require("assets/img/theme/2.jpg")} /> 
            {/*   <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container> */}
            </section>
            </div>
         
          <section className="section bg-primary" id="QuemSomos">
            <Container>
              <Row className="row-grid justify-content-lg-center">
                <div className="text-white text-center">
                  <h2 className="text-white">Quem somos</h2>
                  <p >A Hostt surgiu em XXXX quando um dos nossos fundadores, um Superhost no Airbnb, percebeu
que a demanda por aluguéis de curta temporada
estava crescendo nas grandes cidades.
Notamos que muitos proprietários tem interesse
nesse tipo de locação , porém não possuem
tempo para administrar.
É aí que entramos com nosso trabalho,
oferecendo serviços e estratégias diferenciadas
que visam potencializar o rendimento dos bens.</p>
                  </div>
        
              
                   <video controls>
                    <source src={require("assets/video/t_video4974277813369569446.mp4")} type="video/mp4"></source>
                  </video>
        
                
                </Row>
                </Container>
             </section>

             <section className="section" id="NossosServicos">
            <Container>
              <Row className="text-center justify-content-md-center">
                <Col lg="10">
                  <h2 className="display-3 text-gray">Nossos serviços e como atuamos</h2>
                </Col>
              </Row>
              <Row className="row-grid mt-5 justify-content-md-center">
                 <Col lg="4">
                  <div className="icon">
                    <img alt="1" src={require("assets/img/icons/common/icon-1.jpg")} width="220%"/>
                  </div> 
                  <br></br><br></br>
                  <h5 className="text-center">Visita, fotografia, precificação e anúncio</h5>
                  </Col>
                  <Col lg="4">
                  <div className="icon justify-content-center">
                    <img alt="2" src={require("assets/img/icons/common/icon-2.jpg")} width="220%"/>
                  </div> 
                  <br></br><br></br>
                  <h5 className="text-center">Respostas rápidas, negociação de reservas e envio de dados dos hóspedes à portaria</h5>
                  </Col>
                  <Col lg="4">
                   <div className="icon justify-content-center">
                    <img alt="3" src={require("assets/img/icons/common/icon-3.jpg")} width="220%"/>
                  </div> 
                  <br></br><br></br>
                  <h5 className="text-center">Entrega de chaves, orientações gerais e acompanhamento da estadia</h5>
  
                  </Col>
                  <Col lg="4">
                  <div className="icon justify-content-center">
                    <img alt="4" src={require("assets/img/icons/common/icon-4.jpg")} width="220%"/>
                  </div>
                  <br></br><br></br>
                  <h5 className="text-center">Vistorias, coordenação de serviços de limpeza e manutenção</h5>
                  </Col>
                  <Col lg="4">
                  <div className="icon justify-content-center">
                    <img alt="5" src={require("assets/img/icons/common/icon-5.jpg")} width="220%"/>
                  </div>
                  <br></br><br></br>
                  <h5 className="text-center">Relatório mensal de ocupação e ganhos, feedbacks dos hóspedes e inventário de itens para compra</h5>
                  </Col>
              </Row>
            </Container>
          </section>

             <section className="bg-secondary" id="Imoveis">
                <Container>
                  <Row className="justify-content-md-center">
                 <Col md="4">
                  <Card className="shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      
                      <h4 className="font-weight-bold">
                        Apartamento 1
                      </h4>
                      <p className="text-italic">
                        A descrição do Airbnb
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      
                      <h4 className="font-weight-bold">
                        Apartamento 2
                      </h4>
                      <p className="text-italic">
                      A descrição do Airbnb
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      
                      <h4 className="font-weight-bold">
                        Apartamento 3
                      </h4>
                      <p className="text-italic">
                      A descrição do Airbnb
                      </p>
                    </blockquote>
                  </Card>
                </Col> 
              </Row>
            </Container>
          </section>
        

          <section id="Contato"> 
            <container>
              <row>
                <Col lg="12">
                <img alt="6" width="100%" src={require("assets/img/theme/1.jpg")}></img>
                </Col>
              </row>
            </container>
          </section>

         {/*  <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                       
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}

        {/*   <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section> */}

           
       
        </main>
        <SimpleFooter/>
      </>
    );
  }
}

export default Landing;
