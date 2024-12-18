import Wrapper from "../components/Layouts/Wrapper";
import BoardCp from "../components/List/Board";

const Notice = () => {
  return (
    <div>
      <Wrapper className="wrapper_1400 notice">
        <section className="notice_title_box">
          <p>
            <span>주목!</span>
          </p>
          <p>
            <span>따끈따끈한</span>
          </p>
          <p>
            <span>공지</span>
          </p>
          <p>
            <span>확인</span>
          </p>
          <p>
            <span>하세요👋</span>
          </p>
        </section>
        <section className="board_container">
          <BoardCp />
        </section>
        {/* 공지사항 작성(상세/수정) 페이지(추가완,기능구현 필요) 공지사항 확인
            페이지(게시글 클릭 시 공지글 노출) */}
      </Wrapper>
      <div className="notice_bg">
        <div className="card-container">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
