import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";

const Form = () => {
    return (
        <>
            <SEO title="korea visa" />
            <Layout>
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--50">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "온라인 상담센터"
                                            title = "문의 내용을 선택하여 작성해주세요"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <BreadcrumbOne
                                rootUrl="/"
                                parentUrl="Home"
                                currentUrl="<<버튼 클릭시 홈화면으로 이동>>"
                            />
                            <div>
                                hellow
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Form;
