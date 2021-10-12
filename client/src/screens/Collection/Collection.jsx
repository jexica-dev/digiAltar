import React from "react";
import dateFormat from "dateformat";
import "./Collection.css";
import { ACExample } from "../../components/DragAC/ACExample";
import { Desktop, Mobile } from "../../utils/media";

export default function Collection(props) {
  const stylesCContainer = {
    alignItems: "center",
    width: "100%",
  };

  const stylesCC = {
    width: "580px",
    alignItems: "center",
  };

  const dateCreated = dateFormat(props.altars.created_at, "yyyy-mm-dd");

  const sortedDates = props.altars.created_at.sort((a, b) => {
    let aDate = new Date(a.createdTime);
    console.log(aDate)
    let bDate = new Date(b.createdTime);
    console.log(bDate)
  
    if (aDate < bDate) {
      return 1;
    } else if (bDate < aDate) {
      return -1;
    } else {
      return 0;
    }
  });

  const sortedAltars = sortedDates.filter((altar) => {
    if (altar.id === props.images.altar_id) {
      return true;
    }
    return false;
  });


  return (
    <div className="pt-20 pb-20">

      {sortedAltars.map((altar) =>
        altar.privacy === false ? (
          <>
            <div
              className="m-8 w-screen flex flex-col "
              style={stylesCContainer}
            >
              <div className="m-2 relative" style={stylesCC}>
                <ACExample
                  dragDisabled
                  setToggleFetch={props.setToggleFetch}
                  altar={altar}
                  images={props.images}
                />
                <Desktop>
                  <div className="absolute bottom-0 left-0 text-primary text-lg">
                    <p className="ml-4 mb-2">
                      {altar.name}
                    </p>
                    
                </div>
                  <div className="absolute bottom-0 right-0 mb-2 mr-4 text-black text-right text-sm hover:text-secondary">
                    <p className="">{altar.user.username}</p>
                    <p className="">{dateCreated}</p>
                  </div>
                  <div className="absolute top-0 left-0 text-primary text-sm mt-2 ml-4">
                  
                  </div>
                </Desktop>
              </div>
              <Mobile>
                <div className="m-2 text-center">
                  <p className="text-md text-left text-lg text-primary">
                    {altar.name}
                  </p>
                  <p className="text-md text-left text-sm text-primary">
                    {altar.user.username} {"> "}{dateCreated}
                  </p>

                </div>
              </Mobile>
            </div>
          </>
        ) : null
      )}
    </div>
  );
}
