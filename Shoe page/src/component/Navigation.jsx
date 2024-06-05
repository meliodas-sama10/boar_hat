const Navigation=()=>{
    return(
      <nav className="container">
        <div className="brand">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className="option">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>  
    );
};
export default Navigation;