import { useState } from "react";
import PropTypes from "prop-types";
import InputArea from "../common/Input/Input";
import { CloseOutlined } from "@ant-design/icons";
import Button from "../common/Button/Button";

const ModalPopup = ({ visible, setVisible, isCancelMode = false, onClose, themeClass = "" }) => {    
    const [inputValue, setInputValue] = useState("");    

    const close = () => {
        setVisible(false);        
        if (onClose) onClose();
    };

    return visible ? (
        <div className={`modal_container ${themeClass}`}>
            <div className="dim" onClick={close}></div>
            <div className="modal_cont">
                <button className="close-modal w-5 h-5" onClick={close}>
                    <CloseOutlined />
                </button>
                <div className="modal_box">
                    <h3>{isCancelMode ? "ㅠㅠ" : "축하합니다!!"}</h3>
                    <div className="info">
                        <strong className="time">10:20</strong>
                        <p className="choice_box">
                            <span className="result">1등</span>
                            <span className="gifr">냉장고</span>
                        </p>
                    </div>
                    {!isCancelMode ? (
                    <>
                        <div className="search">
                        <strong>추첨번호</strong>
                        <InputArea
                            type="number"
                            placeholder="추첨번호를 입력해주세요"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />                    
                        <Button className="basic" size="md" label="조회" />
                        </div>
                        <div className="result_box">
                            <dl className="name_box">
                                <dt className="ranking_score">순위</dt>
                                <dd className="gift_name">추첨상품명</dd>
                            </dl>
                            <dl className="name_box">
                                <dt className="ranking_score">랭킹</dt>
                                <dd className="gift_name">당첨상품</dd>
                            </dl>
                            <p className="fail">
                                조회가 불가합니다. <br />
                                추첨번호 확인 후 다시 조회해주세요.
                            </p>
                        </div>
                    </>
                    ) : (
                    <>
                        <div className="result_box">
                            <dl className="name_box">
                                <dt className="ranking_score">순위</dt>
                                <dd className="gift_name">추첨상품명</dd>
                            </dl>
                            <dl className="name_box">
                                <dt className="ranking_score">랭킹</dt>
                                <dd className="gift_name">당첨상품</dd>
                            </dl>
                        </div>
                        <div className="search cancel">
                            <strong>추첨번호</strong>
                            <InputArea 
                                type="number"
                                placeholder="추첨번호를 입력해주세요"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>
                    </>
                    )}
                    <p className="result_txt">
                    {isCancelMode
                        ? "다시 응모해볼까요?"
                        : "당첨 정보를 확인하세요."}
                    </p>            
                    <Button 
                        className="bottom_btn"
                        theme={themeClass}
                        size="lg"
                        label={isCancelMode ? "취소" : "확인"}>
                    </Button>
                </div>
            </div>
        </div>
    ) : null;
};

ModalPopup.propTypes = {
    isCancelMode: PropTypes.bool,
    onClose: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func,
    themeClass: PropTypes.string,
};

export default ModalPopup;
