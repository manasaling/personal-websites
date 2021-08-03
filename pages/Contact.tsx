import { Form, Button, Col } from 'react-bootstrap';
import styles from './Contact.module.css';

export default function Projects() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.contactTitle}>
        <h1>Contact Me</h1>
      </div>
      <Form action={`https://formsubmit.co/examle@email.com`} method="POST">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="First Name"
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="Last Name"
              placeholder="Last Name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            placeholder="example@gmail.com"
          />
        </Form.Group>

        <Form.Group controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Message"
            placeholder="Enter Message"
          />
        </Form.Group>

        <Button className={styles.submitButton} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
