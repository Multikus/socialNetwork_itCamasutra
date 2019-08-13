import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './render';
import state from './components/redux/state'; 


rerenderEntireTree (state);
