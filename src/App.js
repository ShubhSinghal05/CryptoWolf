import Navigation from './Components/Routing/NavigationRoute'
import MyState from './Components/Context/myState';

function App() {
  return (
    <>
      {/* using mystate, it is using context api as a global store for passing the data */}
      <MyState>
        <div className="App">
          {/* Navigation is the main routing page */}
          <Navigation />

          {/* below button components is for i18n for changing the language */}
          {/* <Button /> */}


        </div>
      </MyState>
      {/* my state wraps ends */}
    </>
  );
}

// exporting the app to index.js
export default App;


// code ends