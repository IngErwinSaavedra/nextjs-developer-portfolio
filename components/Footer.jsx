import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className='footer'>
      <span>
        <a
          href='https://github.com/IngErwinSaavedra/nextjs-developer-portfolio'
          target='_blank'
          rel='noreferrer'
        >
            Desarrollo por
          <span className='icon'>
            <i className='fas fa-heart'></i>
          </span>
          Erwin Saavedra
        </a>
      </span>
    </footer>
  );
}