// 테마 https://thisyujeong.dev/blog/antd-customize-theme
// 디자인토큰 필요성
import { variables } from "./variables";

const antdTheme = {
    token: {
        // Global Tokens
        colorPrimary: variables.primary_1,
        colorSecondary: variables.secondary_1_3,
        colorBgBase: variables.color_white,
        colorTextBase: variables.color_black,
    },
    components: {
        // component token
        Button: {
            colorPrimary: variables.secondary_1_2,
            colorBgTextHover: variables.secondary_1_1,
        },
        Input: {
            // Customize Input Padding
            // controlPaddingVertical: "8px",
        },
    },
};

export default antdTheme;
