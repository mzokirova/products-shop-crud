import Showcase from "./Showcase";
import image2 from "/src/assets/Frame (1).png";
import image3 from "/src/assets/Frame (2).png";
import image4 from "/src/assets/Frame (3).png";
import image5 from "/src/assets/Frame (4).png";
import image6 from "/src/assets/Frame (5).png";
import image7 from "/src/assets/Frame (6).png";

export default function HomeComponent() {
  return (
    <div className="container mx-auto">
      <Showcase/>
      <div className="my-10">
        <img src={image2} alt="" className="className='w-full h-screen" />
      </div>

      <div className="grid grid-cols-2 gap-x-10 ">
        <img src={image3}alt="" className="className='w-full h-screen object-contain " />
        <img src={image4} alt="" className="className='w-full h-screen object-contain "/>
      </div>

      <div className="grid grid-cols-3 gap-x-10 ">
      <img src={image5}alt="" className="className='w-full h-screen object-contain " />
      <img src={image6}alt="" className="className='w-full h-screen object-contain " />
      <img src={image7}alt="" className="className='w-full h-screen object-contain " />

      </div>
    </div>
  )
}
