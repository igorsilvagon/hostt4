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
  Col,
} from "reactstrap";

import { Carousel } from 'views/examples/Carousel.jsx';


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// inner components
import { AirbnbAds } from './AirbnbAds';


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
          <div className="hero">
            <figure className="hero__logo">
              <img className="hero__logo__image" alt="Hostt4" src={require("assets/img/brand/Branding-Hostt-Alternativo.png")} />
            </figure>
            <Carousel>
              <img className="landing_section" width="100%"  alt="Cidade de São Paulo" src={require("assets/img/theme/back_1.jpg")}  />
              <img className="landing_section" width="100%"  alt="Cidade de São Paulo" src={require("assets/img/theme/back_2.jpg")}  />
            </Carousel>
          </div>

          <section className="section bg-second-1" id="/QuemSomos">
            <Container>
              <Row className="row-grid justify-content-lg-center">
                <div className="text-center">
                  <h2 className="font-weight-light">Quem somos</h2>
                  <p >Somos anfitriões experientes que perceberam que o aluguel para curta temporada é uma forma atrativa de fazer um imóvel render mais. Plataformas como o Airbnb permitem gerenciar esse processo de forma simples e segura, mas receber bem vai além do que a plataforma oferece. É aí que nós entramos: cuidamos de tudo – do anúncio à limpeza, passando pela recepção dos hópedes – para que oferecer seu imóvel para locações de curta temporada seja como tem que ser: simples.</p>
                </div>


                <video controls>
                  <source src={require("assets/video/t_video4974277813369569446.mp4")} type="video/mp4"></source>
                </video>


              </Row>
            </Container>
          </section>

          <section className="section bg-primar-1 white" id="NossosServicos">
            <Container>
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="font-weight-light">O que fazemos</h2>
                </Col>
              </Row>
              <Row className="row-grid mt-5 justify-content-center ">
                <Col lg="4">
                  <Row className="row-grid justify-content-center">
                    <div className="icon">
                      <img className="icon2" alt="1" src={require("assets/img/icons/common/icon-1.jpg")} width="220%"/>
                    </div>
                  </Row>
                  <br></br><br></br>
                  <p className="text-center">Visita, fotografia, precificação e anúncio</p>
                </Col>
                <Col lg="4">
                  <Row className="row-grid justify-content-center">
                    <div className="icon">
                      <img className="icon2" alt="2" src={require("assets/img/icons/common/icon-2.jpg")} width="220%"/>
                    </div>
                  </Row>
                  <br></br><br></br>
                  <p className="text-center">Negociação de reservas</p>
                </Col>
                <Col lg="4">
                  <Row className="row-grid justify-content-center">
                    <div className="icon">
                      <img className="icon2" alt="3" src={require("assets/img/icons/common/icon-3.jpg")} width="220%"/>
                    </div>
                  </Row>
                  <br></br><br></br>
                  <p className="text-center">Liberação na portaria, entrega de chaves, orientações gerais e acompanhamento da estadia</p>

                </Col>
                <Col lg="4">
                  <Row className="row-grid justify-content-center">
                    <div className="icon">
                      <img className="icon2" alt="4" src={require("assets/img/icons/common/icon-4.jpg")} width="220%"/>
                    </div>
                  </Row>
                  <br></br><br></br>
                  <p className="text-center">Vistorias, coordenação de serviços de limpeza, manutenção e lavagem de roupas de cama e banho</p>
                </Col>
                <Col lg="4">
                  <Row className="row-grid justify-content-center">
                    <div className="icon justify-content-center">
                      <img className="icon2" alt="5" src={require("assets/img/icons/common/icon-5.jpg")} width="220%"/>
                    </div>
                  </Row>
                  <br></br><br></br>
                  <p className="text-center">Relatório mensal de ocupação, ganhos e comentários dos hóspedes</p>
                </Col>


              </Row>
            </Container>
          </section>

          <section className="section bg-primar-1 white" id="NossosServicos">
            <Container>
              
              <Row className="text-center justify-content-center">
                <Col lg="10">
                
          
                  <h2 className="font-weight-light">Serviços</h2>
             
             
                </Col>
              </Row>
              
              <Row className="row-grid mt-5 justify-content-center">
                 <Col lg="8">
                  <br></br>
                  <Row className="row-grid justify-content-center">
                  <div className="icon justify-content-center">
                    <img className="icon2" alt="1" src={require("assets/img/icons/common/icon2_01.jpg")} width="220%"/>
                  </div>  
                </Row>

                </Col>
                </Row>
                <Row className="row-grid mt-5 justify-content-center ">
                <Col lg="8">

                  <h5 className="text-center"><b>Gestão de imóveis na plataforma Airbnb</b></h5>
                  <p className="text-center">Da criação do anúncio à limpeza do imóvel, passando pela comunicação com interessados e hóspedes até a entrega das chaves e acompanhamento da estadia, cuidamos de tudo que envolve disponibilizar seu apartamento na plataforma de locação</p>
                  </Col>
                  </Row>
                  <Row className="row-grid mt-5 justify-content-center ">
                  <Col lg="8">
                  <br></br>

                  <Row className="row-grid justify-content-center">
                  <div className="icon justify-content-center">
                    <img className="icon2" alt="1" src={require("assets/img/icons/common/icon2-03.jpg")} width="220%"/>
                  </div>  
                </Row>

                </Col>
                </Row>
                <Row className="row-grid mt-5 justify-content-center ">
                <Col lg="8">

                  <h5 className="text-center"><b>Mobília</b></h5>
                  <p className="text-center">Tem um apartamento que não está mobiliado? Fale conosco – podemos mobilia-lo pra você</p>
                  </Col>
                  </Row>
                  <Row className="row-grid mt-5 justify-content-center ">
                  <Col lg="8">
                 <br></br>

                  <Row className="row-grid justify-content-center">
                  <div className="icon justify-content-center">
                    <img className="icon2" alt="1" src={require("assets/img/icons/common/icon2-02.jpg")} width="220%"/>
                  </div>  
                </Row>
                </Col>
                </Row>
                <Row className="row-grid mt-5 justify-content-center ">
                <Col lg="8">
                  <h5 className="text-center"><b>Avaliação de imóveis</b></h5>
                  <p className="text-center">Na dúvida se o seu imóvel está pronto para fazer parte do catálogo da Hostt? Fazemos essa avaliação e oferecemos recomendações para deixar seu espaço mais atraente para usuários do Airbnb</p>
                  </Col>
               
                  

              </Row>
            </Container>
          </section>


          <section className="bg-second-1" id="Imoveis">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="font-weight-light">Imóveis gerenciados pela Hostt</h2>
              </Col>
            </Row>
            <Container>
              <AirbnbAds codes={['21577485', '21577485', '21577485']}/>
            </Container>
          </section>


          <section id="Mídia">

            <Row className="text-center justify-content-center">
              <Col lg="10"><br></br>
                <h2 className="font-weight-light">Hostt na mídia</h2>
              </Col>
            </Row>

            <Container>
              <Row className="justify-content-center">
                <Col md="4">
                  <a href="https://economia.estadao.com.br/blogs/radar-imobiliario/locacao-por-aplicativo-leva-condominios-a-se-ajustarem/">
                    <Card className="shadow border-0 airbnb-card">
                      <CardImg
                        alt="..."
                        src={require("assets/img/theme/reportagem_1.png")}
                        top
                      />
                      <blockquote className="card-blockquote">

                        <h4 className="font-weight-light">
                          Estadão
                        </h4>
                        <p className="text-italic">
                          Locacao por aplicativo leva condominios a se ajustarem
                        </p>
                      </blockquote>
                    </Card>
                  </a>
                </Col>

              </Row>
            </Container>
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
