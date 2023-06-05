import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import ProductFilter from "./ProductFilter";

export default function SideFilterMenuMobile() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center mobile--filter--btn">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}>
        <ProductFilter />
      </Sidebar>
      <Button
        className="filter--btn"
        icon="bi bi-funnel"
        onClick={() => setVisible(true)}
      />
    </div>
  );
}
