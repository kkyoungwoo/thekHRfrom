import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";

const Data = 
{
        "id": 1,
        "portfolioImage": "./images/portfolio/portfolio-05.jpg",
        "image": "images/portfolio/portfolio-05.jpg",
        "title": "React Development",
        "subtitle": "Awesome portfolio",
        "date": "01 March 2021",
        "client": "Rainbow Themes",
        "category": "design",
        "awards": ["2020 Design beautiful apps Finale Awards"],
        "excerpt": "Design beautiful apps.",
        "body": ["<p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>"],
        "btn": {
            "buttontext": "더 알아보기",
            "link": "/"
        },
        "largeImage": "images/portfolio/portfolio-05.jpg",
        "subContent": {
            "title": "Digital Marketing.",
            "subtext": "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
        },
        "subContent2": {
            "title": "App Development.",
            "subtext": "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
        },
        "subContent3": {
            "title": "Solution.",
            "subtext": "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
        },
        "gallery": {
            "imageOne": "images/portfolio/portfolio-01.jpg",
            "imageTwo": "images/portfolio/portfolio-02.jpg",
            "imageThree": "images/portfolio/portfolio-03.jpg"
        }
    }

const Familylitigation = () => {
    return (
        <>
            <SEO title="Portfolio Three Column || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="Familylitigation <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio Three Column"
                />
                <div className="rwt-portfolio-details rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="inner">
                                    <div className="details-list">
                                        <div className="thumbnail alignwide">
                                            <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${Data.largeImage}`} alt="Corporate Image" />
                                        </div>
                                        <div className="row mt--40 row--30">
                                            <div className="col-lg-6">
                                                <div className="content-left">
                                                    <h4 className="title">{Data.title}</h4>
                                                    <div className="single-list-wrapper">
                                                        <div className="single-list">
                                                            <label>Date:</label>
                                                            <span>{Data.date}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>Client:</label>
                                                            <span>{Data.client}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>Category:</label>
                                                            <span>{Data.category}</span>
                                                        </div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <a className="btn-default btn-large round" href="/">{Data.btn.buttontext}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                                <div className="content-right">
                                                    <h5 className="subtitle">{Data.subtitle}</h5>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: Data.body}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-gallery mt--40">
                                        <div className="gallery mt--30">
                                            <div className="thumbnail">
                                                <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${Data.gallery.imageOne}`} alt="Corporate Image" />
                                            </div>
                                        </div>
                                        <div className="gallery mt--30">
                                            <div className="thumbnail">
                                                <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${Data.gallery.imageTwo}`} alt="Corporate Image" />
                                            </div>
                                        </div>
                                        <div className="gallery mt--30">
                                            <div className="thumbnail">
                                                <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${Data.gallery.imageThree}`} alt="Corporate Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Familylitigation;