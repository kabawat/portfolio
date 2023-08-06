import React, { useEffect, useState } from 'react';
import './HexGrid.css'; // Create HexGrid.css file for styling

const HexGrid = () => {
    const [hoverNotifyVisible, setHoverNotifyVisible] = useState(true);
    const [hexData, setHexData] = useState([]);

    useEffect(() => {
        // Simulating data fetching or API call to populate hexData
        // Replace this with your actual data fetching logic
        const fetchData = () => {
            // Sample hexData with placeholders
            const sampleHexData = [
                {
                    title: 'BACKEND',
                    content: 'backend-desc',
                    color: '#333333',
                    image: 'https://i.imgur.com/3XjDZGJ.png',
                },
                {
                    title: 'FRONTEND',
                    content: 'frontend-desc',
                    color: '#16A085',
                    image: 'https://i.imgur.com/f8WewU1.png',
                },
                // Add more hexData objects for other hexagons
            ];

            setHexData(sampleHexData);
        };

        fetchData();
    }, []);

    const hexDescription = (titleColor, titleName, descName) => {
        // Add animation logic for displaying hex descriptions
        // You can use state to control visibility and CSS transitions for animations
    };

    const handleHexMouseEnter = (titleColor, titleName, descName) => {
        // Add logic for handling hex mouse enter here
        // You can use state to control hover notifications and CSS transitions for animations
    };

    const handleHexMouseLeave = () => {
        // Add logic for handling hex mouse leave here
        // You can use state to control hover notifications and CSS transitions for animations
    };

    return (
        <section className="intro">
            <div className="intro-block">
                <div className="centerfold-wrap">
                    <div className="hex-master-wrap">
                        {hexData.map((hex, index) => (
                            <div
                                key={index}
                                className={`hex-wrap ${hex.title.toLowerCase()}`}
                                data-title={hex.title}
                                data-content={hex.content}
                                data-color={hex.color}
                                onMouseEnter={() => handleHexMouseEnter(hex.color, hex.title, hex.content)}
                                onMouseLeave={handleHexMouseLeave}
                            >
                                <div className="hex-init"></div>
                                <div className="hex-borders">
                                    <div className="border-1"></div>
                                    <div className="border-2"></div>
                                    <div className="border-3"></div>
                                </div>
                                <div className="label">
                                    <img src={hex.image} alt={hex.title} />
                                </div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rest of the HTML code */}
                    {/* ... */}
                </div>
            </div>
        </section>
    );
};

export default HexGrid;
