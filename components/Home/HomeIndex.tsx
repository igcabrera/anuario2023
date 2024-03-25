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
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 xl:px-20 py-10">
          <div className="text-center p-4">
            <a
              href="/semblanzas/4a"
              className="no-underline"
            >
              <div
                className="bg-cover h-32 flex justify-center items-center object-top rounded-3xl"
                style={{
                  backgroundImage: 'url("/fotos-cursos/portadas/4a.webp")',
                }}
              >
                <div className="text-white font-bold w-full h-full text-xs xl:text-md  hover:text-xl uppercase italic m-0 bg-azul bg-opacity-60 flex justify-center items-center object-top rounded-3xl">
                  Semblanzas 4ºA
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-4">
            <a
              href="/semblanzas/4b"
              className="no-underline"
            >
              <div
                className="bg-cover h-32 flex justify-center items-center object-top rounded-3xl"
                style={{
                  backgroundImage: 'url("/fotos-cursos/portadas/4b.webp")',
                }}
              >
                <div className="text-white font-bold w-full h-full text-xs xl:text-md  hover:text-xl uppercase italic m-0 bg-azul bg-opacity-60 flex justify-center items-center object-top rounded-3xl">
                  Semblanzas 4ºB
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-4">
            <a
              href="/semblanzas/4c"
              className="no-underline"
            >
              <div
                className="bg-cover h-32 flex justify-center items-center object-top rounded-3xl"
                style={{
                  backgroundImage: 'url("/fotos-cursos/portadas/4c.webp")',
                }}
              >
                <div className="text-white font-bold w-full h-full text-xs xl:text-md  hover:text-xl uppercase italic m-0 bg-azul bg-opacity-60 flex justify-center items-center object-top rounded-3xl">
                  Semblanzas 4ºC
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-4">
            <a
              href="/semblanzas/4d"
              className="no-underline"
            >
              <div
                className="bg-cover h-32 flex justify-center items-center object-top rounded-3xl"
                style={{
                  backgroundImage: 'url("/fotos-cursos/portadas/4d.webp")',
                }}
              >
                <div className="text-white font-bold w-full h-full text-xs xl:text-md  hover:text-xl uppercase italic m-0 bg-azul bg-opacity-60 flex justify-center items-center object-top rounded-3xl">
                  Semblanzas 4ºD
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-wrap justify-around items-center my-4 mx-10 bg-gray-3 shadow-md rounded-xl p-6">
          <div className="flex flex-col items-center">
            <img
              src="/imgs/administrativos/Jorgez.webp"
              alt="PresidenteCOEMTAL"
              className="rounded-full w-48 h-48 object-cover mb-4 object-top"
              style={{ borderRadius: "50%" }}
            />
            <h3 className="text-center text-xs mb-4">
              <span className="text-xl font-bold">Jorge Zúñiga Araneda</span>
              <br />
              Presidente Directorio COEMTAL
            </h3>
          </div>
          <div className="flex-1 xl:mx-10">
            <h1 className="font-bold mb-4 text-md">
              LOS ESTUDIANTES DEL SIGLO 21
            </h1>
            <p className="text-justify mb-4 ">
              Desde los orígenes de la creación del Colegio Etchegoyen hace ya
              112 años, con las modificaciones que han ocurrido a lo largo de
              estos años; la idea matriz ha permanecido incólume y no ha sido
              otra que la de ofrecer un servicio educativo a los habitantes de
              Talcahuano y de las comunas vecinas sustentado en los valores del
              laicismo que permitan a sus estudiantes formarse como personas
              integrales y que sean un aporte a la sociedad, indistintamente de
              los campos en los cuales se vayan a desenvolver en sus vidas
              adultas y/o profesionales.
            </p>
            <a href="/presidente-coemtal">
              <button className="bg-azul hover:bg-azul/80 text-white px-4 py-2 rounded-md">
                Leer más
              </button>
            </a>
          </div>
        </div>
        <img
          className="mx-auto py-12"
          src="/imgs/yellow.png"
          alt=""
        />
      </section>
    </>
  );
};

export default HomeIndex;
