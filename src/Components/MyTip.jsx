import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Swal from 'sweetalert2';
import Loading from './Loading';

const MyTip = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch user tips from server
  useEffect(() => {
    if (user?.email) {
      fetch(`https://garden-server-zeta.vercel.app/tips?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyTips(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user?.email]);

  // handle delete
  const handleDelete = (_id) => {
    fetch(`https://garden-server-zeta.vercel.app/tips/${_id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully deleted Tip",
            showConfirmButton: false,
            timer: 1500
          });
          setMyTips(myTips.filter(tip => tip._id !== _id));
        }
      });
  };

  // loading state
  if (loading) {
    return <div className="h-[500px] flex justify-center items-center">
      <Loading></Loading>
    </div>
  }

  // no tips state
  if (myTips.length === 0) {
    return <div className="h-[500px] flex justify-center items-center">
      <h1 className="text-3xl lg:text-7xl text-accent italic">You have no Tips Yet !!</h1>
    </div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            myTips.map(myTip => (
              <tr key={myTip._id}>
                <td>
                  <img
                    src={myTip.photo}
                    className='w-20 h-20 lg:w-40 lg:h-40 rounded-lg object-cover'
                    alt={myTip.title}
                  />
                </td>
                <td className='text-lg lg:text-2xl'>{myTip.title}</td>
                <td className='text-xs lg:text-lg'>{myTip.category}</td>
                <td>
                  <Link to='/updateTips' state={{ myTip }}>
                    <button className="btn btn-outline btn-accent btn-xs px-5 mr-3">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(myTip._id)}
                    className="btn btn-outline btn-secondary btn-xs px-5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyTip;
