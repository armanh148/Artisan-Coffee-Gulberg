import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Coffee,
  Sparkles
} from 'lucide-react';

export default function KopagContactSection({ selectedBranch }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Table Reservation & Lounge',
    outlet: 'Gulberg III Lahore',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Table Reservation & Lounge',
      outlet: 'Gulberg III Lahore',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact-section" className="kopag-contact-section">
      <div className="kopag-contact-inner">
        {/* Section Header */}
        <div className="kopag-contact-header">
          <div className="contact-tag-wrap">
            <span className="contact-tag">DIRECT INQUIRIES &amp; CONCIERGE</span>
            <span className="contact-sub-tag">WE ARE HERE FOR YOU 7 DAYS A WEEK</span>
          </div>

          <div className="contact-title-row">
            <h2 className="kopag-contact-title">
              Let&rsquo;s Connect <br />Over Coffee
            </h2>
            <p className="kopag-contact-lead">
              Whether you are looking to reserve an executive lounge for a meeting, inquire about fresh wholesale bean supply for your office or restaurant, or have feedback on your cup, we would love to hear from you.
            </p>
          </div>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="kopag-contact-grid">
          {/* Left Column: Direct Roastery Touchpoints */}
          <div className="contact-info-col">
            <div className="contact-touchpoint-card">
              <div className="touchpoint-header">
                <div className="touchpoint-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="touchpoint-title">Lahore Roastery &amp; Flagship</h3>
                  <span className="touchpoint-badge">Main Roastery Hub</span>
                </div>
              </div>
              <p className="touchpoint-text">
                16-L, Mini Market, Gulberg II &bull; M.M. Alam Road, Lahore, Pakistan
              </p>
              <div className="touchpoint-meta-row">
                <span className="touchpoint-meta">
                  <Clock size={14} /> Open Daily: 08:00 AM &ndash; 02:00 AM
                </span>
                <a href="tel:+923000777242" className="touchpoint-link">
                  <Phone size={14} /> +92 300 0777242
                </a>
              </div>
            </div>

            <div className="contact-touchpoint-card">
              <div className="touchpoint-header">
                <div className="touchpoint-icon-box">
                  <Coffee size={20} />
                </div>
                <div>
                  <h3 className="touchpoint-title">Karachi Specialty Outlets</h3>
                  <span className="touchpoint-badge">Sindh Region</span>
                </div>
              </div>
              <p className="touchpoint-text">
                Tipu Sultan Road &amp; Clifton Block 4, Karachi, Pakistan
              </p>
              <div className="touchpoint-meta-row">
                <span className="touchpoint-meta">
                  <Clock size={14} /> Open Daily: 08:00 AM &ndash; 02:00 AM
                </span>
                <a href="tel:+923000777243" className="touchpoint-link">
                  <Phone size={14} /> +92 300 0777243
                </a>
              </div>
            </div>

            <div className="contact-touchpoint-card highlight">
              <div className="touchpoint-header">
                <div className="touchpoint-icon-box yellow">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="touchpoint-title">Wholesale &amp; Event Catering</h3>
                  <span className="touchpoint-badge dark">B2B &amp; Private</span>
                </div>
              </div>
              <p className="touchpoint-text">
                Custom espresso bar setups, commercial gear calibration, and freshly roasted single-origin bean supply delivered weekly to offices and cafes.
              </p>
              <div className="touchpoint-meta-row">
                <a href="mailto:beans@artisancoffeeroaster.pk" className="touchpoint-link">
                  <Mail size={14} /> beans@artisancoffeeroaster.pk
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Support Bar */}
            <a
              href="https://wa.me/923000777242?text=Hello%20Artisan%20Coffee%20Roaster%2C%20I%20have%20an%20inquiry%20regarding%20your%20coffee."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <MessageSquare size={18} />
              <span>Chat Directly on WhatsApp (+92 300 0777242)</span>
            </a>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-box">
                    <CheckCircle2 size={46} />
                  </div>
                  <h3 className="success-title">Inquiry Received!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding &ldquo;{formData.inquiryType}&rdquo; has been forwarded to our roastery management team. We will reach back via phone or email within 2 hours.
                  </p>
                  <button type="button" className="contact-reset-btn" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-head">
                    <h3 className="form-card-title">Send Us a Direct Message</h3>
                    <p className="form-card-subtitle">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

                  <div className="form-row dual">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Bilal Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="contact-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. bilal@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="form-row dual">
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone / WhatsApp Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="contact-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-inquiry">Inquiry Category</label>
                      <select
                        id="contact-inquiry"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="contact-select"
                      >
                        <option value="Table Reservation & Lounge">Table Reservation &amp; Lounge</option>
                        <option value="Wholesale Specialty Beans">Wholesale Specialty Coffee Beans</option>
                        <option value="Private Event Catering">Private Event Catering</option>
                        <option value="Feedback & Compliments">Feedback &amp; Barista Experience</option>
                        <option value="General Inquiries">General Roastery Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-outlet">Preferred Outlet / City</label>
                    <select
                      id="contact-outlet"
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="contact-select"
                    >
                      <option value="Gulberg III Lahore">Gulberg III &bull; M.M. Alam Rd (Lahore)</option>
                      <option value="DHA Phase 5 Lahore">DHA Phase 5 &bull; Sector C (Lahore)</option>
                      <option value="Tipu Sultan Karachi">Tipu Sultan Road (Karachi)</option>
                      <option value="Clifton Karachi">Clifton Block 4 (Karachi)</option>
                      <option value="Online Delivery Support">Online Coffee Delivery Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message or Notes</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your event, coffee preferences, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
