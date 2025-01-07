import { motion } from "framer-motion";
import InputArea from "../common/Input/Input";
import Button from "../common/Button/Button";
import { Space } from "antd";

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="background">{/* 배경 애니메이션 추가 */}</div>
            <motion.div
                className="login-form"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Login</h1>
                <form>
                    <Space size={[20, 0]}>
                        <InputArea
                            labelTxt="이메일"
                            type="email"
                            placeholder="이메일을 입력하세요."
                        />
                    
                        <InputArea
                            labelTxt="비밀번호"
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                        />
                    </Space>

                    <Button />
                </form>
            </motion.div>
        </div>
    );
};

export default LoginPage;
