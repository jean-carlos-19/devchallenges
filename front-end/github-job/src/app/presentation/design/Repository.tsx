import React from 'react'
import { Card } from './Card'

const Repository = () => {
  return (
    <section className="repository">
      <Card
        url_image={"https://media.istockphoto.com/id/1430294897/photo/beautiful-emotional-woman-with-bright-make-up.webp?s=170667a&w=0&k=20&c=Ttl0aIgStmzuqPO1pS2H2-k_RRZD5MrdhThXLxrlNJ8="}
        name_repository_owner={"Kasisto"}
        category={"Front-End Software Engineer"}
        work_time={"Full time"}
        city={"New York"}
        time={"5 days ago"}
      />
    </section>
  )
}

export { Repository }
