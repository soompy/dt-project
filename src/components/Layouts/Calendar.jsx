import { Calendar, Badge } from "antd";
import { useState } from "react";

const Calendarcp = () => {
    const getListData = (value) => {
        let listData;
        if (value.date() === 8) {
            listData = [{ type: "success", content: "Meeting" }];
        } else if (value.date() === 10) {
            listData = [
                { type: "warning", content: "This is warning event." },
                { type: "success", content: "This is usual event." },
                { type: "error", content: "This is error event." },
            ];
        } else if (value.date() === 15) {
            listData = [{ type: "error", content: "Payment Due" }];
        }
        return listData || [];
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === "date") return dateCellRender(current);
        if (info.type === "month") return dateCellRender(current);
        return info.originNode;
    };

    const onPanelChange = (date, mode) => {
        console.log("패널이 변경되었습니다:", date.format("YYYY-MM"), mode);
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const onSelect = (date) => {
        console.log("선택된 날짜:", date.format("YYYY-MM-DD"));
        setSelectedDate(date);
    };

    return (
        <div>
            <Calendar
                cellRender={cellRender}
                onPanelChange={onPanelChange}
                onSelect={onSelect}
            />
            {selectedDate && (
                <p>선택된 날짜: {selectedDate.format("YYYY-MM-DD")}</p>
            )}
        </div>
    );
};

export default Calendarcp;
