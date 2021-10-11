import {React} from "react";
import { CreateBox } from "./CreateBox";
import { ACExample } from "../DragAC/ACExample";

export default function CreateContainer(props) {


  return (
    <>
      <div className="flex flex-row">
        {/* Left Box below */}

        <div className="clear-both overflow-hidden create-altar-container mt-4 ml-8 w-1/2 h-96 justify-left border border-primary">
          <p className="ml-2 mt-2 text-left text-sm text-primary -mb-10">
            {" "}
            doubleclick to delete
          </p>
          {/* <AltarCard setToggleFetch={props.setToggleFetch} user={props.user} images={props.images} altar={props.altar} /> */}
          <ACExample
            setToggleFetch={props.setToggleFetch}
            altar={props.altar}
            images={props.images}
          />
        </div>

        {/* Right Box below*/}
        <div className="-mb-2 altar-image-container mt-4 mr-8 w-1/2 h-96 justify-right border border-primary z-10">
          <p className="w-full -mt-6 ml-2 -mb-4 text-primary justify-right">
            {"<<"} drag + drop
          </p>

          <div className="-mb-2 relative mt-4 clear-both overflow-scroll w-full h-96 ">
            {/* These are the images that you can add to your altar */}

            {/* <AltarImage imageType={props.imageType} /> */}



            
            <CreateBox top="0px" left="0px" imageType={9} />
            <CreateBox top="0px" left="100px" imageType={4} />
            <CreateBox top="0px" left="200px" imageType={2} />
            <CreateBox top="0px" left="300px" imageType={43} />
            <CreateBox top="0px" left="380px" imageType={7} />
            <CreateBox top="0px" left="500px" imageType={5} />

            <CreateBox top="100px" left="0px" imageType={18} />
            <CreateBox top="100px" left="100px" imageType={20} />
            <CreateBox top="100px" left="200px" imageType={12} />
            <CreateBox top="100px" left="300px" imageType={13} />
            <CreateBox top="100px" left="380px" imageType={11} />
            <CreateBox top="100px" left="500px" imageType={19} />

            <CreateBox top="200px" left="0px" imageType={37} />
            <CreateBox top="200px" left="100px" imageType={36} />
            <CreateBox top="200px" left="200px" imageType={10} />
            <CreateBox top="200px" left="300px" imageType={29} />
            <CreateBox top="200px" left="380px" imageType={35} />
            <CreateBox top="200px" left="500px" imageType={1} />

            <CreateBox top="300px" left="0px" imageType={22} />
            <CreateBox top="300px" left="100px" imageType={25} />
            <CreateBox top="300px" left="200px" imageType={40} />
            <CreateBox top="300px" left="300px" imageType={8} />
            <CreateBox top="300px" left="380px" imageType={14} />
            <CreateBox top="300px" left="500px" imageType={17} />

            <CreateBox top="400px" left="0px" imageType={32} />
            <CreateBox top="400px" left="100px" imageType={38} />
            <CreateBox top="400px" left="200px" imageType={3} />
            <CreateBox top="400px" left="300px" imageType={21} />
            <CreateBox top="400px" left="380px" imageType={15} />
            <CreateBox top="400px" left="500px" imageType={30} />
            

            

 {/* {           const numberType1 = [16, 30, ]
  const numberType2 = [10, 32]
  const numberType3 = [,31  ]
  const numberType4 = [23, 26, 15]}
   */}
  
   
          </div>
        </div>
      </div>
    </>
  );
}
