import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export default function FullPageLoading() {
  return (
    <div
      style={{
        height: "91vh",
      }}
      className="flex justify-content-center align-items-center w-ful bg-black-alpha-90">
      <ProgressSpinner />
    </div>
  );
}
