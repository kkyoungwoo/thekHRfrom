import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="/Price">요금</a></li>
                                <li><a href="/Visainquiry">비자 문의</a></li>
                                <li><a target="_blank" href="https://thekvisa.com" rel="noopener noreferrer">일자리 문의</a></li>
                                <li><a target="_blank" href="https://thekvisa.com/visaform" rel="noopener noreferrer">파트너십</a></li>
                            </ul>
                        </div>
                    </div>
                    {/*<div className="col-lg-4 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>*/}
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                        <div className="copyright-right text-center text-lg-right">
                            <p className="copyright-text">Copyright All rights reserved © {new Date().getFullYear()} THE K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CopyrightTwo;