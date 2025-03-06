import { createRoot } from 'react-dom/client';
import Popup from './components/Popup';

const root = createRoot(document.getElementById('popupRoot') as HTMLElement);
root.render(<Popup />);
