import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="#">요금 안내</a></li>
                                <li><a href="#">문의</a></li>
                                <li><a href="/contact">자주하는 질문</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>TEL : 053-965-0516 | FAX : 053-965-0514</li>
                                    <li style={{fontSize:"12px"}}>E-MAIL : bizdb@kakao.com | 채용 관련 상담 : 010-4242-3088</li>
                                    <li style={{fontSize:"12px"}}>대구광역시 동구 동내로 76 한국메디컬벤처센터 1층 103호</li>
                                    <li style={{fontSize:"12px"}}>(대구 외국인출입국사무소 맞은편)</li>
                                    <li style={{fontSize:"12px"}}>사업자등록번호 : 658-74-00358</li>
                                    <li style={{fontSize:"12px"}}>유료직업소개서 신고번호 : 제 대구-동-유-22-2 호</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-right">
                            <p className="copyright-text">© THE K {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;