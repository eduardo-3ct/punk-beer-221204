import { Row } from "reactstrap";
import Beer from "./Beer";

export default function BeerList() {

    const beers = [
        {
            id: 65,
            title: 'Skull Candy',
            description: 'The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009.',
            image: 'https://images.punkapi.com/v2/keg.png',
            price: 3.5
        },
        {
            id: 94,
            title: 'Everday Anarchy',
            description: 'This French white wine barrel aged Imperial Saison has a plethora of intertwining flavours.',
            image: 'https://images.punkapi.com/v2/94.png',
            price: 10.5
        },
        {
            id: 222,
            title: 'Dog E',
            description: 'Dog E is a very special beer. This beer commemorates our 9th year in 2016.',
            image: 'https://images.punkapi.com/v2/222.png',
            price: 16.1
        },
        {
            id: 80,
            title: 'AB:04',
            description: 'Imperial Stout brewed with coffee, cocoa, Naga chillies (the hottest in the world), and champagne yeast.',
            image: 'https://images.punkapi.com/v2/80.png',
            price: 15
        },
        {
            id: 801,
            title: 'AB:04',
            description: 'Imperial Stout brewed with coffee, cocoa, Naga chillies (the hottest in the world), and champagne yeast.',
            image: 'https://images.punkapi.com/v2/80.png',
            price: 15
        },
        {
            id: 2221,
            title: 'Dog E',
            description: 'Dog E is a very special beer. This beer commemorates our 9th year in 2016.',
            image: 'https://images.punkapi.com/v2/222.png',
            price: 16.1
        },
        {
            id: 651,
            title: 'Skull Candy',
            description: 'The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009.',
            image: 'https://images.punkapi.com/v2/keg.png',
            price: 3.5
        }
    ];

    const beerList = beers.map(b =>
        <Beer key={b.id} title={b.title} description={b.description} image={b.image} price={b.price} />
    );

    return (
        <Row className="mt-5">
            {beerList}
        </Row>
    );
}