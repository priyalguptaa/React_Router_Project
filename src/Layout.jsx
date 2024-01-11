import React from 'react'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {/* outlet ka yha basically use he ki jab header or footer same rakhna he but bich ka content flauctuate karna he to vha outlet ka use kar lenge jo react router dom se liya gya he  */}
     <Header/>
     {/* when we want to pass the senario like Home, about etc so we use outlet */}
     {/* outlet jo he vo isko as a base use kar lega or jo uper or niche ka he use same rakh dega or jha bhi outlet de diya he vha apn chixo ko change kar sakte he  */}
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout