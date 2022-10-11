import { Navbar } from '../Navbar/Navbar';
import { LogoType } from '../Logotype/Logotype';

export default function Layout({ children }) {
  return (
    <>
      <Navbar logo={<LogoType />} />
      <main>{children}</main>
    </>
  )
}