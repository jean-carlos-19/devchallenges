import "../../atomic/main.scss"
export default function Home() {
  return (
    <main className="home">
      <header className="header header-home">
        <h1>Github Jobs</h1>
      </header>
      <section >
        <form className="form form-home">
          <div className="search bg-white-100">
            <span className="material-symbols-outlined icon icon-search color-gray-100">
              business_center
            </span>
            <input className="field field-search" type="text" placeholder="Title,companies,experti..." />
            <input className="button button-search bg-blue-100 color-white-100" type="button" value="Search"  />
          </div>
        </form>
      </section>
    </main>
  )
}
