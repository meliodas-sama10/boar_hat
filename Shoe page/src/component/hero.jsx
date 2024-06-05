const Hero=()=>{
    return(
        <main className="hero container">
            <div className="info">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST AND 
                WE’RE HERE TO HELP YOU WITH OUR SHOES
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="second">Category</button>
            </div>
            <div >
                <h4>Also available on</h4>
                <div className="logo">
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className="herologo">
            <img src="/images/shoe_image.png" alt="Nike Shoe" />
            </div>
        </main>
    );
};
export default Hero;