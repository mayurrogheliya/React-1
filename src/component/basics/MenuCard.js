import React from 'react'

const MenuCard = ({ menuDataCatch }) => {
    return (
        <>
            <selection className="main-card--cointainer">
                {menuDataCatch.map((curElem) => {
                    const { id, name, category, image, desc } = curElem;
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-desc subtle">{desc}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className='card-media' />
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </selection>
        </>
    )
}

export default MenuCard
