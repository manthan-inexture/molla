import React from "react";

import { useForm } from "react-hook-form";
import Payement from "./Payment";

const Billdetails = () => {
  const { register, handleSubmit } = useForm();

  // store encrypted data in localstorage
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("chekout-form-data", window.btoa(JSON.stringify(data)));
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-9">
            <h2 className="checkout-title">Billing Details</h2>
            {/* End .checkout-title */}
            <div className="row">
              <div className="col-sm-6">
                <label>First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  {...register("fname")}
                  required
                />
              </div>
              {/* End .col-sm-6 */}
              <div className="col-sm-6">
                <label>Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("lname")}
                />
              </div>
              {/* End .col-sm-6 */}
            </div>
            {/* End .row */}
            <label>Company Name (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="companyname"
              {...register("companyname")}
            />
            <label>Country *</label>
            <input
              type="text"
              className="form-control"
              name="country"
              {...register("country")}
              required
            />
            <label>Street address *</label>
            <input
              type="text"
              className="form-control"
              name="address1"
              placeholder="House number and Street name"
              {...register("address1")}
              required
            />
            <input
              type="text"
              className="form-control"
              name="address2"
              placeholder="Appartments, suite, unit etc ..."
              {...register("address2")}
              required
            />
            <div className="row">
              <div className="col-sm-6">
                <label>Town / City *</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  {...register("city")}
                  required
                />
              </div>
              {/* End .col-sm-6 */}
              <div className="col-sm-6">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  {...register("state")}
                  required
                />
              </div>
              {/* End .col-sm-6 */}
            </div>
            {/* End .row */}
            <div className="row">
              <div className="col-sm-6">
                <label>Postcode / ZIP *</label>
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  {...register("pincode")}
                  required
                />
              </div>
              {/* End .col-sm-6 */}
              <div className="col-sm-6">
                <label>Phone *</label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  name="phone"
                  {...register("phone")}
                />
              </div>
              {/* End .col-sm-6 */}
            </div>
            {/* End .row */}
            <label>Email address (Optional)</label>
            <input
              type="email"
              className="form-control"
              name="email"
              {...register("email")}
              required
            />
            <label>Order notes (optional)</label>
            <textarea
              className="form-control"
              name="note"
              {...register("note")}
              cols={30}
              rows={4}
              placeholder="Notes about your order, e.g. special notes for delivery"
              defaultValue={""}
            />
          </div>
          {/* End .col-lg-9 */}

          <Payement />
        </div>
      </form>
    </>
  );
};

export default Billdetails;
