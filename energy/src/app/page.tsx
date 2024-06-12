import Image from "next/image";
import Contant from "./composants/Contant";
import Partners from "./composants/Partners";
import Solarenergy from "./composants/Solarenergy";
import About from "./composants/About";
import AboutTwo from "./composants/AboutTwo";
import ExpertsCard from "./composants/ExpertsCard";
import { features } from "./constants/Experts";
import HeadingTwo from "./composants/HeadingTwo";
import { Customers } from "./constants/Testimonials";
import CustomersCard from "./composants/TestimonialsCard";
import Buttons from "./composants/Buttons";
import { faqs } from "./constants/Faq";
import FaqCard from "./composants/FaqCard";
import { blogs } from "./constants/blog";
import BlogCard from "./composants/BlogCard";

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden w-full min-h-screen  antialiased bg-[#022C22] ">
        {/* Contant */}
        <div className=" relative flex flex-col justify-center gap-10 min-h-screen items-center w-full bg-[#022C22]">
          <Contant />
          <div className="relative flex justify-center items-center lg:block w-full">
            <Image
              src="/images/one.png"
              className="lg:absolute relative right-0 bottom-48 rounded-l-2xl hidden md:block"
              width={210}
              height={210}
              alt="logo"
            />

            <Image
              src="/images/blog3.png"
              className="lg:absolute relative left-0 bottom-48 rounded-r-xl hidden md:block"
              width={210}
              height={210}
              alt="logo"
            />
            <Image
              src="/images/three.png"
              className="lg:absolute relative right-10 bottom-[-100px] rounded-xl hidden md:block"
              width={220}
              height={220}
              alt="logo"
            />
            <Image
              src="/images/for.png"
              className="lg:absolute relative lg:left-32 lg:bottom-[-60px] rounded-xl"
              width={310}
              height={310}
              alt="logo"
            />
          </div>
        </div>
        {/* Partners / About */}
        <div className=" flex flex-col  justify-center items-center lg:justify-start lg:min-h-80  w-full bg-[#022C22]">
          <Partners />
        </div>
        <div className=" flex flex-col justify-center items-center px-6  py-6 min-h-screen  w-full bg-[#ffffff]">
          <Solarenergy />
        </div>
        <div className="  px-6 lg:px-14 py-6 min-h-screen  w-full bg-white">
          <About />
        </div>
        <div className=" px-6 lg:px-14 py-6 w-full bg-white">
          <AboutTwo />
        </div>
        {/* experts section */}
        <div className="px-6 lg:px-14 py-6 min-h-screen  w-full bg-white">
          <div className="text-center">
            <HeadingTwo title={"Meet our experts"} isCentered />

            <p>
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
          <div className="lg:pt-20 min-h-screen">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <ExpertsCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="x-6 lg:px-14 py-6 min-h-screen  w-full border-b-green-950">
          <div className="flex flex-col lg:justify-start justify-center lg:items-start  items-center gap-10">
            <div className="flex flex-row justify-start  items-center ">
              <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-white" />
              <h3 className="text-white">Testimonials</h3>
              <hr />
            </div>
            <div>
              <HeadingTwo title={"What our customers say"} color="white" />
            </div>
          </div>
          <div className="lg:pt-20">
            <div className="grid gap-4 lg:grid-cols-4 grid-cols-1 justify-items-center">
              {Customers.map((customer, index) => (
                <CustomersCard key={index} {...customer} />
              ))}
            </div>
          </div>
        </div>
        {/* energy */}
        <div className="flex flex-col justify-center items-center px-6 lg:px-14 py-6 min-h-screen  bg-white">
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="font-normal text-center text-5xl max-w-2xl">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet.{" "}
            </h1>
            <Buttons text={"Get in touch"} background="#022C22" />
          </div>
        </div>
        {/* FAQ */}
        <div className="px-6 lg:px-14 py-6  min-h-screen bg-white">
          <div className="bg-[#FFF7ED] w-full lg:p-20 p-10  rounded-lg">
            <div className="flex flex-row justify-start items-center ">
              <span className="font-bold">.</span>
              <h3>FAQ</h3>
              <hr />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 flex-col-reverse gap-6">
              <div className="flex flex-col justify-between lg:gap-0 gap-6">
                <HeadingTwo
                  title={"Answers to the frequently asked questions."}
                />
                <Buttons text={"Contact us ->"} />
              </div>
              <div className="flex flex-col justify-start gap-6">
                {faqs.map((faq, index) => (
                  <FaqCard key={index} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* blog */}
        <div className="px-6 lg:px-14 py-6 min-h-screen bg-white">
          <div className="w-full lg:p-20 p-10  rounded-lg">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
              <div className="flex flex-col justify-between items-start lg:gap-0 gap-6">
                <div className="grid gap-3 w-80">
                  <HeadingTwo title={"Learn more from our blog."} />
                  <p>
                    Our team boasts top green energy experts, driving innovation
                    in sustainability.
                  </p>
                </div>

                <Buttons text={"See all"} />
              </div>
              <div className="grid grid-cols-1 gap-6">
                {blogs.map((blog, index) => (
                  <BlogCard key={index} {...blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* frequently */}
        <div className="px-6 lg:px-14 py-6 min-h-screen bg-white">
          <div className="w-full lg:px-72 lg:py-14 rounded-lg">
            <div className="grid grid-cols-1 gap-y-16">
              <div className="flex flex-col justify-center items-center">
                <HeadingTwo title={"FAQ"} />
                <p>
                  Here you will find the answers to the frequently asked
                  questions.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-6">
                {faqs.map((faq, index) => (
                  <FaqCard key={index} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </main>
    </>
  );
}
