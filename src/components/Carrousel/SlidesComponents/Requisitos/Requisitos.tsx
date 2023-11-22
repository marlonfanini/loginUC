import { useEffect } from 'react';



function AnimatedRequisitos({ requisitos }: any) {
    useEffect(() => {
        // Aplicar la clase de animación cuando cambian los requisitos
        const element = document.querySelector('.requisitos-container'); // Reemplaza '.requisitos-container' con el selector adecuado
        if (element) {
            element.classList.add('animate__animated', 'animate__fadeInDown');

            // Retirar la clase de animación después de un tiempo para permitir futuras animaciones
            setTimeout(() => {
                element.classList.remove('animate__animated', 'animate__fadeInDown');
            }, 1000); // Duración de la animación en milisegundos
        }
    }, [requisitos]);

    return (
        <div className="requisitos-container">
            {requisitos.slice(0, 5).map((data: any, index: any) => (
                <div
                    key={index + 5}
                    style={{
                        display: 'flex',
                        fontSize: '14px',
                        flexDirection: 'row',
                        // alignItems: 'center',
                        gap: '5px',
                        height: 30,
                        marginBottom: '15px',
                        marginTop: '2px',
                        
                    }}
                >
                    <img className='images' src="https://i.ibb.co/2cXDXKX/Group-144.png" alt="Ícono" />
                    <p className='invierte'>{data}</p>
                </div>
            ))}
        </div>
    );
}
export default AnimatedRequisitos