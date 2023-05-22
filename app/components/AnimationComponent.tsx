"use client";
import Lottie from "lottie-react";
import AnimationData1 from "../../anim/animation1.json"
import AnimationData from "../../anim/animation.json"

const AnimationComponent = () => {
      return (
            <div>
                  <div className="bg-transparent rounded-xl  flex justify-center items-center">
                        <Lottie animationData={AnimationData1}/>
                  </div>
            </div>
      )
}
const AnimationComponent1 = () => {
      return (
            <div>
                  <div className="bg-black rounded-xl  flex justify-center items-center">
                        <Lottie animationData={AnimationData}/>
                  </div>
            </div>
      )
}

export  {AnimationComponent, AnimationComponent1}