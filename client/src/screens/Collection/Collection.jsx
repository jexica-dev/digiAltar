import { React, useRef} from "react";
import dateFormat from "dateformat";
import "./Collection.css";
import { ACExample } from "../../components/DragAC/ACExample";
import { Desktop, Mobile } from "../../utils/media";

export default function Collection(props) {
  const stylesCContainer = {
    alignItems: "center",
    width: "100%",
    transform: 'scale(0.9)'
  };

  const stylesCC = {
    alignItems: "center",
    width: "610px",
    transformOrigin: "top-left",
  };


  const elRef = useRef();
  const divContainer = elRef.current;
  
  

  const sortedAltars = props.altars.sort((a, b) => {
    let aDate = new Date(a.created_at);

    let bDate = new Date(b.created_at);

    
    if (aDate < bDate) {
      return -1;
    } else if (bDate < aDate) {
      return 1;
    } else {
      return 0;
    }
  });



  return (
    <div className="">
      <Desktop>
        <div className=" w-full grid grid-cols-2" style={stylesCContainer}>
          {sortedAltars.map((altar) =>
            altar.privacy === false ? (
              <>
                <div className="relative" style={stylesCC}>
                  <div className=" mt-10">
                    <ACExample
                      dragDisabled
                      setToggleFetch={props.setToggleFetch}
                      altar={altar}
                      images={props.images}
                    />
                  </div>

                  <div className="">
                    <div className="absolute bottom-0 left-0 text-primary text-lg">
                      <p className="ml-4 mb-2">{altar.name}</p> 
                    </div>
                    <div className=" absolute bottom-0 right-0 mb-2 mr-4 text-black text-right text-sm hover:text-black hover:bg-primary">
                      <p className="">&nbsp;{altar.user.username}&nbsp;</p>
                      <p className="">
                      &nbsp;{dateFormat(altar.created_at, "yyyy-mm-dd")}&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : null
          )}
        </div>
      </Desktop>
      <Mobile>
        <div className=" w-full flex flex-col" style={stylesCContainer}>
          {sortedAltars.map((altar) =>
            altar.privacy === false ? (
              <>
                <div className="relative w-5/6" style={stylesCC}>
                  <div ref={divContainer} className="text-right">
                    <ACExample
                      dragDisabled
                      setToggleFetch={props.setToggleFetch}
                      altar={altar}
                      images={props.images}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-3/5 m-6 text-primary">
                  <p className="text-right font-medium text-xl text-primary">
                    {altar.name}
                  </p>
                  <p className="text-primary text-lg text-right font-medium">
                    {altar.user.username}
                  </p>{" "}
                  <p className="text-sm text-right font-thin">
                    {dateFormat(altar.created_at, "yyyy.mm.dd")}
                  </p>
                </div>
              </>
            ) : null
          )}
        </div>
      </Mobile>
    </div>
  );
}
