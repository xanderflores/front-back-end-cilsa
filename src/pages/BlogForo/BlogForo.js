import "./BlogForo.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/Principal/logo.jpg";

function BlogForo() {
  return (
    <div className="contenedor" style={{ width: "100%", overflow: "none" }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="titulo">Blog</h1>
      <img src={logo} alt="Logo" />
      <h3>Ingeniero en sistemas</h3>
      <h3>Profesor de Full stack developer</h3>
      <nav>
        <a href="#">www.Maxflores.com</a>
      </nav>
      <br></br>

      <h2 >Atención Principiantes</h2>

      <div class="accordion accordion-flush" id="accordionFlushExample">

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              JavaScript
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> JavaScript es un lenguaje de programación interpretado que se utiliza principalmente para dar interactividad a las páginas web.

              Consejos generales

              1. Aprende las bases: Entiende los conceptos básicos de JavaScript, como variables, tipos de datos, funciones, condicionales, bucles, etc.
              2. Practica constantemente: La práctica es la mejor manera de mejorar tus habilidades en JavaScript.
              3. Utiliza recursos en línea: Hay muchos recursos en línea gratuitos, como tutoriales, cursos y documentación oficial.
              4. Aprende a depurar: Aprende a utilizar herramientas de depuración como Chrome DevTools o Firefox Developer Edition.

              Consejos de código

              1. Utiliza semántica: Utiliza nombres de variables y funciones descriptivos y significativos.
              2. Mantén el código organizado: Utiliza espacios en blanco, sangrías y comentarios para mantener el código legible.
              3. Utiliza funciones: Divide el código en funciones para reutilizar y simplificar.
              4. Evita el código duplicado: No repitas código, utiliza funciones o variables para reutilizar.
              <code> Conceptos básicos

                1. Variables: Almacenar valores en variables (let, const, var)
                2. Tipos de datos: Números, cadenas, booleanos, arrays, objetos
                3. Operadores: Aritméticos (+, -, *, /), comparativos (==, !=, ...)
                4. Condicionales: If/else, switch
                5. Bucles: For, while, do/while
                6. Funciones: Declaración, llamada, parámetros, retorno

              </code>  Consejos para aprender

              1. Practica constantemente
              2. Aprende los conceptos básicos antes de avanzar
              3. Utiliza recursos en línea
              4. Crea proyectos personales para aplicar conocimientos
              5. No tengas miedo de hacer errores</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              React
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> React es una biblioteca de JavaScript para crear interfaces de usuario web y móviles.

              Beneficios de utilizar React

              - Fácil de aprender: React tiene una curva de aprendizaje suave, especialmente para desarrolladores web y móviles con experiencia en JavaScript.
              - Comunidad activa: React tiene una gran comunidad de desarrolladores y una gran cantidad de recursos disponibles en línea.
              - Escalabilidad: React es diseñado para ser escalable y puede manejar aplicaciones grandes y complejas.

              Conceptos básicos

              1. Componentes: Piezas reutilizables de código que representan una parte de la interfaz de usuario.
              2. JSX: Sintaxis que combina JavaScript y HTML para crear componentes.
              3. Estado (State): Datos que cambian en la aplicación y afectan la interfaz de usuario.
              4. Propiedades (Props): Datos que se pasan de un componente a otro.
              5. Eventos: Acciones que ocurren en la aplicación y disparan cambios.
              <code> Sintaxis básica

                1. Crear un componente: function MiComponente...
                2. Renderizar un componente: MiComponente...
                3. Utilizar JSX
                4. Definir estado: const [contador, setContador] = useState(0);
                5. Manejar eventos: onClick ... setContador ...
              </code>Ejemplos básicos

              1. Contador: Un componente que muestra un contador y permite incrementarlo.
              2. Lista de tareas: Un componente que muestra una lista de tareas y permite agregar nuevas.
              3. Formulario de contacto: Un componente que muestra un formulario de contacto y envía datos.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Bootstrap
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> Características clave de Bootstrap

              - Diseño responsivo: Se adapta a diferentes tamaños de pantalla y dispositivos.
              - Componentes preconstruidos: Ofrece una variedad de componentes listos para usar, como botones, formularios, menús y más.
              - Personalización: Permite personalizar los estilos y comportamientos de los componentes.
              - Compatibilidad con navegadores: Es compatible con la mayoría de los navegadores modernos.

              Cómo empezar a usar Bootstrap

              1. Descarga el framework desde el sitio oficial de Bootstrap.
              2. Incorpora el CSS y JavaScript de Bootstrap en tu proyecto.
              3. Utiliza los componentes y clases de Bootstrap para diseñar tu sitio web. <code> Consejos para trabajar con la grilla

                1. Entiende el sistema de columnas: La grilla se divide en 12 columnas.
                2. Utiliza las clases de grilla: row, col-md-4, col-lg-6, etc.
                3. Aprende a utilizar los offsets: offset-md-4, offset-lg-2, etc.
                4. Utiliza las clases de tamaño: xs, sm, md, lg, xl.</code> Consejos para personalizar estilos

              1. Utiliza variables Sass: Puedes personalizar los estilos utilizando variables Sass.
              2. Crea un archivo de estilos personalizado: Puedes agregar tus propios estilos en un archivo separado.
              3. Utiliza la clase custom-: Puedes agregar prefijos personalizados a las clases de Bootstrap.

              Consejos para trabajar con componentes

              1. Utiliza los componentes preconstruidos: Bootstrap proporciona componentes como botones, formularios, menús, etc.
              2. Aprende a personalizar los componentes: Puedes personalizar los componentes utilizando clases y estilos.
              3. Utiliza los plugins de JavaScript: Bootstrap proporciona plugins de JavaScript para componentes como modales, acordeones, etc.</div>
          </div>
        </div>

      </div>

      <br></br>

      <div class="row me-4" >
        <div class="col-4">
          <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-1 rounded" href="#simple-list-item-1"> Consejos </a>
            <a class="p-1 rounded" href="#simple-list-item-2"> Trucos </a>
            <a class="p-1 rounded" href="#simple-list-item-3"> NodeJS </a>
            <a class="p-1 rounded" href="#simple-list-item-4"> ExpressJS </a>
            <a class="p-1 rounded" href="#simple-list-item-5"> EJS (Embedded JavaScript) </a>
          </div>
        </div>
        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <h4 id="simple-list-item-1">Consejos</h4>
            <p> 1. Practica constantemente: La práctica es la mejor manera de mejorar tus habilidades de programación.
              2. Aprende de tus errores: Analiza tus errores y utiliza esa información para mejorar.
              3. Aprende de otros: Lee código de otros programadores y aprende de sus técnicas.
              4. Mantente actualizado: La programación es un campo en constante evolución, así que mantente al día con las últimas tendencias y tecnologías.
              5. Trabaja en proyectos personales: Trabajar en proyectos personales te permite aplicar lo que has aprendido y desarrollar tus habilidades de manera práctica.</p>

            <h4 id="simple-list-item-2">Trucos</h4>
            <p> 1. Utiliza herramientas de desarrollo integradas (IDEs) para escribir y depurar código más eficientemente.
              2. Aprende atajos de teclado para mejorar tu productividad.
              3. Utiliza librerías y frameworks para ahorrar tiempo y esfuerzo.
              4. Escribe código limpio y organizado para facilitar la lectura y el mantenimiento.
              5. Utiliza la depuración y el testing para asegurarte de que tu código funcione correctamente. <strong>Recuerda que la mejora de habilidades de programación es un proceso continuo que requiere práctica, dedicación y paciencia. ¡Buena suerte!</strong></p>

            <h4 id="simple-list-item-3">NodeJS</h4>
            <p>Node.js

              - Es un entorno de ejecución para JavaScript del lado del servidor.
              - Permite ejecutar JavaScript fuera del navegador.
              - Es ideal para aplicaciones web en tiempo real, como chats, juegos y aplicaciones de colaboración.
              - Utiliza un modelo de I/O no bloqueante, lo que lo hace muy eficiente.
              - Incluye un sistema de módulos y paquetes para facilitar la reutilización de código.

              Instalación

              1. Descarga e instala Node.js desde el sitio web oficial.
              2. Verifica la instalación ejecutando node -v en la terminal.

              Conceptos básicos

              1. Módulos: Piezas de código reutilizable que se pueden importar en tu aplicación.
              2. Paquetes: Colecciones de módulos que se pueden instalar fácilmente.
              3. Eventos: Ocurrencias que pueden ser escuchadas y manejadas por tu aplicación.

              Estructura básica de un proyecto

              1. package.json: Archivo que describe tu proyecto y sus dependencias.
              2. index.js: Archivo principal de tu aplicación.

              Creación de un servidor básico

              1. Importa el módulo http.
              2. Crea un servidor con http.createServer().
              3. Define una función de manejo de solicitudes.
              4. Inicia el servidor con server.listen().</p>

            <h4 id="simple-list-item-4">ExpressJS</h4>
            <p>Express.js

              - Es un framework para Node.js que facilita la creación de aplicaciones web.
              - Permite definir rutas y controladores para manejar solicitudes HTTP.
              - Incluye middlewares para parsear solicitudes, manejar errores y más.
              - Es muy flexible y permite personalizar la aplicación según sea necesario.
              - Es ampliamente utilizado en la industria y tiene una gran comunidad de desarrolladores.

              Instalación

              1. Instala Express.js con npm: npm install express
              2. Crea un nuevo archivo, por ejemplo, app.js

              Conceptos básicos

              1. Rutas: Definen la URL y el método HTTP para una solicitud.
              2. Controladores: Funciones que manejan las solicitudes y envían respuestas.
              3. Middlewares: Funciones que se ejecutan antes de las rutas.

              Estructura básica de una aplicación

              1. Importar Express.js
              2. Crear una instancia de Express.js
              3. Definir rutas y controladores
              4. Iniciar el servidor

              Rutas y controladores

              1. GET: Obtener datos.
              2. POST: Crear datos.
              3. PUT: Actualizar datos.
              4. DELETE: Eliminar datos.

              Middlewares

              1. Express.json(): Parsear solicitudes JSON.
              2. Express.urlencoded(): Parsear solicitudes URL-encoded.

              Consejos adicionales

              1. Utiliza el método app.use() para agregar middlewares.
              2. Aprende sobre las rutas parametrizadas y las rutas de expresiones regulares.
              3. Practica con proyectos pequeños para mejorar tus habilidades.</p>

            <h4 id="simple-list-item-5">EJS (Embedded JavaScript)</h4>
            <p>¿Qué es EJS?

              EJS

              - Es un motor de plantillas para JavaScript que permite incrustar código JavaScript en archivos HTML.
              - Permite crear plantillas dinámicas y reutilizar código.
              - Es muy fácil de usar y tiene una sintaxis simple.
              - Permite pasar datos a la plantilla y utilizar funciones de ayuda para crear plantillas más complejas.
              - Es ampliamente utilizado en combinación con Express.js para crear aplicaciones web.

              Instalación

              1. Instala EJS con npm: npm install ejs
              2. Crea un nuevo archivo, por ejemplo, index.ejs

              Sintaxis básica

              1. Variables
              2. Condicionales
              3. Bucles

              Pasar datos a la plantilla

              1. Usa el método render

              Consejos adicionales

              1. Aprende sobre las funciones de ayuda: include, extends, block.
              2. Utiliza la sintaxis de EJS para crear plantillas dinámicas.
              3. Practica con proyectos pequeños para mejorar tus habilidades.</p>

          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="card" style={{ bottom: "70px" }}>
        <h5 class="card-header"> GitHub </h5>
        <div class="card-body">
          <h5 class="card-title">GitHub es una plataforma de desarrollo colaborativo que permite a los desarrolladores crear, compartir y trabajar en proyectos de software juntos. Es básicamente un sitio web donde puedes alojar tus proyectos de código abierto y colaborar con otros desarrolladores de todo el mundo. </h5>
          <p class="card-text">Conceptos básicos

            1. Repositorio (Repo): Un proyecto de código en GitHub.
            2. Commit: Un cambio realizado en el código.
            3. Ramas (Branches): Versiones paralelas del código.
            4. Fusionar (Merge): Unir cambios de una rama en otra.
            5. Pull Request: Solicitar revisión de cambios.

            Pasos para empezar

            1. Crea una cuenta en GitHub.
            2. Crea un nuevo repositorio.
            3. Configura Git en tu computadora.
            4. Clona el repositorio en tu computadora.
            5. Realiza cambios y commitéalos.

            Comandos básicos de Git

            1. git init: Inicializa un repositorio.
            2. git clone: Clona un repositorio.
            3. git add: Agrega cambios.
            4. git commit: Committea cambios.
            5. git push: Envía cambios a GitHub.
            6. git pull: Obtiene cambios de GitHub.

            Interfaz de GitHub

            1. Dashboard: Vista general de tus repositorios.
            2. Repositorio: Vista detallada de un repositorio.
            3. Commits: Historial de cambios.
            4. Branches: Lista de ramas.
            5. Pull Requests: Lista de solicitudes de revisión.
          </p>
          <a href="https://github.com/login" class="btn btn-primary">Ir a GitHub</a>
        </div>
      </div>

      <br></br>

    </div>
  );
}
export default BlogForo;
