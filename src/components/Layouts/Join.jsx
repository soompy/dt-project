import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button/Button";
import InputArea from "../common/Input/Input";
import { Space } from "antd";
import PropTypes from "prop-types";

const JoinForm = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

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
        setFormValues({ ...formValues, [field]: value });

        if (field === "email") {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            setErrors({
                ...errors,
                email: isValidEmail ? "" : "메일 형식으로 작성해주세요.",
            });
        } else if (field === "password") {
            setErrors({
                ...errors,
                password:
                    value.length >= 6
                        ? ""
                        : "비밀번호는 최소 6자 이상이어야 합니다.",
            });
        } else if (field === "confirmPassword") {
            setErrors({
                ...errors,
                confirmPassword:
                    value === formValues.password
                        ? ""
                        : "비밀번호가 일치하지 않습니다.",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(errors).every((error) => error === "");
        if (isValid) {
            console.log("회원가입 성공:", formValues);
        } else {
            console.log("회원가입 실패:", errors);
        }
    };

    return (
        <div className="form_wrap">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>회원가입</h1>
            </motion.div>

            <form onSubmit={handleSubmit}>
                <Space size={[0, 0]}>
                    <InputArea
                        labelTxt="이메일"
                        type="email"
                        placeholderValue="이메일을 입력하세요."
                        value={formValues.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                        alertTxt={errors.email}
                    />

                    <InputArea
                        labelTxt="비밀번호"
                        type="password"
                        placeholderValue="비밀번호를 입력하세요."
                        value={formValues.password}
                        onChange={(e) =>
                            handleInputChange("password", e.target.value)
                        }
                        alertTxt={errors.password}
                    />

                    <InputArea
                        labelTxt="비밀번호 확인"
                        type="password"
                        placeholderValue="비밀번호를 다시 입력하세요."
                        value={formValues.confirmPassword}
                        onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                        }
                        alertTxt={errors.confirmPassword}
                    />
                </Space>

                <Button
                    size="lg"
                    theme={isFormValid ? "primary_1" : "disabled"}
                    type="submit"
                    label="회원가입"
                    disabled={!Object.values(errors).every((e) => e === "")}
                />
            </form>
        </div>
    );
};

Button.propTypes = {
    theme: PropTypes.oneOf(["primary_1", "disabled"]),
};

export default JoinForm;
