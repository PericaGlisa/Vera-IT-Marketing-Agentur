import React from 'react'

interface PriceLabelProps {
  price: string;
  className?: string;
}

export function PriceLabel({ price, className = '' }: PriceLabelProps) {
  if (price !== "Preis auf Anfrage") {
    return <span className={`text-xs xs:text-sm sm:text-base md:text-lg ${className}`}>{price}</span>;
  }

  return (
    <span className={`
      inline-flex items-center px-2 py-1 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-medium
      bg-orange-500/10 text-orange-400 border border-orange-500/20
      hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200
      ${className}
    `}>
      {price}
    </span>
  )
}