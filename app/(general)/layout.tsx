import '../globals.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Añadimos los iconos de LinkedIn y GitHub

export const metadata = {
  title: 'Portafolio de Nath',
  description: 'Portafolio personal con Next.js y TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-primary flex flex-col md:flex-row">
        {/* Navbar superior (visible solo en móviles) */}
        <header className="w-full bg-gris p-4 flex justify-between items-center md:hidden">
          <Link href="/" className="text-lg font-bold text-primary hover:text-secondary">
            <h2 className="text-xl font-bold text-destacado">Nath</h2>
          </Link>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-lg font-bold text-primary hover:text-destacado">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-lg font-semibold text-primary hover:text-destacado">
              Sobre mí
            </Link>
            <Link href="/proyectos" className="text-lg font-semibold text-primary hover:text-destacado">
              Proyectos
            </Link>
            <Link href="/desarrollo" className="text-lg font-semibold text-primary hover:text-destacado">
              Desarrollo
            </Link>
          </nav>

          {/* Iconos de LinkedIn y GitHub en la barra superior (solo en móvil) */}
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/nathalie-carrascocampos/" className="text-primary hover:text-secondary">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" className="text-primary hover:text-secondary">
              <FaGithub size={24} />
            </a>
          </div>
        </header>

        {/* Banner lateral (fijo para pantallas grandes) */}
        <aside className="hidden md:flex md:w-1/4 h-screen p-4 flex-col items-center justify-center bg-gris fixed top-0 left-0">
          <div className="text-center mb-8">
            <img
              src="/img/perfil-2.jpeg"
              alt="Nathalie Carrasco"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <Link href="/" className="text-lg font-bold text-primary hover:text-secondary">
              <h2 className="text-xl font-bold text-destacado">Nath</h2>
            </Link>
          </div>

          {/* Enlaces de Navegación */}
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="text-lg font-bold text-primary hover:text-destacado">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-lg font-semibold text-primary hover:text-destacado">
              Sobre mí
            </Link>
            <Link href="/proyectos" className="text-lg font-semibold text-primary hover:text-destacado">
              Proyectos
            </Link>
            <Link href="/desarrollo" className="text-lg font-semibold text-primary hover:text-destacado">
              Desarrollo
            </Link>
          </nav>

          {/* Iconos de Contacto (LinkedIn, GitHub) en pantallas grandes */}
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/nathalie-carrascocampos/" className="mr-4 text-primary hover:text-secondary">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" className="text-primary hover:text-secondary">
              <FaGithub size={24} />
            </a>
          </div>
        </aside>

        {/* Contenido Dinámico */}
        <main className="w-full md:w-3/4 md:ml-auto p-8 text-primary bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
