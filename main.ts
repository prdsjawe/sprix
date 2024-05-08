import './app.css';
import App from './App.svelte';
import 'tippy.js/animations/shift-away.css';
const app = new App({
  target: document.getElementById('app')!,
});

export default app;
