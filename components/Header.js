import React from 'react'

const Header = () => {
    return (
        <>
            <div>
                <div id="login" className="scorllbar-y">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#sign-in">Sign In</a> </li>
                        <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#sign-up">Sign Up</a> </li>
                    </ul>
                    <div className="tab-content">
                        <div id="sign-in" className="tab-pane active">
                            <form className="poup-form">
                                <label>Username or Email Address <span className="required">*</span></label>
                                <input name="username" type="text" />
                                <label>Password <span className="required">*</span></label>
                                <input name="password" type="password" />
                                <div className="login-link">
                                    <div className=" custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="remember" name="remember" />
                                        <label className="custom-control-label" htmlFor="remember"> Remember Me?</label>
                                    </div>
                                    <a href="#">Lost your Password ?</a>
                                </div>
                                <input name="login" type="button" defaultValue="Sign In" className="submit" />
                                <div className="login-link"> <label>Don't have an account?</label> <a href="#sign-up">Register</a> </div>
                            </form>
                            <ul className="social">
                                <li className="tw"><a href="#"><i className="fab fa-twitter" /> Connect with Twitter </a></li>
                                <li className="fb"><a href="#"><i className="fab fa-facebook-f" /> Connect with Facebook </a></li>
                                <li className="gp"><a href="#"><i className="fab fa-google" /> Connect with Google </a></li>
                            </ul>
                        </div>
                        <div id="sign-up" className="tab-pane">
                            <form className="poup-form">
                                <label>Email Address <span className="required">*</span></label>
                                <input name="emailid" type="text" />
                                <label>Username <span className="required">*</span></label>
                                <input name="username" type="text" />
                                <label>Password <span className="required">*</span></label>
                                <input name="password" type="password" />
                                <input name="register" type="button" defaultValue="Sign Up" className="submit" />
                            </form>
                            <div className="login-link"> <label>Already have an account?</label> <a href="#sign-in">Sign in</a>
                            </div>
                            <ul className="social">
                                <li className="tw"><a href="#"><i className="fab fa-twitter" /> Connect with Twitter </a></li>
                                <li className="fb"><a href="#"><i className="fab fa-facebook-f" /> Connect with Facebook </a></li>
                                <li className="gp"><a href="#"><i className="fab fa-google" /> Connect with Google </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header id="header" className="site-header site-header-two">
                    <div className="container-fluid">
                        <div className="container-box header-base sina-nav">
                            {/* Start widget-bar */}
                            <div className="widget-bar show">
                                <a href="#" className="close-widget-bar"><i className="fa fa-times" /></a>
                                <div className="widget">
                                    <h4 className="title">Custom Pages</h4>
                                    <ul className="link">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h4 className="title">Additional Links</h4>
                                    <ul className="link">
                                        <li><a href="#">Retina Homepage</a></li>
                                        <li><a href="#">New Page Examples</a></li>
                                        <li><a href="#">Parallax Sections</a></li>
                                        <li><a href="#">Shortcode Central</a></li>
                                        <li><a href="#">Ultimate Font Collection</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End widget-bar */}
                            <div className="sina-nav-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars" />
                                </button>
                                <a className="sina-brand" href="home-01.html">
                                    <img src="images/logo.png" alt="Listicle" className="logo" />
                                    {/*<h2>listicle-header</h2> <p>Learn Something New</p>*/}
                                </a>
                            </div>{/* .sina-nav-header */}
                            <div className="main-search-box search-box">
                                <form className="search form-inline-three">
                                    <div className="col-md-2 col-6">
                                        <select name="location" className="field bg-yellow border-0">
                                            <option value="london">London</option>
                                            <option value="us">Us</option>
                                            <option value="uk">Uk</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <select name="type" className="field">
                                            <option value="buy">Buy</option>
                                            <option value="rent">Rent</option>
                                            <option value="agent">Agent</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input name="key-words" type="text" placeholder="Locality or Builder or Project Name" className="field" />
                                    </div>
                                    <button className="btn-green" type="submit"><i className="fa fa-search" /></button>
                                    <button type="button" className="btn-advance">Advanced Search </button>
                                </form>
                                <div id="advanced-search-box" className="search">
                                    <div className="row">
                                        <div className="col-sm-6 price-filter">
                                            <label>Price - 500k-1000k</label>
                                            <input id="pricee" name="price" type="text" defaultValue data-slider-min={500} data-slider-max={1000} data-slider-step={5} data-slider-value="[550,750]" data-slider-tooltip="show" data-slider-handle="square" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Bedrooms</label>
                                            <input id="bedrooms-min" name="bedrooms-min" type="number" min={1} max={10} placeholder="Min" className="col-6" />
                                            <input id="bedrooms-max" name="bedrooms-max" type="number" min={1} max={10} placeholder="Max" className="col-6" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Bathrooms</label>
                                            <input id="bathrooms-min" name="bathrooms-min" type="number" placeholder="Min" min={1} max={10} className="col-6" />
                                            <input id="bathrooms-max" name="bathrooms-max" type="number" placeholder="Max" min={1} max={10} className="col-6" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Garages</label>
                                            <input id="garages-min" name="garages-min" type="number" placeholder="Min" min={1} max={10} className="col-6" />
                                            <input id="garages-max" name="garages-max" type="number" placeholder="Max" min={1} max={10} className="col-6" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Area(sq. ft)</label>
                                            <input id="area-min" name="area-min" type="number" placeholder="Min" min={1000} max={10000} className="col-6" />
                                            <input id="area-max" name="area-max" type="number" placeholder="Max" min={1000} max={10000} className="col-6" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>New Projects</label>
                                            <select name="Project">
                                                <option value={1}>Luxury Home</option>
                                                <option value={2}>Projects 2</option>
                                            </select>
                                        </div>
                                        <div className="col-12" id="accordion">
                                            <div className="card-header" id="headingOneA">
                                                <button className="btn btn-link acc-head collapsed" data-toggle="collapse" data-target="#collapseOneA" aria-expanded="true" aria-controls="collapseOneA"> Amenities </button>
                                            </div>
                                            <div id="collapseOneA" className="collapse" aria-labelledby="headingOneA" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul className="tag-filter">
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="air-conditioning" name="air-conditioning" />
                                                            <label className="custom-control-label" htmlFor="air-conditioning"> Air
                          Conditioning</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="gym" name="gym" />
                                                            <label className="custom-control-label" htmlFor="gym"> Gym</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="refrigerator" name="refrigerator" />
                                                            <label className="custom-control-label" htmlFor="refrigerator">
                                                                Refrigerator</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="tv-cable" name="tv-cable" />
                                                            <label className="custom-control-label" htmlFor="tv-cable"> TV
                          Cable</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="kitchen" name="kitchen" />
                                                            <label className="custom-control-label" htmlFor="kitchen">
                                                                Kitchen</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="basement" name="basement" />
                                                            <label className="custom-control-label" htmlFor="basement">
                                                                Basement</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="barbeque" name="barbeque" />
                                                            <label className="custom-control-label" htmlFor="barbeque">
                                                                Barbeque</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="laundry" name="laundry" />
                                                            <label className="custom-control-label" htmlFor="laundry">
                                                                Laundry</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="sauna" name="sauna" />
                                                            <label className="custom-control-label" htmlFor="sauna"> Sauna</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="washer" name="washer" />
                                                            <label className="custom-control-label" htmlFor="washer"> Washer</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="exterior" name="exterior" />
                                                            <label className="custom-control-label" htmlFor="exterior">
                                                                Exterior</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="plumbing" name="plumbing" />
                                                            <label className="custom-control-label" htmlFor="plumbing">
                                                                Plumbing</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="dryer" name="dryer" />
                                                            <label className="custom-control-label" htmlFor="dryer"> Dryer</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="microwave" name="microwave" />
                                                            <label className="custom-control-label" htmlFor="microwave">
                                                                Microwave</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="swimming-pool" name="swimming-pool" />
                                                            <label className="custom-control-label" htmlFor="swimming-pool">
                                                                Swimming Pool</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="wifi" name="wifi" />
                                                            <label className="custom-control-label" htmlFor="wifi"> WiFi</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="landscaping" name="landscaping" />
                                                            <label className="custom-control-label" htmlFor="landscaping">
                                                                Landscaping</label>
                                                        </li>
                                                        <li className="col-sm-6 custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="roof" name="roof" />
                                                            <label className="custom-control-label" htmlFor="roof"> Roof</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>{/* accordion #end */}
                                    </div>
                                </div>{/* #advanced-search-box */}
                            </div>{/* main-search-box*/}
                            <div className="extension-nav">
                                <div className="login-nav">
                                    <ul className="nav rounded-nav">
                                        <li className="nav-item search"><a className="nav-link" href="#"><i className="fa fa-search" /></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-lightbulb fa-flip-horizontal" /></a></li>
                                        <li className="nav-item"><a className="nav-link various" href="#login"><i className="fas fa-user" /></a></li>
                                    </ul>
                                    <ul className="nav">
                                        <li className="nav-item add-listing"><a className="nav-link" href="#"><span>+ Add
                    Listing</span></a></li>
                                        <li className="nav-item widget-bar-btn"><a className="nav-link" href="#"><i className="fas fa-bars" /></a></li>
                                    </ul>
                                </div>{/* .login-nav */}
                            </div>
                        </div>
                        {/*.container-box*/}
                    </div>
                    <hr />
                    <div className="container-fluid">
                        <nav className="sina-nav mobile-sidebar" data-top={0}>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="navbar-collapse collapse" id="navbar-menu">
                                <ul className="sina-menu sina-menu-center" data-in="fadeIn" data-out="fadeInOut">
                                    <li className="dropdown menu-item-has-mega-menu half-megha-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fas fa-home" /> Home</a>
                                        <div className="mega-menu dropdown-menu">
                                            <div className="mega-menu-row" role="menu">
                                                <div className="mega-menu-col col-md-6">
                                                    <h4 className="mega-menu-col-title">Home Pages</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="home-01.html">Home 01</a></li>
                                                        <li><a href="home-02.html">Home 02</a></li>
                                                        <li><a href="home-03.html">Home 03</a></li>
                                                        <li><a href="home-04.html">Home 04</a></li>
                                                        <li><a href="home-05.html">Home 05</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-col col-md-6">
                                                    <h4 className="mega-menu-col-title">Home Creative</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="home-06.html">Home 06</a></li>
                                                        <li><a href="home-07.html">Home 07 - <span className="description">Map
                            Style</span></a></li>
                                                        <li><a href="home-08.html">Home 08</a></li>
                                                        <li><a href="home-09.html">Home 09</a></li>
                                                        <li><a href="home-10.html">Home 10</a></li>
                                                    </ul>
                                                </div>
                                            </div>{/* end row */}
                                        </div>
                                    </li>
                                    <li className="dropdown menu-item-has-mega-menu half-megha-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fas fa-map-marker-alt" /> Listing</a>
                                        <div className="mega-menu dropdown-menu">
                                            <div className="mega-menu-row" role="menu">
                                                <div className="mega-menu-col col-md-4">
                                                    <h4 className="mega-menu-col-title">Listing Styles</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="listing-01.html">Listing 01<span className="description"> -
                            Grid Box</span></a></li>
                                                        <li><a href="listing-02.html">Listing 02<span className="description"> -
                            Grid</span></a></li>
                                                        <li><a href="listing-03.html">Listing 03<span className="description"> -
                            Tiles Box</span></a></li>
                                                        <li><a href="listing-04.html">Listing 04<span className="description"> -
                            Tiles</span></a></li>
                                                        <li><a href="listing-05.html">Listing 05<span className="description"> -
                            List Box</span></a></li>
                                                        <li><a href="listing-06.html">Listing 06<span className="description"> -
                            List</span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-col col-md-8">
                                                    <h4 className="mega-menu-col-title">Listing Page Style</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="listing-page-01.html">Listing Page 01<span className="description"> - with Map</span></a></li>
                                                        <li><a href="listing-page-02.html">Listing Page 02<span className="description"> - with Banner</span></a></li>
                                                        <li><a href="listing-page-03.html">Listing Page 03<span className="description"> - Full</span></a></li>
                                                    </ul>
                                                    <h4 className="mega-menu-col-title">Listing Detail Style</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="listing-detail-01.html">Listing Detail 01</a></li>
                                                        <li><a href="listing-detail-02.html">Listing Detail 02</a></li>
                                                        <li><a href="listing-detail-03.html">Listing Detail 03</a></li>
                                                        <li><a href="listing-detail-04.html">Listing Detail 04</a></li>
                                                        <li><a href="listing-detail-05.html">Listing Detail 05</a></li>
                                                    </ul>
                                                </div>
                                            </div>{/* end row */}
                                        </div>
                                    </li>
                                    <li className="dropdown menu-item-has-mega-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="far fa-folder-open" /> Properties</a>
                                        <div className="mega-menu dropdown-menu">
                                            <div className="mega-menu-row" role="menu">
                                                <div className="mega-menu-col col-lg-3 col-md-4 col-sm-6">
                                                    <h4 className="mega-menu-col-title">Home</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Villa</a></li>
                                                        <li><a href="#">Town House</a></li>
                                                        <li><a href="#">Kids Friendly</a></li>
                                                        <li><a href="#">Luxury Homes</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-col col-lg-3 col-md-4 col-sm-6">
                                                    <h4 className="mega-menu-col-title">Office</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Apartment Office</a></li>
                                                        <li><a href="#">Budget Office</a></li>
                                                        <li><a href="#">Stylish Office</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-col col-lg-3 col-md-4 col-sm-6">
                                                    <h4 className="mega-menu-col-title">Apartment</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Budget Apartment</a></li>
                                                        <li><a href="#">Industrial Apartment</a></li>
                                                        <li><a href="#">Royal Apartment</a></li>
                                                        <li><a href="#">Stylish Apartment</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-col col-lg-3 col-md-4 col-sm-6">
                                                    <h4 className="mega-menu-col-title">Plots</h4>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Natural Area</a></li>
                                                        <li><a href="#">Industrial Area</a></li>
                                                        <li><a href="#">Royal Area</a></li>
                                                        <li><a href="#">Market Area</a></li>
                                                    </ul>
                                                </div>
                                            </div>{/* end row */}
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="far fa-file" /> Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown">
                                                <a href="dashboard.html" className="dropdown-toggle" data-toggle="dropdown">Dashboard</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="dashboard.html">Dashboard</a></li>
                                                    <li><a href="dashboard-property-form.html">Dashboard Property Form</a>
                                                    </li>
                                                    <li><a href="dashboard-properties.html">Dashboard Properties</a></li>
                                                    <li><a href="dashboard-favorites.html">Dashboard Favorites</a></li>
                                                    <li><a href="dashboard-billing.html">Dashboard Billing</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="404.html">404 Page</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fas fa-globe-asia" /> Agents</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="agencies.html">Agencies Page</a></li>
                                            <li><a href="agency-detail.html">Agencies Detail Page</a></li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Agents Pages</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="agents-01.html">Agents Page 01</a></li>
                                                    <li><a href="agents-02.html">Agents Page 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="agent-detail.html">Agents Detail Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blogs.html">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>{/* /.navbar-collapse */}
                        </nav>
                    </div>{/* .container-fluid */}
                </header>
            </div>

        </>
    )
}

export default Header
