import Navigation from "./component/Navigation";
import Hero from "./component/hero";

const App=()=>{
  const theme={
    media:{mobile:"786px",tab:"998px"},
  };
  return(
    <div>
      <Navigation/>
      <Hero/>
    </div>
  );
};
export default App;