import Image from 'next/image'
import Link from 'next/link'
import hcsba from '../../../public/hcsba.png'

export default function Reconocimientos() {
    return (
        <>
            <div className="flex justify-center">
                <div className='grid grid-rows-2'>
                    <div className='p-5 2xl:mx-60 rounded-2xl md:hover:shadow-2xl md:hover:scale-105 md:hover:duration-500'>
                        <div className='flex justify-center'>
                            <Image width={120} src={hcsba} alt='HCBSA' />
                        </div>
                        <span>
                            <h1 className='text-2xl font-semibold text-center'>HCSBA</h1>
                            <span className='text-justify mt-2'>
                                Reconociendo al equipo desarrollador que busca modernizar el Hospital Clínico San Borja Arriarán
                                <Link href='https://hcsba.cl/sitio/2023/07/07/reconociendo-a-el-equipo-desarrollador-que-busca-modernizar-nuestro-hospital/'>
                                    <div className='flex justify-center'>
                                        <span className='font-bold underline underline-offset-8'><br />Enlace</span>
                                    </div>
                                </Link>
                            </span>
                        </span>
                    </div>
                    <div className='hidden p-10 2xl:mx-60 mt-10 rounded-2xl md:hover:shadow-2xl md:hover:scale-105 md:hover:duration-75'>
                        <div className='flex justify-center'>
                            <Image width={120} src={hcsba} alt='HCBSA' />
                        </div>
                        <span>
                            <h1 className='text-2xl font-semibold text-center'>HCSBA</h1>
                            <span className='text-justify mt-2'>
                                Reconociendo al equipo desarrollador que busca modernizar el Hospital Clínico San Borja Arriarán
                                <Link href='https://hcsba.cl/sitio/2023/07/07/reconociendo-a-el-equipo-desarrollador-que-busca-modernizar-nuestro-hospital/'>
                                    <div className='flex justify-center'>
                                        <span className='font-bold underline underline-offset-8'><br />Enlace</span>
                                    </div>
                                </Link>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}