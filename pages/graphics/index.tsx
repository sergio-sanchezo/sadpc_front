import React, { useEffect, useState } from "react";
import Create from "../../components/crud/Create";
import Delete from "../../components/crud/Delete";
import TableData from "../../components/crud/TableData";
import Update from "../../components/crud/Update";
import ModalGraphics from "../../components/graphics/ModalGraphics";
import ModalGraphicsEdit from "../../components/graphics/ModalGraphicsEdit";
import Layout from "../../components/Principal/Layout";
import { LinkedList } from "../../dataStructures/LinkedList";
import { fetchSinToken } from "../../helpers/fetch";
const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ChipSet",
    dataIndex: "chipSet",
    key: "chipSet",
  },
  {
    title: "Memoria",
    dataIndex: "memory",
    key: "memory",
  },
  {
    title: "Frecuencia Básica",
    dataIndex: "basicFrequency",
    key: "basicFrequency",
  },
  {
    title: "Frecuencia Máxima",
    dataIndex: "maxFrequency",
    key: "maxFrequency",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Longitud",
    dataIndex: "length",
    key: "length",
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
        <Update
          content={<ModalGraphicsEdit record={record} after={getData} />}
        />
        <Delete record={record} endpoint="graphics" after={getData} />
      </>
    ),
  };
  const getData = async () => {
    const resp = await fetchSinToken("graphics");
    const body = await resp.json();
    let data = body.data;
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout selectedKey={["6"]}>
      <>
        <h2>Gráficos</h2>
        <Create text="Gráficos" content={<ModalGraphics getData={getData} />} />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
      </>
    </Layout>
  );
};

export default React.memo(index);
