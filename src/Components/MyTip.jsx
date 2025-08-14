import React from 'react';
import { Link } from 'react-router';

const MyTip = () => {
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
                        <tr>
                            <td>
                                <div className="">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        className='rounded-lg'
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTip;