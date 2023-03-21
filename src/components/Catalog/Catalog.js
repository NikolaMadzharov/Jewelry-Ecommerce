import { useEffect, useState } from "react";
import * as ringService from '../../services/ring-services'
import { SingleRing } from "../SingleRing/SingleRing";

export const Catalog = () => {

    const [allRings, setRing] = useState([]);
    useEffect(() => {
        ringService.getAll().
            then(r => setRing(r))
    }, []);


    return (
        <section className="price_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Our top rings
                    </h2>
                </div>
                <div className="price_container">
                    {allRings && allRings.map(ring => (
                        <SingleRing ring={ring} key={ring.id} />
                    ))}


                   
                </div>
            </div>
        </section >
    );
};