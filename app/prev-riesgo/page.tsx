/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          PREVENCIÓN DE RIESGOS COEMTAL
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Katherine Figueroa</h1>
            <h3 className="font-bold pb-4">Prevencionista de riesgo COEMTAL</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/depa/prevr.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              Para nuestra Corporación la Prevención de Riesgos es muy
              importante y es aplicada en los 4 establecimientos con programas
              anuales de trabajo. Es fundamental el trabajo preventivo de toda
              la comunidad, es por esto que a través de los Comités Paritarios
              de Higiene y Seguridad, quienes tienen como principal función
              Prevenir Accidentes y Enfermedades profesionales de funcionarios
              también se generan actividades para prevenir accidentes de
              estudiantes. Se suma a trabajo preventivo los Comités de
              Emergencias de cada establecimiento, siendo su principal
              función proteger la vida e integridad física de la comunidad
              escolar etchegoyana y las instalaciones, coordinando las acciones
              necesarias ante una emergencia.
            </p>
            <p className="p-2 font-bold mb-6">
              Ambos Comités son guiados por nuestra Asesor en Prevención de
              Riesgos Sra. Katherine Figueroa Briones.
            </p>
            <h3 className="font-bold text-xl">
              Actividades Comités Paritarios de Higiene y Seguridad:
            </h3>
            <ul className="p-2 list-disc">
              <li>
                Campañas Preventivas como prevención de caídas, uso y cuidado de
                la voz, exposición a radiación ultravioleta, accidentes en el
                trayecto.
              </li>
              <li>
                Participación en la aplicación del protocolo de vigilancia de
                riesgos psicosociales
              </li>
              <li>
                Gestionar e invitar a curso de capacitación a los funcionarios
                según calendario acordado con Mutual de Seguridad C.Ch.C.
              </li>
              <li>
                Implementación de señalética de información y advertencia en
                todas las dependencias.
              </li>
              <li>Chequeo documentación de Vehículos Transporte Escolar.</li>
              <li>
                Inspecciones y Observaciones de seguridad permanentes a las
                distintas áreas de los establecimientos.
              </li>
              <li>
                Evaluación Ergonómica a los puestos de trabajo administrativos.
              </li>
              <li>
                Cumplir requisitos de certificación Comitès Paritarios Mutual de
                Seguridad C.Ch.C.
              </li>
            </ul>
            <h3 className="font-bold text-xl">
              {" "}
              Actividades Comitès de Seguridad Escolar:
            </h3>
            <ul className="p-2 list-disc ">
              <li>
                Actualización anual Plan Integral de Seguridad Escolar en cada
                Establecimiento.
              </li>
              <li>
                Implementación de materiales para emergencias y señaléticas de
                información y advertencia en todas las dependencias.
              </li>
              <li>
                Realización de simulacros en base a desastres naturales y
                provocados por el hombre.
              </li>
              <li>
                Entrega de información de procedimientos de emergencias por
                cursos y en reunión de apoderados.
              </li>
              <li>
                Gestiona e invitar a curso de Primeros Auxilios, uso de
                desfibrilador, reanimación cardiopulmonar, maniobra de Heimlich,
                uso y manejo de extintor.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
