import React, { useEffect, useMemo, useState } from "react";
import ModalDisk from "../../components/disk/ModalDisk";
import Create from "../../components/crud/Create";
import TableData from "../../components/crud/TableData";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";
import Update from "../../components/crud/Update";
import Delete from "../../components/crud/Delete";
import ModalDiskEdit from "../../components/disk/ModalDiskEdit";
import { getMaxByRating } from "../../selectors/getMaxByRatingBST";
import { Card } from "antd";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Capacidad",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Costo por GB",
    dataIndex: "costPerGb",
    key: "costPerGb",
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Cache",
    dataIndex: "cache",
    key: "cache",
  },
  {
    title: "Factor de Forma",
    dataIndex: "shapeFactor",
    key: "shapeFactor",
  },
  {
    title: "Interfaz",
    dataIndex: "interface",
    key: "interface",
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

  // bst
  const dataBST = useMemo(() => getMaxByRating(dataSource), [dataSource]);
  console.log(dataBST?.label);
  const getData = async () => {
    const resp = await fetchSinToken("disk");
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
        <Update content={<ModalDiskEdit record={record} after={getData} />} />
        <Delete record={record} endpoint="disk" after={getData} />
      </>
    ),
  };

  return (
    <Layout selectedKey={["5"]}>
      <>
        <h2>Disco</h2>
        <Create text="Disco" content={<ModalDisk getData={getData} />} />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
        {dataBST?.label && (
          <Card
            title={dataBST?.label.name + " - " + "Mejor calificado"}
            key={dataBST?.label._id}
            className="card animate__animated animate__fadeIn animate__faster"
          >
            <div className="settings">
              <div className="data">
                <label>Nombre</label>
                <p>{dataBST?.label.name}</p>

                <label>Capacidad</label>
                <p>{dataBST?.label.capacity}</p>

                <label>Costo por GB</label>
                <p>{dataBST?.label.costPerGb}</p>

                <label>Caché</label>
                <p>{dataBST?.label.cache}</p>

                <label>Factor de Forma</label>
                <p>{dataBST?.label.shapeFactor}</p>

                <label>Interfaz</label>
                <p>{dataBST?.label.interface}</p>

                <label>Calificaciones</label>
                <p>{dataBST?.label.ratings}</p>

                <label>Precio</label>
                <p>{dataBST?.label.cost}</p>
              </div>
            </div>
          </Card>
        )}
      </>
    </Layout>
  );
};

export default React.memo(index);
