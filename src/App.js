import './App.css';
import { useState } from 'react';

function App() {

  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  // Helper Function

  // Requests access to the user's METAMASK Wallet
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...')

    // Check if MetaMask Extension exists
    if(window.ethereum) {
      console.log('detected')

      try {
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts",
        });
        // console.log(accounts);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      console.log('MetaMask not detected');
    }
  }

  // async function connectWallet() {
  //   if(typeof window.ethereum !== 'undefined') {
  //     await requestAccount();

  //     const provider = new ethers.providers.Web3Provider(window.ethereum);

  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <button
        
        onClick={requestAccount}
        
        >Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
