import Header from '../common/Header';
import FooterEnhanced from '../common/FooterEnhanced';

const Layout = ({ children, headerTransparent = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={headerTransparent} />
      <main className={`flex-1 ${headerTransparent ? '' : 'pt-16'}`}>
        {children}
      </main>
      <FooterEnhanced />
    </div>
  );
};

export default Layout;