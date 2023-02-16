import React from "react";

const Terms = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center min-h-screen py-4 bg-no-repeat 
        bg-cover bg-gray-50 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url("./assets/image.jpg")`,
        }}
      > 
      
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">  
              <div>
                <div className="px-4  py-8 justify-center py-4 bg-no-repeat bg-cover  ">
                        <h1><b>Terms And Conditions</b>
                        </h1>
                    </div> 
            Wildlife Safaris cancellation:All the wildlife safaris booked into any of Indian Wildlife National Park/Sanctuaries are non refundable. Even date change request will be considered as cancellation and no payment will be refunded/ adjusted against it.
            Our Liabilities & Limitations:Please note that after the finalization of the Tour/ service Cost, if there are any Hike in entrance fees of monuments / museums, Taxes, fuel cost or guide charges – by Govt of India, the same would be charged as extra.
            l ability of the participants etc. may dictate itinerary changes either before the tour or while on the trail. We reserve the right to change any schedule in the interest of the trip participants' safety, comfort & general well being.  
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;