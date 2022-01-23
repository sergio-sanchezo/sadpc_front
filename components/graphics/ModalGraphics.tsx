import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const ModalGraphics = ({ getData }: any) => {
  const onFinish = async (data: any) => {
    console.log(data);
    const resp = await fetchSinToken("graphics", data, "POST");
    const body = await resp.json();
    if (body.ok) {
      message.success("Creado con éxito");
      getData();
    }
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Crear Gráficos</h2>
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
      <span>ChipSet:</span>
      <Form.Item
        name="chipSet"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Memoria:</span>
      <Form.Item
        name="memory"
        rules={[
          {
            required: true,
            message: "Por favor introduce una frecuencia básica",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Frecuencia Básica:</span>
      <Form.Item
        name="basicFrequency"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Frecuencia Máxima:</span>
      <Form.Item
        name="maxFrequency"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Color:</span>
      <Form.Item
        name="color"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Longitud:</span>
      <Form.Item
        name="length"
        rules={[
          {
            required: true,
            message: "Por favor introduce un color",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
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

export default React.memo(ModalGraphics);
