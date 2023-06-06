import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";
import { Toast } from "primereact/toast";
import React, { useContext, useRef, useState } from "react";
import AddressCard from "../components/AddressCard";
import AddressForm from "../components/AddressForm";
import { UserContext } from "../context/UserContext";
import moment from "moment";
import OrderSummary from "./OrderSummary";

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
  const { name, lastName, fullAddress, city, state, country, phone, email } = addressBook.find(
    (_add) => _add.isDefault
  );

  return (
    <div className="min-h-screen">
      <Toast
        ref={toast}
        // position="bottom-right"
      />
      <div className="card my-8 lg:w-6 md:w-8 m-auto ">
        <TabView>
          <TabPanel
            header="Profile"
            // headerTemplate={tab1HeaderTemplate}
            headerClassName="w-6 text-center ">
            <Card className=" m-2 shadow-8 ">
              <div className="w-8rem ,h-8rem  border-circle overflow-hidden margin-auto">
                <img
                  className="w-full "
                  src="https://source.boringavatars.com/beam"
                  alt="profile-pic"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {[
                { prop: "Name", key: "firstName" },
                { prop: "Last name", key: "lastName" },
                { prop: "email", key: "email" },
                { prop: "Created On", key: "createdAt" },
              ].map(({ prop, key }) => (
                <p>
                  <strong>{prop} : </strong>
                  {}
                  {key === "createdAt" ? moment(user[key]).format("MMMM Do YYYY") : user[key]}
                </p>
              ))}
              <p>
                <strong>Default Address : </strong>
                {`${name}, ${lastName}, ${fullAddress} , ${city} , ${state} , ${country}`}
              </p>
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
              {addressBook?.map((address) => (
                <AddressCard
                  address={address}
                  toast={toast}
                />
              ))}
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
          <TabPanel
            header="Order Summary"
            headerClassName="w-6">
            <OrderSummary />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
