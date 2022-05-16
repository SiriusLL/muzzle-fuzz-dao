import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {
  // thirdweb Hooks
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Address", address);

  // wallet connect
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to Herkimer DAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // already connected
  return (
    <div className="landing">
      <h1>** wallet connected, now what!</h1>
    </div>
  );
};

export default App;
