import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <footer className=" [1px] border-t border-solid border-white pt-2">
      {' '}
      &copy; Copyright 2024 by{' '}
      <a href="/" className=" text-blue-500">
        TELECOM-2023-II
      </a>
    </footer>{' '}
  </Section>
);

export { Footer };
