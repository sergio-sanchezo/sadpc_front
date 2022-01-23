import { Button, Form, Input, InputNumber, message, Select } from "antd";
import React, { useState } from "react";
import { fetchSinToken } from "../../helpers/fetch";

const { Option } = Select;

const ModalCPUEdit = (props: { record: any; after: () => void }) => {
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
    const resp = await fetchSinToken("cpu", data, "PUT");
    const body = await resp.json();
    if (body.ok) {
      message.success("Editado con éxito");
    }
    after();
  };

  return (
    <Form onFinish={onFinish}>
      <h2>Editar CPU</h2>
      <span>Nombre:</span>
      <Form.Item name="name">
        <Input />
      </Form.Item>
      <span>Núcleos:</span>
      <Form.Item name="cores">
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
      <span>Potencia:</span>
      <Form.Item name="power">
        <InputNumber style={{ width: "100%" }} max={9999999999} />
      </Form.Item>
      <span>Gráficos Integrados:</span>
      <Form.Item name="integratedGraphics">
        <Input />
      </Form.Item>
      <span>Multi-hilos simultáneos:</span>
      <Form.Item name="multiThreading">
        <Select style={{ width: "100%" }}>
          <Option value={true}>Si</Option>
          <Option value={false}>No</Option>
        </Select>
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

export default React.memo(ModalCPUEdit);
