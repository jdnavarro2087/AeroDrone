import './Home.css';

import { Link } from 'react-router-dom';
//import '.,Home.css';
function Home() {
    return (
        <div className="home page">
            <h1>Welcome to the AeroDrone Hive</h1>
            
            <Link className="btn btn-primary" to="/catalog"
            >Check out inventory {'>'}</Link>
        </div>
    );
}

export default Home;
