import NoticeWrite from "../../../components/units/notice/write/NoticeWrite.Container";

export default function graphqlMutationPage() {
    return (
        <div>
            <div>### 여기는 페이지입니다. ###</div>
            <NoticeWrite isEdit={false} />
            <div>### 여기는 페이지입니다. ###</div>
        </div>
    );
}
