import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;

  input, textarea {
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: #f7f7f7;
    resize: none;
  }
  button {
    background: #00ccd3;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #009fa8;
    }
  }
`;

const ContactForm = () => (
  <FormContainer onSubmit={e => { e.preventDefault(); alert('Mensaje enviado!'); }}>
    <input type="text" name="name" placeholder="Tu nombre" required />
    <input type="email" name="email" placeholder="Tu email" required />
    <textarea name="message" rows={4} placeholder="Tu mensaje" required />
    <button type="submit">Enviar</button>
        <strong>Contactate tambien mediante:</strong>
    <div style={{display:'flex', justifyContent:'center', gap:12, marginTop:10}}>
      <a href="https://wa.me/573173457029" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
        <button type="button" style={{background:'#25D366', padding: '10px 14px', borderRadius: '10px', border: 'none', color: '#fff', cursor: 'pointer'}}>WhatsApp</button>
      </a>
      <a href="mailto:camilosol123@gmail.com" style={{textDecoration:'none'}}>
        <button type="button" style={{background:'#0072c6', padding: '10px 14px', borderRadius: '10px', border: 'none', color: '#fff', cursor: 'pointer'}}>Email</button>
      </a>
    </div>
  </FormContainer>
);

export default ContactForm;
