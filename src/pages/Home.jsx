import './Home.css'
function Home() {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <div className="banner-text">
                    <h1>Upgrade Your Style</h1>
                    <p>Premium products with best quality & price</p>
                    <button>Shop Now</button>
                </div>

                <div className="banner-img">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                        alt="Shopping"
                    />
                </div>
            </section>

            {/* Products */}
            <section className="products">
                <h2>Featured Products</h2>

                <div className="card-container">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
                            alt="Product"
                        />
                        <h3>Smart Watch</h3>
                        <p>$49</p>
                        <button>Buy Now</button>
                    </div>

                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1518443895471-8b2b1d5f4f6a?w=600"
                            alt="Headphones"
                        />

                        <h3>Headphones</h3>
                        <p>$39</p>
                        <button>Buy Now</button>
                    </div>

                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                            alt="Product"
                        />
                        <h3>Camera</h3>
                        <p>$99</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 YourShop. All rights reserved.</p>
            </footer>
        </>
    );
}




export default Home