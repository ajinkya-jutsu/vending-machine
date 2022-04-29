import Head from 'next/head'
import 'bulma/css/bulma.css'
import styles from '../styles/Vend.module.css'
import Web3 from 'web3'

export default function VendingMachine() {
    
    //window.ethereum
    const connectWalletHandeler = () => {
        
    }
    return (
        <div className={styles.main}>
            <Head>
                <title>Vending Machine App</title>
                <meta name="description" content="A blockchain vending machine app" />
            </Head>

            <nav className="navbar mt-4 mb-4">
                <div className="container">
                    <div className="navbar-brand">
                        <h1>Vending Machine</h1>
                    </div>
                    <div className="navbar-end">
                        <button className="button is-primary">Connect Wallet</button>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <p>Placeholder Text</p>
                </div>
            </section>
        </div>
    )
}