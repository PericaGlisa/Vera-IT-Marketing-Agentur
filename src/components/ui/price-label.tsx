import React from 'react'

interface PriceLabelProps {
  price: string;
  className?: string;
}

export function PriceLabel({ price, className = '' }: PriceLabelProps) {
  if (price !== "Preis auf Anfrage") {
    return <span className={`text-[11px] sm:text-xs md:text-sm ${className}`}>{price}</span>;
  }

  return (
    <span className={`font-medium ${className}`}>
      {price}
    </span>
  );
}