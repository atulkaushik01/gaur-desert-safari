import Particles from "../components/particles";

const About = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "black",
          padding: "2rem 0",
          overflow: "hidden",
        }}
      >
        {/* Particles Background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}>
          <Particles
            particleColors={["#ffffff", "#FFD700", "#C19A6B"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Main Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            color: "white",
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 0",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                marginBottom: "1.5rem",
                fontWeight: "700",
                lineHeight: "1.2",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                paddingTop: "4rem",
              }}
            >
              Gaur Desert Safari – Your Trusted Guide for 25 Years in the Heart of the Thar
            </h1>
            <div
              style={{
                height: "3px",
                width: "100px",
                background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
                margin: "2rem auto",
              }}
            ></div>
            <p
              style={{
                fontSize: "clamp(1rem, 3vw, 1.3rem)",
                lineHeight: "1.7",
                opacity: "0.9",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Welcome to Gaur Desert Safari, where the golden sands of Jaisalmer
              whisper tales of royalty, valor, and timeless beauty. For over a
              quarter of a century, we have been the cornerstone of authentic
              desert experiences, crafting unforgettable journeys for travelers
              from across the globe.
            </p>
          </div>

          {/* Content Sections */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              padding: "0 1rem",
            }}
          >
            {/* Heritage Section */}
            <section
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2.5rem",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontWeight: "600",
                }}
              >
                Our Heritage: A Legacy of 25 Years in Jaisalmer Tourism
              </h2>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  lineHeight: "1.7",
                  opacity: "0.9",
                }}
              >
                Since 1999, Gaur Desert Safari has been synonymous with trust,
                expertise, and an unwavering commitment to showcasing the true
                essence of the Thar Desert. Our journey began with a simple passion:
                to share the magic of our homeland with the world. What started as a
                humble endeavor has blossomed into one of Jaisalmer's most respected
                and experienced tour operators. For 25 years, we haven't just been
                organizing trips; we have been creating memories, building
                relationships, and guiding explorers through the soul-stirring
                landscape of Rajasthan.
              </p>
            </section>

            {/* Promise Section */}
            <section
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2.5rem",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontWeight: "600",
                }}
              >
                Why Choose Gaur Desert Safari? The Gaur Promise
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <li
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.15)",
                    borderRadius: "10px",
                    borderLeft: "4px solid #FFD700",
                  }}
                >
                  <strong style={{ color: "#FFD700" }}>Unmatched Expertise:</strong>{" "}
                  <span style={{ opacity: "0.9" }}>
                    With 25 years of intimate knowledge, we know Jaisalmer and its hidden gems like the back of our hand. Our
                    deep-rooted local connections ensure you get an experience that is both authentic and exclusive.
                  </span>
                </li>
                <li
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.15)",
                    borderRadius: "10px",
                    borderLeft: "4px solid #FFD700",
                  }}
                >
                  <strong style={{ color: "#FFD700" }}>Safety and Reliability:</strong>{" "}
                  <span style={{ opacity: "0.9" }}>
                    Your safety is our paramount concern. Our fleet of well-maintained vehicles and trained, professional
                    drivers ensure a secure and comfortable journey through the desert terrain.
                  </span>
                </li>
                <li
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.15)",
                    borderRadius: "10px",
                    borderLeft: "4px solid #FFD700",
                  }}
                >
                  <strong style={{ color: "#FFD700" }}>Customized Experiences:</strong>{" "}
                  <span style={{ opacity: "0.9" }}>
                    We understand that every traveler is unique. Whether you are a history buff, a photography enthusiast,
                    or a family on vacation, we tailor our tours to match your interests and pace.
                  </span>
                </li>
              </ul>
            </section>

            {/* Commitment Section */}
            <section
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2.5rem",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontWeight: "600",
                }}
              >
                Our Commitment: Sustainable and Authentic Tourism
              </h2>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  lineHeight: "1.7",
                  opacity: "0.9",
                }}
              >
                We believe in responsible tourism that benefits the local community
                and preserves the fragile ecosystem of the Thar Desert. Our tours
                are designed to support local artisans, promote homestays, and leave
                a minimal environmental footprint. When you travel with us, you
                contribute directly to the livelihood of the local people.
              </p>
            </section>

            {/* New Section: Our Journey Timeline */}
            <section
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2.5rem",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "2rem",
                  color: "#FFD700",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Our Journey Through The Years
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    🏜️
                  </div>
                  <h3 style={{ color: "#FFD700", marginBottom: "0.5rem" }}>
                    1999
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                    Started with a single camel and a dream to share Jaisalmer's beauty
                  </p>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    🌟
                  </div>
                  <h3 style={{ color: "#FFD700", marginBottom: "0.5rem" }}>
                    5000+ Tours
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                    Successfully conducted desert safaris for travelers worldwide
                  </p>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    ⭐
                  </div>
                  <h3 style={{ color: "#FFD700", marginBottom: "0.5rem" }}>
                    4.8/5 Rating
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                    Consistently rated excellent by our valued customers
                  </p>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    background: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    🤝
                  </div>
                  <h3 style={{ color: "#FFD700", marginBottom: "0.5rem" }}>
                    12 Locations
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                    Covering all major attractions across Jaisalmer region
                  </p>
                </div>
              </div>
            </section>

            {/* New Section: What Makes Us Different */}
            <section
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2.5rem",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "2rem",
                  color: "#FFD700",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                What Sets Us Apart
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    borderLeft: "3px solid #FFD700",
                  }}
                >
                  <h3 style={{ color: "#FFD700", marginBottom: "1rem" }}>
                    Local Knowledge
                  </h3>
                  <p style={{ fontSize: "0.95rem", opacity: "0.9", lineHeight: "1.6" }}>
                    Born and raised in Jaisalmer, our team possesses deep local knowledge 
                    that goes beyond tourist guides. We know the hidden oases, the best 
                    sunset spots, and the authentic cultural experiences.
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    borderLeft: "3px solid #FFD700",
                  }}
                >
                  <h3 style={{ color: "#FFD700", marginBottom: "1rem" }}>
                    Family Legacy
                  </h3>
                  <p style={{ fontSize: "0.95rem", opacity: "0.9", lineHeight: "1.6" }}>
                    This isn't just a business for us - it's our family legacy. 
                    We've been welcoming travelers into our desert home for generations, 
                    treating every guest like family.
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    borderLeft: "3px solid #FFD700",
                  }}
                >
                  <h3 style={{ color: "#FFD700", marginBottom: "1rem" }}>
                    Cultural Preservation
                  </h3>
                  <p style={{ fontSize: "0.95rem", opacity: "0.9", lineHeight: "1.6" }}>
                    We're committed to preserving Rajasthan's rich cultural heritage. 
                    Our tours support local artisans, folk artists, and traditional 
                    craftsmen, ensuring these traditions continue for future generations.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA Section - Without Button */}
            <section
              style={{
                textAlign: "center",
                padding: "3rem 2rem",
                background: "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(193,154,107,0.1) 100%)",
                borderRadius: "15px",
                border: "1px solid rgba(255, 215, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontWeight: "600",
                }}
              >
                Your Jaisalmer Adventure Awaits
              </h2>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  lineHeight: "1.7",
                  opacity: "0.9",
                  marginBottom: "1rem",
                  maxWidth: "600px",
                  margin: "0 auto 1rem",
                }}
              >
                At Gaur Desert Safari, we don't just sell packages; we invite you to
                become a part of our story—a story woven over 25 years of golden
                sunsets, desert melodies, and the warm smiles of Rajasthan.
              </p>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                  opacity: "0.8",
                  fontStyle: "italic",
                  color: "#FFD700",
                }}
              >
                Let us be your guide to the soul of Jaisalmer.
              </p>
              
              {/* Contact Information */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem", opacity: "0.8" }}>
                  Ready to begin your desert journey?
                </p>
                <p style={{ fontSize: "0.95rem", color: "#FFD700" }}>
                  📞 Call us: +91 97728 00077 • 📧 Email: atulkaushik2311@gmail.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;