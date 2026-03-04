import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaGavel } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaUsers,
  FaChalkboardTeacher
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaBalanceScale />,
      title: "Labour Law Compliance",
      desc: "Complete statutory compliance services ensuring your organization adheres to all labour regulations."
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Payroll Management",
      desc: "Accurate payroll processing with tax calculations and statutory reporting."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Statutory Audit",
      desc: "Comprehensive audits to evaluate compliance levels and documentation accuracy."
    },
    {
      icon: <FaUsers />,
      title: "HR Consulting",
      desc: "Strategic HR advisory services to improve workforce management."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "E-Learning & Training",
      desc: "Corporate compliance training programs for legal best practices."
    },
    {
      icon: <FaGavel />,
      title: "New Labor Codes Consulting",
      desc: "Comprehensive advisory services on India’s New Labour Codes, ensuring smooth transition, statutory alignment, risk mitigation, and complete regulatory compliance for your organization."
    }

  ];

  return (
    <section className="services-section">
      <div className="services-container" data-aos="slide-up">

        <div className="services-header">
          <h5>OUR SERVICES</h5>
          <h2>Professional HR & Compliance Solutions</h2>
          <p>
            We provide end-to-end statutory and HR compliance solutions 
            tailored to your business needs.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Services;