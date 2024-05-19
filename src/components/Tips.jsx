import React from "react";

const Tips = () => {
  return (
    <>
      <div className="tips ">
        <h1 className="title-text tips-h1-bg" style={{ textAlign: "center" }}>
          Tips to Reduce Your Electricity Bill
        </h1>
        <div className="tips__inner p-3">
          <div className="row w-100">
            <div className="tips-cards col-sm-12 col-md-12 col-xl-5 col-xxl-5">
              <img src="assets/home-img-5.jpg" alt="" width={"40%"} />
            </div>
            <div className=" col-sm-12 col-md-12 col-xl-6 col-xxl-6">
              <p className="sub-text ">
                <b className="sub-b-text">Switch to LED Bulbs:</b> LED bulbs are
                energy-efficient and last longer than traditional incandescent
                bulbs. They use significantly less electricity for the same
                amount of light.
              </p>
            </div>
          </div>

          <div className="row w-100">
            <div className="tips-cards col-sm-12 col-md-12 col-xl-5 col-xxl-5">
              <img src="assets/home-img-6.jpg" alt="" width={"40%"} />
            </div>
            <div className="col-sm-12 col-md-12 col-xl-6 col-xxl-6">
              <p className="sub-text ">
                <b className="sub-b-text">Unplug Devices: </b>Even when turned
                off, many devices consume a small amount of electricity phantom
                or standby power. Unplug chargers, electronics, and appliances
                when not in use, or use power strips to easily cut off power to
                multiple devices.
              </p>
            </div>
          </div>

          <div className="row w-100">
            <div className="tips-cards col-sm-12 col-md-12 col-xl-5 col-xxl-5">
              <img src="assets/home-img-7.jpg" alt="" width={"40%"} />
            </div>
            <div className="col-sm-12 col-md-12 col-xl-6 col-xxl-6">
              <p className="sub-text ">
                <b className="sub-b-text"> Seal Leaks:</b> Insulate your home
                properly to prevent drafts and leaks, which can lead to energy
                loss. This will help your heating and cooling systems work more
                efficiently.
              </p>
            </div>
          </div>

          <div className="row w-100">
            <div className="tips-cards col-sm-12 col-md-12 col-xl-5 col-xxl-5">
              <img src="assets/home-img-8.jpg" alt="" width={"40%"} />
            </div>
            <div className="tips-cards col-sm-12 col-md-12 col-xl-6 col-xxl-6">
              <p className="sub-text ">
                <b className="sub-b-text">Cook Efficiently:</b> Use lids when
                cooking to retain heat, cook with appropriate pot sizes, and
                consider using a microwave or toaster oven for smaller meals as
                they use less energy than a full-sized oven.
              </p>
            </div>
          </div>

          <div className="row w-100">
            <div className="tips-cards col-sm-12 col-md-12 col-xl-5 col-xxl-5">
              <img src="assets/home-img-9.jpg" alt="" width={"40%"} />
            </div>
            <div className="tips-cards col-sm-12 col-md-12 col-xl-6 col-xxl-6">
              <p className="sub-text ">
                <b className="sub-b-text">Maximize Natural Light:</b> During the
                day, open curtains and blinds to let in natural light. This
                reduces the need for artificial lighting and can also provide
                some warmth during colder months.
              </p>
            </div>
          </div>
        </div>

        <div className="row w-100 tips-bones">
          <div className="col-sm-12 col-md-12 col-xl-7 col-xxl-7 d-flex justify-content-center flex-column ">
            <h2 className="sub-b-text">Bones Tips</h2>
            <ul>
              <li className="sub-b-text ">Check the reading meter weekly once and use this Calculator for calculating a weekly payable amount it may be very useful to you know your eb bill without consulting others</li>
              <li className="sub-b-text ">This Chart is clearly describe the units and its rate this helps you to reduce your eb bill. This chart aware you the usage of electricity. With the help of this chart you itself know the amount according to the units you consumed</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-xl-5 col-xxl-5 d-flex justify-content-end">
            <img src="/assets/home-img-1.png" alt="" width={"60%"} />
          </div>
        </div>

        <div className="tips-save p-2">
          <h2 className="sub-b-text ">Start Saving Today</h2>
          <p className="sub-text" style={{textAlign:'center'}}>Implement these strategies and make use of our tools to see a noticeable difference in your electricity bill. Every small change adds up to significant savings over time. Let's work together to make your home more energy-efficient and your bills more manageable.</p>
        </div>
      </div>
    </>
  );
};

export default Tips;
