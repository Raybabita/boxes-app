const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="Bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box text="small" className="smallBox-bg-color" />
      <Box text="medium" className="mediumBox-bg-color" />
      <Box text="large" className="largeBox-bg-color " />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
