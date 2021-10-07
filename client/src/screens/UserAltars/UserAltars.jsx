import { React } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./UserAltars";
import Button from "../../components/Button/Button";
import AltarCard from "../../components/AltarCard/AltarCard";
import { createAltar } from "../../services/altars";

export default function UserAltars(props) {

  const randomName = [
    "Hypnotic",
    "Cyber",
    "Techno",
    "Crypto",
    "Digital",
    "Byte",
  ];
  const randomName2 = [
    "Sanctuary",
    "Shrine",
    "Divine",
    "Holiness",
    "Seance",
    "Artshrine",
  ];

  const history = useHistory();

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
      props.setToggleFetch((prevState)=>(!prevState))
    }
  };

  return (
    <>
      {props.user ? (
        <div className="mt-32 text-right mr-12">
          <span className="text-primary mr-8">
            Welcome, {props.user.username}.
          </span>
          <Button onClick={props.handleLogout}>Logout</Button>
        </div>
      ) : null}

      {props.altars.map((altar) =>
        props.user?.id === altar.user_id ? (
          <AltarCard setToggleFetch={props.setToggleFetch} user={props.user} images={props.images} altar={altar} />
        ) : null
      )}

      <Button onClick={handleCreate}>Create</Button>
    </>
  );
}
