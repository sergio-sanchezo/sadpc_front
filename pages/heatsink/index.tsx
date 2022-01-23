import { Avatar, List } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import Create from "../../components/crud/Create";
import Delete from "../../components/crud/Delete";
import TableData from "../../components/crud/TableData";
import Update from "../../components/crud/Update";
import ModalHeatSink from "../../components/heatsink/ModalHeatSink";
import ModalHeatSinkEdit from "../../components/heatsink/ModalHeatSinkEdit";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";
import { sortDataByRating } from "../../selectors/sortDataByRating";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "RPM",
    dataIndex: "rpm",
    key: "rpm",
  },
  {
    title: "Ruido",
    dataIndex: "noise",
    key: "noise",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Tamaño",
    dataIndex: "size",
    key: "size",
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

  //qHeap
  const dataHeap = useMemo(() => sortDataByRating(dataSource), [dataSource]);
  const getData = async () => {
    const resp = await fetchSinToken("heatsink");
    const body = await resp.json();
    let data = body.data;
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const actions = {
    title: "Acciones",
    key: "action",
    render: (_: any, record: any) => (
      <>
        <Update
          content={<ModalHeatSinkEdit record={record} after={getData} />}
        />
        <Delete record={record} endpoint="heatsink" after={getData} />
      </>
    ),
  };

  return (
    <Layout selectedKey={["3"]}>
      <>
        <h2>Disipador</h2>
        <Create
          text="Disipador"
          content={<ModalHeatSink getData={getData} />}
        />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
        <h2>TOP Ratings</h2>
        <List
          itemLayout="horizontal"
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "20px",
          }}
          dataSource={dataHeap}
          renderItem={(item: any, index: number) => (
            <List.Item>
              <List.Item.Meta
                title={`${index + 1}. ${item.name}`}
                description={`Calificaciones: ${item.ratings}`}
              />
              <div>SADPC</div>
            </List.Item>
          )}
        />
      </>
    </Layout>
  );
};

export default React.memo(index);
