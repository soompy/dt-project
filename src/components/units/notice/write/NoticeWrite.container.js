import { useState } from "react";
import NoticeWriteUI from "./NoticeWrite.presenter";

export default function NoticeWrite() {
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const onChangeWtiter = (event) => {
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
            <div>
                <NoticeWriteUI
                    writer={onChangeWtiter}
                    title={onChangeTitle}
                    contents={onChangeContents}
                />
            </div>
        </div>
    );
}
