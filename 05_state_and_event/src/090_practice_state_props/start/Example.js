
const Example = () => {
  const [ count, setCount ] = useState(0);

    return (
      <>
        <CountResult title="カウント" count={count} />
        <CountUpdate setCount={setCount} />
      </>
    );
};
const CountResult = (/* propsを定義 */) => <h3>{/* propsのtitleとcountの値を表示 */}</h3>

const CountUpdate = (/* propsを定義 */) => {
  const countUp = () => {
    /* countに1追加 */
  };
  const countDown = () => {
    /* countから1マイナス */ 
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
