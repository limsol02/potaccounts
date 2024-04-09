import React, { useState } from "react"
import LogoImage from '../../assets/images/PotAccounts-logo.png'
import { FromWrap, GotoSignupWrap, ImageSize, InputWrap, InputWrap2, LeftInner, NonBorder, RightInner, TextButtonWrap, Wrap, WrapInner, WrapInnerL } from "./Loginstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import  './loginstyle.scss'
import { Link } from "react-router-dom";


const Login = () => {

    // 초기값세팅 - 아이디, 비밀번호
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // 오류메세지 확인을 위한 상태변화 세팅
    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');

    // 유효성 확인을 위한 상태변화 세팅
    const [isId, setIsId] = useState('');
    const [isPw, setIsPw] = useState('');

    // 유저아이디값 변화 인지 인풋핸들러
    const onChangeIdHandler = (e) => {
        // 초기값
        setId(e.target.value);
        // 아이디 입력시 구조 설정
        const idExp = /^[a-zA-z0-9]{4,12}$/;
    
        // 아이디 유효성 확인(구조에 맞게 입력했는지 확인)
        if (!idExp.test(id)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
            setIsId(false);
        } else {
            setIdMessage("");
            setIsId(true);
        }
    }

    // 유저비밀번호값 변화 인지 인풋핸들러
    const onChangePasswordHandler = (e) => {
        // 초기값
        const newPassword = e.target.value; // 입력된 새 비밀번호

        // 비밀번호 입력시 구조 설정
        const pwExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!pwExp.test(newPassword)) {
            setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
            setIsPw(false);
        } else {
            setPwMessage("");
            setIsPw(true);
        }

        // 입력된 비밀번호 설정
        setPassword(newPassword);
    }

    // 로그인 처리
    const handleLginHandler = async(e) => {
        e.preventDefault();
    }

    return (
        <>
            <Wrap>
                <WrapInnerL>
                    <LeftInner>
                        <ImageSize src={LogoImage} alt="Pot_Accounts-logo" />
                    </LeftInner>
                </WrapInnerL>

                <WrapInner>
                    <RightInner>
                        <h3 className='main-title'>Login</h3>

                        <FromWrap>
                            <InputWrap>
                            <div className="error-form">
                                <label className='sub-title' htmlFor='userid'>아이디</label>
                                <div className='error'>{idMessage}</div>
                            </div>
                                <input
                                    type="text"
                                    id='userid' 
                                    placeholder="아이디를 입력해주세요"
                                    onChange={onChangeIdHandler}
                                    value={id}
                                >
                                </input>
                            </InputWrap>

                            <InputWrap2>
                            <div className="error-form">
                                <label className='sub-title' htmlFor='userpw'>비밀번호</label>
                                <div className='error'>{pwMessage}</div>
                            </div>
                                <input
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={onChangePasswordHandler}
                                    value={password}
                                    id='userpw' 
                                >

                                </input>
                            </InputWrap2>

                            <TextButtonWrap>
                                <NonBorder>아이디찾기</NonBorder>
                                <p className="text-style">|</p>
                                <NonBorder>비밀번호찾기</NonBorder>
                            </TextButtonWrap>

                            <button className='button-submit' type="submit" onClick={handleLginHandler}>로그인</button>

                            <GotoSignupWrap>
                                <p className="text-style">밑채운독</p>
                                <NonBorder>
                                    <Link to="/signup" className="goto-login" >
                                        가입하러가기
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </Link>
                                </NonBorder>
                            </GotoSignupWrap>

                        </FromWrap>
                    </RightInner>
                </WrapInner>
            </Wrap>
        </>
    )
}


export default Login;