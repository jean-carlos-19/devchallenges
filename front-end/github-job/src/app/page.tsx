import "../../atomic/main.scss"
import {Repository} from '@/App/presentation/design'
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
      <Repository />
    </main>
  )
}
