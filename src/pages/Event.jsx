import LazyImage from "../components/LazyImage/LazyImage";
import giftbox from "../assets/images/event/giftbox.png";

const EventPage = () => {
  return (
    <div className="event_wrapper">
      <div className="bg_container">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index}>
            &#x1F389;
          </span>
        ))}
      </div>

      <div className="wrapper_1400">
        <div className="flex_center_column top_visual">
          <strong>2025년 맞이</strong>
          <p>특별한 이벤트</p>
          <LazyImage src={giftbox} className="event_giftbox" alt="상품" />
        </div>

        <div className="list_container">
          {Array.from({ length: 45 }).map((_, index) => (
            <div
              key={index}
              className="list_item"             
            >
              Item {index + 1}
            </div>
          ))}
        </div>

        <div className="video_wrap">
          <div className="fixed_box">
            <video
              className="video"              
              src="path/to/video.mp4"
              controls
            ></video>
          </div>
        </div>

        <div className="fixed_description">
          Fixed Description
        </div>

        <div className="poster hidden_area">
          <div className="poster__parallax"></div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
