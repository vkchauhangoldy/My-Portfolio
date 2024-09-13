import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/button/Button";
import "./Contact.css";
import DisplayToast from "../../utils/toast/DisplayToast";
import Toasts from "../../utils/toast/Toasts";
import { submitRequest } from "../../utils/toast/toastMsg";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const validateField = (name, value) => {
        let error = '';
        if (name === 'name') {
            if (!value) {
                error = 'Please enter your name';
            }
        } else if (name === 'email') {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!value) {
                error = 'Please enter your email';
            } else if (!emailPattern.test(value)) {
                error = 'Invalid email address';
            }
        } else if (name === 'phone') {
            const phonePattern = /^[0-9]{10}$/;
            if (!value) {
                error = 'Please enter your phone number';
            } else if (!phonePattern.test(value)) {
                error = 'Invalid phone number';
            }
        }
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors({
            ...errors,
            [name]: error
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sumbitHandler = (e) => {
        e.preventDefault();
        const formErrors = {};
        Object.keys(formData).forEach(key => {
            formErrors[key] = validateField(key, formData[key]);
        });
        setErrors(formErrors);

        if (Object.values(formErrors).every(error => error === '')) {
            // Submit form data
            console.log('Form data:', formData);
            Toasts.success(submitRequest)
        }
        formData.name = ""
        formData.email = ""
        formData.phone = ""
        formData.message = ""
    };
    return (
        <div className="page">
            <h1 className="text-center txt-primary pt-3">Contact me</h1>
            <div className="containers">
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Get in touch</h3>
                        <p className="text">
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. I will be happy to answer your questions and set up a meeting with you.
                        </p>
                        <div className="info">
                            <p className="information">
                                <span><i className="fa fa-map-marker" /> </span>
                                <span>Bangalore, Karnataka, India</span>
                            </p>
                            <p className="information">
                                <span><i className="fa fa-envelope" /></span>
                                <span>vkchauhangoldy@yahoo.com</span>
                            </p>
                            <p className="information">
                                <span><i className="fa fa-phone" /></span>
                                <span>+91 - 8948499916</span>
                            </p>
                        </div>
                        <div className="social-media">
                            <p>Connect with me :</p>
                            <div className="social-icons">
                                <Link to="https://www.facebook.com/vk.chauhan.315" target="blank"><i className="fa fa-facebook" /></Link>
                                <Link to="https://x.com/vk_goldy" target="blank"><i className="fa fa-twitter" /></Link>
                                <Link to="https://www.instagram.com/vk_chauhan_goldy/" target="blank"><i className="fa fa-instagram" /></Link>
                                <Link to="https://www.linkedin.com/in/vinay-kumar-chauhan-543203226" target="blank"><i className="fa fa-linkedin" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-12">
                                <div className="overflow-hidden">
                                    <form onSubmit={sumbitHandler}>
                                        <div className="row gy-xl-3 gy-3 p-3">
                                            <div className="col-12">
                                                <label htmlFor="name" className="form-label">
                                                    Name<sup className="error">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    required=""
                                                />
                                                {errors.name && <p className="error">{errors.name}</p>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label">
                                                    Email<sup className="error">*</sup>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-envelope txt-primary" />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        required=""
                                                    />
                                                </div>
                                                {errors.email && <p className="error">{errors.email}</p>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone Number<sup className="error">*</sup>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-phone txt-primary" />
                                                    </span>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.phone && <p className="error">{errors.phone}</p>}
                                            </div>
                                            <div className="col-12 col-md-12">
                                                <label htmlFor="message" className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                                {errors.message && <p className="error">{errors.message}</p>}
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <Button type="submit" label="Contact Us" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisplayToast />
            <div style={{ width: '100%', height: '400px' }}>
                <iframe
                    title="Bangalore City Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.957191161918!2d77.58480384994366!3d12.971598749602812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b0bffb2d%3A0xa558f0a6d487c231!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694410786294!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default Contact;
