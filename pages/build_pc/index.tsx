import React, { useEffect, useState } from "react";
import MakePc from "../../components/build_pc/MakePc";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";

const index = () => {
  const [dataSource, setDataSource] = useState([]);

  const getData = async () => {
    const resp = await fetchSinToken("build_pc");
    const body = await resp.json();
    // console.log(body);
    let data = body.data;
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  //   console.log(mockData);
  return (
    <Layout selectedKey={["8"]}>
      <>
        <h2>Construye una PC</h2>
        <div className="main__container">
          <div className="main__info__container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              exercitationem doloribus molestias ipsa facilis quo architecto
              dicta cum, nihil beatae eum iusto debitis optio, tempora sequi!
              Natus illo vitae iusto! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium odio dolores quisquam fuga, eius
              earum recusandae quod porro ea odit blanditiis incidunt deleniti
              consequatur molestias eum. Quia deleniti consequuntur error!
            </p>
          </div>
          <MakePc data={dataSource} />
        </div>
      </>
    </Layout>
  );
};

export default React.memo(index);
