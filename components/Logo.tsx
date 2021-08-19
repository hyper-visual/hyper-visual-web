import Image from 'next/image';
import logo from '../public/logo.png';

interface Props {
  size: string;
}

export default function Logo({ size }: Props) {
  return (
    <Image src={logo} alt="Hypvervisaul logo" width={size} height={size} />
  );
}
