import Image from 'next/image'
import Link from 'next/link'
import hcsba from '../../../public/hcsba.png'
import ibm from '../../../public/ibm.png'

export default function Reconocimientos() {
    return (
        <>
            <div className="flex justify-center">
                <div className='grid grid-rows-3 gap-6'>
                    <div className='p-5 2xl:mx-60 rounded-2xl md:hover:shadow-2xl md:hover:scale-105 md:hover:duration-500'>
                        <div className='flex justify-center'>
                            <Image width={120} src={hcsba} alt='HCBSA' />
                        </div>
                        <span>
                            <h1 className='text-2xl font-semibold text-center mb-3'>HCSBA</h1>
                            <span className='text-justify'>
                                Reconociendo al equipo desarrollador que busca modernizar el Hospital Clínico San Borja Arriarán.
                                <div className='flex justify-center'>
                                    <span className='font-bold underline underline-offset-8'>
                                        <Link href='https://hcsba.cl/sitio/2023/07/07/reconociendo-a-el-equipo-desarrollador-que-busca-modernizar-nuestro-hospital/'>
                                            Enlace
                                        </Link>
                                    </span>
                                </div>
                            </span>
                        </span>
                    </div>
                    <div className='p-10 2xl:mx-60 md:py-8 py-3 rounded-2xl md:hover:shadow-2xl md:hover:scale-105 md:hover:duration-500'>
                        <div className='flex justify-center'>
                            <Image width={120} src={ibm} alt='IBM' />
                        </div>
                        <span>
                            <h1 className='text-2xl font-semibold text-center mt-3 mb-3'>Certificados</h1>
                            <div>
                                <span className='text-center'>
                                    <div className='flex justify-center'>
                                        IBM Artificial Intelligence Practitioner - Certificate.
                                    </div>
                                    <div className='flex justify-center'>
                                        <span className='font-bold underline underline-offset-8'>
                                            <Link href='https://www.credly.com/badges/29233ac9-eb39-4807-b44b-d005dd80fb7b/public_url'>
                                                Enlace
                                            </Link>
                                        </span>
                                    </div>
                                </span>
                            </div>
                            <div className='mt-5'>
                                <span className='text-center'>
                                    <div className='flex justify-center'>
                                        IBM Data Science Practitioner - Certificate.
                                    </div>
                                    <div className='flex justify-center'>
                                        <span className='font-bold underline underline-offset-8'>
                                            <Link href='https://www.credly.com/badges/1531af05-a11d-4ce3-8c64-6e1f1d521b56/public_url'>
                                                Enlace
                                            </Link>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
