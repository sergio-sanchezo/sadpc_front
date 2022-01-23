import { Button, Form, Input } from "antd";
import React from "react";

const Login = () => {
  return (
    <div className="logContainer">
      <div className="logContainer__data">
        <h1 className="logContainer__data--title">Iniciar sesión</h1>
        <Form
          onFinish={(data: any) => console.log(data)}
          className="logContainer__data__form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            className="logContainer__data__form__item"
            name="username"
            label="Correo"
            rules={[
              {
                required: true,
                type: "email",
                message: "Por favor introduce tu correo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="logContainer__data__form__item"
            name="password"
            label="Contraseña"
            rules={[
              { required: true, message: "Por favor introduce tu contraseña!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="logContainer__data__form__item"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Login);
