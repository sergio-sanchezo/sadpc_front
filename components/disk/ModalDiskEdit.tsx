import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalDiskEdit = (props: { record: any; after: () => void }) => {
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
    const resp = await fetchSinToken("disk", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Crear Disco</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>Capacidad:</span>
      <Form.Item name="capacity">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Costo por GB:</span>
      <Form.Item name="costPerGb">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tipo:</span>
      <Form.Item name="type">
        <Input />
      </Form.Item>
      <span>Cache:</span>
      <Form.Item name="cache">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Factor de Forma:</span>
      <Form.Item name="shapeFactor">
        <Input />
      </Form.Item>
      <span>Interfaz:</span>
      <Form.Item name="interface">
        <Input />
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

export default React.memo(ModalDiskEdit);
