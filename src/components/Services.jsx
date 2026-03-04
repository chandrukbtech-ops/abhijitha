import React from "react";
import { FaBalanceScale, FaMoneyCheckAlt, FaClipboardCheck, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
function Services() {
  const services = [
    {
      icon: <FaBalanceScale />,
      title: "Labour Law Compliance",
      desc: "Complete statutory compliance services ensuring your organization adheres to all labour regulations and legal requirements."
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Payroll Management",
      desc: "Accurate and efficient payroll processing with tax calculations, statutory deductions, and reporting."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Statutory Audit",
      desc: "Comprehensive audits to evaluate compliance levels and ensure documentation accuracy."
    },
    {
      icon: <FaUsers />,
      title: "HR Consulting",
      desc: "Strategic HR advisory services to improve workforce management and operational efficiency."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "E-Learning & Training",
      desc: "Corporate compliance training programs designed to educate teams on legal and HR best practices."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h5>OUR SERVICES</h5>
          <h2>Professional HR & Compliance Solutions</h2>
          <p>
            We provide end-to-end statutory and HR compliance solutions 
            tailored to your business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;