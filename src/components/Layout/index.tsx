import { ReactNode } from 'react';
import SC from './style';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SC.Container>
      <SC.Background />
      <SC.Content>{children}</SC.Content>
    </SC.Container>
  );
};

export default Layout;
