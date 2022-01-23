import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalDisplayEdit = (props: { record: any; after: () => void }) => {
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
    const resp = await fetchSinToken("display", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar Monitor</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>Tamaño:</span>
      <Form.Item name="size">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Resolución:</span>
      <Form.Item name="resolution">
        <Input />
      </Form.Item>
      <span>Tiempo Refrescar:</span>
      <Form.Item name="refreshTime">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tiempo de Respuesta:</span>
      <Form.Item name="responseTime">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tipo Panel:</span>
      <Form.Item name="panelType">
        <Input />
      </Form.Item>
      <span>Relación Aspecto:</span>
      <Form.Item name="aspectRatio">
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

export default React.memo(ModalDisplayEdit);
