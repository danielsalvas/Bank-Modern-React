import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () =>(
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary bg-opacity-80 w-full h-full rounded-full hover:bg-gray-700 transition delay-75 z-20`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px]"/>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  )


export default GetStarted