import React from "react";
import Header from "./UI/Header";
import purple from "../assets/purple star.png";
import star from "../assets/star.png";
import TimelineItem from "./UI/TimelineItem";

const Timeline = () => {
  return (
    <section className="container relative mx-auto text-white py-[60px]">
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
        reverse={false}
      />
      <TimelineItem
        event="Teams Registration begins"
        info="Interested teams can now show their interest in the
        getlinked tech hackathon 1.0 2023 by proceeding to register"
        date="November 18, 2023"
        no="2"
        reverse={true}
      />
      <TimelineItem
        event="Teams Registration ends"
        info="Interested Participants are no longer Allowed to
        register"
        date="November 18, 2023"
        no="3"
        reverse={false}
      />
      <TimelineItem
        event="Announcement of the accepted teams
        and ideas"
        info="All teams whom idea has been accepted into getlinked tech
        hackathon 1.0 2023 are formally announced"
        date="November 18, 2023"
        no="4"
        reverse={true}
      />
      <TimelineItem
        event="Getlinked Hackathon 1.0 Offically Begins"
        info="Accepted teams can now proceed to build their
        ground breaking skill driven solutions"
        date="November 18, 2023"
        no="5"
        reverse={false}
      />
      <TimelineItem
        event="Demo Day"
        info="Teams get the opportunity to pitch their projects to judges.
        The winner of the hackathon will also be announced on
        this day"
        date="November 18, 2023"
        no="6"
        reverse={true}
      />
      <img
        src={purple}
        alt="star"
        className="absolute top-[5%] left-[10%] w-[15px] sm:top-[10%]"
      />
      <img
        src={star}
        alt="star"
        className="absolute bottom-[5%] left-[10%] w-[15px] opacity-20 sm:bottom-[10%]"
      />
      <img
        src={star}
        alt="star"
        className="absolute bottom-[50%] right-[10%] w-[15px]"
      />
    </section>
  );
};

export default Timeline;
