import { useOutlet } from 'react-router-dom';
import  Navbar  from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


export const RootLayout = () => {
  const children = useOutlet();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};