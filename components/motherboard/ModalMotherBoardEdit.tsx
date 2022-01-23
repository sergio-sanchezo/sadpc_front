import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalMotherBoardEdit = (props: { record: any; after: () => void }) => {
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
    const resp = await fetchSinToken("motherboard", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar Tarjeta Madre</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>Socket CPU:</span>
      <Form.Item name="socket">
        <Input />
      </Form.Item>
      <span>Factor de Forma:</span>
      <Form.Item name="shapeFactor">
        <Input />
      </Form.Item>
      <span>Memoria máxima:</span>
      <Form.Item name="maxMemory">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Slots:</span>
      <Form.Item name="slots">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Color:</span>
      <Form.Item name="color">
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

export default React.memo(ModalMotherBoardEdit);
