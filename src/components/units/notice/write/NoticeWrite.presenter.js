import InputArea from "../../../common/Input/Input";
import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
export default function NoticeWriteUI(props) {
    return (
        <div>
            <div>@@@ 여기는 프리젠터입니다. @@@</div>
            <div>
                <div>
                    <span>작성자:</span>
                    <InputArea
                        type="text"
                        onChange={props.onChangeWriter}
                        defaultValue={
                            props.data ? "props.data.fetchBoard.writer" : ""
                        }
                    />
                </div>

                <div>
                    <span>제목:</span>
                    <InputArea
                        type="text"
                        onChange={props.onChangeTitle}
                        defaultValue={props.data?.fetchBoard.title}
                    />
                </div>

                <div>
                    <span>내용:</span>
                    <InputArea
                        type="text"
                        onChange={props.onChangeContents}
                        defaultValue={props.data?.fetchBoard.contents}
                    />
                </div>

                <Button
                    onClick={
                        props.isEdit ? props.onClickUpdate : props.onClickSubmit
                    }
                >
                    {props.isEdit ? "수정" : "등록"}하기
                </Button>
            </div>

            <div>@@@ 여기는 프리젠터입니다. @@@</div>
        </div>
    );
}

NoticeWriteUI.PropTypes = {
    onChangeWriter: PropTypes.number.isRequired,
    onChangeTitle: PropTypes.string.isRequired,
    onChangeContents: PropTypes.bool.isRequired,
    isEdit: PropTypes.array.isRequired,
    onClickUpdate: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
};
