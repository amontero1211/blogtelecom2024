import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a
        href="/"
        className=" rounded-lg border border-solid border-blue-500 px-4 py-2 text-2xl font-bold text-blue-500 hover:border-blue-700 hover:text-blue-700"
      >
        TELECOM-2023-II
      </a>

      <NavMenu>
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
