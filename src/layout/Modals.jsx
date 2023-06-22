import { useSelector, useDispatch } from "react-redux";
import CustomDialogModal from "../components/UI/Modals/CustomDialogModal";
import CustomModal from "../components/UI/Modals/CustomModal";
import { setDialogModal, setModal } from "../app/Slicers/localStates/modals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

const Modals = () => {
  const { dialogModal, modal } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  return (
    <>
      <AnimatePresence>
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
      </AnimatePresence>

      <AnimatePresence>
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
      </AnimatePresence>

      <ToastContainer />
    </>
  );
};

export default Modals;
