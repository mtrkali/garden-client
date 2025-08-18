import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';



const MyTip = () => {
    const { user } = useContext(AuthContext);
    const tips = useLoaderData();

    const myTips = tips.filter(tip => tip.email === user?.email)

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
                                            className='w-60 h-60 rounded-lg'
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>
                                    {myTip.name}
                                    <br />
                                    <span className="">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <Link to='/updateTips'>
                                        <button className="btn btn-outline btn-accent btn-xs px-5 mr-3">Update</button>
                                    </Link>
                                    <Link to=''>
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