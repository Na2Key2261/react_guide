const Example = () => {
  const num = { val: 2 }
  
  const double = (num) => {
    const newNum = { val: num.val * 2 };
    // newNum.val = num.val * 2;
    return newNum;
  }

  const newNum = double(num);
  console.log('newNum', newNum, 'num', num)
  console.log(newNum === num);
  return (
    <>
      <div>Immutability</div>
    </>
  );
};

export default Example;
