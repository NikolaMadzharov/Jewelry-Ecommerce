import { useState } from 'react'
import * as ringService from '../../services/ring-services'
import './CreateRing.css'


export const CreateRing = () => {
    const [ringData, setRingData] = useState({
        name: '',
        size: '',
        type: '',
        description: '',
        price: '',
        url: ''
    });
    const createRingHandler = async (e) => {
        e.preventDefault()
        console.log(ringData);
        await ringService.create(ringData)
    };

    const addRingDataInfo = (e) => {
        setRingData({ ...ringData, [e.target.name]: e.target.value })
    };

    return (
        <div className="create-form-wrap">
            <h2>Create your precious ring</h2>
            <form className="create-form" onSubmit={createRingHandler}>
                <input
                    type="text"
                    className="name"
                    name="name"
                    placeholder="Name of your ring"
                    value={ringData.name}
                    onChange={addRingDataInfo}
                />
                <input
                    type="text"
                    className="size"
                    name="size"
                    placeholder="Ring size"
                    value={ringData.size}
                    onChange={addRingDataInfo}
                />
                <input
                    type="text"
                    className="type"
                    name="type"
                    placeholder="Type"
                    value={ringData.type}
                    onChange={addRingDataInfo}
                />
               
                <input
                    className="description"
                    name="description"
                    placeholder="Description"
                    value={ringData.description}
                    onChange={addRingDataInfo}
                    rows={5} 
                ></input>

                <input
                    type="text"
                    className="price"
                    name="price"
                    placeholder="Price"
                    value={ringData.price}
                    onChange={addRingDataInfo}
                />
              
                <input
                    type="text"
                    className="url"
                    name="url"
                    placeholder="Image URL"
                    value={ringData.url}
                    onChange={addRingDataInfo}
                />
              

                <input type="submit" className="login" value="Create Ring" />
            </form>
        </div>
    )
}
