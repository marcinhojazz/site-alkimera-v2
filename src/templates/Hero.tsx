import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-black">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>Facebook</a>
          </Link> */}
        </li>
        <li>
          {/* <Link href="/">
            <a>Sign in</a>
          </Link> */}
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      {/* <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      /> */}

      <div className="text-center text-white">
        <p className="text-white text-center text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Alkimera Soluções Digitais</p>
        <span >Soluções sob demanda para a sua idéia de projeto ou negócio.</span>
      </div>
    </Section>
  </Background>
);

export { Hero };
