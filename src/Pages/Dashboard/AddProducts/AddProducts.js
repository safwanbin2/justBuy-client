import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const d = new Date();
    const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    console.log(date)
    const handleAddPhone = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const img = imgData.data.url;
                const newPhone = {
                    title: data.title,
                    category: data.category,
                    sellPrice: data.sellPrice,
                    buyPrice: data.buyPrice,
                    img: img,
                    location: data.location,
                    condition: data.condition,
                    used: data.used,
                    postdate: date,
                    sellerName: user.displayName,
                    sellerEmail: user.email,
                    // isVerified: true,
                    description: data.description
                }

                fetch(`http://localhost:5000/phones`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newPhone)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
    }

    // title
    // category
    // sellPrice
    // buyPrice
    // img
    // location
    // used
    // postDate
    // sellerName
    // sellerEmail
    // isVerified
    // condition
    // description
    return (
        <div>
            Add new Item:
            <form onSubmit={handleSubmit(handleAddPhone)}>
                {/* taking img */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select a photo: </span>
                    </label>
                    <input {...register('img', {
                        required: "can not be empty"
                    })} type="file" className="file-input file-input-bordered file-input-lg w-full" />
                    {errors.img && <p className='text-red-600'><small>{errors.img.message}</small></p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title: </span>
                    </label>
                    <input {...register('title', {
                        required: "can not be empty"
                    })} type="text" placeholder="Name of phone" className="input input-bordered input-primary w-full" />
                    {errors.title && <p className='text-red-600'><small>{errors.title.message}</small></p>}
                </div>
                <div className='grid grid-cols-2 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category: </span>
                        </label>
                        <select {...register('category')} className="select select-primary w-full">
                            <option>iphone</option>
                            <option>samsung</option>
                            <option>opp</option>
                            <option>vivo</option>
                            <option>redmi</option>
                            <option>oneplus</option>
                            <option>sony</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location: </span>
                        </label>
                        <input {...register('location', {
                            required: "can not be empty"
                        })} type="text" placeholder="Location" className="input input-bordered input-primary w-full" />
                        {errors.location && <p className='text-red-600'><small>{errors.location.message}</small></p>}
                    </div>
                </div>
                {/* price */}
                <div className='grid grid-cols-2 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buying Price: </span>
                        </label>
                        <input {...register('buyPrice', {
                            required: "cant not be empty"
                        })} type="text" placeholder="Buying Price" className="input input-bordered input-primary w-full" />
                        {errors.buyPrice && <p className='text-red-600'><small>{errors.buyPrice.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Selling Price: </span>
                        </label>
                        <input {...register('sellPrice', {
                            required: "can not be empty"
                        })} type="text" placeholder="selling price" className="input input-bordered input-primary w-full" />
                        {errors.sellPrice && <p className='text-red-600'><small>{errors.sellPrice.message}</small></p>}
                    </div>
                </div>
                {/* condtion and used */}
                <div className='grid grid-cols-2 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Used Duration: </span>
                        </label>
                        <input {...register('used', {
                            required: "can not be empty"
                        })} type='text' placeholder="used duration" className="input input-bordered input-primary w-full" />
                        {errors.used && <p className='text-red-600'><small>{errors.used.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition: </span>
                        </label>
                        <select {...register('condition')} className="select select-primary w-full">
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description: </span>
                    </label>
                    <input {...register('description', {
                        required: 'can not be empty'
                    })} type="text" placeholder="selling price" className="input input-bordered input-primary w-full" />
                    {errors.description && <p className='text-red-600'><small>{errors.description.message}</small></p>}
                </div>
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
        </div>
    );
};

export default AddProducts;