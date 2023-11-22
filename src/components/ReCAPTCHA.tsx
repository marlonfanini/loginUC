import ReCAPTCHA from "react-google-recaptcha";


function ReCAPTCHAComponent() {
    function onChange() {
        console.log('Hubo un cambio')
      }
    
  return (
    <div style={{ marginTop: '40px' }}>
    <ReCAPTCHA
      sitekey="6LdKIggpAAAAAGWOyp0NsFxneeE4hG1oqUzIAMA3"
      onChange={onChange}
    />
  </div>
  )
}

export default ReCAPTCHAComponent