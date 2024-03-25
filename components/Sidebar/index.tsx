import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-99 flex h-screen w-[330px] flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <h1 className="text-3xl font-semibold text-white text-center">
            Anuario 2023
          </h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item directivos --> */}
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("/")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          id="Layer_1"
                          version="1.1"
                          viewBox="0 0 128 128"
                          fill="white"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16   s16,7.2,16,16S72.8,82,64,82z" />
                            <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9   l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z" />
                            <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z" />
                            <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20   c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z" />
                            <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z" />
                            <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1   c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z" />
                          </g>
                        </svg>
                        Administrativos
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                          <li>
                            <Link
                              href="/presidente-coemtal"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/presidente-coemtal" &&
                                "text-white"
                              } `}
                            >
                              Presidente Coemtal
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/directorio-coemtal"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/directorio-coemtal" &&
                                "text-white"
                              } `}
                            >
                              Directorio Coemtal
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/gerente-academico"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/gerente-academico" &&
                                "text-white"
                              } `}
                            >
                              Gerente Académico
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rector"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/rector" && "text-white"
                              } `}
                            >
                              Rector
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/director-sede-brisa-del-sol"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/director-sede-brisa-del-sol" &&
                                "text-white"
                              } `}
                            >
                              Director Sede Brisa del Sol
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/jefe-utp"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/jefe-utp" && "text-white"
                              } `}
                            >
                              Jefe UTP
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/inspector-general"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/inspector-general" &&
                                "text-white"
                              } `}
                            >
                              Inspector General
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/inspector-general-brisa-del-sol"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname ===
                                  "/inspector-general-brisa-del-sol" &&
                                "text-white"
                              } `}
                            >
                              Inspector General Brisa del Sol
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item directivos --> */}
              <li>
                <Link
                  href="/directivos"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Directivos
                </Link>
              </li>
              {/* <!-- Menu Item directivos --> */}
              {/* <!-- Menu Item Gestión --> */}
              <li>
                <Link
                  href="/equipo-gestion"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Equipo Gestión
                </Link>
              </li>
              {/* <!-- Menu Item Equipo Gestión --> */}
              {/* <!-- Menu Item COEMTAL --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          id="Layer_1"
                          version="1.1"
                          viewBox="0 0 128 128"
                          fill="white"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16   s16,7.2,16,16S72.8,82,64,82z" />
                            <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9   l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z" />
                            <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z" />
                            <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20   c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z" />
                            <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z" />
                            <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1   c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z" />
                          </g>
                        </svg>
                        COEMTAL
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                          <li>
                            <Link
                              href="/administracion-y-finanzas"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "administracion-y-finanzas" &&
                                "text-white"
                              } `}
                            >
                              Administración y Finanzas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/comunicacion-difusion"
                              className={`group relative flex items-center gap-1.5  leading-4 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/comunicacion-difusion" &&
                                "text-white"
                              } `}
                            >
                              Departamento de Comunicación y Difusión
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/prev-riesgo"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/prev-riesgo" && "text-white"
                              } `}
                            >
                              Prevención de Riesgo
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/informatica"
                              className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                                pathname === "/informatica" && "text-white"
                              } `}
                            >
                              Departamento de Informatica
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item COEMTAL --> */}
              {/* <!-- Menu Item Colegio --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/" || pathname.includes("dashboard")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Colegio
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/convivencia-escolar"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Convivencia Escolar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/convivencia-escolar-sede-brisa-del-sol"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname ===
                                "/convivencia-escolar-sede-brisa-del-sol" &&
                              "text-white"
                            } `}
                          >
                            Convivencia Escolar Brisa
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/orientacion"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Orientación
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/orientacion-brisa-del-sol"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/orientacion-brisa-del-sol" &&
                              "text-white"
                            } `}
                          >
                            Orientación Brisa
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pie"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Programa Integración Escolar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pie-brisa-del-sol"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Programa Integración Escolar Brisa
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/dupla-psicosocial"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Dupla Psicosocial{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dupla-psicosocial/bs"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Dupla Psicosocial Sede Brisa{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/apoyo-labor-docente"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Apoyo labor docente
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Colegio --> */}

              {/* <!-- Menu Item coordinadores --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("coordinadores")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/" || pathname.includes("dashboard")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Coordinadores
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/coordinador-nivel-parvulario"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Nivel Parvulario Casa Central
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/coordinador-nivel-parvulario-brisa-del-sol"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Nivel Parvulario Sede Brisa
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/coordinador-basica-media"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Básica y Media
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item coordinadores --> */}

              {/* <!-- Menu Item Centro Padres / Estudiantes --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("coordinadores")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/" || pathname.includes("dashboard")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Centro Padres / Estudiantes
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/centro-padres"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Centro Padres
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/orientacion"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            CESS
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Centro Padres / Estudiantes --> */}
              {/* <!-- Menu Item Plantel --> */}
              <li>
                <Link
                  href="/plantel"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("plantel") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Plantel
                </Link>
              </li>
              {/* <!-- Menu Item Equipo Plantel --> */}

              {/* <!-- Menu Item Departamentos --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("departamentos")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/departamentos/[id]" ||
                          pathname.includes("departamentos")) &&
                        "bg-success dark:bg-success"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Departamentos
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/departamentos/2"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname == "/departamentos/2" && "text-danger"
                            } `}
                          >
                            Parvulario
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/3"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname == "/departamentos/3" && "text-danger"
                            } `}
                          >
                            Básico
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/4"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/departamentos/" && "text-white"
                            } `}
                          >
                            Lenguaje
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/5"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Matemática
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/6"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Historia y Filosofía
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/7"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Ciencias y Tecnología
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/8"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Ingles
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/9"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Educación Física
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/departamentos/10"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Artes
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Departamentos --> */}

              {/* <!-- Menu Item Actividades Descatadas --> */}
              <li>
                <Link
                  href="/extra-escolar"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Extra Escolar
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/actividades-destacadas"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Actividades Descatadas
                </Link>
              </li>
              {/* <!-- Menu Item Actividades Descatadas --> */}
              {/* <!-- Menu Item  Cursos --> */}
              <li>
                <Link
                  href="/cursos"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Cursos
                </Link>
              </li>
              {/* <!-- Menu Item  Cursos --> */}
              {/* <!-- Menu Item  juegos de Agua --> */}
              <li>
                <Link
                  href="/juegos-de-agua"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Juegos de Agua
                </Link>
              </li>
              {/* <!-- Menu Item  juegos de Agua --> */}
              {/* <!-- Menu Item  juegos inflables --> */}
              <li>
                <Link
                  href="/juegos-inflables"
                  className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                  Juegos Inflables
                </Link>
              </li>
              {/* <!-- Menu Item  juegos inflables --> */}
              {/* <!-- Menu Item Licenciatura--> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("coordinadores")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/" || pathname.includes("dashboard")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Licenciatura
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/licenciatura/cc"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Casa Central
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/licenciatura/bs"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            Sede Brisa del Sol
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Licenciatura --> */}

              {/* <!-- Menu Item Semblanzas --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("ExtraEscolar")
                }
              >
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-1.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/" ||
                          pathname.includes("ExtraEscolar")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      Semblanzas
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-1 mb-2 flex flex-col gap-1.5 pl-6">
                        <li>
                          <Link
                            href="/semblanzas/4a"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            4º A
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/semblanzas/4b"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            4º B
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/semblanzas/4c"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            4º C
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/semblanzas/4d"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            4º D
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/semblanzas/4e"
                            className={`group relative flex items-center gap-1.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-verde ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            4º E
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Semblanzas --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
