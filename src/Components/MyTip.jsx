import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Swal from 'sweetalert2';



const MyTip = () => {
    const { user } = useContext(AuthContext);
    const tips = useLoaderData();

    const intialTips = tips.filter(tip => tip.email === user?.email)
    const [myTips, setMyTips] = useState(intialTips)


    const handleDelete = (_id) => {
        //delete ids data from the db --
        fetch(`http://localhost:3000/tips/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully delete Tip",
                        showConfirmButton: false,
                        timer: 1500
                    })

                    const remainingTips = myTips.filter(tip => tip._id !== _id);
                    setMyTips(remainingTips);
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>title</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myTips.map(myTip => <tr key={myTip._id}>
                                <td>
                                    <div className="">
                                        <img
                                            src={myTip.photo}
                                            className='w-30 h-30 lg:w-60 lg:h-60 rounded-lg'
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td className='text-lg lg:text-2xl'>
                                    {myTip.title}
                                </td>
                                <td className='text-xs lg:text-lg'>{myTip.category}</td>
                                <th>
                                    <Link to='/updateTips' state={{ myTip }}>
                                        <button className="btn btn-outline btn-accent btn-xs px-5 mr-3">Update</button>
                                    </Link>
                                    <Link onClick={() => handleDelete(myTip._id)}>
                                        <button className="btn btn-outline btn-secondary btn-xs px-5">Delete</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTip;