import React from "react";
import PersonImg1 from "../assets/person-1.png";
import PersonImg2 from "../assets/person-2.png";

const testimonial = [
  {
    name: "Milton Austin",
    job: "Product Manager, Slack",
    testimonial:
      "I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!",
    image: PersonImg1,
  },
  {
    name: "Jane Cooper",
    job: "CO-founder, catco",
    testimonial:
      "Great work ethic and very reliable! Brooklyn was our logo designer. She walked us through many iterations and guided us on all aspects of the process. Very professional, will use them again soon!",
    image: PersonImg2,
  },
];

const TestimonialComponent = () => {
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
              <p className="font-normal text-lg">{item.testimonial}</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <p className="text-gray-600">{item.job}</p>
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
