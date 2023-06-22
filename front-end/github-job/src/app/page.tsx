import "../../atomic/main.scss"
export default function Home() {
  return (
    <main className="home">
      <header className="header header-home">
        <h1>Github Jobs</h1>
      </header>

      <form>

        <div className="form form-home">
          <div className="search bg-white-100">
            <span className="material-symbols-outlined icon icon-search color-gray-100">
              business_center
            </span>
            <input className="field field-search" type="text" placeholder="Title,companies,experti..." />
            <input className="button button-search bg-blue-100 color-white-100" type="button" value="Search" />
          </div>
        </div>

        <div className="check">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Full time</label>
        </div>

        <div className="location">
          <label className="label label-location" htmlFor="">Location</label>
          <div className="input input-location bg-white-100">
            <span className="material-symbols-outlined icon icon-input color-gray-100">
              public
            </span>
            <input className="field field-input" type="text" placeholder="City,state,zip code or country" />
          </div>
        </div>

        <div>
          <input type="radio" name="city" id="london" value={"london"} checked />
          <label htmlFor="london">London</label>
        </div>
        <div>
          <input type="radio" name="city" id="amsterdam" value={"amsterdam"} />
          <label htmlFor="amsterdam">Amsterdam</label>
        </div>
        <div>
          <input type="radio" name="city" id="new_york" value={"new_york"} />
          <label htmlFor="new_york">New York</label>
        </div>
        <div>
          <input type="radio" name="city" id="berlin" value={"berlin"} />
          <label htmlFor="berlin">Berlin</label>
        </div>
      </form>

      <section className="repository">
        <article className="card">
          <figure className="figure">
            <img src="https://media.istockphoto.com/id/1430294897/photo/beautiful-emotional-woman-with-bright-make-up.webp?s=170667a&w=0&k=20&c=Ttl0aIgStmzuqPO1pS2H2-k_RRZD5MrdhThXLxrlNJ8=" alt="" />
            <figcaption>
              <small>Kasisto</small>
              <h4>Front-End Software Engineer</h4>
              <span>Full time</span>
              <div className="time">
                <div>
                  <span className="material-symbols-outlined color-gray-100">
                    public
                  </span>
                  <p> New York</p>
                </div>
                <div>
                  <span className="material-symbols-outlined color-gray-100">
                    schedule
                  </span>
                  <p> 5 days ago </p>
                </div>
              </div>
            </figcaption>
          </figure>

        </article>
      </section>
    </main>
  )
}
