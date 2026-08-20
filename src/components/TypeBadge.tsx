import React from 'react';
import { POKEMON_TYPES } from '../data/pokemonTypes';
import { PokemonType } from '../types/pokemon';

interface TypeBadgeProps {
  type: PokemonType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  language?: 'de' | 'en';
  onClick?: () => void;
  isSelected?: boolean;
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({
  type,
  size = 'md',
  showIcon = true,
  language = 'de',
  onClick,
  isSelected,
}) => {
  const typeInfo = POKEMON_TYPES[type] || POKEMON_TYPES.normal;
  const label = language === 'de' ? typeInfo.germanName : type.charAt(0).toUpperCase() + type.slice(1);

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs font-semibold px-2.5 py-1 gap-1.5',
    lg: 'text-sm font-bold px-3.5 py-1.5 gap-2',
  }[size];

  return (
    <span
      id={`type-badge-${type}`}
      onClick={onClick}
      style={{
        backgroundColor: typeInfo.color,
        color: typeInfo.textColor,
        boxShadow: isSelected ? `0 0 0 2px #FFFFFF, 0 0 12px ${typeInfo.color}` : undefined,
      }}
      className={`inline-flex items-center justify-center rounded-full font-medium shadow-sm transition-all whitespace-nowrap select-none ${sizeClasses} ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      }`}
    >
      {showIcon && <span className="text-xs">{typeInfo.iconSymbol}</span>}
      <span>{label}</span>
    </span>
  );
};
