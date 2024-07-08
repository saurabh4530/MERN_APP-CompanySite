import React from 'react'

function Service() {
  
   return (
    <main className="services-page">
      <section className="section-services">
          <h1>Our Services</h1>
        <div className="container">
          <div>


          <p>
            At SK Technical, we offer a wide range of IT services designed to
            help your business thrive in the digital age. Our team of experts
            is dedicated to providing innovative and customized solutions to
            meet your unique needs.  


           
          </p>
          <img src="https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user" alt="services" width={400} height={400} /><br />
          <img src="https://cdn.pixabay.com/photo/2024/05/07/00/39/schedule-8744592_640.png" alt="services" width={400} height={400} />
          </div>
           
       

          <div className="grid ">
            <div className="">
              <h3>Web Development</h3>
              <p>
                Our web development services are focused on creating responsive,
                user-friendly, and visually appealing websites to help you make
                a strong online presence.
              </p>
            </div>
            <div className="service-card">
              <h3>Mobile App Development</h3>
              <p>
                We specialize in developing high-performance mobile applications
                for both iOS and Android platforms to help you reach a wider
                audience.
              </p>
            </div>
            <div className="service-card">
              <h3>Cloud Solutions</h3>
              <p>
                Our cloud solutions provide scalable and secure cloud
                infrastructure, enabling you to manage your business operations
                efficiently.
              </p>
            </div>
            <div className="service-card">
              <h3>Cybersecurity</h3>
              <p>
                We offer comprehensive cybersecurity services to protect your
                business from potential threats and ensure your data is secure.
              </p>
            </div>
            <div className="service-card">
              <h3>IT Consulting</h3>
              <p>
                Our IT consulting services are designed to help you develop and
                implement effective IT strategies tailored to your business
                goals.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Support</h3>
              <p>
                We provide reliable technical support services to ensure your IT
                systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Service