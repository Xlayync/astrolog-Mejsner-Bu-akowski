import Header from "./Components/Header";
import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";

function App() {
  return (
      <>
        <Header />

        <CatalogList objects={[]} />

        <ObjectDetails />

        <DiscoveryForm />
      </>
  );
}

export default App;