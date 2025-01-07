import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Post {id}</h1>
            {/* 여기에 ID를 기반으로 해당 콘텐츠를 표시 */}
        </div>
    );
};

export default PostPage;
