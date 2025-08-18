import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Loading from './Loading';

const BrowsTips = () => {
    const {loading} = useContext(AuthContext)
    const intialTips = useLoaderData();
    const [tips, setTips] = useState(intialTips);

    if(loading) {
        return <Loading></Loading>
    }
    console.log(tips);
    return (
        <div className='grid  justify-items-center'>
            <div className="overflow-x-auto  lg:w-11/12">
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
                            tips.map((tip) => <tr key={tip._id}>
                            <td>
                                <div className="">
                                    <img
                                        src={tip.photo}
                                        className='rounded-lg lg:w-52 lg:h-60'
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                <h1 className="text-lg lg:text-3xl">{tip.title}</h1>
                            </td>
                            <td className='text-xs lg:text-lg'>{tip.category}</td>
                            <th>
                                <Link to={`/tipDetails/${tip._id}`}>
                                    <button className="btn btn-outline btn-accent btn-xs">see more...</button>
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

export default BrowsTips;