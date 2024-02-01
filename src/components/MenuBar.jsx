import "./MenuBar.css"; 

function MenuBar({ handleButton }) {
  const handleClick = (btn) => {
   handleButton(btn);
  };
  
  return (
    <>
    <div>
        <h1 className="header">Comparison Sorting Algorithms</h1>
    </div>
    <div className="container">
      <button className="button" onClick={() => handleClick(0)}>
        Randomize array
      </button>
      <button className="button" onClick={() => handleClick(1)}>
        Insertion sort
      </button>
      <button className="button" onClick={() => handleClick(2)}>
        Selection sort
      </button>
      <button className="button" onClick={() => handleClick(3)}>
        Bubble sort
      </button>
      <button className="button" onClick={() => handleClick(4)}>
        Quick sort
      </button>
      <button className="button" onClick={() => handleClick(5)}>
        Merge sort
      </button>
      <button className="button" onClick={() => handleClick(6)}>
        Shell sort
      </button>
      <button className="button" onClick={() => handleClick(7)}>
        Change size
      </button>
    </div>
    </>
  );
}

export default MenuBar;