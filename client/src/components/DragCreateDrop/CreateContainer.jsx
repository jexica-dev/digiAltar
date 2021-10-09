import { memo } from "react";
import CreateDrop from "./CreateDrop";
import { CreateBox } from "./CreateBox";
import { ACExample } from "../DragAltarCard/ACExample";
import AltarImage from "../AltarImage/AltarImage";



export const CreateContainer = memo(function CreateContainer(props) {
  return (
    <>
 

      <div className="flex flex-row">

        {/* Left Box below */}

        <div className="clear-both overflow-hidden create-altar-container mt-4 ml-8 w-1/2 h-96 justify-left border border-primary">
          <p className="ml-2 text-left text-sm text-primary -mb-10"> doubleclick to delete</p>
          {/* <AltarCard setToggleFetch={props.setToggleFetch} user={props.user} images={props.images} altar={props.altar} /> */}
          <ACExample />

        </div>

    

        {/* Right Box below*/}
        <div className=" altar-image-container mt-4 mr-8 w-1/2 h-96 justify-right border border-primary z-10">

          <p className="w-full -mt-8 ml-2 text-primary justify-right">
            {"<<"} drag to drop
          </p>
          
          <div className="relative mt-4 clear-both overflow-hidden w-full -mb-8 h-96 ">
            {/* These are the images that you can add to your altar */}

            {/* <AltarImage imageType={props.imageType} /> */}
            

            <CreateBox top="3px" left="100px" imageType={25} />
            <CreateBox imageType={18} />
            <CreateBox imageType={1} />
            <CreateBox imageType={7} />
            <CreateBox imageType={2} />
            <CreateBox imageType={4} />
            <CreateBox imageType={19} />
            <CreateBox imageType={5} />
            <CreateBox imageType={9} />
            <CreateBox imageType={20} />
            <CreateBox imageType={14} />
            <CreateBox imageType={11} />
            <CreateBox imageType={10} />
            <CreateBox imageType={13} />
            <CreateBox imageType={12} />
            <CreateBox imageType={8} />
            <CreateBox imageType={3} />
            <CreateBox imageType={17} />
            <CreateBox imageType={16} /> 

          </div>
        </div>
      </div>
    </>
  );
});
