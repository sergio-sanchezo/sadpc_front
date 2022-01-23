import { Table } from "antd";
import React from "react";

const TableData = (props: { columns: any; dataSource: any }) => {
  const { columns, dataSource } = props;
  return (
    <Table className="antTable" dataSource={dataSource} columns={columns} />
  );
};

export default React.memo(TableData);
