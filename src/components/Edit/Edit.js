import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ringService from '../../services/ring-services'

export const Edit = () => {
    const { ringId } = useParams();
  
    useEffect(() => {
        ringService.getRingById(ringId)
            .then(result => {
                setRing(result)
            })
    }, [ringId])

    const [ring, setRing] = useState({
        name: "",
        size: "",
        type: "",
        description: "",
        price: "",
        url: ""
    });

    const updateRingHandler = async (e) => {
        e.preventDefault();
        await ringService.update(ringId, ring);
        // Redirect to ring list
        
      };

    const addRingDataInfo = (e) => {
        setRing({ ...ring, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="create-form-wrap">
            <h2>Edit your ring</h2>
            <form className="create-form" onSubmit={updateRingHandler}>
                <input
                    type="text"
                    className="name"
                    name="name"
                    placeholder="Name of your ring"
                    value={ring.name}
                    onChange={addRingDataInfo}
                />
                <input
                    type="text"
                    className="size"
                    name="size"
                    placeholder="Ring size"
                    value={ring.size}
                    onChange={addRingDataInfo}
                />
                <input
                    type="text"
                    className="type"
                    name="type"
                    placeholder="Type"
                    value={ring.type}
                    onChange={addRingDataInfo}
                />
                <textarea
                    className="description"
                    name="description"
                    placeholder="Description"
                    value={ring.description}
                    onChange={addRingDataInfo}
                    rows={5} 
                ></textarea>
                <input
                    type="text"
                    className="price"
                    name="price"
                    placeholder="Price"
                    value={ring.price}
                    onChange={addRingDataInfo}
                />
                <input
                    type="text"
                    className="url"
                    name="url"
                    placeholder="Image URL"
                    value={ring.url}
                    onChange={addRingDataInfo}
                />
                <input type="submit" className="login" value="Edit Ring" />
            </form>
        </div>
    );
};
