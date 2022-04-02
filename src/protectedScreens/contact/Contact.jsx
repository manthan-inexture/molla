import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";


const Contact = () => {
  const { register, handleSubmit } = useForm();
  // store encrypted data in localstorage
  const onSubmit = (data) => {
    console.log(data);
    // alert('ssxsxs');
    // localStorage.setItem(
    //   "contact_form_data",  
    //   window.btoa(JSON.stringify(data))
    // );
    var data = {
      service_id: 'V8mQZ-VMcEdtlv74Zf0is',
      template_id: 'template_1uah6ww',
      user_id: 'LQdxGkitLRoNWDyJc',
      template_params: {
        name: 'James',
      }
    };
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <>
      <main className="main">

        <div
          className="page-header text-center"
          style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
        >
          <div className="container">
            <h1 className="page-title">Contact us</h1>
          </div>
          {/* End .container */}
        </div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink className="breadcrumb-item" to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact us
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div className="page-content pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <h2 className="title mb-1">Contact Information</h2>
                {/* End .title mb-2 */}
                <p className="mb-3">
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                </p>
                <div className="row">
                  <div className="col-sm-7">
                    <div className="contact-info">
                      <h3>The Office</h3>
                      <ul className="contact-list">
                        <li>
                          <i className="icon-map-marker" />
                          70 Washington Square South New York, NY 10012, United
                          States
                        </li>
                        <li>
                          <i className="icon-phone" />
                          <a href="tel:#">+92 423 567</a>
                        </li>
                        <li>
                          <i className="icon-envelope" />
                          <a href="mailto:#">info@Molla.com</a>
                        </li>
                      </ul>
                      {/* End .contact-list */}
                    </div>
                    {/* End .contact-info */}
                  </div>
                  {/* End .col-sm-7 */}
                  <div className="col-sm-5">
                    <div className="contact-info">
                      <h3>The Office</h3>
                      <ul className="contact-list">
                        <li>
                          <i className="icon-clock-o" />
                          <span className="text-dark">
                            Monday-Saturday
                          </span>{" "}
                          <br />
                          11am-7pm ET
                        </li>
                        <li>
                          <i className="icon-calendar" />
                          <span className="text-dark">Sunday</span> <br />
                          11am-6pm ET
                        </li>
                      </ul>
                      {/* End .contact-list */}
                    </div>
                    {/* End .contact-info */}
                  </div>
                  {/* End .col-sm-5 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .col-lg-6 */}
              <div className="col-lg-6">
                <h2 className="title mb-1">Got Any Questions?</h2>
                {/* End .title mb-2 */}
                <p className="mb-2">
                  Use the form below to get in touch with the sales team
                </p>
                <form
                  action="#"
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form mb-3"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="cname" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        {...register("name")}
                        className="form-control"
                        id="cname"
                        placeholder="Name *"
                        required
                      />
                    </div>
                    {/* End .col-sm-6 */}
                    <div className="col-sm-6">
                      <label htmlFor="cemail" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        {...register("email")}
                        className="form-control"
                        id="cemail"
                        placeholder="Email *"
                        required
                      />
                    </div>
                    {/* End .col-sm-6 */}
                  </div>
                  {/* End .row */}
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="cphone" className="sr-only">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        {...register("phone")}
                        className="form-control"
                        id="cphone"
                        placeholder="Phone"
                      />
                    </div>
                    {/* End .col-sm-6 */}
                    <div className="col-sm-6">
                      <label htmlFor="csubject" className="sr-only">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        {...register("subject")}
                        className="form-control"
                        id="csubject"
                        placeholder="Subject"
                      />
                    </div>
                    {/* End .col-sm-6 */}
                  </div>
                  {/* End .row */}
                  <label htmlFor="cmessage" className="sr-only">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    {...register("message")}
                    cols={30}
                    rows={4}
                    id="cmessage"
                    required
                    placeholder="Message *"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    style={{ border: "1px solid #c96" }}
                    className="shadow-none btn btn-outline-primary-2 btn-minwidth-sm"
                  >
                    <span>SUBMIT</span>
                    <i className="icon-long-arrow-right" />
                  </button>
                </form>
                {/* End .contact-form */}
              </div>
              {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
            <hr className="mt-4 mb-5" />
            <div className="stores mb-4 mb-lg-5">
              <h2 className="title text-center mb-3">Our Stores</h2>
              {/* End .title text-center mb-2 */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="store">
                    <div className="row">
                      <div className="col-sm-5 col-xl-6">
                        <figure className="store-media mb-2 mb-lg-0">
                          <img
                            src="assets/images/stores/img-1.jpg"
                            alt="image"
                          />
                        </figure>
                        {/* End .store-media */}
                      </div>
                      {/* End .col-xl-6 */}
                      <div className="col-sm-7 col-xl-6">
                        <div className="store-content">
                          <h3 className="store-title">Wall Street Plaza</h3>
                          {/* End .store-title */}
                          <address>88 Pine St, New York, NY 10005, USA</address>
                          <div>
                            <a href="tel:#">+1 987-876-6543</a>
                          </div>
                          <h4 className="store-subtitle">Store Hours:</h4>
                          {/* End .store-subtitle */}
                          <div>Monday - Saturday 11am to 7pm</div>
                          <div>Sunday 11am to 6pm</div>
                          <a href="#" className="btn btn-link" target="_blank">
                            <span>View Map</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                        </div>
                        {/* End .store-content */}
                      </div>
                      {/* End .col-xl-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .store */}
                </div>
                {/* End .col-lg-6 */}
                <div className="col-lg-6">
                  <div className="store">
                    <div className="row">
                      <div className="col-sm-5 col-xl-6">
                        <figure className="store-media mb-2 mb-lg-0">
                          <img
                            src="assets/images/stores/img-2.jpg"
                            alt="image"
                          />
                        </figure>
                        {/* End .store-media */}
                      </div>
                      {/* End .col-xl-6 */}
                      <div className="col-sm-7 col-xl-6">
                        <div className="store-content">
                          <h3 className="store-title">One New York Plaza</h3>
                          {/* End .store-title */}
                          <address>88 Pine St, New York, NY 10005, USA</address>
                          <div>
                            <a href="tel:#">+1 987-876-6543</a>
                          </div>
                          <h4 className="store-subtitle">Store Hours:</h4>
                          {/* End .store-subtitle */}
                          <div>Monday - Friday 9am to 8pm</div>
                          <div>Saturday - 9am to 2pm</div>
                          <div>Sunday - Closed</div>
                          <a href="#" className="btn btn-link" target="_blank">
                            <span>View Map</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                        </div>
                        {/* End .store-content */}
                      </div>
                      {/* End .col-xl-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .store */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .stores */}
          </div>
          {/* End .container */}
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.940772264116!2d72.5011472149193!3d23.025946784951348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3bfd772303%3A0xbfb4ae854688a1ac!2sSANKALP%20ICONIC%20TOWER%2C%20Sankalp%20Iconic%20Tower%2C%20Sanidhya%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1648551631432!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* End #map */}
        </div>
        {/* End .page-content */}
      </main>
    </>
  );
};

export default Contact;
