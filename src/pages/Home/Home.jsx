import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random-quotes">Random Quote Machine</Link>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <h1> FCC Projects </h1>
        </section>
      </main>
    </div>
  )
}