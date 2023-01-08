import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";

export default function FavBeer(props) {
    return (
        <Card className="col-12 col-md-6 mt-5 mx-auto">
            <CardHeader><h4>Our Favorite Beer Today</h4></CardHeader>
            <CardBody>
                <Row>
                    <Col className="col-4">
                        <img src="https://images.punkapi.com/v2/66.png" height={350} alt='Tokyo Rising Sun - Lowland' />
                    </Col>
                    <Col className="col-8 d-flex flex-column">
                        <CardTitle tag="h5">Tokyo Rising Sun - Lowland</CardTitle>
                        <CardText>Aged in a Lowland whisky cask resulting in decadent chocolate, toasted vanilla, indulgent spiced fruit, a mesmerizingly hypnotic mouthfeel and new layers that emerge on every sip.</CardText>
                        <div className="mt-auto">
                            <h2>
                                <small className="text-decoration-line-through text-muted">$13.2</small>
                                <small> / $6.6</small>
                            </h2>
                            <Button color="info" outline>Add to the Wish List</Button>
                            <Button color="primary" outline>Add to Cart</Button>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}