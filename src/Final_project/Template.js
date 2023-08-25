import React, { useState, useEffect } from 'react';
import DashBoard from './Dashboard';
import { useNavigate } from 'react-router-dom';
// import Product from './Product';
// import FooterFunction from './Footer';
// import AccountPage from './AccountPage';
// import LoginPage from './Login';
// import Addproduct from './Addproduct';





function Template() {

    const [data, setData] = useState();
    const navigate = useNavigate();





    async function getData() {
        let response = await fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
        let data = await response.json();
        setData(data)


        //give id and index same as a value

        localStorage.setItem("accountsPage", JSON.stringify(data.accountsPage))
        localStorage.setItem("dasbhoardPage", JSON.stringify(data.dasbhoardPage))
        localStorage.setItem("productsPage", JSON.stringify( data.productsPage))
    }
    useEffect(() => {
        getData()

    }, [])
    function navigation(){
        navigate('/Dashboard')
    }
    return (
        <>
            <div>
                {data &&  <DashBoard/>}
            </div>
        </>
    )
}

export default Template;