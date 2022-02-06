import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">비자종류</Link>
                <ul className="submenu">
                    <li><Link to="/typeofvisa">비자 종류</Link></li>
                    <li><Link to="/employmentvisa">취업</Link></li>
                    <li><Link to="/investmentvisa">투자</Link></li>
                    <li><Link to="/residencevisa">거주 / 초대</Link></li>
                    <li><Link to="/marriagevisa">결혼 / 이혼</Link></li>
                    <li><Link to="/overseaskoreansvisa">재외동포</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">유학</Link>
                <ul className="submenu">
                    <li><Link to="/d2">D-2</Link></li>
                    <li><Link to="/d4">D-4</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">행정 민원</Link>
                <ul className="submenu">
                    <li><Link to="/residentregistration">주민등록</Link></li>
                    <li><Link to="/familyrelationship">가족관계 등록</Link></li>
                    <li><Link to="/myselfregistration">본인 등록신고</Link></li>
                    <li><Link to="/parentalregistration">친권 등록신고</Link></li>
                    <li><Link to="/descendantregistration">자녀 등록신고</Link></li>
                    <li><Link to="/guardiansregistration">후견인 등록신고</Link></li>
                    <li><Link to="/orphanregistration">기아,고아 등록신고</Link></li>
                    <li><Link to="/onotherregistration">기타 절차 안내</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">사범 소송</Link>
                <ul className="submenu">
                    <li><Link to="/illegalitylitigation">불법체류자 구제</Link></li>
                    <li><Link to="/protectionlitigation">보호일시 해제</Link></li>
                    <li><Link to="/criminallitigation">형사 사건</Link></li>
                    <li><Link to="/civillitigation">민사 사건</Link></li>
                    <li><Link to="/administrativelitigation">행정 사건</Link></li>
                    <li><Link to="/familylitigation">가사 사건</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">고객센터</Link>
                <ul className="submenu">
                    <li><Link to="/visainquiry">비자 문의</Link></li>
                    <li><Link to="/workinquiry">일자리 문의</Link></li>
                    <li><Link to="/agencyinquiry">위임 / 대행</Link></li>
                    <li><Link to="/Price">요금</Link></li>
                    <li><Link to="/paidinquiry">유료 상담</Link></li>
                    <li><Link to="/purchasedata">자료 구매</Link></li>
                    <li><Link to="/introduction">회사소개</Link></li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav;
