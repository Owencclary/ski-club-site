import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    discord: '',
    age: '',
    skillLevel: '',
    aboutYou: '',
    whyJoin: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mwpgrlnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          discord: formData.discord,
          age: formData.age,
          skillLevel: formData.skillLevel,
          aboutYou: formData.aboutYou,
          whyJoin: formData.whyJoin
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      alert('Something went wrong. Please try again!');
    }
    
    setSubmitting(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(165deg, #0a1628 0%, #1a3a5c 40%, #2d5a7b 70%, #4a7c94 100%)',
      fontFamily: "'Outfit', sans-serif",
      color: '#f0f4f8',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { background: #0a1628; }
        
        .snow-particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.6;
          animation: fall linear infinite;
        }
        
        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 183, 77, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(255, 183, 77, 0); }
        }
        
        .hero-title {
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          animation: slideUp 0.8s ease-out;
        }
        
        .hero-accent {
          color: #ffb74d;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }
        
        .tagline {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7eb8d8;
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }
        
        .section-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          animation: slideUp 0.8s ease-out 0.4s backwards;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(10, 22, 40, 0.6);
          border: 2px solid rgba(126, 184, 216, 0.3);
          border-radius: 12px;
          color: #f0f4f8;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .form-input:focus {
          border-color: #ffb74d;
          background: rgba(10, 22, 40, 0.8);
          box-shadow: 0 0 20px rgba(255, 183, 77, 0.15);
        }
        
        .form-input::placeholder {
          color: rgba(240, 244, 248, 0.4);
        }
        
        .form-label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #b8d4e8;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
        }
        
        .submit-btn {
          width: 100%;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
          border: none;
          border-radius: 12px;
          color: #0a1628;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 183, 77, 0.3);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          animation: none;
          transform: none;
        }
        
        .feature-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 183, 77, 0.15);
          border: 1px solid rgba(255, 183, 77, 0.3);
          border-radius: 100px;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: #ffb74d;
          margin: 0.25rem;
        }
        
        .mountain-silhouette {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to top, rgba(10, 22, 40, 0.8), transparent);
          pointer-events: none;
        }
        
        .select-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%237eb8d8' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2rem;
          padding-right: 3rem;
        }
      `}</style>

      {/* Snow particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="snow-particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDuration: `${Math.random() * 8 + 6}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '4rem' }}>
          <p className="tagline">Evergreen Freeride Collective</p>
          <h1 className="hero-title">
            Find Your<br />
            <span className="hero-accent">Ski Crew</span>
          </h1>
          <p style={{
            maxWidth: '600px',
            margin: '2rem auto 0',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'rgba(240, 244, 248, 0.8)',
            animation: 'slideUp 0.8s ease-out 0.3s backwards'
          }}>
            A community of 17-30 year olds who hit the slopes together every week. 
            Carpools, good vibes, and powder days—no experience required.
          </p>
          
          <div style={{ marginTop: '2rem', animation: 'slideUp 0.8s ease-out 0.4s backwards' }}>
            <span className="feature-tag">🚗 Free Carpools</span>
            <span className="feature-tag">⛷️ All Skill Levels</span>
            <span className="feature-tag">🎿 Weekly Trips</span>
            <span className="feature-tag">👥 Ages 17-30</span>
          </div>
        </header>

        {/* Main content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* About Section */}
          <div className="section-card">
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#ffb74d'
            }}>
              What We're About
            </h2>
            
            <div style={{ lineHeight: 1.8, color: 'rgba(240, 244, 248, 0.85)' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong style={{ color: '#f0f4f8' }}>No car? No problem.</strong> We organize carpools for every trip so everyone gets to the mountain—gas money split, good music guaranteed.
              </p>
              
              <p style={{ marginBottom: '1.25rem' }}>
                <strong style={{ color: '#f0f4f8' }}>Never skied before?</strong> Neither had half of us. We pair beginners with patient riders and celebrate every first run, first blue, first yard sale.
              </p>
              
              <p style={{ marginBottom: '1.25rem' }}>
                <strong style={{ color: '#f0f4f8' }}>Looking for shred partners?</strong> Our experienced riders link up for steeps, trees, and park laps while keeping the crew spirit alive.
              </p>
              
              <p>
                <strong style={{ color: '#f0f4f8' }}>We run trips 1-2x weekly</strong> throughout the season—mostly weekends, sometimes powder day calls. All PNW resorts are fair game.
              </p>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 183, 77, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 183, 77, 0.2)'
            }}>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.95rem',
                color: '#ffb74d',
                textAlign: 'center',
                margin: 0
              }}>
                "You don't need to be good.<br/>You just need to show up."
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="section-card" style={{ animationDelay: '0.5s' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#ffb74d'
            }}>
              {submitted ? 'Welcome to the Crew! 🎉' : 'Join the Crew'}
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ffb74d, #ff9800)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem'
                }}>
                  ⛷️
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(240, 244, 248, 0.85)' }}>
                  We'll send you a Discord invite soon.<br />
                  Get ready for powder days!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="What should we call you?"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Discord Username</label>
                  <input
                    type="text"
                    name="discord"
                    className="form-input"
                    placeholder="username"
                    value={formData.discord}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="form-input"
                      placeholder="18-30"
                      min="18"
                      max="30"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Skill Level</label>
                    <select
                      name="skillLevel"
                      className="form-input select-input"
                      value={formData.skillLevel}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="never">Never Been</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">About You</label>
                  <textarea
                    name="aboutYou"
                    className="form-input"
                    placeholder="Where are you based? Ski or snowboard? Favorite resort?"
                    rows="3"
                    value={formData.aboutYou}
                    onChange={handleChange}
                    style={{ resize: 'vertical', minHeight: '80px' }}
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label">Why do you want to join?</label>
                  <textarea
                    name="whyJoin"
                    className="form-input"
                    placeholder="Looking for ski buddies? Need a carpool? Just want to send it?"
                    rows="3"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    style={{ resize: 'vertical', minHeight: '80px' }}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? 'Sending...' : "Let's Ride 🏔️"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '4rem 0 2rem',
          color: 'rgba(240, 244, 248, 0.5)',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.85rem'
        }}>
          <p>See you on the mountain ❄️</p>
        </footer>
      </div>

      <div className="mountain-silhouette" />
    </div>
  );
}
