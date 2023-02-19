import React, { useState } from "react";
import "../featureBay/serviceCard.css";
interface Tier {
    id: number;
    name: string;
    price: number;
}

interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    rating: number;
    tiers: Tier[];
}

interface Props {
    title: string;
    service: Service;
}

const ServiceCard = (props: Props) => {
    const { service, title } = props;
    const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
    const handleTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const tierId = parseInt(event.target.value);
        const tier = service.tiers.find((t) => t.id === tierId);
        setSelectedTier(tier || null);
    };
    return (
        <div className='service-card'>
            <div className='service-card-image'>
                <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className='service-card-content'>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className='service-card-rating'>
                    <div className='rating-stars'>
                        {Array.from(
                            { length: Math.floor(service.rating) },
                            (_, i) => (
                                <span key={i} className='star'>
                                    ★
                                </span>
                            )
                        )}
                    </div>
                    <div className='rating-number'>
                        {service.rating.toFixed(1)}
                    </div>
                </div>
                <div className='service-card-tiers'>
                    <label htmlFor='tier-select'>Select a tier:</label>
                    <select
                        id='tier-select'
                        value={selectedTier?.id || ""}
                        onChange={handleTierChange}
                    >
                        <option value=''>-- Choose a tier --</option>
                        {service.tiers.map((tier) => (
                            <option key={tier.id} value={tier.id}>
                                {tier.name} (${tier.price.toFixed(2)})
                            </option>
                        ))}
                    </select>
                    {selectedTier && (
                        <div className='service-card-tier-details'>
                            <h4>{selectedTier.name}</h4>
                            <p>${selectedTier.price.toFixed(2)} per month</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
