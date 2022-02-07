import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import { FiCheck } from "react-icons/fi";

const Price = () => {
    return (
        <>
            <SEO title="Portfolio Three Column || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Pricing"
                />
                {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style Five."
                                            description = ""
                                        />
                                </div>
                            </div>
                            
                            <div className="row row--15">

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">Basic Plan</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency">$</span>
                                                        <span className="price">29</span>
                                                    </div>
                                                    <span className="subtitle">USD Per Month</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 5 PPC Campaigns</li>
                                                    <li><FiCheck /> Digital Marketing</li>
                                                    <li><FiCheck /> Marketing Agency</li>
                                                    <li><FiCheck /> Seo Friendly</li>
                                                    <li><FiCheck /> UI/UX designs</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <a className="btn-default btn-border" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5 active">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">Standard Plan</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency">$</span>
                                                        <span className="price">50</span>
                                                    </div>
                                                    <span className="subtitle">USD Per Month</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 5 PPC Campaigns</li>
                                                    <li><FiCheck /> Keep 100% Royalties</li>
                                                    <li><FiCheck /> App Development</li>
                                                    <li><FiCheck /> Seo Friendly</li>
                                                    <li><FiCheck /> UI/UX designs</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <a className="btn-default" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">Advanced Plan</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency">$</span>
                                                        <span className="price">500</span>
                                                    </div>
                                                    <span className="subtitle">USD Per Month</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 50 PPC Campaigns</li>
                                                    <li><FiCheck /> SEO Marketing</li>
                                                    <li><FiCheck /> Marketing Agency</li>
                                                    <li><FiCheck /> Seo Friendly</li>
                                                    <li><FiCheck /> Application Manage</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <a className="btn-default btn-border" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                            </div>


                        </div>
                    </div>
                    {/* End Elements Area  */}
            </Layout>
        </>
    )
}
export default Price;