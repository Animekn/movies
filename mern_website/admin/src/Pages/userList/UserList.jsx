import React,{useState} from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';
const UserList = () => {
 const [data,setData]= useState(userRows)

//  This is used to delete a id when its equals to given id 
const handleDelete =(id)=>{
  setData(data.filter(item=>item.id !==id));

}

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+ params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
    }
    },
  ];

  return (
    <>
       <Topbar />
            <div style={{
                display: 'flex'

            }}>
                <Sidebar />
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </div>
    </>
  )
}

export default UserList
