import React from 'react'

const Welcome = () => {
  return (
    <>
      <div className="home-welcome">
        <div className="row w-100 p-3">
          <div className="col-sm-12 col-md-12 col-xl-5 col-xxl-5 ">
            <div className="d-flex justify-content-center">
              <img src="/assets/home-img-4.jpg"
                width={'60%'}
                height={'100%'}
                alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-xl-7 col-xxl-7 d-flex justify-content-center flex-column align-items-center p-2">
            <h1 className='home-h1 title-text'>Welcome to Techniques to Reduce Electricity Bill</h1>
            <b className='home-b sub-b-text mt-4'>Save Energy, Save Money</b>
            <p className='home-p sub-text '>Welcome to our comprehensive guide on how to reduce your electricity bill. Our goal is to provide you with the knowledge and tools you need to lower your energy consumption and save money. Explore our resources and take control of your energy usage today</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome