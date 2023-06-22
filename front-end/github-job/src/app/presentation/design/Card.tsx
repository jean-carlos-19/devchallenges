import React from 'react'

interface card_props{
    url_image:string;
    name_repository_owner:string;
    category:string;
    work_time:string;
    city:string;
    time:string;
}
const Card = (props:card_props) => {
    const {url_image,name_repository_owner,category,work_time,city,time} = props;
  return (
    <article className="card">
          <figure className="figure">
            <img src={url_image} alt="" />
            <figcaption>
              <small> {name_repository_owner} </small>
              <h4>{category}</h4>
              <span>{work_time}</span>
              <div className="time">
                <div>
                  <span className="material-symbols-outlined color-gray-100">
                    public
                  </span>
                  <p> {city} </p>
                </div>
                <div>
                  <span className="material-symbols-outlined color-gray-100">
                    schedule
                  </span>
                  <p> {time} </p>
                </div>
              </div>
            </figcaption>
          </figure>

        </article>
  )
}

export {Card}
