import React from 'react'

export default function HomeItem(props) {
    const {cname,cimage} = props;
    return (
        <>
            <div className="container mt-3" style={{alignItems: 'center'}}>
                <div className="mx-3"style={{ width: 100 }}>
                    <img style={{ width: 100, height: 90 }} src={cimage} className="card-img-top" alt="..." />
                    <div className=" text-bg-light" style={{fontSize: 13}}><b>{cname}</b></div>
                </div>
            </div>

        </>
    )
}
