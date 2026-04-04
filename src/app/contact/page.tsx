"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const services = [
  { value: "environmental-monitoring", label: "Environmental Monitoring" },
  { value: "waste-water-management", label: "Water/Waste Water Management" },
  { value: "general", label: "General Inquiry" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "", service: "general"
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      /* 
       * Serverless Email Routing via Web3Forms! 
       * Replace 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' with a free access key from https://web3forms.com
       */
      const submissionData = {
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
        ...form
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "", service: "general" });
      } else {
        setStatus("error");
        // Web3Forms will usually return success: false if key is invalid
        setErrorMsg(data.message || "Failed to submit. Did you insert your Web3Forms access key in the code?");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="badge badge-green" style={{ marginBottom: "1rem" }}>Contact Us</div>
          <h1 className={styles.heroTitle}>Get in Touch with Our Experts</h1>
          <p className={styles.heroSubtitle}>
            Ready to discuss your environmental monitoring needs? Our team of experts is here to
            help you find the right solution for your industry.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Let's Start a Conversation</h2>
              <p className={styles.infoDesc}>
                Whether you need environmental monitoring instrumentation, compliance support,
                or a custom engineering solution, we're ready to help. Reach out using any
                of the methods below.
              </p>

              <div className={styles.infoCards}>
                {[
                  { icon: "📍", title: "Corporate Office", lines: ["D-8, Mansarover Park", "New Delhi – 110032"] },
                  { icon: "📞", title: "Phone Numbers", lines: ["9882810053", "9358536247"] },
                  { icon: "✉️", title: "Email Address", lines: ["marketing@eieindia.in"] },
                  { icon: "🕐", title: "Business Hours", lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"] },
                ].map((item) => (
                  <div key={item.title} className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{item.icon}</div>
                    <div>
                      <h4 className={styles.infoCardTitle}>{item.title}</h4>
                      {item.lines.map((line) => (
                        <p key={line} className={styles.infoCardLine}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <p className={styles.socialTitle}>Follow Us</p>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/eiecompletesolutions/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
                  <a href="https://www.facebook.com/eiecompletesolutions" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
                  <a href="https://x.com/eiecs2025" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter/X</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrapper}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send us an Inquiry</h3>
                <p className={styles.formSubtitle}>We'll get back to you within 24 hours.</p>

                {status === "success" ? (
                  <div className={styles.successMsg}>
                    <div className={styles.successIcon}>✅</div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="btn btn-outline-green" style={{ marginTop: "1rem" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name <span className={styles.required}>*</span></label>
                        <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address <span className={styles.required}>*</span></label>
                        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-service">Service Interest</label>
                        <select id="contact-service" name="service" value={form.service} onChange={handleChange} className="form-input">
                          {services.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-subject">Subject <span className={styles.required}>*</span></label>
                      <input id="contact-subject" name="subject" type="text" value={form.subject} onChange={handleChange} className="form-input" placeholder="How can we help you?" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message <span className={styles.required}>*</span></label>
                      <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} className="form-input form-textarea" placeholder="Tell us more about your requirements..." required />
                    </div>

                    {status === "error" && (
                      <div className={styles.errorMsg}>⚠️ {errorMsg}</div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      id="contact-submit"
                      disabled={status === "loading"}
                      style={{ marginTop: "0.5rem", padding: "1rem" }}
                    >
                      {status === "loading" ? "Sending..." : "Send Inquiry"}
                      {status !== "loading" && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M2 9h14M9.5 2.5L16 9l-6.5 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
