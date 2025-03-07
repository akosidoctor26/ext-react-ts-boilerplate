import { createRoot } from 'react-dom/client';
import SidePanel from './SidePanel';

const root = createRoot(
  document.getElementById('sidePanelRoot') as HTMLElement
);
root.render(<SidePanel />);
