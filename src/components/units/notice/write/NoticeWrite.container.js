import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./NoticeWrite.queries";
import NoticeWriteUI from "./NoticeWrite.presenter";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [나의함수] = useMutation(나의그래프큐엘셋팅);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer,
                title: title,
                contents: contents,
            },
        });
        console.log(result);
        router.push(`/boards/${result.data.createBoard.number}`);
    };

    const onClickUpdate = async () => {
        const myvariables = { number: Number(router.query.number) };
        if (writer) myvariables.writer = writer;
        if (title !== "") {
            myvariables.title = title;
        }
        if (contents !== "") {
            myvariables.contents = contents;
        }

        // 수정하기
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents,
            },
        });
        console.log(result);
        router.push(`/boards/${result.data.updateBoard.number}`);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    return (
        <div>
            <div>$$$$$ 여기는 컨테이너입니다. $$$$$</div>
            <NoticeWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data}
            />
            {/* <ChangeName /> */}
            <div>$$$$$ 여기는 컨테이너입니다. $$$$$</div>
        </div>
    );
}
