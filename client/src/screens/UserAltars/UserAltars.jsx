import { React } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./UserAltars";
import Button from "../../components/Button/Button";
import { createAltar } from "../../services/altars";
import { deleteAltar } from "../../services/altars";
import { ACExample } from "../../components/DragAC/ACExample";
import { deleteImage } from "../../services/images";

export default function UserAltars(props) {
  const history = useHistory();

  const stylesACContainer = {
    alignItems: 'center',
    width:'100%'
  }

  const stylesAC = {
    width: '580px',
    alignItems: 'center'
  }

  const randomName = [
    "Hypnotic",
    "Cyber",
    "Techno",
    "Crypto",
    "Digital",
    "Byte",
    "Matrix",
    "Algo",
  ];
  const randomName2 = [
    "Sanctuary",
    "Shrine",
    "Divine",
    "Holiness",
    "Seance",
    "Artshrine",
  ];

  const handleCreate = async (e) => {
    e.preventDefault();
    const newAltar = {
      name:
        randomName[Math.floor(Math.random() * randomName.length)] +
        " " +
        randomName2[Math.floor(Math.random() * randomName2.length)],
      user_id: props.user.id,
      privacy: false,
    };
    const created = await createAltar(newAltar);
    if (created) {
      history.push(`/myaltars/${created.id}/edit`);
      props.setToggleFetch((prevState) => !prevState);
    }
  };

  return (
    <div className="mb-24">
      {props.user ? (
        <div className="mt-32 text-right mr-12">
          <span className="text-primary mr-8">
            Welcome, {props.user.username}.
          </span>
          <Button onClick={props.handleLogout}>Logout</Button>
          <div className="flex justify-end">
            <button
              onClick={handleCreate}
              className="rounded-full py-2 px-7 text-black bg-secondary bg-opacity-100 border border-secondary hover:bg-trp hover:text-primary"
            >
              Create
            </button>
          </div>
        </div>
      ) : null}

      {props.altars.map((altar) =>
        props.user?.id === altar.user_id ? (
          <>
            <div className="w-screen flex flex-col" style={stylesACContainer}>
            <div className="" style={stylesAC}>
            
              <ACExample
                dragDisabled
                setToggleFetch={props.setToggleFetch}
                altar={altar}
                images={props.images}
                />
                
                <p className="m-2 text-center text-primary">{altar.name}</p>

                
            </div>
            </div>

            
            <div className="text-center mb-10">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/myaltars/${altar.id}/edit`);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={async (e) => {

                  for (let image of props.images) {
                    if (image.altar_id == altar.id) {
                      await deleteImage(image.id)
                    }
                  }
                  
                  await deleteAltar(altar.id);
                  props.setToggleFetch((prevState) => (!prevState));
                }}
              >
                Delete
              </Button>
            </div>
          </>
        ) : null
      )}
    </div>
  );
}
