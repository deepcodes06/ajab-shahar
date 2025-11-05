export default function Footer() {
  return (
    <footer className="relative text-white pt-[100px] z-50 pb-24 px-10 overflow-hidden">
      <img
        src="/down.svg"
        className="absolute -top-30 left-1/2 -translate-x-1/2 w-full h-auto z-40 pointer-events-none select-none"
        alt="footer wave"
      />
      <div className="relative z-50 max-w-6xl mx-auto grid grid-cols-3 gap-20">
        <div>
          <h3 className="text-pink-500 font-semibold mb-2">About</h3>
          <p className="text-sm mb-8">
            Ajab Shahar is a wondrous city of songs, poems and conversations
            from Bhakti, Sufi and Baul oral traditions from India and beyond.
          </p>
          <h3 className="text-pink-500 font-semibold mb-2">Support</h3>
          <p className="text-sm">
            If you have found joy and value here, consider supporting this work.
          </p>
        </div>
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
            Write to us at <a className="text-pink-500">ajabshahar@gmail.com</a>
          </p>
          <p className="text-sm">
            Follow us on <a className="text-pink-500">Youtube</a> |{" "}
            <a className="text-pink-500">Instagram</a>
          </p>
        </div>
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
        Website Design Smr̥ti Chanchani | Created by the Kabir Project at Shabad
        Dhun Foundation
      </div>
    </footer>
  );
}
