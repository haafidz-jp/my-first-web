// file _app.js merupakan file wajib yang harus dibuat ketika ingin menginclude css external di nextjs
 
import '../styles.css';
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default App;