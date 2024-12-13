import InputArea from "../../../components/common/Input/Input";

// notice작성하는 부분
const NoticeWriteUI = (props) => {
    return (
        <section className="notice_write">
            <p>==== 프리젠터 ====</p>
            <div className="write_box">
                <span>작성자</span>
                <InputArea type="text" onChange={props.writer} />
            </div>
            <div className="write_box">
                <span>제목</span>
                <InputArea type="text" onChange={props.title} />
            </div>
            <div className="write_box">
                <span>내용</span>
                <InputArea type="text" onChange={props.contents} />
            </div>
            <p>==== 프리젠터 ====</p>
        </section>
    );
};

export default NoticeWriteUI;
