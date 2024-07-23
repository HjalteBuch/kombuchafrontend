import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="batches">Batches</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="bottles">Bottles</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="reviews">Bottle reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
