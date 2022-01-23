import React, { useEffect, useState } from "react";
import Create from "../../components/crud/Create";
import Delete from "../../components/crud/Delete";
import TableData from "../../components/crud/TableData";
import Update from "../../components/crud/Update";
import ModalDiskEdit from "../../components/disk/ModalDiskEdit";
import ModalDisplay from "../../components/display/ModalDisplay";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tamaño",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Resolución",
    dataIndex: "resolution",
    key: "resolution",
  },
  {
    title: "Tiempo Refrescar",
    dataIndex: "refreshTime",
    key: "refreshTime",
  },
  {
    title: "Tiempo Respuesta",
    dataIndex: "responseTime",
    key: "responseTime",
  },
  {
    title: "Tipo Panel",
    dataIndex: "panelType",
    key: "panelType",
  },
  {
    title: "Relación Aspecto",
    dataIndex: "aspectRatio",
    key: "aspectRatio",
  },
  {
    title: "Calificaciones",
    dataIndex: "ratings",
    key: "ratings",
  },
  {
    title: "Precio",
    dataIndex: "cost",
    key: "cost",
  },
];

const index = () => {
  const [dataSource, setDataSource] = useState([]);
  const actions = {
    title: "Acciones",
    key: "action",
    render: (_: any, record: any) => (
      <>
        <Update content={<ModalDiskEdit record={record} after={getData} />} />
        <Delete record={record} endpoint="display" after={getData} />
      </>
    ),
  };
  const getData = async () => {
    const resp = await fetchSinToken("display");
    const body = await resp.json();
    let data = body.data;
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout selectedKey={["7"]}>
      <>
        <h2>Monitores</h2>
        <Create text="Monitor" content={<ModalDisplay getData={getData} />} />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
      </>
    </Layout>
  );
};

export default React.memo(index);
