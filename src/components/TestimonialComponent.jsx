import React from "react";

const TestimonialComponent = ({ testimonial }) => {
  return (
    <section className="px-6 md:px-24 py-24">
      <div className="ml-0 lg:ml-40 xl:ml-64">
        <h3 className="font-bold text-[44px]">What our clients say about us</h3>
      </div>

      <div className="flex flex-wrap justify-around gap-12 mt-16">
        {testimonial.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 items-start rounded-lg max-w-[700px]"
          >
            <div className="flex-shrink-0">
              <svg
                width="38"
                height="32"
                viewBox="0 0 38 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5686 19.1428C17.5686 16.7768 15.649 14.8571 13.2829 14.8571H8.28292C7.09989 14.8571 6.14007 13.8973 6.14007 12.7143V12C6.14007 8.85266 8.70703 6.2857 11.8544 6.2857H13.2829C14.0642 6.2857 14.7115 5.63838 14.7115 4.85713V1.99998C14.7115 1.21873 14.0642 0.571411 13.2829 0.571411H11.8544C5.55971 0.571411 0.425781 5.70534 0.425781 12V27.7143C0.425781 30.0803 2.34542 32 4.7115 32H13.2829C15.649 32 17.5686 30.0803 17.5686 27.7143V19.1428ZM37.5686 19.1428C37.5686 16.7768 35.649 14.8571 33.2829 14.8571H28.2829C27.0999 14.8571 26.1401 13.8973 26.1401 12.7143V12C26.1401 8.85266 28.707 6.2857 31.8544 6.2857H33.2829C34.0642 6.2857 34.7115 5.63838 34.7115 4.85713V1.99998C34.7115 1.21873 34.0642 0.571411 33.2829 0.571411H31.8544C25.5597 0.571411 20.4258 5.70534 20.4258 12V27.7143C20.4258 30.0803 22.3454 32 24.7115 32H33.2829C35.649 32 37.5686 30.0803 37.5686 27.7143V19.1428Z"
                  fill="#FDCA09"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-6 h-full justify-between">
              <p className="font-normal text-lg">{item.message}</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={item.foto_profile}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="rounded-full object-cover w-[90px] h-[90px]"
                />
                <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <p className="text-gray-600">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialComponent;
