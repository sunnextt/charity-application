import React from 'react'
import Carousel from "../header/Carousel"
import Donation from "../donation/DonationSection"
import Testimonial from "../testimonial/TestimonialSection"
import NewsAndBlogs from "../news/NewsAndBlogsSection"

export default function HomeHeader({bannerContent, testimonialContent}) {
    return (
      <div>
        <div className="header">
          <Carousel images={bannerContent} />
        </div>
        <Donation />
        <Testimonial images={testimonialContent} />
        <NewsAndBlogs />
      </div>
    )
}
