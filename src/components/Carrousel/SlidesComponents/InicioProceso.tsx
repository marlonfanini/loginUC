

function InicioProceso() {
  return (
    <>
    <div  style={{
      marginLeft: 'auto',
      marginBottom: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <p style={{ 
        color: '#00ADD8', 
        fontSize: 53, 
        fontWeight: 800, 
        marginBottom: '1px', 
        marginTop: '0px' 
        }} > HAZTE CLIENTE</p>
      <p className='olvidaste' style={{ 
        color: '#FFF', 
        fontSize: 20, 
        fontWeight: 100, 
        marginTop: '1px', 
        marginBottom: '25px' 
        }} >INICIO DEL PROCESO DE TU CUENTA DIGITAL</p>
        <img className='pasoapaso' src="https://i.ibb.co/M2WCtVr/Paso-a-Paso.png" alt="Paso-a-Paso" ></img>
      </div>

</>
  )
}

export default InicioProceso