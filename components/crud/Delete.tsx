import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import { fetchSinToken } from "../../helpers/fetch";

interface DeleteProps {
  record: any;
  endpoint: any;
  after: () => void;
}

const Delete = ({ record, endpoint, after }: DeleteProps) => {
  const [showModal, setShowModal] = useState(false);
  const modalState = (state: boolean) => {
    setShowModal(state);
  };
  const onDelete = async (record: any, endpoint: any) => {
    console.log(record);
    const resp = await fetchSinToken(endpoint, record, "DELETE");
    const body = await resp.json();
    if (body.ok) {
      message.warning("Eliminado con éxito");
    }
    after();
  };
  return (
    <>
      <Tooltip placement="top" title="Borrar">
        <DeleteOutlined
          className="action-btn"
          onClick={() => modalState(true)}
        />
      </Tooltip>
      <Modal
        footer={null}
        visible={showModal}
        onCancel={() => modalState(false)}
      >
        <h2>{`Eliminar ${record.name}?`}</h2>
        <Button
          danger
          type="primary"
          onClick={() => onDelete(record, endpoint)}
        >
          Eliminar
        </Button>
      </Modal>
    </>
  );
};

export default Delete;
