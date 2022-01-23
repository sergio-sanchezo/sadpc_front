import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalHeatSinkEdit = (props: { record: any; after: () => void }) => {
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
    const resp = await fetchSinToken("heatsink", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar Disipador</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>RPM:</span>
      <Form.Item name="rpm">
        <Input />
      </Form.Item>
      <span>Ruido:</span>
      <Form.Item name="noise">
        <Input />
      </Form.Item>
      <span>Color:</span>
      <Form.Item name="color">
        <Input />
      </Form.Item>
      <span>Tamaño:</span>
      <Form.Item name="size">
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

export default React.memo(ModalHeatSinkEdit);
