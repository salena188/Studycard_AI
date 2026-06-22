import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const logoOptions = ["📘", "📚", "🧠", "🎓", "📖"];
  const logo = logoOptions[1];

  return (
    <div className="main-bg">

      {/* navbar section*/}
      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 py-3">

        {/* left side logo */}
        <div className="navbar-brand fw-bold text-primary fs-4">
          {logo} StudyCards
        </div>

        {/* home */}
        <div className="nav-center mx-auto">
          <a href="#" className="nav-home">Home</a>
        </div>

        {/* right side button */}
        <div className="ms-auto d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm nav-btn">
            Login
          </button>
          <button className="btn btn-primary btn-sm nav-btn">
            Sign Up
          </button>
        </div>
      </nav>

      {/* hero section */}
      <div className="container mt-4">
        <div className="hero-box text-center text-white">

          <h1 className="hero-title">
            Turn Your Notes Into <br /> Smart Flashcards Instantly
          </h1>

          <p className="hero-subtitle mt-3">
            Stop wasting time reading long notes.
            Learn faster, revise smarter, and remember longer with AI-powered flashcards.
          </p>

          <button className="btn btn-orange mt-4 px-4 py-2 fw-semibold">
            Get Started
          </button>

        </div>
      </div>

      {/* features */}
      <div className="container my-5">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="feature-card">
              <h5>📚 Create Resources</h5>
              <p>Generate notes, flashcards and summaries instantly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h5>🧠 Practice & Master</h5>
              <p>Improve learning with smart revision tools.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h5>🤝 Study & Collaborate</h5>
              <p>Share notes and learn with friends easily.</p>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className="footer">
        © 2026 Study Cards
      </div>

    </div>
  );
}

export default App;