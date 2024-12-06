import React, { useEffect } from "react";
import TestimonialComponent from "../components/TestimonialComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../redux/slices/testimonialSlice";

const TestimonialContainer = () => {
   const dispatch = useDispatch();
   const { testimonial } = useSelector((state) => state.testimonial);

   useEffect(() => {
      dispatch(getTestimonial());
   }, []);

   return (
      <TestimonialComponent testimonial={testimonial} />
   )
}

export default TestimonialContainer;