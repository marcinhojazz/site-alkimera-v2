import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-500 inline-flex items-center ${fontStyle}`}>
      <img src="/logoalk.png"/>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
