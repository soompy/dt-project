// 글쓰기 기능 만들기 https://jaypedia.tistory.com/150
import { useState } from "react";
import { Table, Button, Flex } from "antd";




const BoardCp = ({ columns }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    const dataSource = Array.from({ length: 46 }).map((_, i) => ({
        key: i,
        text: `게시글 제목`,
        name: `이수민`,
        day: `2024.12.19`,        
    }));

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <section>
            <Flex gap="middle" vertical>
                <Flex align="center" gap="middle">
                    <Button
                        type="primary"
                        onClick={start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    {hasSelected
                        ? `Selected ${selectedRowKeys.length} items`
                        : null}
                </Flex>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={true}
                />
            </Flex>
        </section>
    );
};

export default BoardCp;
