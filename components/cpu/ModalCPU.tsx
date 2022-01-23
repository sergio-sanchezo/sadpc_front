import { Button, Form, Input, InputNumber, message, Select } from "antd";
import React from "react";
import { fetchSinToken } from "../../helpers/fetch";

const { Option } = Select;

const ModalCPU = ({ getData }: any) => {
  const onFinish = async (data: any) => {
    console.log(data);
    const resp = await fetchSinToken("cpu", data, "POST");
    const body = await resp.json();
    if (body.ok) {
      message.success("Creado con éxito");
      getData();
    }
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Crear CPU</h2>
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
      <span>Núcleos:</span>
      <Form.Item
        name="cores"
        rules={[
          {
            required: true,
            message: "Por favor introduce una número",
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
            message: "Por favor introduce una frecuencia básica",
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
            message: "Por favor introduce una frecuencia máxima",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Potencia:</span>
      <Form.Item
        name="power"
        rules={[
          {
            required: true,
            message: "Por favor introduce un número",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Gráficos Integrados:</span>
      <Form.Item
        name="integratedGraphics"
        rules={[
          {
            required: true,
            message: "Por favor llena el campo",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Multi-hilos simultáneos:</span>
      <Form.Item
        name="multiThreading"
        rules={[
          {
            required: true,
            message: "Por favor llena el campo",
          },
        ]}
      >
        <Select style={{ width: "100%" }}>
          <Option value={true}>Si</Option>
          <Option value={false}>No</Option>
        </Select>
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

export default React.memo(ModalCPU);
