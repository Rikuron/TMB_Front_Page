import React from "react"
import TopNewsCard from "../components/Front Page components/topNewsCard"
import GenericNewsCard from "../components/Front Page components/genericNewsCard"
import HeadlineOnlyCard from "../components/Front Page components/headlineOnlyCard"
import { sampleArticles } from "../utils/sampleArticles"

const News = () => {
  return (
    <div id="news">
      <div className="flex items-center space-x-2 mb-2 pl-1">
        <span className="w-[3.5px] h-[40px] bg-custom-blue inline-block" />
        <p className="text-4xl align-middle font-nubernext font-bold text-black hover:text-custom-blue hover:cursor-pointer transition duration-700 ease-in-out">Top News</p>
      </div>
      <div className="flex justify-between">
        <div className="main-news-container flex items-center justify-between w-[72.5%]">
          <div className="w-[61%] top-news-card-container">
            <TopNewsCard news={sampleArticles[0]} />
          </div>
          <div className="w-[39%] side-news-card-container">
            {sampleArticles.slice(1, 3).map((article) => (
              <GenericNewsCard key={article.id} news={article} />
            ))}
          </div>
        </div>
        <div className="more-stories-card-container w-[27.5%]">
          <p className="text-3xl p-4 pb-0 font-nubernext text-custom-blue font-semibold">More Stories</p>
          {sampleArticles.slice(3, 8).map((article) => (
            <React.Fragment key={article.id}>
              <HeadlineOnlyCard news={article}/>
              <hr className="border border-black mx-4" />
            </React.Fragment>
          ))}
          <div className="px-4 mt-2">
            <a href="#" className="text-custom-blue text-xs leading-[22px]">SEE MORE ARTICLES</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News