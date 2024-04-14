import { FC } from "react";
// import { SelectItemsModal } from "../components/SlectItemsModal/SelectItemsModal";
import "./App.css";
// import { Modal } from "../components/Modal/Modal";
import { SelectItems } from "./SelectItems/SelectItems";

const App: FC = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Pick 3 items</button> */}
      {/* {showModal && <SelectItemsModal />} */}
      {/* <Modal isOpen={showModal}>Modal</Modal> */}
      <SelectItems />
    </>
  );
};

export default App;
