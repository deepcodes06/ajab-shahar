export default function Home() {
  return (
    <>
      {/* MAIN BG SECTION */}
      <div className="relative min-h-[4450px] w-full overflow-hidden">
        {/* TOP NAVBAR WAVE */}
        <img
          src="/top.svg"
          className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[1568px] h-auto object-cover z-20 pointer-events-none select-none"
          alt="top wave"
        />

        {/* MAIN CENTER BG */}
        <img
          src="/bg.svg"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[4450px] w-[1568px] object-cover pointer-events-none select-none z-0"
          alt="bg"
        />

        {/* LEFT / RIGHT WAVES */}
        <img
          src="/left.svg"
          className="absolute top-0 left-0 h-[4450px] w-[223px] object-cover pointer-events-none select-none z-0"
          alt="left"
        />
        <img
          src="/right.svg"
          className="absolute top-0 right-0 h-[4450px] w-[223px] object-cover pointer-events-none select-none z-0"
          alt="right"
        />

        {/* TREE LOGO */}
        <img
          src="/tree.svg"
          className="absolute bottom-0 right-[180px] h-12 w-auto z-[999] pointer-events-none select-none brightness-0 contrast-150"
          alt="tree"
        />

        {/* CONTENT WRAPPER */}
        <div className="relative z-30 max-w-[1568px] mx-auto pb-40">
          {/* NAVBAR */}
          <header className="relative z-40 w-full py-6 px-10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src="/logo.svg" className="h-16 w-auto" alt="logo" />
              <nav className="hidden md:flex gap-6 text-sm font-medium">
                <a href="#">SONGS</a>
                <a href="#">POEMS</a>
                <a href="#">REFLECTIONS</a>
                <a href="#">PEOPLE</a>
                <a href="#">FILMS</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium">
                ABOUT
              </a>

              <button
                className="h-[50px] w-[50px] flex items-center justify-center rounded-md"
                aria-label="search"
              >
                <img
                  src="/search.svg"
                  className="h-[22px] w-[22px] object-contain invert"
                  alt="search"
                />
              </button>

              <button
                className="h-[50px] w-[50px] flex items-center justify-center rounded-md"
                aria-label="radio"
              >
                <img
                  src="/radio.svg"
                  className="h-[22px] w-[22px] object-contain invert"
                  alt="radio"
                />
              </button>
            </div>
          </header>

          {/* CARD 1 - CENTER */}
          <section className="relative w-[410px] h-[602px] mx-auto mt-24 ml-[300px] overflow-hidden">
            <img
              src="/card.svg"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              alt="card bg"
            />

            <div className="relative z-20 px-6 pt-[58px]">
              <img
                src="/img1.svg"
                className="w-full max-h-[200px] object-cover block"
                alt="video thumb"
              />

              <h2 className="text-2xl font-semibold text-pink-700 mt-6 mb-1 text-center">
                Main Nijaam Se Naina
              </h2>

              <p className="text-sm mb-4 text-gray-700 text-center">
                <i>I Lost My Heart To Nizam’s Glance</i> <br /> sing FARID AYAZ
                & ABU MOHAMMED <br /> poet AMIR KHUSRO
              </p>

              <div className="w-full border-b border-[#dc0067] my-4" />

              <p className="text-gray-600 text-sm mb-6 text-center">
                The delicacy of locking eyes with the beloved and losing one’s
                heart to him combines in this song with a delightful disregard
                for social convention, represented by the gossiping
                neighbourhood women ...
              </p>

              <div className="text-center">
                <a className="text-xs font-semibold text-pink-700">
                  EXPLORE SONG
                </a>
              </div>
            </div>

            <img
              src="/b.svg"
              className="absolute bottom-[22px] left-0 w-full pointer-events-none select-none z-10"
              alt="card bottom wave"
            />
          </section>

          {/* CARD 2 - RIGHT */}
          <section className="relative w-[410px] h-[602px] mt-20 ml-auto mr-[250px] overflow-hidden">
            <img
              src="/card.svg"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              alt="card bg"
            />
            <img
              src="/t.svg"
              className="absolute top-[170px] left-0 w-full pointer-events-none select-none z-10"
              alt="card top wave"
            />

            <div className="relative z-20 px-6 pt-[58px]">
              <img
                src="/img2.svg"
                className="w-full max-h-[200px] object-cover block"
                alt="video"
              />

              <h2 className="text-4xl font-semibold text-pink-700 mt-6 mb-1 text-center">
                ‘Shoonya’ is not ’nothingness’
              </h2>

              <p className="italic text-center mb-1">says KRISHNA NATH</p>

              <div className="w-full border-b border-[#dc0067] my-4" />

              <p className="text-sm mb-4 text-gray-700 text-center">
                "Nothing has its own intrinsic character. Everything exists in
                relation to something else. The name of this realization
                is‘shoonya’.{" "}
              </p>

              <div className="text-center">
                <a className="font-semibold text-pink-700">
                  EXPLORE REFLECTION
                </a>
              </div>
            </div>

            <img
              src="/b.svg"
              className="absolute bottom-[22px] left-0 w-full pointer-events-none select-none z-10"
              alt="card bottom wave"
            />
          </section>

          {/* CARD 3 - LEFT */}
          <section className="relative w-[410px] h-[602px] mt-20 ml-[300px] overflow-hidden">
            <img
              src="/card.svg"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              alt="card bg"
            />
            <img
              src="/t.svg"
              className="absolute top-[170px] left-0 w-full pointer-events-none select-none z-10"
              alt="card top wave"
            />

            <div className="relative z-20 px-6 pt-[58px]">
              <img
                src="/img3.svg"
                className="w-full max-h-[220px] object-cover block"
                alt="video"
              />

              <h2 className="text-2xl font-semibold text-pink-700 mt-6 mb-1 text-center">
                Maukhik Parampara
              </h2>

              <p className="text-sm mb-4 text-gray-700 text-center">
                <b>Oral Traditions</b> <br /> Intro by VIPUL RIKHI
              </p>

              <div className="w-full border-b border-[#dc0067] my-4" />

              <p className="text-sm mb-4 text-gray-700 text-center">
                While there are many kinds of oral traditions – those which
                transmit mythology, sacred texts and folklore – our focus here
                are the oral traditions of Kabir or other mystic poets – the
                Bhaktas, Sufis and Bauls. While there are many kinds of oral
                traditions.
              </p>

              <div className="text-center">
                <a className="font-semibold text-pink-700">
                  EXPLORE REFLECTION
                </a>
              </div>
            </div>

            <img
              src="/b.svg"
              className="absolute bottom-[22px] left-0 w-full pointer-events-none select-none z-10"
              alt="card bottom wave"
            />
          </section>

          {/* CARD 4 - RIGHT */}
          <section className="relative w-[410px] h-[602px] mt-20 ml-auto mr-[250px] mb-20 overflow-hidden">
            <img
              src="/card.svg"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              alt="card bg"
            />
            <img
              src="/t.svg"
              className="absolute top-[170px] left-0 w-full pointer-events-none select-none z-10"
              alt="card top wave"
            />

            <div className="relative z-20 px-6 pt-[58px]">
              <img
                src="/img4.svg"
                className="w-full max-h-[220px] object-cover block"
                alt="video"
              />

              <h2 className="text-2xl font-semibold text-pink-700 mt-6 mb-1 text-center">
                Had Anhad
              </h2>

              <p className="text-gray-700 text-center">
                <b>Journeys with Ram & Kabir</b>
              </p>

              <p className="text-sm mb-4 text-gray-700 text-center">
                A film by SHABNAM VIRMANI
              </p>

              <div className="w-full border-b border-[#dc0067] my-4" />

              <p className="text-gray-600 text-sm mb-6 text-center">
                Kabir was a 15th century mystic poet of north India who defied
                the boundaries between Hindu and Muslim. He had a Muslim name
                and upbringing, but his poetry repeatedly invokes the widely
                revered Hindu name for God –Ram. Who is Kabir’s Ram?
              </p>

              <div className="text-center">
                <a className="font-semibold text-pink-700">EXPLORE FILM</a>
              </div>
            </div>

            <img
              src="/b.svg"
              className="absolute bottom-[22px] left-0 w-full pointer-events-none select-none z-10"
              alt="card bottom wave"
            />
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative text-white pt-[100px] z-50 content pb-24 px-10 overflow-hidden">
        {/* FOOTER WAVE */}
        <img
          src="/down.svg"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto z-40 pointer-events-none select-none"
          alt="footer wave"
        />

        <div className="absolute inset-0" />

        <div className="relative z-50 max-w-6xl mx-auto grid grid-cols-3 gap-20">
          {/* ABOUT + SUPPORT (same column) */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-2">About</h3>
            <p className="text-sm mb-8">
              Ajab Shahar is a wondrous city of songs, poems and conversations
              from Bhakti, Sufi and Baul oral traditions from India and beyond.
            </p>

            <h3 className="text-pink-500 font-semibold mb-2">Support</h3>
            <p className="text-sm">
              If you have found joy and value here, consider supporting this
              work.
            </p>
          </div>

          {/* AJAB NEWS */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-2">Ajab News</h3>
            <p className="text-sm mb-4">
              To receive news, inspirations and more from us…
            </p>

            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 px-2 py-1 text-sm rounded"
              />
              <button className="bg-pink-700 text-white px-3 rounded text-sm">
                Subscribe
              </button>
            </div>

            <p className="text-sm">
              Write to us at{" "}
              <a className="text-pink-500">ajabshahar@gmail.com</a>
            </p>
            <p className="text-sm">
              Follow us on <a className="text-pink-500">Youtube</a> |{" "}
              <a className="text-pink-500">Instagram</a>
            </p>
          </div>

          {/* LINKS */}
          <div>
            <ul className="text-pink-500 text-sm space-y-1">
              <li>SONGS</li>
              <li>POEMS</li>
              <li>REFLECTIONS</li>
              <li>PEOPLE</li>
              <li>FILMS</li>
              <li>RADIO</li>
              <li>GLOSSARY</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center text-xs opacity-70">
          Website Design Smr̥ti Chanchani | Created by the Kabir Project at
          Shabad Dhun Foundation
        </div>
      </footer>
    </>
  );
}
