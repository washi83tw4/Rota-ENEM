import React from 'react';

interface RotaLogoProps {
  className?: string;
  size?: number;
  alt?: string;
}

export const RotaLogo: React.FC<RotaLogoProps> = ({
  className = 'w-10 h-10',
  alt = 'Rota ENEM Logo',
}) => {
  return (
    <img
      src="/logo.svg"
      alt={alt}
      className={`object-contain select-none shrink-0 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
