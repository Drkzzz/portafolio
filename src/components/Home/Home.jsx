import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import doge from '../../../public/doge.png'
import code from '../../../public/code.png'
import estudio from '../../../public/estudio.png'
import yo from '../../../public/Yo.png'

export default function Home() {
    return (
        <>
            <div className="p-10 text-center">
                <h2 className='py-2 text-5xl text-teal-600 font-semibold'>Joaquín Escobar Figueredo</h2>
                <h3 className=' py-2 text-2xl font-medium'>Software Developer</h3>
                <span className='text-md py-5 leading-8'>
                    Actualmente Full-Stack Developer en <Link href="https://hcsba.cl/">HCSBA</Link>
                </span>
                <div className='flex justify-center mt-5'>
                    <div className='grid'>
                        <div className='col-12'>
                            Desarrollo de Software
                        </div>
                        <hr className='my-3' />
                        <div className='col-12'>
                            Tutorías de Programación
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-3 flex justify-center gap-16 text-5xl text-teal-500'>
                <Link href="https://github.com/Drkzzz">
                    <AiFillGithub />
                </Link>
                <Link href="https://linkedin.com/in/joaquín-escobar-figueredo">
                    <AiFillLinkedin />
                </Link>
                <Link href="https://wa.me/56965162836?text=Hola%20estoy%20interesado%20en%20contactarte.">
                    <AiFillPhone />
                </Link>
            </div>
            <div className='flex justify-center'>
                <div className='my-10 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full w-60 h-60 overflow-hidden'>
                    <div className='flex justify-center'>
                        <Image width={200} src={yo} alt='Imagen Personal' className='my-5' />
                    </div>
                </div>
            </div>

            <section>
                <div>
                    <h3 className='py-1 text-3xl text-center font-bold'>Acerca de mí</h3>
                    <span className='py-2 text-md text-center leading-8'>
                        <p>
                            Ingeniero Civil Informático de la <Link href='https://www.unab.cl/'><span className='font-semibold text-teal-500'>Universidad Andrés Bello</span></Link> egresado en Enero de 2023 con conocimientos sólidos en
                            el modelado y desarrollo de sistemas. Proactivo y autodidacta, con excelente capacidad comunicativa y trabajo colaborativo. Siempre preparado para enfretar nuevos desafíos.
                            Apasionado por la tecnología desde que tengo memoria.
                        </p>
                    </span>
                </div>

                <h3 className='py-1 my-7 text-3xl text-center font-bold'>Servicios que puedo ofrecerte</h3>

                <div className='md:grid md:grid-cols-2 md:gap-2'>
                    <div>
                        <div className='p-10 my-10 flex flex-col justify-between text-center rounded-2xl hover:shadow-2xl hover:scale-105 transition ease-in-out duration-300'>
                            <div className='grid grid-rows-3 gap-3'>
                                <div className='flex justify-center'>
                                    <Image width={120} src={code} alt='Tutorías de Programación' />
                                </div>
                                <div>
                                    <h3 className='pt-8 pb-2 text-lg font-medium'>Desarrollo de Software</h3>
                                    <span className='py-2'>
                                        <p>Sistemas a medida según necesidades</p>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-bold'>Lenguajes y Frameworks</h4>
                                    <div className='mt-4 grid grid-cols-3 gap-4'>
                                        <div>
                                            <span><p className='text-teal-500 font-medium'>JavaScript💻</p>Next.JS</span>
                                        </div>
                                        <div>
                                            <span><p className='text-teal-500 font-medium'>TypeScript💻</p>NestJS</span>
                                        </div>
                                        <div>
                                            <span><p className='text-teal-500 font-medium'>Databases💾</p>PostgreSQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 my-10 flex flex-col justify-between text-center rounded-2xl hover:shadow-2xl hover:scale-105 transition ease-in-out duration-300'>
                            <div className='grid grid-rows-3 gap-3'>
                                <div className='flex justify-center'>
                                    <Image width={120} src={estudio} alt='Tutorías de Programación' />
                                </div>
                                <div>
                                    <h3 className='pt-8 pb-2 text-lg font-medium'>Tutorías de programación</h3>
                                    <span className='py-2'>
                                        <p>
                                            Te ayudo a preparar todo lo necesario y a entender de mejor forma tus asignaturas de programación
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='py-4 bg-gradient-to-l from-cyan-500 to-teal-500 rounded-lg font-bold'>Lenguajes y Herramientas</h4>
                                    <div className='mt-4 grid grid-cols-2 gap-4'>
                                        <div>
                                            <span><p className='text-teal-500 font-medium'>C++📚</p> Dev-C++ & Code::Blocks </span>
                                        </div>
                                        <div>
                                            <span><p className='text-teal-500 font-medium'>Python📚</p> VSCode y Pycharm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}