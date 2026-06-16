"use client";

import { useState } from "react";
import "./card.css";

export default function CardPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    mobile: "",
    email: "",
    zipCode: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbwPKfXxU4NgzSyCbWEVpSJnovzYDDkHyVugKpVeoRQO5e_v3Hftf4TCzvXUAoUCpOwc/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      }
    );

    setSubmitted(true);

    setFormData({
      firstName: "",
      mobile: "",
      email: "",
      zipCode: "",
      interest: "",
    });

  } catch (error) {

    console.error("FETCH ERROR:", error);

    alert("Unable to submit form.");

  } finally {

    setLoading(false);

  }
};
  return (
    <main className="card-page">

      {/* HERO */}

      <section className="hero">
        <div className="hero-inner">

          <img
            src="/legacy-logo.png"
            alt="Legacy Water USA"
            className="logo"
          />

          <div className="hero-label">
            LEGACY WATER USA
          </div>

          <h1 className="hero-title">
            Thanks For
            <br />
            Connecting
            <br />
            With Us
          </h1>

          <p className="hero-badge">
            Helping Florida Homeowners Better Understand Their Water
          </p>

          <p className="hero-description">
            Professional Florida Water Analysis For Homeowners.
            Learn more about common water conditions,
            treatment options, and how Legacy Water USA
            helps families make informed decisions.
          </p>

          <div className="hero-buttons">

            <a href="#trust" className="primary-btn">
              Learn About My Water
            </a>

            <a href="#form" className="secondary-btn">
              Request Information
            </a>

          </div>
        </div>
      </section>

      {/* TRUST */}

      <section id="trust" className="trust-section">

        <div className="section-label">
          WHY HOMEOWNERS CONTACT US
        </div>

        <h2 className="section-title">
          Understanding Your Water Starts Here
        </h2>

        <div className="trust-grid">

          <div className="trust-card">
            <h3>Water Quality Questions</h3>
            <p>
              Understand common conditions that may affect water throughout your home.
            </p>
          </div>

          <div className="trust-card">
            <h3>Hard Water Concerns</h3>
            <p>
              Learn how mineral buildup may impact plumbing, fixtures, and appliances.
            </p>
          </div>

          <div className="trust-card">
            <h3>Appliance Protection</h3>
            <p>
              Discover how water quality can affect water heaters, dishwashers, and laundry equipment.
            </p>
          </div>

          <div className="trust-card">
            <h3>Drinking Water Improvement</h3>
            <p>
              Explore options for cleaner tasting water throughout the home.
            </p>
          </div>

          <div className="trust-card">
            <h3>Family Water Confidence</h3>
            <p>
              Get information that helps homeowners make informed decisions.
            </p>
          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="education-section">

        <div className="section-label">
          COMMON FLORIDA WATER CONCERNS
        </div>

        <h2 className="section-title">
          What Many Florida Homeowners Notice
        </h2>

        <div className="trust-grid">

          <div className="trust-card">
            <h3>Hard Water</h3>
            <p>
              Minerals may leave spots on dishes, fixtures, and shower doors.
            </p>
          </div>

          <div className="trust-card">
            <h3>Chlorine</h3>
            <p>
              Municipal water often contains chlorine for disinfection purposes.
            </p>
          </div>

          <div className="trust-card">
            <h3>Scale Build-Up</h3>
            <p>
              Mineral deposits can accumulate inside plumbing and appliances.
            </p>
          </div>

          <div className="trust-card">
            <h3>Water Heater Sediment</h3>
            <p>
              Sediment accumulation may reduce efficiency over time.
            </p>
          </div>

        </div>

      </section>

      {/* FORM */}

      <section id="form" className="form-section">

        <div className="section-label">
          REQUEST INFORMATION
        </div>

        <h2 className="section-title">
          Request Complimentary Water Information
        </h2>

        <form
          className="lead-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />

          <select
            className="form-select"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="">
              What would you like to learn more about?
            </option>

            <option value="Better Drinking Water">
              Better Drinking Water
            </option>

            <option value="Hard Water Problems">
              Hard Water Problems
            </option>

            <option value="Protecting Appliances">
              Protecting Appliances
            </option>

            <option value="Whole Home Water Filtration">
              Whole Home Water Filtration
            </option>

            <option value="General Water Information">
              General Water Information
            </option>
          </select>

<button
  type="submit"
  disabled={loading}
  style={{
    opacity: loading ? 0.7 : 1,
    cursor: loading ? "not-allowed" : "pointer",
  }}
>
  {loading
    ? "Submitting..."
    : "Get Personalized Water Information"}
</button>
          <p className="form-note">
            Educational Information • No Obligation • Florida Homeowners
          </p>

          {submitted && (
            <p className="success-message">
              Thank you. Your information has been received.
            </p>
          )}

        </form>

      </section>

      {/* NEXT STEPS */}

      <section className="next-steps-section">

        <div className="section-label">
          WHAT HAPPENS NEXT
        </div>

        <h2 className="section-title">
          Get Personalized Water Information
        </h2>

        <div className="trust-grid">

          <div className="trust-card">
            <h3>1. Submit Information</h3>
            <p>
              Tell us what you would like to learn more about.
            </p>
          </div>

          <div className="trust-card">
            <h3>2. Receive Information</h3>
            <p>
              Get educational resources related to Florida water quality.
            </p>
          </div>

          <div className="trust-card">
            <h3>3. Ask Questions</h3>
            <p>
              Learn about available options and common homeowner concerns.
            </p>
          </div>

          <div className="trust-card">
            <h3>4. Optional Water Analysis</h3>
            <p>
              If appropriate, request a complimentary home water analysis.
            </p>
          </div>

        </div>

      </section>

      {/* CREDIBILITY */}

      <section className="credibility-section">

        <div className="section-label">
          WHY FLORIDA HOMEOWNERS REQUEST INFORMATION
        </div>

        <h2 className="section-title">
          Education Before Decisions
        </h2>

        <div className="trust-grid">

          <div className="trust-card">
            <h3>Education First</h3>
            <p>
              Learn about common water conditions, treatment options, and ways to improve water quality.
            </p>
          </div>

          <div className="trust-card">
            <h3>No Obligation</h3>
            <p>
              Request information and decide if a complimentary home water analysis is right for your family.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h3>Legacy Water USA</h3>

        <p>
          Helping Florida Homeowners Better Understand Their Water
        </p>

      </footer>

    </main>
  );
}