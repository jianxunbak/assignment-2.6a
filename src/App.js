import Product from "./components/Product";
import "./App.css";
import { ProductProvider } from "./components/context/ProductContext";
import UserBar from "./components/UserBar";
import { UserContext, UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <div className="App">
      {/* Step 3: Add Context Provider to Top Level component */}
      <UserProvider>
        <UserBar />
        <ProductProvider>
          <Product />
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
