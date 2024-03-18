/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          DEPARTAMENTO DE INFORMÁTICA
        </h1>
      </div>
      <section className="mb-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">
              Francisco Larréa Sanhueza
            </h1>
            <h3 className="font-bold pb-4">Casa Central</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/depa/fcoinfo.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              La Programación Orientada a Objetos
            </h1>

            <p className="p-2">
              Uno de los paradigmas más utilizados hoy en día en el desarrollo
              de software es la programación orientada a objetos (POO), algunos
              lenguajes asociados a este paradigma son Java, CSharp, PHP, entre
              otros. Para efectos de este artículo utilizaremos Java.
            </p>
            <p className="p-2">
              Previamente debemos aclarar que un objeto es una abstracción de
              algún hecho o elemento del mundo real, que se refleja en un
              software que contiene toda la información, y puede ser definido e
              identificado a través de objetos y clases. Por ejemplo, durante un
              paseo por la calle, podemos observar: automóviles, personas,
              edificios, negocios, etc. Todos estos son entidades, y
              entenderemos que toda entidad es un objeto. Y este, posee estados,
              características, por ejemplo, una persona tiene un nombre,
              apellido, edad, profesión, etc. Y, por otro lado, a los
              comportamientos los llamaremos métodos del objeto, los cuales
              emulan el comportamiento o actividad de la entidad. Lo que el
              objeto puede hacer, por ejemplo, una persona puede comer, caminar,
              etc. Y a estos comportamientos, los llamaremos métodos del objeto.
            </p>

            <p className="p-2">
              La POO está compuesta por clases y objetos, una clase es una
              plantilla, un molde, para crear objetos, donde tanto los estados
              como los métodos sólo están declarados. En cambio, los objetos
              tienen sus estados definidos y comportamientos asociados. En
              resumen, a partir de una clase se construye un objeto. Y cada
              objeto es una instancia de una clase, luego podremos crear una
              infinidad de objetos
            </p>

            <p className="p-2">
              Los pilares de la POO, los cuales potencian los conceptos de
              modularidad y reutilización de código, son cuatro. En primer
              lugar, la abstracción, es un acto mental en el que se aísla
              conceptualmente una propiedad o función concreta de un objeto,
              básicamente es aislar los elementos de su entorno. Luego de
              realizar un previo estudio a la entidad, tenemos que aislar los
              elementos. Luego de aislar los elementos, debemos de seleccionar
              todas las características importantes de cada elemento (Entidad),
              en términos técnicos: Identificar los atributos y comportamientos
              del objeto.
            </p>

            <p className="p-2">
              Luego está el encapsulamiento, que se refiere al ocultamiento de
              los datos miembros de un objeto, es decir, encapsular los
              atributos y métodos del objeto, de manera que sólo se pueda
              cambiar mediante las operaciones definidas para ese objeto. Dicho
              de otra forma, es la capacidad de visibilidad de atributos y
              métodos de un objeto, esta visibilidad va de acuerdo al nivel de
              encapsulamiento, tenemos tres niveles principales: cerrado,
              protegido y abierto. Estos niveles se manejan mediante los
              modificadores de acceso: privado (privated), protegido (protected)
              y público (public). En POO, generalmente es recomendable que los
              atributos tengan un nivel encapsulación cerrado, es decir, los
              atributos deben de ser privados y manipularlos mediante sus
              métodos Get y Set. Para mayor seguridad, podemos agregar
              validaciones en los métodos Get y Set.
            </p>
            <p className="p-2">
              A continuación, la herencia que consiste en pasar atributos y
              métodos desde una clase padre (Súper Clase) hacia las clases hija
              (Clases Derivadas), por medio del cual la clase se deriva de otra
              clase. De manera que extiende su funcionalidad. Esto permitirá
              alcanzar los objetivos fundamentales del desarrollo de software,
              la reutilización y la extensibilidad. La herencia facilita la
              creación de objetos a partir de otros objetos o clases ya
              existentes, de esta manera permite que una subclase obtenga todos
              los comportamientos y atributos de la superclase o clase padre.
            </p>

            <p className="p-2">
              Finalmente, el polimorfismo, consiste en que un único objeto puede
              tener múltiples estados y comportamientos, básicamente es la
              capacidad de los objetos de una clase, en responder de diferentes
              maneras a un solo mensaje, está estrechamente relacionada a la
              herencia, ya que mayormente sucede gracias a este.
            </p>
            <p className="p-2">
              Cabe tener presente que la POO se aplica junto a patrones de
              arquitectura y patrones de diseño se software que escapan al
              alcance de este artículo.
            </p>
            <p className="p-2">
              Para concluir, podemos decir que un problema en términos
              informáticos puede ser resuelto desde varios paradigmas de
              programación, unos más eficientes y eficaces que otros, el
              paradigma de la programación orientada a objetos nos ofrece una
              metodología moderna con la que podemos abordar cualquier problema
              informático y realizar un desarrollo de software trazable, seguro
              y escalable.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-center   uppercase text-2xl xl:text-4xl  ">
          Sede Brisa del Sol
        </h1>
      </section>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Marcelo Reyes Galindo</h1>
            <h3 className="font-bold pb-4">Sede Brisa del Sol</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/depa/marceinfo.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              El encargado de informática del Colegio Etchegoyen Brisa del Sol,
              desempeña un papel no menos importante para garantizar que la
              tecnología se utilice de manera efectiva para apoyar los objetivos
              educativos, proporcionando un entorno informático seguro y
              funcional para los estudiantes de nuestro establecimiento. Es el
              garante de la seguridad de la información tomando medidas de
              seguridad para proteger la red, los sistemas y la información
              confidencial. Cumple con apoyar la labor de nuestros docentes en
              el uso de las TICs en el aula, asi también la del personal del
              establecimiento, coordinando, supervisando, asesorando y
              capacitando cuando sea necesario.
            </p>
            <p className="p-2">
              En primer lugar, quiero destacar la importancia de la educación
              tecnológica en el desarrollo de habilidades clave para el siglo
              XXI. La informática no solo es sobre computadoras y software, sino
              sobre la capacidad de pensar críticamente, resolver problemas y
              colaborar de manera efectiva. Estamos comprometidos a proporcionar
              a nuestros estudiantes las habilidades necesarias para tener éxito
              en un entorno cada vez más digital.
            </p>

            <p className="p-2">
              Además, quiero animarlos a aprovechar los recursos tecnológicos
              disponibles. Nuestra institución cuenta con laboratorios de
              informática, acceso a plataformas educativas en línea y recursos
              digitales que complementan y enriquecen la experiencia de
              aprendizaje. Estamos aquí para brindar apoyo y orientación en el
              uso efectivo de estas herramientas.
            </p>

            <p className="p-2">
              Finalmente, los invito a mantener un diálogo abierto con nosotros.
              Sus comentarios, sugerencias y preocupaciones son fundamentales
              para mejorar continuamente nuestros servicios y adaptarnos a las
              cambiantes necesidades tecnológicas de nuestra comunidad
              educativa.
            </p>

            <p className="p-2">
              Juntos, podemos crear un entorno de aprendizaje innovador y
              preparar a nuestros estudiantes para enfrentar los desafíos del
              futuro.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
