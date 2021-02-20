import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-8 col-sm-12">
        <aside id="text-1" className="widget widget_text widget_custom_html">
          <div className="textwidget custom-html-widget">
            <p><img src="images/logo-2.png" alt="logo" /></p>
            <p>At listicle.com, we understand that people everywhere are searching for a home to
              call their own. We want to make this search as joyful as finally finding the
              perfect home because we understand that finding a home is much more than an
              online search!</p>
            <h6 className="verified"><img src="images/verified.png" alt="verified" /> &nbsp;
              verified listings</h6>
          </div>
          {/*textwidget*/}
        </aside>
      </div>
      {/* col#end */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <aside id="categories-1" className="widget widget_categories">
          <h2 className="widget-title">company</h2>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">For Partners</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </aside>
      </div>
      {/* col#end */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <aside id="nav_menu-1" className="widget widget_nav_menu">
          <h2 className="widget-title">partner sites</h2>
          <ul>
            <li><a href="#">PropTiger</a></li>
            <li><a href="#">Makaan</a></li>
            <li><a href="#">REF</a></li>
            <li><a href="#">RealtyBI</a></li>
            <li><a href="#">Realestate.com.au</a></li>
            <li><a href="#">Realtor.com</a></li>
          </ul>
        </aside>
      </div>
      {/* col#end */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <aside id="pages-1" className="widget widget_pages">
          <h2 className="widget-title">explore</h2>
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">Data Sciences</a></li>
            <li><a href="#">Home Loans</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Internationa</a></li>
          </ul>
        </aside>
      </div>
      {/* col#end */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <aside id="pages-2" className="widget widget_pages">
          <h2 className="widget-title">another links</h2>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Property Agent</a></li>
            <li><a href="#">Property Search</a></li>
            <li><a href="#">Speical Offer</a></li>
          </ul>
        </aside>
      </div>
      {/* col#end */}
    </div>
    {/* row #end */}
  </div>
  {/* container #end */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6"><span>Copyright © 2020 listicle.com</span> ⋅ <span>Tel: +91
            12343210</span></div>
        <ul className="social">
          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fab fa-twitter" /></a></li>
          <li><a href="#"><i className="fab fa-instagram" /></a></li>
        </ul>
      </div>
      {/* row #end */}
    </div>
    {/* container */}
  </div>
  {/*copyright*/}
</footer>{/* #footer */}

        </>
    )
}

export default Footer
