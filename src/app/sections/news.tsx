import React from "react"
import Image from "next/image"
import TopNewsCard from "../components/topNewsCard"
import { sampleArticles } from "../utils/sampleArticles"

const News = () => {
  return (
    <div id="news" className="mb-9">
      <div className="flex items-center space-x-2 mb-2">
        <span className="w-[3.5px] h-[40px] bg-custom-blue inline-block" />
        <p className="text-4xl align-middle font-nubernext font-bold text-black hover:text-custom-blue hover:cursor-pointer transition duration-700 ease-in-out">Top News</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="main-news-container flex items-center justify-between w-[72.5%]">
          <div className="w-[61%]">
            <TopNewsCard news={sampleArticles[0]} />
          </div>
        </div>
        <div className="more-stories-container w-[27.5%]">

        </div>
      </div>
    </div>
  )
}

export default News