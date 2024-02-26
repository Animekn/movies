import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { productData } from '../../dummyData'
import Chart from  '../../components/charts/Chart'
import { Publish } from '@mui/icons-material'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Product = () => {
  return (
    <>
      <Topbar />
            <div style={{
                display: 'flex'

            }}>
                <Sidebar />
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct" style={{textDecoration:'none'}}>
        <buttom className="productAddButton">Create</buttom>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey='Sales' title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
                 className="productInfoImg" />
                 <apn className="productName">Apple Airpods</apn>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <apn className="productInfovalue">123</apn>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <apn className="productInfovalue">5123</apn>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <apn className="productInfovalue">yes</apn>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <apn className="productInfovalue">No</apn>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className='productForm'>
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder='Apple Airpods' />
                <label>In Stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" 
                    className="productUploadImg" />
               <label For="file">
                <Publish/>
               </label>
               <input type="file" id='file' style={{display:"none"}}/>
                </div>
                <button className='productButton'>Update</button>
            </div>
        </form>
      </div>
    </div>
</div>
    </>
  )
}

export default Product
