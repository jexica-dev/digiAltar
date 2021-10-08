import { memo } from 'react';
import { CreateDrop } from './CreateDrop';
import { CreateBox } from './CreateBox';
export const CreateContainer = memo(function CreateContainer() {
    return (<><div className="flex flex-col">
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>

			</div>
    </div>
    
    <div className="flex flex-row">
        
        {/* Left Box below */}
        
        <div className="clear-both overflow-hidden create-altar-container mt-4 ml-8 w-1/2 h-80 justify-left border border-primary">
          {/* <AltarCard setToggleFetch={props.setToggleFetch} user={props.user} images={props.images} altar={props.altar} /> */}

          <CreateDrop />


        </div>


        {/* Right Box below*/}
        <div className=" clear-both overflow-hidden altar-image-container mt-4 mr-8 w-1/2 h-80 justify-right border border-primary">
          <p className="w-full -mt-10 text-primary justify-right">
            {"<<"} drag + drop
          </p>
          
        <CreateBox name="Image1"/>
				<CreateBox name="Image2"/>
				<CreateBox name="Image3"/>
        </div>
      </div>
    
    </>);
});
