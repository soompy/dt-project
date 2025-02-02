import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputArea from "../common/Input/Input";
import Button from "../common/Button/Button";
import { Space } from "antd";
import ModalPopup from "./Modal";

const LoginPage = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",        
    })
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",        
    })

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = 
            formValues.email &&
            formValues.password &&
            !errors.email &&
            !errors.password;
        setIsFormValid(isValid);
    }, [formValues, errors]);

    const handleInputChange = (field, value) => {
        setFormValues({...formValues, [field]: value});

        if(field === "email") {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            setErrors({
                ...errors,
                email: isValidEmail ? "" : "메일 형식으로 작성해주세요.",
            })
        } else if (field === "password") {
            setErrors({
                ...errors,
                password: value.length >= 6 ? "" : "비밀번호는 최소 6자 이상이어야 합니다."
            })
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formValues.email || !formValues.password) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        if (!errors.email && !errors.password) {
            setIsModalVisible(true);
        }
    }

    return (
        <div className="login_page" >                    
            <motion.div                
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>로그인</h1>
            </motion.div>
            
            <form onSubmit={handleSubmit}>
                <Space size={[0, 0]}>
                    <InputArea
                        labelTxt="이메일"
                        type="email"
                        placeholderValue="이메일을 입력하세요."
                        value={formValues.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        alertTxt={errors.email}
                    />
                
                    <InputArea
                        labelTxt="비밀번호"
                        type="password"
                        placeholderValue="비밀번호를 입력하세요."
                        value={formValues.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        alertTxt={errors.password}
                    />
                </Space>

                <Button
                    size="lg"
                    theme={isFormValid ? "primary_1" : "disabled"}
                    label="Sign in"
                />
            </form>    

            <ModalPopup
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                themeClass="primary_1"
                onClose={() => setIsModalVisible(false)}
            />
        </div>
    );
};

export default LoginPage;
