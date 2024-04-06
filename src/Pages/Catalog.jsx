import './Catalog.css';
import Product from '../components/Product';

function Catalog() {
    
    const data = [
        {
            title: 'CRX900',
            price: 89.99,
            category: 'Drone',
            image: 'fire.png',
            _id: '0'
        },
        {
            title: 'Raptor TZ',
            price: 124.98,
            category:'Drone',
            image:'image1.png',
            _id:'1'
        },
        {
            title: 'Matrice 30',
            price: 264.02,
            category:'Drone',
            image:'image4.jpeg.png',
            _id:'2'
        },
        {
            title: 'Grubhubber',
            price: 310.99,
            category:'Drone',
            image:'Grubhub.png ',
            _id:'3'
        },
        {
            title: 'G14 Classified',
            price: 32.50,
            category:'Drone',
            image:'tactical.png ',
            _id:'4'
        },
        {
            title: 'Mavic 3 Pro',
            price: 699.00,
            category:'Drone',
            image:'image3.jpeg',
            _id:'5'
        },
        {
            title: 'Tesla Titan',
            price: 498.99,
            category:'Drone',
            image:'Tesla.png',
            _id:'6'
        },
        {
            title: 'Valkyrie',
            price: 1200.99,
            category:'Drone',
            image:'valkyrie.png',
            _id:'7'
        }
    ];
    
    return (
        <div className="catalog page">
            <h1>Drone Inventory</h1>

        {data.map( (prod) => (
            <product key={prod._id} info={prod} />
        ))}

        <Product info={data[0]} />
        <Product info={data[1]} />
        <Product info={data[2]} />
        <Product info={data[3]} />
        <Product info={data[4]} />
        <Product info={data[5]} />
        <Product info={data[6]} />
        <Product info={data[7]} />

        </div>
    );
}

export default Catalog;