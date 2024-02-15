import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, welcome to our <GradientText>Blog</GradientText> 👋
        </>
      }
      description={
        <>
          Bienvenidos a nuestro blog de telecomunicaciones, un espacio dedicado
          a explorar las últimas tendencias, noticias y avances en el mundo de
          las comunicaciones. Somos{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Eliezer Barrios y Andrea Montero
          </a>{' '}
          , apasionados por la tecnología y la innovación, y hemos creado este
          blog con el objetivo de compartir nuestro conocimiento y experiencia
          en el campo de las telecomunicaciones.
        </>
      }
      /*   avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      } */
    />
  </Section>
);

export { Hero };
