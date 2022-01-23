import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalDisplay = ({ getData }: any) => {
  const onFinish = async (data: any) => {
    console.log(data);
    const resp = await fetchSinToken("display", data, "POST");
    const body = await resp.json();
    if (body.ok) {
      message.success("Creado con éxito");
      getData();
    }
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar Display</h2>
      <span>Nombre:</span>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Por favor introduce un nombre",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Tamaño:</span>
      <Form.Item
        name="size"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Resolución:</span>
      <Form.Item
        name="resolution"
        rules={[
          {
            required: true,
            message: "Por favor introduce una frecuencia básica",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Tiempo Refrescar:</span>
      <Form.Item
        name="refreshTime"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tiempo de Respuesta:</span>
      <Form.Item
        name="responseTime"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tipo Panel:</span>
      <Form.Item
        name="panelType"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Relación Aspecto:</span>
      <Form.Item
        name="aspectRatio"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Calificaciones:</span>
      <Form.Item
        name="ratings"
        rules={[
          {
            required: true,
            message: "Por favor introduce una calificación",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Precio:</span>
      <Form.Item
        name="cost"
        rules={[
          {
            required: true,
            message: "Por favor introduce un precio",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Crear
        </Button>
      </Form.Item>
    </Form>
  );
};

export default React.memo(ModalDisplay);
