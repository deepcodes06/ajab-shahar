import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Songs() {
  const [filterType, setFilterType] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const filters = ["All", "Singer", "Poet", "Film", "Theme"];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const songs = [
    {
      id: 1,
      title: "Aa Re Sakhi",
      singer: "Aarti Nayak",
      poet: "Kabir",
      film: "-",
      img: "/img1.svg",
    },
    {
      id: 2,
      title: "Ab Tohe Jaane Na Dungi",
      singer: "Aarti Nayak",
      poet: "Kabir",
      film: "-",
      img: "/img1.svg",
    },
    {
      id: 3,
      title: "Ae Ri Sakhi",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img1.svg",
    },
    {
      id: 4,
      title: "Aisi Preet",
      singer: "Aarti Nayak",
      poet: "Kabir",
      film: "-",
      img: "/img2.svg",
    },
    {
      id: 5,
      title: "Chadariya Jhini Re Jhini",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img2.svg",
    },
    {
      id: 6,
      title: "Ahadariya Jhini Re Jhini",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img3.svg",
    },
    {
      id: 7,
      title: "Chadariya Jhini Re Jhini Extra",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img3.svg",
    },
    {
      id: 8,
      title: "Chadariya Jhini Re Jhini Alt",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img2.svg",
    },
    {
      id: 9,
      title: "Chadariya Jhini Re Jhini Alt",
      singer: "Prahlad Singh Tipanya",
      poet: "Kabir",
      film: "-",
      img: "/img3.svg",
    },
  ];

  // ✅ Filter alphabetically
  const filteredSongs = songs.filter((song) => {
    return selectedLetter ? song.title.startsWith(selectedLetter) : true;
  });

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden text-black">
      {/* Decorative Backgrounds */}
      {[
        {
          src: "/top.svg",
          class: "top-[2px] left-1/2 -translate-x-1/2 w-[1568px] z-20",
        },
        {
          src: "/bg.svg",
          class: "top-0 left-1/2 -translate-x-1/2 w-[1568px] h-full z-0",
        },
        { src: "/left.svg", class: "top-0 left-0 w-[223px] h-full z-0" },
        { src: "/right.svg", class: "top-0 right-0 w-[223px] h-full z-0" },
      ].map((img, i) => (
        <img
          key={i}
          src={img.src}
          className={`absolute object-cover pointer-events-none select-none ${img.class}`}
          alt="decorative"
        />
      ))}

      <Navbar />

      <main className="relative z-30 flex-grow max-w-[1568px] mx-auto px-5 sm:px-10 pt-10 pb-40">
        <h3 className="font-semibold text-gray-500 mb-8 text-sm sm:text-base">
          <i>
            The utterances of Bhakti, Sufi and Baul poets have been kept alive
            over centuries through song, and that is what you find here
            <br />- live recordings of oral poetry all the way from Pakistan in
            the west to Bengal in the east, pulsating to rhythm and melody,
            <br /> sung and recorded in contexts as diverse as urban stages and
            village squares, on trains and road journeys, in living rooms and
            under the wide open sky.
          </i>
        </h3>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="text-white text-sm hover:text-pink-600"
            >
              Filter by: {filterType}
            </button>
            {filterOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded-md z-50">
                {filters.map((f) => (
                  <div
                    key={f}
                    onClick={() => {
                      setFilterType(f);
                      setFilterOpen(false);
                      if (f === "All") setSelectedLetter(null);
                    }}
                    className="px-4 py-2 hover:bg-pink-100 cursor-pointer text-sm"
                  >
                    {f}
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-pink-600">({filteredSongs.length}) Songs</p>
        </div>

        {/* Alphabet Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-medium">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() =>
                setSelectedLetter(letter === selectedLetter ? null : letter)
              }
              className={`px-2 ${
                selectedLetter === letter
                  ? "text-pink-700 font-bold"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        <img
          src="/tree.svg"
          className="absolute bottom-0 right-[180px] h-12 w-auto z-[999] pointer-events-none select-none brightness-0"
          alt="tree"
        />

        {/* Song Cards */}
        <div className="flex justify-center">
          {filteredSongs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 justify-items-center w-full">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  className="bg-white shadow-md rounded-md overflow-hidden text-center w-[260px] sm:w-[280px] transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={song.img}
                    alt={song.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <h2 className="text-base font-semibold text-pink-700 mb-1">
                      {song.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-1">
                      Singer: {song.singer}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      Poet: {song.poet}
                    </p>
                    <button className="text-pink-700 font-semibold text-sm">
                      EXPLORE SONG
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No songs found for this letter.
            </p>
          )}
        </div>
      </main>

      <div className="relative bg-black z-50 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
