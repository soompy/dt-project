import { useState } from "react";
import Wrapper from "../components/Layouts/Wrapper";
import BoardCp from "../components/List/Board";

const Notice = () => {
    const [data, setData] = useState([
        { key: 1, name: "공지사항 1", age: 32, address: "서울시 강남구" },
        { key: 2, name: "공지사항 2", age: 25, address: "서울시 서초구" },
    ]);

    const columns = [
        {
            title: "순서",
            dataIndex: "key",
        },
        {
            title: "제목",
            dataIndex: "text",
        },  
        {
            title: "작성자",
            dataIndex: "name",
        },
        {
            title: "일정",
            dataIndex: "day",
        },
    ];

    const addRow = () => {
        const newRow = {
            key: data.length + 1,
            name: `공지사항 ${data.length + 1}`,
            age: 30,
            address: `서울시 새로운 주소 ${data.length + 1}`,
        };
        setData([...data, newRow]);
    };

    return (        
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
                <BoardCp columns={columns} data={data} onAddRow={addRow} />
            </section>
            {/* 공지사항 작성(상세/수정) 페이지(추가완,기능구현 필요) 공지사항 확인
        페이지(게시글 클릭 시 공지글 노출) */}
        </Wrapper>                  
    );
};

export default Notice;
