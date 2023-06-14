import React from "react";

import CurrentSpeakers from "./currentSpeaker";
import speakers from "./speakers";
import Navbar from "./navbar";

function CreateSpeakerCard(speakers) {
  return (
    <CurrentSpeakers
      key={speakers.key}
      imgURL={speakers.imgURL}
      name={speakers.name}
      profession={speakers.profession}
    />
  );
}

function Team() {
  return (
    <div className="all">
      <Navbar />
      <div className="blackback">
        <h1 className="team-heading">
          <span>LICENSE</span> <span className="team-heading-red">HOLDER</span>
        </h1>
        <CurrentSpeakers
          key={speakers[0].key}
          imgURL={speakers[0].imgURL}
          name={speakers[0].name}
          profession={speakers[0].profession}
        />

        <h1 className="team-heading">
          <span>CORE</span> <span className="team-heading-red">TEAM</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}
        {speakers.map(CreateSpeakerCard)}

        <h1 className="team-heading">
          <span>VOLUNTEERS</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}

        <h1 className="team-heading">
          <span>ANCHORING</span>
        </h1>
        <CurrentSpeakers
          key={speakers[3].key}
          imgURL={speakers[3].imgURL}
          name={speakers[3].name}
          profession={speakers[3].profession}
        />
        <CurrentSpeakers
          key={speakers[2].key}
          imgURL={speakers[2].imgURL}
          name={speakers[2].name}
          profession={speakers[2].profession}
        />

        <h1 className="team-heading">
          <span>TECHNICAL</span> <span className="team-heading-red">TEAM</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}
      </div>
    </div>
  );
}

export default Team;
