import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { json, Link, Navigate, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { icon } from "@fortawesome/fontawesome-svg-core";


function Product() {
    let data = JSON.parse(localStorage.getItem('productsPage'))


    const [currentPage, setCurrentPage] = useState(0)
    const [searchInput, setSearchInput] = useState("");
    let [Categories, setCategories] = useState(data.categories)
    let [Products, setProducts] = useState(data.products)
    let index = [];

    //pagination
    const PerPage = 3

    //make offset between fistindex to lastindex
    const offset = currentPage * PerPage
    // console.log(Products)
    Products = Products.slice(offset, offset + PerPage)

    //PAGE COUNT 
    const pageCount = Math.ceil(data.products.length / PerPage)

    //make index as per paginatio with reference og primary data
    for (var i = 0; i < PerPage; i++) {
        index.push(offset + i)
    }
    // console.log(index)


    function HandlePageClick({ selected: selectedPage }) {
        // console.log("selectedpage", selectedPage)
        setCurrentPage(selectedPage);

    }
    function HandleClick() {
        const enteredName = prompt('Please enter new category')
        if (enteredName) {
            data.categories.push(enteredName)
            data.categories = data.categories.map((val, ind) => {
                return (val)
            })
            setCategories(data.categories)
            localStorage.setItem('productsPage', JSON.stringify(data))
        }
    }


    function handleCaDelete(e) {
        data.categories.splice(e.currentTarget.id, 1)
        data.categories = data.categories.map((val, ind) => {
            return (val)
        })
        setCategories(data.categories)
        localStorage.setItem('productsPage', JSON.stringify(data))

    }


    function HandleProDelete(e) {
        const id = e.currentTarget.id
        swal({
            className:'first',
            title: "Are you sure you want to delete !",
            icon: "warning",
            buttons: true,
            infoMode: true,
        }).then((responce) => {
            if (responce) {
                data.products.splice(id, 1)
                data.products = data.products.map((val, ind) => {
                    return (val)
                })
                localStorage.setItem('productsPage', JSON.stringify(data))
                setProducts(data.products)
                swal({
                    className:'second',
                    title: "The item is deleted.",
                    icon: "success",
                    buttons: false, 
                    timer: 1000,
        
                });
            }else{
                return ;
            }
        })

    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);

    };

    if (searchInput.length > 0) {
        const search = searchInput.toLowerCase()
        Products = data.products.filter((value) => {
            return value.category.toLowerCase().includes(search)

        })
    } else {
        Products = Products
    }

    return (
        <>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 p-4 mt-4 product-background  me-4">
                        <input type={'text'} className='w-100 text-center text-white mb-3 search p-1' onChange={handleChange} placeholder='Search it.....'></input>
                        <div className='product-table'>
                            <table className='text-center text-white'>
                                <thead>
                                    <tr className="mt-5">
                                        <th>CATEGORIES</th>
                                        <th>PRODUCT NAME</th>
                                        <th>UNIT SOLD</th>
                                        <th>IN STOCK</th>
                                        <th>EXPIRE DATE</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Products.map((val, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td>{val.category}</td>
                                                <td>{val.description}</td>
                                                <td>{val.unitSold}</td>
                                                <td>{val.stock}</td>
                                                <td>{val.expireDate}</td>
                                                <td className='tr-button'>
                                                    <Link to='/AddProduct' state={{ 'index': index[ind], 'status': true }} >
                                                        <button className='mb-3 edit' id={index[ind]} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="" viewBox="0 0 576 512">
                                                                <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" /></svg>
                                                        </button>
                                                    </Link>
                                                    <button onClick={HandleProDelete} id={index[ind]}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <Link className="button link" state={{ 'status': false }} to='/AddProduct'>
                            <button className="btn">Add new product</button>
                        </Link>
                        <div className="button link mb-3">
                            <button className="btn ">
                                Delete selected products
                            </button>
                        </div>
                        <ReactPaginate
                            previousLabel={"<- previous"}
                            nextLabel={"Next ->"}
                            pageCount={pageCount}
                            onPageChange={HandlePageClick}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previoesLink"}
                            nextLinkClassName={"nextLink"}
                            disabledLinkClassName={"diableName"}
                            activeClassName={"activeName"}
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 p-5 mt-4 product-background">
                        <div className='product-table'>
                            <table className=' text-white'>
                                <thead>
                                    <tr>
                                        <th>
                                            <h5>Product Categories</h5>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {Categories.map((val, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td className='tr-button p-3 justify-content-between d-flex'>
                                                    {val}
                                                    <button onClick={handleCaDelete} id={ind} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="button">
                            <button className="btn" onClick={HandleClick}>Add new categories</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;