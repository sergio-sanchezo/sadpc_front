import React, { useEffect, useMemo, useState } from "react";
import Create from "../../components/crud/Create";
import Delete from "../../components/crud/Delete";
import TableData from "../../components/crud/TableData";
import Update from "../../components/crud/Update";
import ModalMotherBoard from "../../components/motherboard/ModalMotherBoard";
import ModalMotherBoardEdit from "../../components/motherboard/ModalMotherBoardEdit";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";
import { getMaxAvl } from "../../selectors/getMaxAvl";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Socket",
    dataIndex: "socket",
    key: "socket",
  },
  {
    title: "Factor de Forma",
    dataIndex: "shapeFactor",
    key: "shapeFactor",
  },
  {
    title: "Memoria máxima",
    dataIndex: "maxMemory",
    key: "maxMemory",
  },
  {
    title: "Slots",
    dataIndex: "slots",
    key: "slots",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
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

  // avl
  const dataAvl = useMemo(() => getMaxAvl(dataSource), [dataSource]);
  const getData = async () => {
    const resp = await fetchSinToken("motherboard");
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
          content={<ModalMotherBoardEdit record={record} after={getData} />}
        />
        <Delete record={record} endpoint="motherboard" after={getData} />
      </>
    ),
  };

  return (
    <Layout selectedKey={["4"]}>
      <>
        <h2>Tarjeta Madre</h2>
        <Create
          text="Tarjeta Madre"
          content={<ModalMotherBoard getData={getData} />}
        />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
        {dataAvl ? (
          <div className="avlContainer">
            <h2>Calificación más alta</h2>
            <div className="settings">
              <label>Nombre:</label> <p>{dataAvl.name}</p>
              <label>Socket:</label> <p>{dataAvl.socket}</p>
              <label>Factor de forma:</label> <p>{dataAvl.shapeFactor}</p>
              <label>Memoria máxima:</label> <p>{dataAvl.maxMemory}</p>
              <label>Slots:</label> <p>{dataAvl.slots}</p>
              <label>Color:</label> <p>{dataAvl.color}</p>
              <label>Calificaciones:</label> <p>{dataAvl.ratings}</p>
              <label>Precio:</label> <p>{dataAvl.cost}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    </Layout>
  );
};

export default React.memo(index);
