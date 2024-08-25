import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="batches">Batches</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="bottles">Bottles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="reviews">Bottle reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
