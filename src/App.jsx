// #region 'Importing'
import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css'

import HomePage from './Pages/Home/HomePage'
import ContactPage from './Pages/Contact/ContactPage'
import BlogPage from './Pages/Blog/BlogPage'
import ProductsPage from "./Pages/Products/ProductsPage"
import BlogItemPage from './Pages/BlogItem/BlogItemPage'
import Error404Page from './Pages/Error404/Error404Page'
import AboutUsPage from "./Pages/AboutUs/AboutUsPage"
import ServicesPage from './Pages/Servicess/ServicesPage'
import ServiceItemPage from "./Pages/ServiceItem/ServiceItemPage"
import TeamsPage from "./Pages/Teams/TeamsPage"
import TeamItemPage from "./Pages/TeamItem/TeamItemPage"
import ProductItemPage from './Pages/ProductItem/ProductItemPage'
import SignInPage from './Pages/SignIn/SignInPage'
import SignUpPage from './Pages/SignUp/SignUpPage'
import BagPage from './Pages/Bag/BagPage'
import FavouritesPage from './Pages/Favourites/FavouritesPage'
import { useEffect, useState } from 'react/cjs/react.development'
// #endregion

// #region 'App'
function App() {

  const [items, setItems] = useState([])

  function getItemsFromServer() {

    fetch('http://localhost:8000/items')
      .then(resp => resp.json())
      .then(itemsFromServer1 => {
      setItems(itemsFromServer1)
    })

  }

  useEffect(getItemsFromServer, [])

  // #region 'Return Html'
  return (

    <>

      { 
        //#region 'Routes' 
      }
  
      <Routes>

        <Route 
          index 
          element={<Navigate replace to="/home" />} 
        />

        <Route 
          path = "/home" 
          element = {<HomePage />}>
        </Route>

        <Route 
          path = "/bag" 
          element = {<BagPage 
            items = {items.filter(item => item?.quantity > 0)}
            setItems = {setItems}
          />}>
        </Route>

        <Route 
          path = "/favourites" 
          element = {<FavouritesPage />}>
        </Route>

        <Route 
          path = "/contact" 
          element = {<ContactPage />}>
        </Route>


        <Route 
          path = "/blog" 
          element = {<BlogPage />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItemPage />}>
        </Route>


        <Route 
          path = "/about-us" 
          element = {<AboutUsPage />}>
        </Route>


        <Route 
          path = "/products" 
          element = {<ProductsPage />}>
        </Route>

        <Route 
          path = "/products/:id" 
          element = {<ProductItemPage />}>
        </Route>


        <Route 
          path = "/services" 
          element = {<ServicesPage />}>
        </Route>

        <Route 
          path = "/services/:id" 
          element = {<ServiceItemPage />}>
        </Route>


        <Route 
          path = "/sign-in" 
          element = {<SignInPage />}>
        </Route>

        <Route 
          path = "/sign-up" 
          element = {<SignUpPage />}>
        </Route>


        <Route 
          path = "/teams" 
          element = {<TeamsPage />}>
        </Route>

        <Route 
          path = "/teams/:id" 
          element = {<TeamItemPage />}>
        </Route>


        <Route 
          path = "*" 
          element = {<Error404Page />}>
        </Route>
        
      </Routes>
      
      { 
        // #endregion 
      }

    </>

  )
  //#endregion

}
// #endregion

export default App