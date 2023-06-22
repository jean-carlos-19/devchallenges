import "../../atomic/main.scss"
export default function Home() {
  return (
    <main className="home">
      <section>

        <article>

          <header>
            <h1>Github Jobs</h1>
          </header>

          <form>
            <label htmlFor="">
              <span className="material-symbols-outlined color-gray-100">
                schedule
              </span>
              <input type="text" placeholder="Title,companies,experti..." />
              <input type="button" value="Search" />
            </label>
          </form>

        </article>

      </section>
    </main>
  )
}
