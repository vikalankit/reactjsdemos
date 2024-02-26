import { FC } from "react";
import { Button, Modal} from "react-bootstrap";
// import "./MyModelDialog.css";

export interface IMyModelProps {
    isShow: boolean;
    closePopup: (isClosed: boolean) => void;
}
const MyModel:FC<IMyModelProps> = (props: IMyModelProps) => {
    const {isShow, closePopup} =  props;
    const handleClose = () => {
        closePopup(!isShow);
    }
    return (
        <Modal show={isShow} onHide={() => handleClose()}
        contentClassName="containerDiv">
        <Modal.Header className="headerDiv" closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default MyModel;