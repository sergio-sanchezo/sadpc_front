import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalDisk = ({ getData }: any) => {
  const onFinish = async (data: any) => {
    console.log(data);
    const resp = await fetchSinToken("disk", data, "POST");
    const body = await resp.json();
    if (body.ok) {
      message.success("Creado con éxito");
      getData();
    }
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Crear Disco</h2>
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
      <span>Capacidad:</span>
      <Form.Item
        name="capacity"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Costo por GB:</span>
      <Form.Item
        name="costPerGb"
        rules={[
          {
            required: true,
            message: "Por favor introduce una frecuencia básica",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Tipo:</span>
      <Form.Item
        name="type"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Cache:</span>
      <Form.Item
        name="cache"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Factor de Forma:</span>
      <Form.Item
        name="shapeFactor"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Interfaz:</span>
      <Form.Item
        name="interface"
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

export default React.memo(ModalDisk);
