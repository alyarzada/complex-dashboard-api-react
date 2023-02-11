import { useSelector, useDispatch } from "react-redux";
import CustomDialogModal from "../components/UI/CustomDialogModal";
import CustomModal from "../components/UI/CustomModal";
import CustomNestedModal from "../components/UI/CustomNestedModal";
import {
  setDialogModal,
  setModal,
  setNestedModal,
} from "../app/Slicers/modals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modals = () => {
  const { dialogModal, modal, nestedModal } = useSelector(
    (state) => state.modals
  );
  const dispatch = useDispatch();

  return (
    <>
      {modal.isOpen ? (
        <CustomModal
          handleClose={() => {
            dispatch(setModal({ ...modal, isOpen: false }));
          }}
          children={modal.children}
          status={modal.status}
          changeStatus={modal.changeStatus}
          title={modal.title}
          className={modal.className}
        />
      ) : null}

      {dialogModal.isOpen ? (
        <CustomDialogModal
          handleAgree={dialogModal.handleAgree}
          question={dialogModal.question}
          title={dialogModal.title}
          className={modal?.className}
          handleClose={() =>
            dispatch(
              setDialogModal({
                ...dialogModal,
                isOpen: false,
              })
            )
          }
          loadingData=""
        />
      ) : null}

      <ToastContainer />

      {/* {nestedModal.isOpen ? (
        <CustomNestedModal
          handleClose={() => {
            dispatch(setNestedModal({ ...nestedModal, isOpen: false }));
          }}
          children={nestedModal.children}
          status={nestedModal.status}
          changeStatus={nestedModal.changeStatus}
          title={nestedModal.title}
        />
      ) : null} */}
    </>
  );
};

export default Modals;
