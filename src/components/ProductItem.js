import React from 'react'

export default function ProductItem(props) {
    const { title, price, description, category, image } = props;
    return (
        <div>
            <div className="container my-2">
                <div className="card my-2">
                    <img style={{ width: 500, height: 250 }} src={image}  class="img-thumbnail" alt="..." />
                    <div className="card-body">
                        <div className="badge bg-danger">{category}</div>
                        <h5 className="card-title">{title.slice(0, 30)}</h5>
                        <p className="card-text">{description.slice(0, 60)}</p>
                        <div class="hstack gap-9"><h5><b>Rs. {price}</b></h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
