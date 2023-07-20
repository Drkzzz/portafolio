import Image from 'next/image'
import hcsba from '../../../public/hcsba.png'

export default function Proyectos() {
    return (
        <>
            <div className="flex justify-center">
                <div className='p-5 2xl:mx-60 rounded-2xl md:hover:shadow-2xl md:hover:scale-105 md:hover:duration-500'>
                    <div className='flex justify-center'>
                        <Image width={120} src={hcsba} alt='Tutorías de Programación' />
                    </div>
                    <span>
                        <h1 className='text-2xl font-semibold text-center'>Sistema de Pabellón para HCSBA</h1>
                        <span className='text-justify mt-2'>
                            El sistema tiene como finalidad tener una trazabilidad completa del área de pabellón desde la programación de todas las cirugías
                            hasta la gestión de ellas con actualización en tiempo real mediante websocket. Toda la información que se registra en el sistema permite cuantificar
                            y visualizar el rendimiento de los funcionarios para medir la eficiencia de procesos y así mejorar la atención a los pacientes.
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}