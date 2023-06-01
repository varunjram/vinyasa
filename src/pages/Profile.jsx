import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useRef, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { DELETE_ADDRESS, UPDATE_DEFAULT_ADDRESS } from "../reducers/userReducer";
import AddressForm from "../components/AddressForm";
import { Toast } from "primereact/toast";

const ADDRESS_INPUT_FIELDS = {
  title: "",
  name: "",
  lastName: "",
  phone: "",
  email: "",
  country: "",
  state: "",
  city: "",
  fullAddress: "",
};

export default function Profile() {
  const toast = useRef(null);
  const {
    userState: { user, addressBook, randomAddressBook },
    userDispatch,
  } = useContext(UserContext);
  const [address, setAddress] = useState(ADDRESS_INPUT_FIELDS);
  const [formVisible, setFormVisible] = useState(false);

  const fetchRandomUser = randomAddressBook[Math.floor(Math.random() * 6)];
  const footer = (id) => (
    <div className="flex justify-content-end">
      <Button
        // label="Remove"
        icon="bi bi-trash"
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

  return (
    <>
      <Toast ref={toast} />
      <div
        className="card"
        style={{ width: "50%", margin: "auto" }}>
        <TabView>
          <TabPanel
            header="Profile"
            // headerTemplate={tab1HeaderTemplate}
            headerClassName="w-6 text-center ">
            <Card className=" m-2 shadow-8 ">
              <div className="w-8rem ,h-8rem  border-circle overflow-hidden margin-auto">
                <img
                  className="w-full "
                  src="https://xsgames.co/randomusers/assets/avatars/male/47.jpg"
                  alt="profile-pic"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {["_id", "id", "cart", "wishlist"].forEach((ele) => delete user[ele])}
              {Object.entries(user).map(([prop, value]) => (
                <p>
                  <strong>{prop} : </strong>
                  {value}
                </p>
              ))}
            </Card>
          </TabPanel>
          <TabPanel
            header="Address"
            headerClassName="w-6">
            <div className="grid ">
              <AddressForm
                address={address}
                setAddress={setAddress}
                userDispatch={userDispatch}
                fetchRandomUser={fetchRandomUser}
                resetFromData={ADDRESS_INPUT_FIELDS}
                formVisible={formVisible}
                setFormVisible={setFormVisible}
              />
              {addressBook?.map((address) => {
                const {
                  id,
                  title,
                  name,
                  lastName,
                  phone,
                  email,
                  country,
                  state,
                  city,
                  fullAddress,
                  isDefault,
                } = address;
                return (
                  <article className="col-6">
                    <Card
                      title={`${name}, ${lastName}`}
                      subTitle={title}
                      footer={footer(id)}
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
              })}
              <article className="col-6 ">
                <Card className=" m-2 shadow-3 ">
                  <Button
                    label="Add New "
                    onClick={() => setFormVisible(true)}
                  />
                </Card>
              </article>
            </div>
          </TabPanel>
          {/* <TabPanel
          headerTemplate={tab3HeaderTemplate}
          headerClassName="flex align-items-center">
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus.
          </p>
        </TabPanel> */}
        </TabView>
      </div>
    </>
  );
}
