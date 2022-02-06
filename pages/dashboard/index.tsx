import { Button, Form, Input, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Principal/Layout";
import { fetchSinToken } from "../../helpers/fetch";
import { makeHash } from "../../selectors/findByHash";

const index = () => {
  const [dataSource, setDataSource] = useState([]);
  const [actualItem, setActualItem] = useState<any>({ name: "Resultados" });

  const Hash = useMemo(() => makeHash(dataSource), [dataSource]);
  const getData = async () => {
    const resp = await fetchSinToken("build_pc");
    const body = await resp.json();
    let data = body.data;
    let result = [] as any;
    Object.keys(data).map((key: string) => {
      result = [...result, ...data[key]];
    });

    setDataSource(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnFinish = (data: any) => {
    const result = Hash.get(data.search);
    if (!result) {
      message.error("No existen elementos con este nombre");
    } else {
      setActualItem(result);
    }
  };
  return (
    <Layout selectedKey={["1"]}>
      <>
        <h2>Dashboard</h2>
        <div className="mainContainer">
          <div className="buscar">
            <h2>Busca un componente y verifica sus características</h2>
            <Form onFinish={handleOnFinish}>
              <Form.Item name="search">
                <Input placeholder="EJ: Intel Core i5" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Buscar...
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="resultados">
            {actualItem && (
              <>
                <h2>{actualItem.name}</h2>
                {Object.keys(actualItem).map((key) => {
                  if (key !== "_id" && key !== "name" && key !== "__v") {
                    return (
                      <>
                        <span className="bold">{`${key}:`}</span>
                        <p>{`${actualItem[key]}`}</p>
                      </>
                    );
                  }
                })}
              </>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default React.memo(index);
