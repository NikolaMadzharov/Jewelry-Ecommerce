import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ringService from './../../services/ring-services'
import './Details.css'


export const Details = () => {
    const { ringId } = useParams();
    const [ring, setRing] = useState({})
    useEffect(() => {
        ringService.getRingById(ringId).
            then(result => {
                setRing(result)
            })
    }, [ringId])

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
        </div>
    )
}