import React from "react";
import { formateDate } from "../../Utils/FormatDate";
{
}

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-gray-500 font-bold text-[24px] leading-9">
            Dr. Phill Bond
          </span>
        </h3>
        <p className="text__para ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem veniam placeat dicta vitae sint, neque error tempora
          voluptate doloremque recusandae voluptatibus a unde dolorum vel
          nostrum debitis laudantium provident aut ad saepe repellendus ex
          corrupti! Dolorum, necessitatibus nam expedita deleniti quam et nulla
          pariatur velit? Tenetur soluta minus odit similique!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-gray-500 text-[15px] leading-6 font-semibold">
                {formateDate("05-18-2010")} - {formateDate("12-04-2017")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Solid Hospital, Nigeria
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-gray-500 text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2008")} - {formateDate("12-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Solid Hospital, Nigeria
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-primaryColor">
            <span className="text-white text-[15px] leading-6 font-semibold">
              {" "}
              {formateDate("12-04-2008")} - {formateDate("12-04-2010")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-white">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-white">
              Solid Hospital, Nigeria
            </p>
          </li>
          <li className="p-4 rounded bg-primaryColor">
            <span className="text-white text-[15px] leading-6 font-semibold">
              {" "}
              {formateDate("12-04-2008")} - {formateDate("12-04-2010")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-white">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-white">
              Solid Hospital, Nigeria
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
