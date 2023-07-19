import Image from 'next/image'
import hcsba from '../../../public/hcsba.png'
export default function Proyectos() {
    return (
        <>
            <div className="flex justify-center">
                <div className='rounded-2xl hover:shadow-2xl hover:scale-105 hover:duration-300 p-10 md:mx-60'>
                    <div className='flex justify-center'>
                        <Image width={120} src={hcsba} alt='Tutorías de Programación' />
                    </div>
                    <span>
                        <h1 className='text-2xl font-semibold text-center'>Sistema de Pabellón para HCSBA</h1>
                        <p className='text-justify'>
                            El sistema tiene como finalidad tener una trazabilidad completa del área de pabellón desde la programación de todas las cirugías
                            hasta la gestión de ellas con actualización en tiempo real mediante websocket. Toda la información que se registra en el sistema permite cuantificar
                            y visualizar el rendimiento de los funcionarios para medir la eficiencia de procesos y así mejorar la atención a los pacientes.
                        </p>
                    </span>
                </div>
            </div>
        </>
    )
}