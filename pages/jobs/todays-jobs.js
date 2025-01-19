import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import { BsFilterSquare } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const AllJobs = () => {
  // ================== State Management ==========================
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); // Search query state
  const [searchInput, setSearchInput] = useState(""); // Input field state
  const [showFilter, setShowFilter] = useState(false);

  // ================== Fetch Data from API ==========================
  const fetchJobs = (searchQuery) => {
    setLoading(true);
    setError(null);
    fetch(`http://172.22.0.106:4000/recommend?query=${encodeURIComponent(searchQuery)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response data:", data); // Debug API response
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch error:", err.message); // Log errors
        setError(err.message);
        setLoading(false);
      });
  };
  

  // ================== Handle Search ==========================
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setQuery(searchInput);
      fetchJobs(searchInput);
    }
  };

  const FilterHandleBtn = () => {
    setShowFilter(!showFilter);
  };

  // ================== Rendering ==========================
  return (
    <div className="min-h-screen flex flex-col">
      {/* ============== Head Tag =============== */}
      <HeadTag title="Freelance Today's Jobs - AI Genie" />

      {/* ================== Header =================== */}
      <header className="header-bg">
        <Navbar />
      </header>

      {/* ================= Main ==================== */}
      <main>
        <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
          <div className="flex">
            {/* =========================== Job content ============================= */}
            <div className="2xl:w-[75%] lg:w-[70%] w-full sm:border border-gray-300 rounded-xl">
              <div className="sm:py-7 pb-7 sm:px-7 px-1.5 border-b border-gray-300">
                <div className="lg:hidden flex justify-end">
                  <button
                    className="text-zinc-600 transition hover:text-zinc-500"
                    onClick={FilterHandleBtn}
                  >
                    <BsFilterSquare className="h-8 w-8" />
                  </button>
                </div>

                <div className="lg:mt-0 mt-5">
                  <form
                    className="flex flex-grow border-2 lg:max-w-full items-center bg-[#f9fffdfd] relative transition hover:border-[#b8d8d4fd] rounded-xl border-gray-300"
                    onSubmit={handleSearchSubmit}
                  >
                    <input
                      type="text"
                      className="flex-grow focus:outline-none bg-transparent mx-3 text-zinc-700"
                      placeholder="Search for your specific needs"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 rounded-r-xl duration-300 ease-in bg-zinc-800 cursor-pointer hover:bg-[#2b4241fd]"
                    >
                      <FaSearch className="h-5 text-white" />
                    </button>
                  </form>

                  {/* Render Cards */}
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


    {loading && <p>Loading Agents....</p>}
    {error && <p className="text-red-500">{error}</p>}
    {!loading &&
      !error &&
      jobs.map((job, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md"
        >
          <img
            src={job.imagelink}
            alt={job.name}
            className="w-20 h-20 object-cover rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {job.name}
          </h3>
          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {job.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Description:</strong> {job.description}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Similarity:</strong> {job.similarity}%
          </p>
        </div>
      ))}
  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== Footer ====================== */}
      <Footer />
    </div>
  );
};

export default AllJobs;