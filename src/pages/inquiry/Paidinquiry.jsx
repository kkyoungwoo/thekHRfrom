import React from 'react';
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';
import Copyright from '../../common/footer/Copyright';
import ServiceTwo from '../../elements/service/ServiceTwo';
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import AboutTwo from "../../elements/about/AboutTwo";
import CounterUpTwo from "../../elements/counterup/CounterUpTwo";

import Separator from "../../elements/separator/Separator";
import TeamFour from '../../elements/team/TeamFour';
import PricingTwo from '../../elements/pricing/PricingTwo';
import CalltoActionFive from '../../elements/calltoaction/CalltoActionFive';


const Paidinquiry = () => {
    return (
        <>
            <SEO title="Corporate" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>
                
                <AboutTwo />

                <Separator />

                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Paidinquiry;