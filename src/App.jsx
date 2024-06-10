
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

 
function App() {
  

  return (
    <> 
    {/* <fragment></fragment>  or <div></div> can be used. But using div will return an extra element so its not preferred and instead of fragment in modern js <></> can be used (and if fragment is using remember to import fragment with usestate in the beginning) */}
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;