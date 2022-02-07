import React from 'react';
import {Link} from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="rwt-card" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <Link to={process.env.PUBLIC_URL + `/employmentvisa/${portfolio.id}`}>
                        </Link>
                    </figure>
                    <Link to={process.env.PUBLIC_URL + `/employmentvisa/${portfolio.id}`} className="rwt-overlay"></Link>
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <Link to={process.env.PUBLIC_URL + `/employmentvisa/${portfolio.id}`}>
                            {portfolio.title}
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}
export default PortfolioItem;