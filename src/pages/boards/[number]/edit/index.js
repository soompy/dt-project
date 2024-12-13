import NoticeWrite from "../../../../components/units/notice/write/NoticeWrite.Container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export default function graphqlMutationPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });

    return (
        <div>
            <div>### 여기는 페이지입니다. ###</div>
            <NoticeWrite isEdit={true} data={data} />
            <div>### 여기는 페이지입니다. ###</div>
        </div>
    );
}
