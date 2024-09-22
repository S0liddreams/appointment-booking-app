import React from "react";
import avatar from "../../assets/images/passport.jpg";
import { formateDate } from "../../Utils/FormatDate";

const Feedback = () => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px] ">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full rounded-full" src={avatar} alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Chuck Silver
              </h5>
              <p className="text-[14px] leading-6 text-textColor ">
                {formateDate("9-23-24")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px] ">Good Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
