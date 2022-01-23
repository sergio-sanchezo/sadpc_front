import { Card, Input } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import ModalCPU from "../../components/cpu/ModalCPU";
import ModalCPUEdit from "../../components/cpu/ModalCPUEdit";
import Create from "../../components/crud/Create";
import Delete from "../../components/crud/Delete";
import TableData from "../../components/crud/TableData";
import Update from "../../components/crud/Update";
import Layout from "../../components/Principal/Layout";
import { LinkedList } from "../../dataStructures/LinkedList";
import { fetchSinToken } from "../../helpers/fetch";
import { getDataByName } from "../../selectors/getDataByName";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Núcleos",
    dataIndex: "cores",
    key: "cores",
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
    title: "Potencia",
    dataIndex: "power",
    key: "power",
  },
  {
    title: "Gráficos Integrados",
    dataIndex: "integratedGraphics",
    key: "integratedGraphics",
  },
  {
    title: "Multi-hilos simultáneos",
    dataIndex: "multiThreading",
    key: "multiThreading",
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

const { Search } = Input;

const index = () => {
  const [dataSource, setDataSource] = useState([]);
  const [filterName, setFilterName] = useState("");

  const dataFiltered = useMemo(
    () => getDataByName(filterName, dataSource),
    [filterName, dataSource]
  );

  const getData = async () => {
    const resp = await fetchSinToken("cpu");
    const body = await resp.json();
    let data = body.data;
    data = data.map((el: any) =>
      !el.integratedGraphics ? { ...el, integratedGraphics: "NO" } : el
    );
    data = data.map((el: any) =>
      el.multiThreading
        ? { ...el, multiThreading: "SI" }
        : { ...el, multiThreading: "NO" }
    );
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
        <Update content={<ModalCPUEdit record={record} after={getData} />} />
        <Delete record={record} endpoint="cpu" after={getData} />
      </>
    ),
  };

  return (
    <Layout selectedKey={["2"]}>
      <>
        <h2>CPU</h2>
        <Create text="CPU" content={<ModalCPU getData={getData} />} />
        <TableData columns={[...columns, actions]} dataSource={dataSource} />
        <h2>Buscar CPU</h2>
        <Search
          placeholder="Buscar por nombre"
          onSearch={(a: string) => {
            setFilterName(a);
          }}
          style={{ width: 400, marginTop: "20px" }}
        />
        {dataFiltered.length > 0 ? (
          <div className="cardContainer animate__animated animate__fadeIn animate__faster">
            {dataFiltered.map((el: any) => (
              <Card
                title={el.name}
                key={el._id}
                className="card animate__animated animate__fadeIn animate__faster"
              >
                <div className="settings">
                  <label>Núcleos</label>
                  <p>{el.cores}</p>

                  <label>Frecuencia básica</label>
                  <p>{el.basicFrequency}</p>

                  <label>Frecuencia Máxima</label>
                  <p>{el.maxFrequency}</p>

                  <label>Multihilos</label>
                  <p>{el.multiThreading}</p>

                  <label>Potencia</label>
                  <p>{el.power}</p>

                  <label>Calificaciones</label>
                  <p>{el.ratings}</p>

                  <label>Costo</label>
                  <p>{el.cost}</p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="searchComponent animate__animated animate__fadeIn animate__faster">
            Busca un componente por su nombre
          </p>
        )}
      </>
    </Layout>
  );
};

export default React.memo(index);
