import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Row } from "reactstrap";

export default function Beer(props) {
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3 pe-0">
            <Card>
                <CardBody>
                    <Row>
                        <Col className="col-4">
                            <img src={props.image} height={250} alt={props.title} />
                        </Col>
                        <Col className="col-8 d-flex flex-column">
                            <CardTitle tag="h5">{props.title}</CardTitle>
                            <CardText>{props.description}</CardText>
                            <div className="mt-auto">
                                <small>Price: ${props.price}</small>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button color="primary" outline>Add to Cart</Button>
                </CardFooter>
            </Card>
        </div>
    );
}