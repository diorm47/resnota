import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function AboutStaff({ title, data }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about_staff_wrapper">
      <div
        className="block_title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>{title}</h1>
      </div>
      <div className="staff_filter"></div>

      <div className="staff_content">
        {data.map((data) => (
          <div
            className="staff_item"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="staff_imf">
              <img src={data.img} alt={data.img} />
            </div>
            {data.staff_name ? (
              <div className="staff_name_prof">
                <p>{data.staff_name}</p>
                <span>{data.proffes}</span>
              </div>
            ) : (
              <div className="review_descr">
                <p>{data.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutStaff;
