import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ringService from './../../services/ring-services'
import './Details.css'

export const Details = ({ history }) => {
    const { ringId } = useParams();
    const [ring, setRing] = useState({});
    const [likes, setLikes] = useState(0); 

    useEffect(() => {
        ringService.getRingById(ringId)
            .then(result => {
                setRing(result);
                setLikes(result.likes); 
            })
    }, [ringId])

    const handleDelete = async () => {
        await ringService.deleteRing(ring.id);
        setRing({});
        history.push('/');
    }

    const handleLike = async () => {
        await ringService.likeRing(ring.id); 
        setLikes(likes + 1); 
    }

    return (
        <div className="container">
            <h1>{ring.name}</h1>
            <img src={ring.url} alt={ring.name} />
            <section className="info-wrapper">
                <h2>Price: {`${ring.price}`}</h2>
                <p>Description:{`${ring.description}`}</p>
                <p>Size: {`${ring.size}`}</p>
                <p>Type: {`${ring.type}`}</p>
            </section>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
            <Link to={`/catalog/edit/${ring.id}`} className="edit-link">Edit</Link>
        </div>
    )
}
