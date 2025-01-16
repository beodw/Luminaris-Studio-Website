import testimonialContent from "../assets/data/TestimonalContent";

export default function Carousel (){
    return (
        <div className="flex w-full bg-red-500">
            {
                testimonialContent.testimonials.map(
                    (testimonial, index) => (
                        <div className="flex flex-col justify-center">
                            <img src={testimonial.imgSrc} alt="testimonial" className="w-20 h-20 rounded-full" />
                            <p className="text-[5px]">{testimonial.feedback}</p>
                            <p className="text-[5px]">{testimonial.username}</p>
                        </div>
                    )
                )
            }
        </div>
    );
}