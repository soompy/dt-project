// import Swipercp from "../components/Layouts/Swipercp";
// import Calendarcp from "../components/Layouts/Calendar";
import { DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";

const Place = () => {
    return (
        // 인터렉션 참고 https://gsap.com/community/forums/topic/28175-how-to-use-scrolltrigger-change-texts/
        <div className="place">
            <Wrapper className="wrapper_1400">
                {/* 지도 영역 */}
                {/* 팝업스토어 맛집 놀이공간 파티룸 콘텐츠 체험 전시회 이벤트 등등 */}
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <DatePicker />
            </Wrapper>
        </div>
    );
};

export default Place;
