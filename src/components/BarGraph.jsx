import "./BarGraph.css";


function BarGraph({ numbers, newWidth }) {
  return (
    <div className="array-container">
      {numbers.map((number, index) => (
        <div>
          <div
            key={index}
            className="box"
            style={{
              height: `${(number / 100) * newWidth * 3 }px`,
              width: `${newWidth}px`,
            }}
          ></div>
          <div className="number">{number}</div>
        </div>
      ))}
    </div>
  );
}

export default BarGraph;