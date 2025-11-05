export default function MobileMenu() {
  return (
    <div className="md:hidden bg-white shadow-md rounded-md mt-2 py-4 px-6 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        {["SONGS", "POEMS", "REFLECTIONS", "PEOPLE", "FILMS", "ABOUT"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-700"
            >
              {item}
            </a>
          )
        )}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {["search", "radio"].map((icon) => (
          <button
            key={icon}
            className="h-[38px] w-[38px] flex items-center justify-center rounded-md bg-gray-100"
            aria-label={icon}
          >
            <img
              src={`/${icon}.svg`}
              className="h-[18px] w-[18px] object-contain"
              alt={icon}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
