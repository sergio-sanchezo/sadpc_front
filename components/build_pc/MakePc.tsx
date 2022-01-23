import { Button, Transfer } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Stack } from "../../dataStructures/Stack";
import { fetchSinToken } from "../../helpers/fetch";
import { convertData } from "../../selectors/convertData";

const MakePc = (props: { data: any }) => {
  const { data } = props;
  const treeData = useMemo(() => convertData(data), [data]);
  const [undoStack] = useState(new Stack());
  const [redoStack] = useState(new Stack());

  const [disableUndo, setDisableUndo] = useState(true);
  const [disableRedo, setDisableRedo] = useState(true);

  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([] as any);
  const onChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
    // console.log("targetKeys:", nextTargetKeys);
    // console.log("direction:", direction);
    // console.log("moveKeys:", moveKeys);
    undoStack.pushData(nextTargetKeys);
    setDisableUndo(false);
    setTargetKeys(undoStack.peek());
  };
  const onHandleUndo = () => {
    undoStack.undo_redo(redoStack);
    setDisableRedo(false);
    if (undoStack.isEmpty() === true) {
      setDisableUndo(true);
    }
    setTargetKeys(undoStack.peek());
  };

  const onHandleRedo = () => {
    redoStack.undo_redo(undoStack);
    setDisableUndo(false);
    if (redoStack.isEmpty() === true) {
      setDisableRedo(true);
    }
    setTargetKeys(undoStack.peek());
  };

  const onSelectChange = (sourceSelectedKeys: any, targetSelectedKeys: any) => {
    // console.log("sourceSelectedKeys:", sourceSelectedKeys);
    // console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction: any, e: any) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <div className="transfer__main">
      <div>
        <Transfer
          listStyle={{
            width: 500,
            height: 300,
            background: "#fff",
          }}
          dataSource={treeData}
          titles={["Source", "Target"]}
          operations={["Agregar", "Eliminar"]}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={onChange}
          onSelectChange={onSelectChange}
          onScroll={onScroll}
          render={(item: any) => item.title}
        />
        <div className="transfer__buttons">
          <Button
            disabled={disableUndo}
            type="dashed"
            className="transfer__buttons__element"
            onClick={() => onHandleUndo()}
          >
            Undo
          </Button>
          <Button
            disabled={disableRedo}
            type="dashed"
            className="transfer__buttons__element"
            onClick={() => onHandleRedo()}
          >
            Redo
          </Button>
        </div>
      </div>

      <Button
        type="primary"
        style={{ marginTop: "20px" }}
        onClick={() => console.log(targetKeys)}
      >
        Aceptar
      </Button>
    </div>
  );
};

export default React.memo(MakePc);
