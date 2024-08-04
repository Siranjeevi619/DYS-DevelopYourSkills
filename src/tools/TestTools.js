import React from "react";
import ToastModal, { notifySuccess, notifyError } from "./ToastModal";

function TestTool() {
  return (
    <div>
      <button onClick={() => notifySuccess("Success! Operation completed.")}>Show Success Toast</button>
      <button onClick={() => notifyError("Error! Something went wrong.")}>Show Error Toast</button>
      <ToastModal />
    </div>
  );
}

export default TestTool;
