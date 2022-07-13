import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, onDismiss }) => {
  const onClickGrey = (e) => {
    const isInModal = e.target.closest(".modal");
    if (!isInModal) onDismiss();
  };

  return ReactDOM.createPortal(
    <div onClick={onClickGrey} className="ui dimmer modals visible active">
      <div className="ui standard modal visble active">
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
