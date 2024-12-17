import { useState } from "react";
import Chatbot from "../components/service/Chatbot";
import { MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const BotIcon = styled(MessageOutlined)`
    font-size: 30px;
    color: #007bff;
`;

const Community = () => {
    const [isChatbot, setIsChatbot] = useState(false);

    const onClickChat = () => {
        setIsChatbot((prev) => !prev);
    };

    return (
        <div>
            <button onClick={onClickChat}>
                <BotIcon />
            </button>
            {isChatbot && <Chatbot />}
        </div>
    );
};

export default Community;
