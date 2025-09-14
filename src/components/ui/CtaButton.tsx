import Link from 'next/link';

interface CtaButtonProps {
  href: string;
  text: string;
  className?: string;
}

const CtaButton = ({ href, text, className = '' }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className={`
          inline-block px-8 py-4 text-lg font-bold text-white 
          bg-gradient-to-r from-blue-500 to-purple-600 
          rounded-lg shadow-lg transform transition-transform duration-300 
          hover:scale-105 hover:shadow-2xl focus:outline-none 
          focus:ring-4 focus:ring-blue-300
          ${className}
        `}
    >
      {text}
    </Link>
  );
};

export default CtaButton;
