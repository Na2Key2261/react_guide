
import { List } from "./List";
import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

// POINT コンポーネントを default export
export default Child;