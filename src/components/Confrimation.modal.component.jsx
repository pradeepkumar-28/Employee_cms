import React from "react";
import { EuiConfirmModal } from "@elastic/eui";

function ConfrimationModal({
  isDeleteModalVisible,
  onCloseDeleteModalHandler,
  onConfrimDeleteHandler,
}) {
  let destroyModal;

  if (isDeleteModalVisible) {
    destroyModal = (
      <EuiConfirmModal
        title="Are you Sure?"
        onCancel={onCloseDeleteModalHandler}
        onConfirm={onConfrimDeleteHandler}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        buttonColor="danger"
        defaultFocusedButton="confirm"
      ></EuiConfirmModal>
    );
  }

  return <>{destroyModal}</>;
}

export default ConfrimationModal;
