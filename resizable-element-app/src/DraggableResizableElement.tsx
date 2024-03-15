import "./resizableElement.css";
import Draggable from "react-draggable";
const DraggableResizableElement = () => {
  return (
    <>
      <Draggable>
        <div
          className="resizeElement"
          style={{ backgroundColor: "yellow", width: "200px", height: "100px" }}
        >
          Resizable Div
        </div>
      </Draggable>
      <h1
        className="resizeElement"
        style={{ backgroundColor: "red", width: "200px", height: "100px" }}
      >
        Resizable h1
      </h1>
    </>
  );
};

export default DraggableResizableElement;
