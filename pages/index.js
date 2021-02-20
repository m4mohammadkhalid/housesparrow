import Head from 'next/head'

export default function Home() {
  return (
        <>
        <Head>
          <title>House</title>
              <meta charSet="UTF-8" />
	            <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
            <div className="wrapper">
  <div id="page" className="site-page">
    <main id="main" className="site-main">
      <section id="banner" className="banner banner-two">
        <div className="bannerbg-two bannerbg-img">
          <div className="container-box">
            <div className="banner-block">
              <img src="images/women.png" alt="women" className="col-xl-5 col-lg-5 col-md-4 col-sm-9 object" />
              <div className="container banner-absolute">
                <div className="row">
                  <div className="banner-detail-box col-lg-7 col-md-8 col-sm-9">
                    <div className="banner-detail">
                      <h2>Find Nearby Attractions</h2>
                      <p>Expolore top-rated attractions, activities and more</p>
                    </div>
                    <div className="search-tab tablayout-one">
                      <ul className="nav nav-tabs">
                        <li className="nav-item"><a data-toggle="tab" className="nav-link active" href="#buy">Buy</a></li>
                        <li className="nav-item"><a data-toggle="tab" className="nav-link" href="#rent">Rent</a></li>
                        <li className="nav-item"><a data-toggle="tab" className="nav-link" href="#agents">Agents</a></li>
                      </ul>
                      <div className="tab-content">
                        <div className="advanced-toggle">
                          <span className="txt">Advanced Search</span>
                          <button type="button" className="btn-advance btn-toggle" data-toggle="button" aria-pressed="false">
                            <span className="handle" />
                          </button>
                        </div>
                        <div id="buy" className="tab-pane fade active show">
                          <form className="search">
                            <div className="col-lg-6 col-md-4 col-6">
                              <input name="key-words-buy" type="text" placeholder="Property ID or Keyword" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-3">
                              <select name="location">
                                <option value>location</option>
                                <option value="london">London</option>
                                <option value="us">Us</option>
                                <option value="uk">Uk</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-4 col-3">
                              <select name="status">
                                <option value>Status</option>
                                <option value="published">Published</option>
                                <option value="pending">Pending</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-5">
                              <select name="property-type">
                                <option value>Property Type</option>
                                <option value="plot">Plot</option>
                                <option value="house">House</option>
                                <option value="villa">Villa</option>
                                <option value="office">Office</option>
                                <option value="apartment">Apartment</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-3">
                              <input name="budget" type="text" placeholder="budget" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-4">
                              <button name="search" value="search" className="button"><i className="fas fa-search" /> Search</button>
                            </div>
                          </form>
                        </div>{/* #buy */}
                        <div id="rent" className="tab-pane fade">
                          <form className="search">
                            <div className="col-lg-6 col-md-4 col-6">
                              <input name="key-words-rent" type="text" placeholder="Property ID or Keyword" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-3">
                              <select name="location">
                                <option value>location</option>
                                <option value="london">London</option>
                                <option value="us">Us</option>
                                <option value="uk">Uk</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-4 col-3">
                              <select name="status">
                                <option value>Status</option>
                                <option value="published">Published</option>
                                <option value="pending">Pending</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-5">
                              <select name="property-type">
                                <option value>Property Type</option>
                                <option value="plot">Plot</option>
                                <option value="house">House</option>
                                <option value="villa">Villa</option>
                                <option value="office">Office</option>
                                <option value="apartment">Apartment</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-3">
                              <input name="budget" type="text" placeholder="budget" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-4">
                              <button name="search" value="search" className="button"><i className="fas fa-search" /> Search</button>
                            </div>
                          </form>
                        </div>{/* #rent */}
                        <div id="agents" className="tab-pane fade">
                          <form className="search">
                            <div className="col-lg-6 col-md-4 col-5">
                              <input name="key-words-agent" type="text" placeholder="Agent ID or Name" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-3">
                              <select name="location">
                                <option value>location</option>
                                <option value="london">London</option>
                                <option value="us">Us</option>
                                <option value="uk">Uk</option>
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-4 col-4">
                              <select name="agent-type">
                                <option value>Agent Type</option>
                                <option value="broker">Broker</option>
                                <option value="seller">Seller</option>
                                <option value="pending">Buying Agent</option>
                                <option value="pending">Selling Agent</option>
                                <option value="pending">Company Agent</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-5">
                              <select name="property-type">
                                <option value>Property Type</option>
                                <option value="plot">Plot</option>
                                <option value="house">House</option>
                                <option value="villa">Villa</option>
                                <option value="office">Office</option>
                                <option value="apartment">Apartment</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-3">
                              <input name="budget" type="text" placeholder="budget" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-4">
                              <button name="search" value="search" className="button"><i className="fas fa-search" /> Search</button>
                            </div>
                          </form>
                        </div>{/* #agent */}
                        <div id="advanced-search-box" className="search">
                          <div className="row">
                            <div className="col-lg-6 col-md-4 col-sm-6 price-filter">
                              <label>Price - 500k-1000k</label>
                              <input id="price" name="price" type="text" defaultValue data-slider-min={500} data-slider-max={1000} data-slider-step={5} data-slider-value="[550,750]" data-slider-tooltip="show" data-slider-handle="square" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <label>Bedrooms</label>
                              <input id="bedrooms-min" name="bedrooms-min" type="number" min={1} max={10} placeholder="Min" className="col-6" />
                              <input id="bedrooms-max" name="bedrooms-max" type="number" min={1} max={10} placeholder="Max" className="col-6" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <label>Bathrooms</label>
                              <input id="bathrooms-min" name="bathrooms-min" type="number" placeholder="Min" min={1} max={10} className="col-6" />
                              <input id="bathrooms-max" name="bathrooms-max" type="number" placeholder="Max" min={1} max={10} className="col-6" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <label>Garages</label>
                              <input id="garages-min" name="garages-min" type="number" placeholder="Min" min={1} max={10} className="col-6" />
                              <input id="garages-max" name="garages-max" type="number" placeholder="Max" min={1} max={10} className="col-6" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                              <label>Area(sq. ft)</label>
                              <input id="area-min" name="area-min" type="number" placeholder="Min" min={1000} max={10000} className="col-6" />
                              <input id="area-max" name="area-max" type="number" placeholder="Max" min={1000} max={10000} className="col-6" />
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-12">
                              <label>New Projects</label>
                              <select name="Project">
                                <option value={1}>Luxury Home</option>
                                <option value={2}>Projects 2</option>
                              </select>
                            </div>
                            <div className="col-12" id="accordion">
                              <div className="card-header" id="headingOneA">
                                <button className="btn btn-link acc-head collapsed" data-toggle="collapse" data-target="#collapseOneA" aria-expanded="true" aria-controls="collapseOneA"> Amenities
                                </button>
                              </div>
                              <div id="collapseOneA" className="collapse" aria-labelledby="headingOneA" data-parent="#accordion">
                                <div className="card-body">
                                  <ul className="tag-filter">
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="air-conditioning" name="air-conditioning" defaultChecked />
                                      <label className="custom-control-label" htmlFor="air-conditioning"> Air
                                        Conditioning</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="gym" name="gym" />
                                      <label className="custom-control-label" htmlFor="gym"> Gym</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="refrigerator" name="refrigerator" defaultChecked />
                                      <label className="custom-control-label" htmlFor="refrigerator">
                                        Refrigerator</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="tv-cable" name="tv-cable" defaultChecked />
                                      <label className="custom-control-label" htmlFor="tv-cable"> TV Cable</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="kitchen" name="kitchen" />
                                      <label className="custom-control-label" htmlFor="kitchen"> Kitchen</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="basement" name="basement" />
                                      <label className="custom-control-label" htmlFor="basement"> Basement</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="barbeque" name="barbeque" />
                                      <label className="custom-control-label" htmlFor="barbeque"> Barbeque</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="laundry" name="laundry" />
                                      <label className="custom-control-label" htmlFor="laundry"> Laundry</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="sauna" name="sauna" />
                                      <label className="custom-control-label" htmlFor="sauna"> Sauna</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="washer" name="washer" />
                                      <label className="custom-control-label" htmlFor="washer"> Washer</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="exterior" name="exterior" />
                                      <label className="custom-control-label" htmlFor="exterior"> Exterior</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="plumbing" name="plumbing" />
                                      <label className="custom-control-label" htmlFor="plumbing"> Plumbing</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="dryer" name="dryer" />
                                      <label className="custom-control-label" htmlFor="dryer"> Dryer</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="microwave" name="microwave" defaultChecked />
                                      <label className="custom-control-label" htmlFor="microwave"> Microwave</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="swimming-pool" name="swimming-pool" />
                                      <label className="custom-control-label" htmlFor="swimming-pool"> Swimming
                                        Pool</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="wifi" name="wifi" defaultChecked />
                                      <label className="custom-control-label" htmlFor="wifi"> WiFi</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="landscaping" name="landscaping" />
                                      <label className="custom-control-label" htmlFor="landscaping">
                                        Landscaping</label>
                                    </li>
                                    <li className="col-xl-3 col-md-4 col-sm-6 custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="roof" name="roof" />
                                      <label className="custom-control-label" htmlFor="roof"> Roof</label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>{/* accordion #end */}
                          </div>
                        </div>{/* #advanced-search-box */}
                      </div>{/* .tab-content */}
                    </div>{/* .search-tab */}
                  </div>
                </div>
              </div>{/* .container end */}
            </div>
          </div>{/* .container-box end */}
        </div>
      </section>{/* .banner */}
      <section className="slider-quicklinks">
        <div className="container">
          <div className="owl-carousel four-item hide-dots slidernav-one">
            <div className="item">
              <div className="listicle-box quicklink-box">
                <div className="icon"><i className="fas fa-hand-holding-usd" /></div>
                <div className="quicklink">
                  <h6>Get the Value of any Property</h6>
                  <a href="#">Calculate Now <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="listicle-box quicklink-box">
                <div className="icon"><i className="fas fa-comments" /></div>
                <div className="quicklink">
                  <h6>Ask your Questions Here</h6>
                  <a href="#">Join Forum <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="listicle-box quicklink-box">
                <div className="icon"><i className="fas fa-home" /></div>
                <div className="quicklink">
                  <h6>Home Loan at Best Rates</h6>
                  <a href="#">Apply Now <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="listicle-box quicklink-box">
                <div className="icon"><i className="fas fa-user" /></div>
                <div className="quicklink">
                  <h6>Expert Services</h6>
                  <a href="#">Know More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>{/* .four-item */}
        </div>
      </section>{/* .slider-quicklinks */}
      <section className="collections section pt-0">
        <div className="container">
          <div className="heading-style heading-style-two mt-0 mb-0">
            <h2 className="heading mt-0">Collection for you</h2>
          </div>
          <div className="row">
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-1.png" alt="home" className="icon" /></a>
              <h6><a href="#">Budget Homes</a></h6>
            </div>
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-2.png" alt="home" className="icon" /></a>
              <h6><a href="#">Luxury Homes</a></h6>
            </div>
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-3.png" alt="home" className="icon" /></a>
              <h6><a href="#">Kids Friendly Homes</a></h6>
            </div>
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-4.png" alt="home" className="icon" /></a>
              <h6><a href="#">Home Office Homes</a></h6>
            </div>
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-5.png" alt="home" className="icon" /></a>
              <h6><a href="#">Stylish Homes</a></h6>
            </div>
            <div className="section-block col-lg-2 col-md-4 col-6">
              <a href="#"><img src="images/h-6.png" alt="home" className="icon" /></a>
              <h6><a href="#">Nature Homes</a></h6>
            </div>
          </div>
        </div>
      </section>{/* .collections */}
      <section className="properties home-ten section">
        <div className="container">
          <div className="heading-style heading-style-four">
            <div className="heading-bar">
              <h5 className="heading">New Properties</h5>
            </div>
            <a href="#" className="link view-link">View More</a>
          </div>
          <div className="row gridbox-layout">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-sale">for sale</span>
                    <span className="type">villa</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-1.jpg" alt="property-1" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Newport
                      Beach, CA</p>
                    <h2><a href="#">Countryside Modern Summer House</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>1400 </li>
                      <li className="bed"><span>Bed</span>3</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>2</li>
                      <li className="price"><span>Price</span>$160000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-1.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-rent">for rent</span>
                    <span className="type">House</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission
                      Viejo, CA</p>
                    <h2><a href="#">Summer House with a pole</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>2400 </li>
                      <li className="bed"><span>Bed</span>4</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>1</li>
                      <li className="pool"><span>Pool</span>1</li>
                      <li className="price"><span>Price</span>26000</li>
                      <li className="price period"><span>Per Month</span>$800</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-sale">for sale</span>
                    <span className="type">office</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los
                      Angeles, CA</p>
                    <h2><a href="#">Complete Corporate Office near that to sabestian villa</a>
                    </h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>1100 </li>
                      <li className="bed"><span>Bed</span>3</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>2</li>
                      <li className="price"><span>Price</span>$132000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-rent">for rent</span>
                    <span className="type">Apartment</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly
                      Hills, CA</p>
                    <h2><a href="#">Modern apartment in the city</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>2400 </li>
                      <li className="bed"><span>Bed</span>4</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>1</li>
                      <li className="price"><span>Price</span>$160000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-sale">for sale</span>
                    <span className="type">villa</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-5.jpg" alt="property-1" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Newport
                      Beach, CA</p>
                    <h2><a href="#">Countryside Modern Summer House</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>1400 </li>
                      <li className="bed"><span>Bed</span>3</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>2</li>
                      <li className="price"><span>Price</span>$160000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-1.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-rent">for rent</span>
                    <span className="type">House</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-6.jpg" alt="property-2" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission
                      Viejo, CA</p>
                    <h2><a href="#">Summer House with a pole</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>2400 </li>
                      <li className="bed"><span>Bed</span>4</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>1</li>
                      <li className="pool"><span>Pool</span>1</li>
                      <li className="price"><span>Price</span>26000</li>
                      <li className="price period"><span>Per Month</span>$800</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-sale">for sale</span>
                    <span className="type">office</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-7.jpg" alt="propertyl-3" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los
                      Angeles, CA</p>
                    <h2><a href="#">Complete Corporate Office near that to sabestian villa</a>
                    </h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>1100 </li>
                      <li className="bed"><span>Bed</span>3</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>2</li>
                      <li className="price"><span>Price</span>$132000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <div className="star"><i className="fas fa-star" /></div>
                  <div className="info">
                    <span className="for-rent">for rent</span>
                    <span className="type">Apartment</span>
                  </div>
                  <a href="#" className="zoom-img"><img src="images/property-8.jpg" alt="property-4" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly
                      Hills, CA</p>
                    <h2><a href="#">Modern apartment in the city</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul className="icons-inline">
                      <li className="sqft"><span>Sq. Ft</span>2400 </li>
                      <li className="bed"><span>Bed</span>4</li>
                      <li className="bath"><span>Bath</span>2</li>
                      <li className="car"><span>Car</span>1</li>
                      <li className="price"><span>Price</span>$160000</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                    <ul>
                      <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                            detail</span></a></li>
                      <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                      <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a>
                      </li>
                      <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
          </div>
        </div>
      </section>{/* .properties */}
      <section className="city section">
        <div className="container">
          <div className="heading-style heading-style-one">
            <h2 className="heading">Property by City</h2>
            <p className="desc">Vestibulum a imperdiet leo. Donec malesuada, lacus eget aliquam imperdiet,
              tellus leo lobortis</p>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <a href="#" className="city-pic bg-757cf3">
                <img src="images/city-1.jpg" alt="city" />
                <h3>newyork <span>18 Properties</span></h3>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" className="city-pic bg-757cf3">
                <h3>Chicago <span>23 Properties</span></h3>
                <img src="images/city-2.jpg" alt="city" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" className="city-pic bg-757cf3">
                <h3>Manthantten <span>15 Properties</span></h3>
                <img src="images/city-3.jpg" alt="city" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" className="city-pic bg-757cf3">
                <h3>Los Angles <span>22 Properties</span></h3>
                <img src="images/city-4.jpg" alt="city" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" className="city-pic bg-757cf3">
                <h3>Miami <span>10 Properties</span></h3>
                <img src="images/city-5.jpg" alt="city" />
              </a>
            </div>
          </div>
        </div>
      </section>{/* .city */}
      <section className="agents-agencies bg-f1f9fe section">
        <div className="container">
          <div className="heading-style heading-style-one mt-0">
            <h2 className="heading h2">Meet our agents</h2>
            <p className="desc">Aestibulum a imperdiet leo. Donec malesuada, lacus eget aliquam imperdiet,
              tellus leo lobortis</p>
          </div>
          <div className="gridbox-layout owl-carousel four-item show-dots">
            <div className="item">
              <div className="listicle-box">
                <figure>
                  <a href="#" className="zoom-img"><img src="images/agent-1.jpg" alt="agent" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p>Buying Agent</p>
                    <h2><a href="agent-detail.html">Michael Fuller</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul>
                      <li><i className="fas fa-mobile-alt" />(123) 123-7007</li>
                      <li><i className="fa fa-envelope" />agent@example.com</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <ul>
                      <li className="view"><a href="#"><span>view profile</span><i className="fas fa-angle-right" /></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="item">
              <div className="listicle-box">
                <figure>
                  <a href="#" className="zoom-img"><img src="images/agent-2.jpg" alt="agent" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p>Selling Agent</p>
                    <h2><a href="agent-detail-2.html">Linda Riddik</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul>
                      <li><i className="fas fa-mobile-alt" />(123) 123-7007</li>
                      <li><i className="fa fa-envelope" />agent@example.com</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <ul>
                      <li className="view"><a href="#"><span>view profile</span><i className="fas fa-angle-right" /></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="item">
              <div className="listicle-box">
                <figure>
                  <a href="#" className="zoom-img"><img src="images/agent-3.jpg" alt="agent" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p>Company Agent , MVR Houses Inc.</p>
                    <h2><a href="agent-detail.html">William Hunter</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul>
                      <li><i className="fas fa-mobile-alt" />(123) 123-7007</li>
                      <li><i className="fa fa-envelope" />agent@example.com</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <ul>
                      <li className="view"><a href="#"><span>view profile</span><i className="fas fa-angle-right" /></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="item">
              <div className="listicle-box">
                <figure>
                  <a href="#" className="zoom-img"><img src="images/agent-4.jpg" alt="agent" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p>Broker</p>
                    <h2><a href="agent-detail.html">Jessica Thomas</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul>
                      <li><i className="fas fa-mobile-alt" />(123) 123-7007</li>
                      <li><i className="fa fa-envelope" />agent@example.com</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <ul>
                      <li className="view"><a href="#"><span>view profile</span><i className="fas fa-angle-right" /></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
            <div className="item">
              <div className="listicle-box">
                <figure>
                  <a href="#" className="zoom-img"><img src="images/agent-5.jpg" alt="agent" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-detail">
                    <p>Buying Agent</p>
                    <h2><a href="agent-detail.html">Isabel Geek</a></h2>
                  </div>{/* .box-detail */}
                  <div className="box-meta">
                    <ul>
                      <li><i className="fas fa-mobile-alt" />(123) 123-7007</li>
                      <li><i className="fa fa-envelope" />agent@example.com</li>
                    </ul>
                  </div>{/* .box-meta */}
                  <div className="box-links">
                    <ul>
                      <li className="view"><a href="#"><span>view profile</span><i className="fas fa-angle-right" /></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>{/* .box-links */}
                </div>{/* .box-content */}
              </div>
            </div>
          </div>
        </div>
      </section>{/* .agents-agencies */}
      <section className="services section">
        <div className="container">
          <div className="heading-style heading-style-one">
            <h2 className="heading h2">Best Real Estate Service</h2>
            <p className="desc">Aestibulum a imperdiet leo. Donec malesuada, lacus eget aliquam imperdiet,
              tellus leo lobortis</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg world"><img src="images/i-world.png" alt="world" /></div>
                <h4 className="title">Worldwide company</h4>
                <p>Aestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg fast"><img src="images/i-fast.png" alt="fast" /></div>
                <h4 className="title">Fastest Service</h4>
                <p>Qestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg building"><img src="images/i-building.png" alt="building" />
                </div>
                <h4 className="title">Largest real estate base</h4>
                <p>Aestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg commission"><img src="images/i-commission.png" alt="commission" /></div>
                <h4 className="title">Lowest commission</h4>
                <p>Eestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg assistant"><img src="images/i-assistant.png" alt="assistant" />
                </div>
                <h4 className="title">Personal assistant</h4>
                <p>Aestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg insure"><img src="images/i-insure.png" alt="insure" /></div>
                <h4 className="title">Property insurance</h4>
                <p>Qestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg loan"><img src="images/i-loan.png" alt="loan" /></div>
                <h4 className="title">Home Loan Best Rates</h4>
                <p>Aestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="section-block zoom-img">
                <div className="img-bg service"><img src="images/i-service.png" alt="service" /></div>
                <h4 className="title">Expert Service</h4>
                <p>Eestibulum a imperdiet leo. Donec <br />malesuada, lacus eget aliquam imperdiet,
                  <br />tellus leo lobortis</p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* .service */}
      <section className="blog section">
        <div className="container">
          <div className="row">
            <div className="heading-style heading-style-one mb-0">
              <h2 className="h2 heading">Articles &amp; Tips</h2>
              <p className="desc">Aestibulum a imperdiet leo. Donec malesuada, lacus eget aliquam
                imperdiet, tellus leo lobortis</p>
            </div>
          </div>
          <div className="row gridbox-layout">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <span className="date">28 <small>Oct</small></span>
                  <a href="#" className="zoom-img"><img src="images/property-5.jpg" alt="khalid" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-meta"><a href="#">Articles &amp; Tips</a></div>
                  <div className="box-detail">
                    <h2><a href="#">12 Tips and Tricks for Selling Homes</a></h2>
                  </div>
                  <div className="box-links">
                    <p>Duis sodales lacinia augue ac viverra. Proin nec tristique dui. Cras
                      semper nec ipsum ac sollicitudin. Cras ac auctor est. </p>
                    <span><a href="#" className="more">Read More <i className="fas fa-caret-right" /></a> </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <span className="date">12 <small>Oct</small></span>
                  <a href="#" className="zoom-img"><img src="images/property-1.jpg" alt="khalid" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-meta"><a href="#">Articles</a></div>
                  <div className="box-detail">
                    <h2><a href="#">PROS &amp; Cons on a Countryside House</a></h2>
                  </div>
                  <div className="box-links">
                    <p>Duis sodales lacinia augue ac viverra. Proin nec tristique dui. Cras
                      semper nec ipsum ac sollicitudin. Cras ac auctor est. </p>
                    <span><a href="#" className="more">Read More <i className="fas fa-caret-right" /></a> </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <span className="date">22 <small>Sep</small></span>
                  <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="khalid" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-meta"><a href="#">Tips</a></div>
                  <div className="box-detail">
                    <h2><a href="#">Skills To Learn In The Real Estate Market</a></h2>
                  </div>
                  <div className="box-links">
                    <p>Duis sodales lacinia augue ac viverra. Proin nec tristique dui. Cras
                      semper nec ipsum ac sollicitudin. Cras ac auctor est. </p>
                    <span><a href="#" className="more">Read More <i className="fas fa-caret-right" /></a> </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="listicle-box">
                <figure>
                  <span className="date">28 <small>Aug</small></span>
                  <a href="#" className="zoom-img"><img src="images/property-6.jpg" alt="khalid" /></a>
                </figure>
                <div className="box-content">
                  <div className="box-meta"><a href="#">Tips</a>, <a href="#">Articles</a></div>
                  <div className="box-detail">
                    <h2><a href="#">Learn The Truth About Real Estate Industry</a></h2>
                  </div>
                  <div className="box-links">
                    <p>Duis sodales lacinia augue ac viverra. Proin nec tristique dui. Cras
                      semper nec ipsum ac sollicitudin. Cras ac auctor est. </p>
                    <span><a href="#" className="more">Read More <i className="fas fa-caret-right" /></a> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <a href="#" className="link-red">More Articles &amp; Tips</a>
          </div>
        </div>
      </section>{/* .blog */}
      <section id="propertylists" className="section ">
        <div className="container">
          <div className="heading-style heading-style-one">
            <h2 className="heading h2">Property Listing Waiting For You</h2>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color for-sale" />Property for Sale</h6>
                <ul>
                  <li>
                    <div>Houses </div><span>45</span>
                  </li>
                  <li>
                    <div>Apartment </div><span>55</span>
                  </li>
                  <li>
                    <div>Townhouses </div><span>32</span>
                  </li>
                  <li>
                    <div>Land </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color for-rent" />Property for Rent</h6>
                <ul>
                  <li>
                    <div>Apartment </div><span>45</span>
                  </li>
                  <li>
                    <div>Houses </div><span>55</span>
                  </li>
                  <li>
                    <div>Farm </div><span>32</span>
                  </li>
                  <li>
                    <div>Townhouses </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color new" />New Property</h6>
                <ul>
                  <li>
                    <div>Land &amp; Plot </div><span>45</span>
                  </li>
                  <li>
                    <div>Condo </div><span>55</span>
                  </li>
                  <li>
                    <div>Commercial </div><span>32</span>
                  </li>
                  <li>
                    <div>Townhouse </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color reduced-price" />Resused Price
                  Property</h6>
                <ul>
                  <li>
                    <div>Single Family Home </div><span>45</span>
                  </li>
                  <li>
                    <div>Townhouse </div><span>55</span>
                  </li>
                  <li>
                    <div>Commercial </div><span>32</span>
                  </li>
                  <li>
                    <div>Villa </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color featured" />Featured Property</h6>
                <ul>
                  <li>
                    <div>Multi Family Home </div><span>45</span>
                  </li>
                  <li>
                    <div>Farm </div><span>55</span>
                  </li>
                  <li>
                    <div>Villa </div><span>32</span>
                  </li>
                  <li>
                    <div>Land </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="property-box">
                <h6 className="title"><span className="info-color hot-offer" />Hot Property</h6>
                <ul>
                  <li>
                    <div>Apartment </div><span>45</span>
                  </li>
                  <li>
                    <div>Townhouse </div><span>55</span>
                  </li>
                  <li>
                    <div>Houses </div><span>32</span>
                  </li>
                  <li>
                    <div>Condo </div><span>12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <a href="#" className="link-red">Watch All</a>
          </div>
        </div>
      </section>{/* #propertylists */}
      <section className="clients bg-fafafa section">
        <div className="container">
          <div className="row">
            <div className="heading-style heading-style-one mt-0 mb-0">
              <h2 className="h2 heading">We are backed &amp; trusted by</h2>
              <p className="desc">Aestibulum a imperdiet leo. Donec malesuada, lacus eget aliquam
                imperdiet, tellus leo lobortis</p>
            </div>
          </div>
          <div className="owl-carousel six-item hide-nav show-dots">
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-1.jpg" alt="client-1" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-2.jpg" alt="client-2" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-3.jpg" alt="client-3" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-4.jpg" alt="client-4" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-5.jpg" alt="client-5" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-6.jpg" alt="client-6" /></a> </div>
            </div>
            <div className="item">
              <div className="client-logo"> <a href="#"><img src="images/client-6.jpg" alt="client-1" /></a> </div>
            </div>
          </div>{/* .six-item */}
        </div>
      </section>{/* .clients */}
    </main>{/* #site-content */}
  </div>{/* #page */}
</div>

        </>
  )
}
