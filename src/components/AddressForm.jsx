import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import React, { useRef } from "react";
import { ADD_ADDRESS } from "../reducers/userReducer";

export default function AddressForm({
  address,
  setAddress,
  userDispatch,
  fetchRandomUser,
  resetFromData,
  formVisible,
  setFormVisible,
}) {
  const toast = useRef(null);
  return (
    <>
      <Toast ref={toast} />
      <form className={`grid  ${formVisible ? null : "hidden"} scalein animation-duration-500 `}>
        <div className="field col-12  mt-4">
          <span className="p-float-label">
            <InputText
              id="title"
              name="title"
              value={address.title}
              onChange={(e) => setAddress({ ...address, title: e.target.value })}
              className="w-full"
            />
            <label htmlFor="title">Address Title</label>
          </span>
        </div>
        <div className="col-12 lg:col-6 ">
          <span className="p-float-label">
            <InputText
              id="name"
              name="name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              className=" w-full"
            />
            <label htmlFor="rfq_description">Name</label>
          </span>
        </div>
        <div className="col-12 lg:col-6 ">
          <span className="p-float-label">
            <InputText
              id="lastName"
              name="lastName"
              value={address.lastName}
              onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
              className=" w-full"
            />
            <label htmlFor="rfq_description">Last Name</label>
          </span>
        </div>
        <div className="col-12 lg:col-6 mt-3">
          <span className="p-float-label">
            <InputText
              id="phone"
              name="phone"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              className=" w-full"
            />
            <label htmlFor="rfq_description">Phone</label>
          </span>
        </div>
        <div className="col-12 lg:col-6 mt-3">
          <span className="p-float-label">
            <InputText
              id="email"
              name="email"
              value={address.email}
              onChange={(e) => setAddress({ ...address, email: e.target.value })}
              className=" w-full"
              required
            />
            <label htmlFor="rfq_description">Email</label>
          </span>
        </div>
        <div className="col-12 lg:col-4 mt-3">
          <span className="p-float-label">
            <InputText
              id="country"
              name="country"
              value={address.country}
              className=" w-full"
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
              required
            />
            <label htmlFor="rfq_description">Country</label>
          </span>
        </div>
        <div className="col-12 lg:col-4 mt-3">
          <span className="p-float-label">
            <InputText
              id="state"
              name="state"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              className=" w-full"
              required
            />
            <label htmlFor="rfq_description">State</label>
          </span>
        </div>
        <div className="col-12 lg:col-4 mt-3">
          <span className="p-float-label">
            <InputText
              id="city"
              name="city"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className=" w-full"
              required
            />
            <label htmlFor="rfq_description">City</label>
          </span>
        </div>
        <div className="col-12 lg:col-8 mt-3">
          <span className="p-float-label">
            <InputTextarea
              id="fullAddress"
              name="fullAddress"
              value={address.fullAddress}
              className=" w-full"
              required
              onChange={(e) => setAddress({ ...address, fullAddress: e.target.value })}
            />
            <label htmlFor="rfq_description">Address</label>
          </span>
        </div>
        <div className="flex col-12 lg:col-4 flex-column mt-3">
          <Button
            type="button"
            className="m-1"
            label="ADD"
            onClick={() => {
              const isAllFieldsPresent = Object.values(address)?.map((_f) => Boolean(_f));
              if (isAllFieldsPresent.includes(false))
                return toast.current.show({
                  severity: "error",
                  summary: "Error",
                  detail: "All fields are required",
                  life: 3000,
                });

              userDispatch({ type: ADD_ADDRESS, payload: { ...address } });
              setAddress(resetFromData);
              toast.current.show({
                severity: "success",
                summary: "Success",
                detail: "New user added",
                life: 1000,
              });
            }}
          />
          <Button
            className="p-button-secondary m-1 "
            type="button"
            label="CANCEL"
            onClick={() => {
              setFormVisible(false);
              setAddress(resetFromData);
            }}
          />
          <Button
            className="p-button-secondary m-1 "
            type="button"
            label="RANDOM"
            onClick={() => setAddress(fetchRandomUser)}
          />
        </div>
      </form>
    </>
  );
}
