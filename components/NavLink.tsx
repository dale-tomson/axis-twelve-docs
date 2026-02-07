'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  direction: 'previous' | 'next';
  title: string;
  hoverColor?: string;
  hoverBgColor?: string;
}

export default function NavLink({ href, direction, title, hoverColor = '#60a5fa', hoverBgColor = '#eff6ff' }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isPrevious = direction === 'previous';
  
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
        borderColor: isHovered ? hoverColor : '#e5e7eb',
        backgroundColor: isHovered ? hoverBgColor : 'transparent',
        textDecoration: 'none',
        textAlign: isPrevious ? 'left' : 'right',
        transition: 'border-color 0.2s, background-color 0.2s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>
        {isPrevious ? '← Previous' : 'Next →'}
      </div>
      <div style={{ fontWeight: '600', color: '#111827' }}>
        {title}
      </div>
    </Link>
  );
}
