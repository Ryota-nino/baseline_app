import React from "react";
import { InputWindowEntry } from "./index";

interface Props {
  obj: any;
}

const InputWindowListStep: React.FC<Props> = (props) => {
  const todos = props.obj.map((todo: any) => <InputWindowEntry id={todo.id} />);

  return <>{todos}</>;
};

export default InputWindowListStep;
