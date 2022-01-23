import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalGraphicsEdit = (props: { record: any; after: () => void }) => {
  const { record, after } = props;
  const id = record._id;
  const onFinish = async (data: any) => {
    const isNull = Object.values(data).every(
      (o) => o === null || o === undefined
    );
    if (isNull) {
      return message.info("No se ha introducido información");
    }
    data._id = id;
    const resp = await fetchSinToken("graphics", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar Gráficos</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>ChipSet:</span>
      <Form.Item name="chipSet">
        <Input />
      </Form.Item>
      <span>Memoria:</span>
      <Form.Item name="memory">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Frecuencia Básica:</span>
      <Form.Item name="basicFrequency">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Frecuencia Máxima:</span>
      <Form.Item name="maxFrequency">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Color:</span>
      <Form.Item name="color">
        <Input />
      </Form.Item>
      <span>Longitud:</span>
      <Form.Item name="length">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Calificaciones:</span>
      <Form.Item name="ratings">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Precio:</span>
      <Form.Item name="cost">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Editar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default React.memo(ModalGraphicsEdit);
