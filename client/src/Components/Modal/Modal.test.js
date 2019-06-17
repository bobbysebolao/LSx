import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import { Modal, OpenModal } from "./Modal";

afterEach(cleanup);

test(" the modal opens when clicked", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);

  const { getByText } = render(
    <OpenModal
      toggle={show => <button onClick={show}>Learn about LSx</button>}
      content={hide => (
        <Modal>
          <button onClick={hide}>X</button>
          <h2>
            Testing <a href='http://www.lsx.org.uk/'>LSx</a>
          </h2>
        </Modal>
      )}
    />
  );

  const buttonNode = getByText(/Learn about LSx/i);
  fireEvent.click(buttonNode);
  getByText("Testing");
});
