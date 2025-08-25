export default function Skills({SKILLS}) {
    return (
       <section id="skills">
        <div className="container">
          <h2 className="section-title">Kỹ năng</h2>
          <div className="skills-grid">
            {SKILLS.map((skill, index) => (
              <div key={index} className="skill-card">
                <p className="skill-name">{skill}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    )}