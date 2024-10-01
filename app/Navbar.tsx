import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-col space-y-4">
      <Link href="/sobre-mi" className="text-lg font-semibold text-primary hover:text-secondary">
        Sobre mí
      </Link>
      <Link href="/proyectos" className="text-lg font-semibold text-primary hover:text-secondary">
        Proyectos
      </Link>
      <Link href="/desarrollo" className="text-lg font-semibold text-primary hover:text-secondary">
        Desarrollo
      </Link>
    </nav>
  );
}

