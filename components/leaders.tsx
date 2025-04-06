import React from 'react';
import '.styles/leader.css'; // We'll create this CSS file next

interface TeamMember {
  name: string;
  position: string;
}

const LeadershipTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Mike Comon-Brookes', position: 'Computer Science' },
    { name: 'Scott Fangulner', position: 'Computer Science' },
    { name: 'Sri Viswanath', position: 'Computer Science' },
    { name: 'Anu Bhandwoj', position: 'Editor of Experience & Cooper Strategy' },
    { name: 'Erika Fisher', position: 'Compliant-Venture Director & Service Center' },
    { name: 'James Beer', position: 'Center Management' }
  ];

  return (
    <div className="leadership-container">
      <h1>Our Leadership Team</h1>
      <p className="team-intro">
        With over 100 years of combined experience, we've got a well-seasoned team at the helm.
      </p>

      <div className="cards-grid">
        {/* First row - 2 cards */}
        <div className="card-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="member-card">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards */}
        <div className="card-row">
          {teamMembers.slice(2, 4).map((member, index) => (
            <div key={index + 2} className="member-card">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>

        {/* Third row - 1 card */}
        <div className="card-row">
          {teamMembers.slice(4, 5).map((member, index) => (
            <div key={index + 4} className="member-card">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>

        {/* Fourth row - 1 card */}
        <div className="card-row">
          {teamMembers.slice(5).map((member, index) => (
            <div key={index + 5} className="member-card">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;