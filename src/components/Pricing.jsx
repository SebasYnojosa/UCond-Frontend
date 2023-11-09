
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css"
import pricing1 from "../assets/img/pricing1.svg"
import pricing2 from "../assets/img/pricing2.svg"
import pricing3 from "../assets/img/pricing3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Pricing = () => {
    
    return (
        <section className="pricing" id="pricing">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                            <h2>Planes</h2>
                            <p>Elige el plan que mas se ajuste a tus necesidades</p>
                    </Col>

                    <div className="pepito">
                        <div className="pricing-bx">
                                <div className="item-esencial">
                                    <h3>Esencial</h3>
                                <img src={pricing1} alt="Image" />
                                <h3>4.99$</h3>
                                <p>Al mes <b></b> Condominios de 40 o menos residencias</p>
                            </div>
                        </div>
                        <div className="pricing-bx">
                            <div className="item-extra">
                                <h3>Extra</h3>
                                <img src={pricing2} alt="Image" />
                                 <h3>9.99$</h3>
                                <p>Al mes <b></b> Condominios de 40 o menos residencias</p>
                            </div>
                        </div>
                        <div className="pricing-bx">
                            <div className="item-premium">
                                <h3>Premium</h3>
                                <img src={pricing3} alt="Image" />
                                <h3>14.99$</h3>
                                <p>Al mes <b></b> Condominios de 40 o menos residencias</p>
                            </div>
                        </div>

                        </div>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />

        </section>
    )
}