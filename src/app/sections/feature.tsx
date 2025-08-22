import React from 'react'
import GenericNewsCard from '../components/Front Page components/genericNewsCard'
import HeadlineOnlyCard from '../components/Front Page components/headlineOnlyCard' 
import { sampleArticles } from '../utils/sampleArticles'

const Feature = () => {
  return (
    <div id="feature">
      <div className="flex items-center space-x-2 mb-2 pl-1">
        <span className="w-[3.5px] h-[40px] bg-black inline-block" />
        <p className="text-4xl align-middle font-nubernext font-bold text-black hover:cursor-pointer">Feature</p>
      </div>
      <div>
        <GenericNewsCard news={sampleArticles[16]} headlineSize="text-[16px]" />
      </div>
      <div>
        {sampleArticles.slice(17, 20).map((article) => (
          <React.Fragment key={article.id}>
            <hr className="border border-black mx-4" />
            <HeadlineOnlyCard news={article} font={"font-light"} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Feature