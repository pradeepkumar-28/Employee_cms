import React from "react";
import {
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
} from "@elastic/eui";

function ModalComponent({ isModalVisible, oncloseModal, body }) {
  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={oncloseModal} initialFocus="[name=popswitch]">
        <EuiModalHeader>
          <EuiModalHeaderTitle>Please Fill All details</EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>{body}</EuiModalBody>
      </EuiModal>
    );
  }

  return <div>{modal}</div>;
}

export default ModalComponent;
