import { useState } from "react";
export default function Contact() {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
      });

function validateForm() {
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
        return "Vui lòng điền đầy đủ tất cả các trường.";
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //
    if (!emailRegex.test(contactForm.email)) {
        return "Email không hợp lệ.";
    }
    return null;
}

function handleContactSubmit(e) { 
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: errorMsg });
        return;
    }
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setContactForm({ name: '', email: '', subject: '', message: '' }); 
    }, 1500);
}

function handleInputChange(e) {
    const { name, value } = e.target;
    setContactForm(prev => ({
        ...prev,
        [name]: value
    }));
}

    return (
         <section id="contact">
        <div className="container">
          <h2 className="section-title">Liên hệ</h2>
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form">
              <h3 className="form-title">Gửi tin nhắn cho tôi</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Họ và tên *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="subject" className="form-label">Chủ đề *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập chủ đề tin nhắn"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message" className="form-label">Nội dung tin nhắn *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>

                {/* Form Status Messages */}
                {formStatus.isSubmitted && (
                  <div className="form-status success">
                    ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="form-status error">
                    ❌ {formStatus.error}
                  </div>
                )}
                
                {formStatus.isSubmitting && (
                  <div className="form-status info">
                    📤 Đang gửi tin nhắn...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}