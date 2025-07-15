import React from 'react'
import "./Team.css"
import TeamCard from '../TeamCard/TeamCard';

const TeamData = [

    {
        image: "/images/isva2.jpg",
        title: "Isva Shahzad",
        description: "Founder"
    },
    {
        image: "/images/AA1.jpg",
        title: "Adeen Mumtaz",
        description: "CEO"
    },
    {
        image: "/images/MM1.jpg",
        title: "Mariam Mumtaz",
        description: "Creative Head"
    },

    {
        image: "/images/FF1.jpg",
        title: "Farzeen Mumtaz",
        description: "Graphic Designer"
    },
];

function Team() {
    return (
        <section>
            <div className="team-wrapper" >
                <div className='blur'></div>
                <p className="team-subtitle">The Team</p>
                <h2 className="teams-title">MEET OUR PROFESSIONAL TEAM</h2>
            </div>
            <div className="team-grid">
                {TeamData.map((service, index) => (
                    <TeamCard
                        key={index}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                        link="#"
                    />
                ))}
            </div>
        </section>
    )
}

export default Team;
