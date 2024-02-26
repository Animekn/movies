import React, { useContext, useEffect } from 'react'
import './movieList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import {MovieContext} from "../../context/movieContext/MovieContext"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { getMovies } from '../../context/movieContext/MovieApiCalls'

const ProductList = () => {
    // const [movies, dispatch] = useContext(MovieContext)

    // useEffect(() => {
    //     getMovies(dispatch)
    // }, [dispatch])
    
    useEffect(() => {
        getMovies()
    }, [])

    const handleDelete = (id) => {
        // setData(data.filter(item => item.id !== id));
    };

// console.log (movies.data)


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='productListUser'>
                        <img className='productListImg' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
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
                <div className='productlist'>
                    {/* <DataGrid
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
            /> */}
                </div>
            </div>
        </>
    )
}

export default ProductList
