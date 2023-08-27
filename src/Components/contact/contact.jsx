import './contact.css'
import ContactGif from '../../Assets/image/contact2.gif';
import Col from '../../Assets/react-bootstrap/esm/Col';
import Row from '../../Assets/react-bootstrap/esm/Row';
import { faUser, faEnvelope, faPenToSquare, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import Button from "../../Assets/react-bootstrap/esm/Button";





function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', msg: '' })

    let handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject} Message: ${formData.msg}`
        )
    };


    return (
        <section className='sectionFour' id='contact'>
            <h2 className='title'>Contact Me</h2>
            <h4 className="sub-title d-flex justify-content-center mb-5"> Get in touch</h4>
            <div className='cont__conatiner container'>
                {/* <div className='quali__sections'> */}
                {/* <div className='quali__content'> */}
                <Row>
                    <Col className="quali__left img img-fluid" md={6} data-aos="fade-right">
                        <img src={ContactGif} alt="Contact" />
                    </Col>
                    <Col className="quali__right" data-aos="fade-left" md={6}>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className='col'>
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='Name' className='input' name='name' value={formData.name} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='E-mail' className='input' name='email' value={formData.email} onChange={handleChange} />
                                </Col>
                                <Col md={12}>
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='Subject' className='input' name='subject' value={formData.subject} onChange={handleChange} />
                                </Col>
                                <Col md={12}>
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <textarea type="text" placeholder='Enter your message here . . .' className='input' rows={'6'} name='msg' value={formData.msg} onChange={handleChange} />
                                </Col>
                                <Col className='d-flex justify-content-end submit_btn_col'>
                                    <Button variant="primary" className="submit_btn" type='submit'>
                                        <span className="text me-2">Submit</span>
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className="icon"
                                        ></FontAwesomeIcon>
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                {/* </div> */}
                {/* </div> */}
            </div>
        </section >
    );
}

export default Contact;