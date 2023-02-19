import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { AppCard } from "./featureBay/AppCard";
import { AppCardContainer } from "./featureBay/AppContainer";
import ServiceCard from "./featureBay/ServiceCard";

function App() {
    const tiers = [
        { id: 1, name: "Basic", price: 10 },
        { id: 2, name: "Standard", price: 20 },
        { id: 3, name: "Premium", price: 30 },
    ];

    const service = {
        id: 1,
        title: "Sample Service",
        description: "This is a sample service.",
        imageUrl: logo,
        rating: 4.5,
        tiers: tiers,
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <AppCardContainer title='For you' key={1}>
                    <AppCard
                        description='Test'
                        imageUrl={logo}
                        rating={3}
                        title='list view'
                        key={1}
                        downloads={10221}
                    />
                    <AppCard
                        description='Test'
                        imageUrl={logo}
                        rating={5}
                        title='card view'
                        key={1}
                        downloads={53}
                    />
                    <ServiceCard title='Sample Service' service={service} />
                </AppCardContainer>
            </header>
        </div>
    );
}

export default App;
