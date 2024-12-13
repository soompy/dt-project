import InputArea from "../../../components/common/Input/Input";

// notice작성하는 부분
const NoticeWrite = () => {
    return (
        <section className="notice_write">
            <div className="title_box">
                <span className="title">제목</span>
                <InputArea></InputArea>
            </div>
        </section>
    );
};

export default NoticeWrite;
