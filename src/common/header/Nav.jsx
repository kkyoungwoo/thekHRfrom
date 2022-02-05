import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">비자종류</Link>
                <ul className="submenu">
                    <li><Link to="/business-consulting">취업</Link></li>
                    <li><Link to="/business-consulting-2">투자</Link></li>
                    <li><Link to="/business-consulting">거주 / 초대</Link></li>
                    <li><Link to="/business-consulting">결혼 / 이혼</Link></li>
                    <li><Link to="/business-consulting-2">재외동포</Link></li>
                    <li><Link to="/business-consulting-2">기타</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">유학</Link>
                <ul className="submenu">
                    <li><Link to="/business-consulting">D-2</Link></li>
                    <li><Link to="/business-consulting">D-4</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">행정 민원</Link>
                <ul className="submenu">
                    <li><Link to="/blog-grid">주민등록</Link></li>
                    <li><Link to="/blog-grid-sidebar">가족관계 등록</Link></li>
                    <li><Link to="/blog-list-view">본인 등록신고</Link></li>
                    <li><Link to="/blog-list-sidebar">친권 등록신고</Link></li>
                    <li><Link to="/blog-list-sidebar">자녀 등록신고</Link></li>
                    <li><Link to="/blog-list-sidebar">후견인 등록신고</Link></li>
                    <li><Link to="/blog-list-sidebar">기아,고아 등록신고</Link></li>
                    <li><Link to="/blog-list-sidebar">기타 절차 안내</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">사범 소송</Link>
                <ul className="submenu">
                    <li><Link to="/portfolio">불법체류자 구제</Link></li>
                    <li><Link to="/portfolio-three-column">보호일시 해제</Link></li>
                    <li><Link to="/portfolio-full-width">형사 사건</Link></li>
                    <li><Link to="/portfolio-grid-layout">민사 사건</Link></li>
                    <li><Link to="/portfolio-box-layout">가사 사건</Link></li>
                    <li><Link to="/portfolio-box-layout">행정 사건</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">고객센터</Link>
                <ul className="submenu">
                    <li><Link to="/portfolio">일반 문의</Link></li>
                    <li><Link to="/portfolio-box-layout">일자리 문의</Link></li>
                    <li><Link to="/portfolio-three-column">위임/대행</Link></li>
                    <li><Link to="/portfolio-full-width">요금</Link></li>
                    <li><Link to="/portfolio-grid-layout">환불</Link></li>
                    <li><Link to="/portfolio-box-layout">유료상담</Link></li>
                    <li><Link to="/portfolio-box-layout">자료구매</Link></li>
                    <li><Link to="/portfolio-box-layout">회사소개</Link></li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav;
