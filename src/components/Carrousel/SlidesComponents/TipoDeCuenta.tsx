'use client'
import classNames from 'classnames';
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect, useState } from 'react';
import 'animate.css';
import AnimatedRequisitos from './Requisitos/Requisitos';
import clientes from '@/public/clientes.js'






function Requisitos({ requisitos }: any) {
  useEffect(() => {
    const element = document.querySelector('.requisitos-1');
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInDown', 'invierte');

      setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__fadeInDown');
      }, 1000);
    }
  }, [requisitos]);

  return (
    <div className={classNames('invierte', 'requisitos-container')}>
      {requisitos.slice(5).map((data: any, index: any) => (
        <div
          key={index}
          style={{
            display: 'flex',
            fontSize: '14px',
            flexDirection: 'row',
            gap: '5px',
            height: 30,
            marginBottom: '15px',
            marginTop: '2px',
          }}

        >
          <img className='images' src="https://i.ibb.co/2cXDXKX/Group-144.png" alt="Ícono" />
          <p>{data}</p>
        </div>
      ))}
    </div>
  );
}

function TipoDeCuenta() {

  const [selectedAccount, setSelectedAccount] = useState('Profesional Asalariado');
  const [buttonOrder, setButtonOrder] = useState([ 'Cuenta Física', 'Cuenta Jurídica']);
  const [showtab, setshowTab] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const cliente = clientes.find(cliente => cliente.tipo === selectedAccount)

  const handleButtonClick = (accountType: any) => {
    setSelectedAccount(accountType);
    if (accountType === 'Cuenta Física') {
      setButtonOrder(['Cuenta Física', 'Cuenta Jurídica']);
      setDropdownVisible(!isDropdownVisible);
    } else if (accountType === 'Cuenta Jurídica') {
      setButtonOrder([ 'Cuenta Jurídica', 'Cuenta Física'])
      setDropdownVisible(false);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleclicktab = () => {
    setshowTab(!showtab)
  }

  useEffect(() => {
    const element = document.querySelector('.container');
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInDown');


      setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__fadeInDown');
      }, 1000);
    }
    console.log(selectedAccount)
  }, [selectedAccount])




  return (
    <>
      {
        showtab ? (
          <>
            <div style={{
              marginLeft: 'auto',
              marginBottom: '0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>

              <div className="triangle"></div>
              <p className='hazteclient1' style={{ color: '#00ADD8', fontSize: 53, marginBottom: '1px', marginTop: '0px' }}>HAZTE CLIENTE</p>
              <p className='hazteclient' style={{ color: '#FFF', fontSize: 20, fontWeight: 400, marginTop: '1px', marginBottom: '25px' }}>¿QUÉ TIPO DE CUENTA DESEAS ABRIR?</p>
              <div className={'invierte'} style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px' 
              }}>
              </div>
            </div>
            <div className='animate__animated animate__fadeInBottomRight'>
            <div className={classNames('invierte', 'container')} style={{
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
              minHeight: '300px',
              backgroundColor: '#00ADD8',
              padding: '30px',
              paddingRight: '0px',
              position: 'relative',
              overflowY: 'auto'
            }}>

              <div className='containerscroll' style={{ overflow: 'auto' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <button className={classNames('invierte', 'buttonRef12')}>{selectedAccount === 'Cuenta Jurídica' ? 'PERSONA JURÍDICA NACIONAL' : selectedAccount}</button>
                </div>

                {
                  cliente?.requisitos ? (
                    <p style={{ height: '10px', marginTop: '15px', marginBottom: '30px' }} className='re animate__animated animate__fadeInDown'>Otros requisitos: </p>
                  ) : (
                    <p></p>
                  )
                }

                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                  <Requisitos requisitos={cliente?.requisitos || []} />
                </div>
              </div>

            </div>
    
            <div className="triangulo"></div>
            </div>
            {
              selectedAccount === 'Cuenta Jurídica'  ? (
                <div className={classNames('invierte', 'margindiv')} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'right',
                }}>
                  
                  <button onClick={handleclicktab} className={classNames('invierte', 'buttonloginAgenda12')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                    Cerrar
                  </button>
                </div>
              ) : null
            }
          </>) : (<>
            <div className='invierte' style={{
              marginLeft: 'auto',
              marginBottom: '0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <p className='hazteclient' style={{ color: '#00ADD8', fontSize: 53, fontWeight: 800, marginBottom: '1px', marginTop: '0px' }}>HAZTE CLIENTE</p>
              <p className='hazteclient' style={{ color: '#FFF', fontSize: 20, fontWeight: 400, marginTop: '1px', marginBottom: '25px' }}>¿QUÉ TIPO DE CUENTA DESEAS ABRIR?</p>
              <div className='invierte' style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px'
              }}>
                {
                  buttonOrder.map((accountType, index) => {
                    return (
                      selectedAccount === accountType ? (
                        <div className="boton-con-senal" style={{ order: index }} key={accountType}>
                          <button
                          style={{fontSize: '14px'}}
                            className={classNames('invierte', 'buttontipodecuenta1', {
                              'selected': selectedAccount === accountType,
                            })}
                            onClick={() => handleButtonClick(accountType)}
                          >
                            {accountType}
                          </button>
                          <div className="senal"></div>
                        </div>
                      ) : (
                        <button
                          style={{ order: index , fontSize: '14px'}}
                          className={classNames('invierte', 'buttontipodecuenta', {
                            'selected': selectedAccount === accountType,
                          })}
                          onClick={() => handleButtonClick(accountType)}
                          key={accountType}
                        >
                          {accountType}
                        </button>
                      )
                    );
                  })
                }
              </div>

              <div className="contenedor">
                {selectedAccount === 'Cuenta Física' && isDropdownVisible && (
                  <div className="dropdownContainer ">
                    <button onClick={() => handleButtonClick('Profesional Asalariado')} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__bounceIn')}>Profesional Asalariado</button>
                    <button onClick={() => handleButtonClick('Profesional Independiente')} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__bounceIn')}>Profesional Independiente</button>
                    <button onClick={() => handleButtonClick('Negocio Propio')} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__bounceIn')}>Negocio Propio</button>
                    <button onClick={() => handleButtonClick('Desempleado')} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__bounceIn')}>Desempleado</button>
                    <button onClick={() => handleButtonClick('Pensionado')} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__bounceIn')}>Pensionado</button>
                  </div>
                )}
              </div>


              <div className="triangle"></div>
              <div className='animate__animated animate__fadeInDown' style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '2px', }}>
                <button className={classNames('invierte', 'buttonRef')}>{selectedAccount === 'Cuenta Jurídica' ? 'PERSONA JURÍDICA NACIONAL' : selectedAccount}</button>
              </div>
            </div>
            <div className={classNames('invierte', 'container')} style={{ display: 'flex', flexDirection: 'column' , marginTop: '4px'}}>


              {
                cliente?.requisitos ? (
                  <p style={{  marginBottom: '30px' }} className='re animate__animated animate__fadeInDown'>Requisitos para este tipo de cuenta: </p>
                ) : (
                  <p></p>
                )
              }
              <div style={{ display: 'flex', flexDirection: 'column', height: '1px' }}>
                <AnimatedRequisitos requisitos={cliente?.requisitos || []} />
              </div>




              {
                selectedAccount === 'Cuenta Jurídica'  ? (
                  <div className={'invierte'} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}>
                    <button onClick={handleclicktab} className={classNames('invierte', 'buttonloginAgenda1')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '5px', width: '143.5px', fontSize: '11px' }}>
                      Más información
                      <InfoIcon style={{ height: '18px' }} />
                    </button>
                  </div>
                ) : null
              }
            </div >
          </>)
      }
    </>

  )
}

export default TipoDeCuenta

