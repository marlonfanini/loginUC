'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Link from 'next/link';
import '@/styles/styles.css';


function CheckBoxComponent()  {
    
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }

  return (
    <div className='containerCheck' style={{ marginTop: '10px', display: 'flex', alignItems: 'center'  }}>
    <div className={`checkbox-container ${checked ? 'checked' : ''}`} onClick={handleCheckboxChange}>
      {checked && <FontAwesomeIcon icon={faCheck} className="checkmark" />}
    </div>
    <div style={{ fontSize: '12px',  }} className="checkbox-text invierte">
      Acepto{' '}
      <Link
        className='olvidaste'
        style={{
          color: '#0A233F',
          textDecorationColor: '#0A233F',
          fontWeight: 'bold',
          fontSize: '13px'
        }}
        href='https://app.unitedcapitaldr.com/docs/terminos.pdf'
      >
        Términos y Condiciones
      </Link>{' '}
       de uso y Política  de Privacidad <br/> y Política  general  de  la Protección de Datos.
      
    </div>
  </div>
  )
}

export default CheckBoxComponent