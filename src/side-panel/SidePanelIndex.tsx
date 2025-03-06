import { createRoot } from 'react-dom/client';
import SidePanel from './components/SidePanel';

const root = createRoot(
  document.getElementById('sidePanelRoot') as HTMLElement
);
root.render(<SidePanel />);
