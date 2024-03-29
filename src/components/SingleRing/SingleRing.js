import './SingleRing.css'
import { Link } from 'react-router-dom'

export const SingleRing = ({ ring }) => {
    return (
        <div className="box">
            <div className="name">
                <h6>
                    {ring.name} 
                  
                </h6>
                <h7>
                    {ring.type}
                </h7>
            </div>
            <div className="img-box">
                <img src={ring.url} alt="" />
            </div>
            <div className="detail-box">
                <h5>
                    $<span>{ring.price}</span>
                </h5>
                <button> <Link to={`/catalog/details/${ring.id}`} className="details-link">Details</Link> </button>
            </div>
        </div>
    );
};