import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { DELETE_ADDRESS, UPDATE_DEFAULT_ADDRESS } from "../reducers/userReducer";
import { UserContext } from "../context/UserContext";

import React, { useContext } from "react";
import { Button } from "primereact/button";

export default function AddressCard({ address, toast, col = 6 }) {
  const { userDispatch } = useContext(UserContext);
  const footer = (id, isDefault) => (
    <div className="flex justify-content-end">
      <Button
        // label="Remove"
        icon="bi bi-trash"
        disabled={isDefault}
        onClick={() => {
          userDispatch({ type: DELETE_ADDRESS, payload: id });
          toast.current.show({
            severity: "info",
            summary: "Information",
            detail: `Address Deleted`,
            life: 3000,
          });
        }}
      />
    </div>
  );
  const header = (id, isDefault) => (
    <span>
      <Checkbox
        id={`${id}-checkbox`}
        checked={isDefault}
        onChange={() => userDispatch({ type: UPDATE_DEFAULT_ADDRESS, payload: id })}
        className="m-2"
      />
      <label htmlFor={`${id}-checkbox`}>{`${isDefault ? "Default" : "Make Default"}`}</label>
    </span>
  );
  const { name, lastName, title, id, isDefault, fullAddress, city, state, country, phone, email } =
    address || {};
  return (
    <article className={`col-${col}`}>
      <Card
        title={`${name}, ${lastName}`}
        subTitle={title}
        footer={footer(id, isDefault)}
        header={header(id, isDefault)}
        className=" m-2 shadow-3 ">
        <p className="m-0">{`${fullAddress} , ${city} , ${state} , ${country},`}</p>
        <div className="">
          <p>
            <strong>Ph:</strong>
            {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </Card>
    </article>
  );
}
