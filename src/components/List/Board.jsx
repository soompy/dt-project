import { Table } from "antd";
import { Pagination } from "antd";

const BoardCp = () => {
    return (
        <section>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
            <Pagination defaultCurrent={1} total={50}></Pagination>
        </section>
    );
};

export default BoardCp;
