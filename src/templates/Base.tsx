import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-80">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />

    <div className="flex fixed bottom-0 right-0">
      <a class="right-0 animate-pulse" href="https://bit.ly/Site-wpp" target="_blank">
        <img src="/wpp.png" width="80" />
      </a>
    </div>
  </div>
);

export { Base };
