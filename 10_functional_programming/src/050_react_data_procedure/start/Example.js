import { useState } from "react";

let value = 0;
const Example = () => {
  // 関数コンポーネントはJSXを作成する場所なので、それ以外の処理は書かない。

  // 状態はstateに分離する
  const [ state, setState ] = useState(0);

  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
