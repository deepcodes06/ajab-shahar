export default function Card({
  img,
  title,
  subtitle,
  desc,
  linkText,
  position,
  topWave,
}) {
  return (
    <section
      className={`relative w-[410px] h-[602px] ${position} overflow-hidden`}
    >
      <img
        src="/card.svg"
        className="absolute inset-0 w-full h-full z-0"
        alt="card bg"
      />
      {topWave && (
        <img
          src={topWave}
          className="absolute top-[170px] left-0 w-full z-10"
          alt="card top wave"
        />
      )}

      <div className="relative z-20 px-6 pt-[58px]">
        <img
          src={img}
          className="w-full max-h-[220px] object-cover block"
          alt="content"
        />
        <h2 className="text-2xl font-semibold text-pink-700 mt-6 mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm mb-4 text-gray-700 text-center whitespace-pre-line">
          {subtitle}
        </p>
        <div className="w-full border-b border-[#dc0067] my-4" />
        <p className="text-gray-600 text-sm mb-6 text-center">{desc}</p>
        <div className="text-center">
          <a className="font-semibold text-pink-700">{linkText}</a>
        </div>
      </div>

      <img
        src="/b.svg"
        className="absolute bottom-[22px] left-0 w-full z-10"
        alt="card bottom wave"
      />
    </section>
  );
}
