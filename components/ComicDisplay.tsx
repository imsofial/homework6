import React from "react";
import { ComicData } from "./types";
import { formatDistanceToNow } from "date-fns";

interface ComicDisplayProps {
  comicData: ComicData;
}

const ComicDisplay: React.FC<ComicDisplayProps> = ({ comicData }) => {
  const comicDate = new Date(
    `${comicData.year}-${comicData.month}-${comicData.day}`,
  );

  return (
    <div className="comic-container">
      <p id="title">{comicData.safe_title}</p>
      <img id="image" src={comicData.img} alt={comicData.alt} />
      <p id="date">{formatDistanceToNow(comicDate, { addSuffix: true })}</p>
    </div>
  );
};

export default ComicDisplay;
