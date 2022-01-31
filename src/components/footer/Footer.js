import React from 'react';
import './footer.scss'
import sicon01 from './../../assets/img/snsicon-01.png'
import sicon02 from './../../assets/img/snsicon-02.png'
import sicon03 from './../../assets/img/snsicon-03.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h4 className='footer-header'>what happened</h4>
                        <ul className='footer-menu'>
                            <li className='footer-menu-item'>
                                <a href="/">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="/">[공지] 29CM 강남 스토어 영업 종료</a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="/">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="/">[공지] iOS 10 이하 버전 지원 중단 안내</a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="/">[공지] iOS 10 이하 버전 지원 중단 안내</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-top-right">
                        <div>
                            <h4 className='footer-header'>about</h4>
                            <ul className='footer-menu'>
                                <li className='footer-menu-item'>
                                    <a href="/">회사 소개</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">인재 채용</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">상시 할인 혜택</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='footer-header'>my order</h4>
                            <ul className='footer-menu'>
                                <li className='footer-menu-item'>
                                    <a href="/">내 주문</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">주문 배송</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">취소 / 교환 / 반품 내역</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">상품 리뷰 내역</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">증빙 서류 발급</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='footer-header'>my account</h4>
                            <ul className='footer-menu'>
                                <li className='footer-menu-item'>
                                    <a href="/">회원 정보 수정</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">회원 등급</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">마일리지 현황</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">쿠폰</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='footer-header'>help</h4>
                            <ul className='footer-menu'>
                                <li className='footer-menu-item'>
                                    <a href="/">1 : 1 상담 내역</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">상품 Q & A 내역</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">공지 사항</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">자주하는 질문</a>
                                </li>
                                <li className='footer-menu-item'>
                                    <a href="/">고객의 소리</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                    </div>
                    <div className="footer-bottom-right">
                        <img src={sicon01} alt="" />
                        <img src={sicon02} alt="" />
                        <img src={sicon03} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
