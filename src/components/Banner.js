import React from 'react'

export default function Banner() {
    return (
        <div className="my-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height={250}width={10}src="https://cedcommerce.com/blog/wp-content/uploads/2018/10/blog-3-1024x341.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img height={250}width={10}src="https://www.shopickr.com/wp-content/uploads/2016/10/flipkart-big-billion-day-last-day-sale-6-october-2016-banner-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img height={250}width={10}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1vRTLAQ_wVzHof3_HxynhK7LxbF6q19LCGcObC6c1DpQF49mO_-XqFzNiV9sCmm4sIs&usqp=CAU" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
