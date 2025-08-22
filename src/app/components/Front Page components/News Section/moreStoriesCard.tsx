import React from "react"
import { Article } from "../../../utils/sampleArticles"

interface MoreStoriesCardProps {
  news: Article
}

const MoreStoriesCard = ({ news }: MoreStoriesCardProps) => {
  return (
    <div id="more-stories-card-container" className="w-auto h-auto bg-white p-2 pt-3 mx-2 rounded-lg hover:scale-105 hover:shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] hover:rounded-lg hover:cursor-pointer transition duration-500 ease-in-out">
      <a href="#">
        <div id="more-stories-headline">
          <p className="text-[16px] font-semibold leading-[22px]">{news.headline}</p>
        </div>
      </a>
    </div>
  )
}

export default MoreStoriesCard