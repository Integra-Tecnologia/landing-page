import { Link } from 'react-router-dom';

interface BotonProps {
  readonly texto: string;
  readonly to?: string;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly type?: 'button' | 'submit' | 'reset';
}

export default function Boton({ texto, to, onClick, className = '', type = 'button' }: Readonly<BotonProps>) {
  const estilosBase = "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:bg-primary-hover cursor-pointer sm:px-6 sm:py-4 sm:text-base";

  if (to) {
    return (
      <Link to={to} className={`${estilosBase} ${className}`}>
        {texto}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${estilosBase} ${className}`}>
      {texto}
    </button>
  );
}