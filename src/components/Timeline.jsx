import React from "react";
import Header from "./UI/Header";
import TimelineItem from "./UI/TimelineItem";
import TwinkleStar from "./UI/TwinkleStar";

const Timeline = () => {
  return (
    <section className="container relative mx-auto text-white py-[30px]">
      <span className="text-center mx-auto">
        <Header head={"Timeline"} />
        <p className="text-sm pb-8">
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </p>
      </span>

      <TimelineItem
        event="Hackathon Announcement"
        info="The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register"
        date="November 18, 2023"
        no="1"
        eventRev='Teams Registration begins'
        infoRev="Interested teams can now show their interest in the
        getlinked tech hackathon 1.0 2023 by proceeding to register"
        dateRev="November 18, 2023"
        noRev='2'
      />

      <TimelineItem
        event="Teams Registration ends"
        info="Interested Participants are no longer Allowed to
        register"
        date="November 18, 2023"
        no="3"
        eventRev="Announcement of the accepted teams
        and ideas"
        infoRev="All teams whom idea has been accepted into getlinked tech
        hackathon 1.0 2023 are formally announced"
        dateRev="November 18, 2023"
        noRev='4'
      />
      
      <TimelineItem
        event="Getlinked Hackathon 1.0 Offically Begins"
        info="Accepted teams can now proceed to build their
        ground breaking skill driven solutions"
        date="November 18, 2023"
        no="5"
        eventRev="Demo Day"
        infoRev="Teams get the opportunity to pitch their projects to judges.
        The winner of the hackathon will also be announced on
        this day"
        dateRev="November 18, 2023"
        noRev="6"
      />
      <span className="absolute top-[5%] left-[10%] w-[15px] z-[9]">
        <TwinkleStar />
      </span>
      <span className="absolute bottom-[5%] left-[10%] w-[15px] z-[9]">
        <TwinkleStar />
      </span>
      <span className="absolute bottom-[50%] right-[10%] w-[15px] z-[9]">
        <TwinkleStar />
      </span>
    </section>
  );
};

export default Timeline;
