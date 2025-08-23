import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Loading from './Loading';

const BrowsTips = () => {
    const { loading } = useContext(AuthContext)
    const intialTips = useLoaderData();
    const [tips] = useState(intialTips);
    const [filter, setFilter] = useState('All');

    //filter logic ---
    const filteredTips = filter === 'All' ? tips : tips.filter(tip => tip.difficulty === filter)
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid  justify-items-center min-h-screen'>
            <div className="overflow-x-auto  lg:w-11/12">

                <div className="flex justify-end mb-4">
                    <select
                        className="select select-bordered w-full max-w-xs"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="eassy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>



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
                        {filteredTips.length > 0 ? (filteredTips.map((tip) => <tr key={tip._id}>
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
                        </tr>)) : (<tr>
                            <td colSpan="5" className="text-center text-red-500">
                                No tips found.
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowsTips;