import React from "react"
import Image from "next/image"
import { Article } from "../../utils/sampleArticles"

interface GenericNewsCardProps {
  news: Article
  headlineSize?: string
}

const GenericNewsCard = ({ news, headlineSize = "text-xl" }: GenericNewsCardProps) => {
  return (
    <div id="side-news-card-container" className="w-full h-full bg-white p-4 rounded-lg hover:scale-105 hover:shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] hover:rounded-lg hover:cursor-pointer transition duration-500 ease-in-out">
      <a href="#">
        <div id="side-news-image">
          <Image src={news.image} alt={news.headline} className="w-full mb-3" width={500} height={500} />
        </div>
        <div id="side-news-headline">
          <p className={`${headlineSize} font-semibold`}>{news.headline}</p>
        </div>
      </a>
    </div>
  )
}

export default GenericNewsCard