import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';



const WalletConnection = () => {

    // const [, setConnectRequestParameters] = useTonConnectUI();
    const [, setConnectRequestParameters] = useTonConnectUI();

    const customizeReturnStrategy = () => {
        setConnectRequestParameters({
            actionsConfiguration: {
                twaReturnUrl: 'https://t.me/wallet_connection' // Customize the return URL
            }
        });
    };


    return (
        <div>
            <TonConnectButton className="my-button-class" onClick={customizeReturnStrategy}/>
        </div>
    );
};

export default WalletConnection;