import React from "react";
import { InputWindowStep } from ".";

interface Props {
  obj: any;
}

const InputWindowListStep: React.FC<Props> = (props) => {
  const todos = props.obj.map((todo: any) => <InputWindowStep id={todo.id} />);

  return <>{todos}</>;
};

export default InputWindowListStep;
