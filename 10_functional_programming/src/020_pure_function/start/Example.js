const Example = () => {
  const val1 = 3, val2 = 9;
  let result;
  const add = (val1) => {
    console.log(val1);
    result = val1 + val2;
    return val1 + val2;
  }

  return (
    <>
      <div>純粋関数:{add(val1)}</div>
    </>
  );
};

export default Example;
