import Form from '../Form/Form'
import {Link, useNavigate} from 'react-router-dom'
import UlSub2li from '../UlSubLi/UlSub2Li'

import "../ProductsHeader/ProductsHeader.css"

function ProductsHeader(props) {

    const {selectedModal,
    setSelectedModal, searchTerm, setSearchTerm, searchOnCategory,
    setSearchOnCategory, userName, setUserName, userCatcher, 
    setUserCatcher, setCategory, signInStatus, setSignInStatus, signInUserName,
    bagClickSpan, favoriteClickSpan} = props

    const ulSub2 = ['Home', 'Products', 'About-Us', 'Blog', 'Contact']

    const navigate = useNavigate()
    
    function handleRedirectToBag() {
        navigate(`/bag`)
    }

    function handleOffersEvent() {
        setCategory('offers')
    }

    function handleRedirectToFavorite() {
        navigate('/favorites')
    }

    return (

        <>

            <header className="products-header-menu">
                    
                    <div className="header-products-sub-1">
                        
                        <ul className="ul-products-sub-1">
                            
                            <li id="logo-products">
                                <Link to="/products">AlbVitaFitness</Link>
                            </li>
                            
                            <Form 
                                searchTerm = {searchTerm}
                                setSearchTerm = {setSearchTerm}

                                searchOnCategory = {searchOnCategory}
                                setSearchOnCategory = {setSearchOnCategory}
                            />

                            <>

                                {signInStatus === false ? (

                                    <div className="dropdown-user">

                                        <button className="button-image">
                                            <img src="/assets/icons/user.png" alt=""/>
                                            <span className="span-user-login null"></span>
                                        </button>

                                        <div className="dropdown-content-user">
                                            <Link to ="/sign-in">Sign In</Link>
                                            <Link to ="/sign-up">Sign Up</Link>
                                        </div>

                                    </div>

                                ) :

                                (

                                    <>

                                        <div className="dropdown-user">

                                            <li className="dropbtn-user">
                                                <i className="fas fa-user"></i>
                                                {signInUserName}
                                            </li>

                                            <div className="dropdown-content-user">

                                                <button className="log-out" onClick={function () {
                                                    setSignInStatus(!signInStatus)
                                                }}>

                                                    <span>Log Out</span>
                                                    
                                                </button>

                                            </div>

                                        </div>

                                    </>

                                )}

                            </>

                            <button className="button-image-things" onClick={handleRedirectToFavorite}>
                                
                                <img src="/assets/icons/favorite.png" alt=""/>

                                {favoriteClickSpan > 0 ? (
                                    <span className="span-fav-number">{favoriteClickSpan}</span>
                                ) : null}

                            </button>

                            <button className="button-image-things" onClick={handleRedirectToBag}>
                                
                                <img src="/assets/icons/shopping-bag.png" alt=""/>
                                
                                {bagClickSpan > 0 ? (
                                    <span className="span-bag-stock">{bagClickSpan}</span>
                                ) : null }

                            </button>   
                            
                        </ul>
                            
                    </div>
                        
                    <div className="header-products-sub-2">
                                    
                        <ul className="ul-products-sub-2">
                            
                            {

                                ulSub2.map(item => 
                                    
                                    <UlSub2li 
                                        key = {item}
                                        item = {item}
                                    />
                                    
                                )

                            }

                            <button className = "special-offers" onClick={function () {
                                handleOffersEvent()
                            }}>Offers</button>
                            
                        </ul>
                        
                    </div>
                    
            </header>

        </>

    )

}

export default ProductsHeader