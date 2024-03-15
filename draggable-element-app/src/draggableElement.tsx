import Draggable from "react-draggable";
const DraggableElement = () => {
  return (
    <>
      <Draggable>
        <div
          style={{ backgroundColor: "yellow", width: "200px", height: "100px" }}
        >
          draggable div
        </div>
      </Draggable>
      <Draggable>
        <p style={{ backgroundColor: "red", width: "200px", height: "100px" }}>
          draggable paragraph
        </p>
      </Draggable>
      <Draggable>
        <h1
          style={{ backgroundColor: "blue", width: "300px", height: "200px" }}
        >
          draggable h1
        </h1>
      </Draggable>
      <Draggable>
        <span
          style={{ backgroundColor: "pink", width: "300px", height: "200px" }}
        >
          draggable span
        </span>
      </Draggable>
    </>
  );
};

export default DraggableElement;
