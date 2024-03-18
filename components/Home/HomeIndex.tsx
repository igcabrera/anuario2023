/* eslint-disable @next/next/no-img-element */
const HomeIndex: React.FC = () => {
  return (
    <>
      <div className="hero flex items-center align-middle">
        <div className="heroo mx-auto font-bold text-3xl md:text-5xl xl:text-6xl">
          COLEGIO ETCHEGOYEN
          <span className="text-xl block font-light">- Talcahuano -</span>
        </div>
      </div>
      <div className="p-6 mb-40">
        <h1 className="text-3xl font-bold text-center uppercase mb-4">
          Anuario 2023
        </h1>
        <img
          className="mx-auto"
          src="/imgs/yellow.png"
          alt=""
        />
      </div>
    </>
  );
};

export default HomeIndex;
