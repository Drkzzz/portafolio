import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import doge from '../../../public/doge.png'
import code from '../../../public/code.png'

export default function Home() {
    return (
        <>
            <div className="p-10 text-center">
                <h2 className='py-2 text-5xl text-teal-600 font-semibold'>Joaquín Escobar Figueredo</h2>
                <h3 className=' py-2 text-2xl font-medium'>Software Developer</h3>
                <span className='text-md py-5 leading-8'>
                    Full-Stack Developer en <Link href="https://hcsba.cl/">HCSBA</Link>
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
            <div className='my-20 bg-gradient-to-b from-teal-500'>
                <div className='flex justify-center'>
                    <Image height={100} width={100} src={doge} alt='Imagen Personal' className='' />
                </div>
            </div>
            <section>
                <div>
                    <h3 className='py-1 text-3xl text-center font-bold'>Acerca de mí</h3>
                    <p className='py-2 text-md leading-8'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquid perferendis quod, dolor nulla eum reiciendis iure suscipit sunt necessitatibus sapiente dicta est, doloribus inventore. Commodi odit perferendis delectus dolore!
                    </p>
                </div>

                <h3 className='py-1 my-7 text-3xl text-center font-bold'>Servicios que puedo ofrecerte</h3>
                <div className='md:grid md:grid-cols-2 md:gap-4'>
                    <div className='md:col-6'>
                        <div className='p-10 my-10 flex flex-col justify-between h-full text-center  shadow-xl rounded-2xl'>
                            <div className='flex justify-center'>
                                <Image height={50} width={50} src={code} alt='Tutorías de Programación' className='dark:bg-white' />
                            </div>
                            <div>
                                <h3 className='pt-8 pb-2 text-lg font-medium'>Desarrollo de Software</h3>
                                <p className='py-2'>
                                    Sistemas a medida según necesidades
                                </p>
                            </div>
                            <div>
                                <h4 className='py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-bold'>Lenguajes y Frameworks</h4>
                                <div className='grid'>
                                    <div className='col-12'>
                                        <p className='py-1'>
                                            <span className='font-bold text-teal-600'>JavaScript</span> <br />
                                            Next.JS<br />
                                            <span className='font-bold text-teal-600'>TypeScript</span> <br />
                                            NestJS<br />
                                            <span className='font-bold text-teal-600'>Database</span> <br />
                                            PostgreSQL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-6'>
                        <div className='my-10 p-10 flex flex-col justify-between h-full text-center shadow-xl rounded-2xl'>
                            <div className='flex justify-center'>
                                <Image height={50} width={50} src={code} alt='Tutorías de Programación' className='dark:bg-white' />
                            </div>
                            <div>
                                <h3 className='pt-8 pb-2 text-lg font-medium'>Tutorías de programación personalizadas</h3>
                                <p className='py-2'>
                                    Te enseño a instalar todo lo necesario según tu necesidad y estar listo para entender la programación
                                </p>
                            </div>
                            <div>
                                <h4 className='py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-bold'>Lenguajes y Herramientas</h4>
                                <div className='grid'>
                                    <div className='col-12'>
                                        <p className='py-1'>
                                            <span className='font-bold text-teal-600'>C++</span> <br />
                                            Code::Blocks y Dev-C++<br />
                                            <span className='font-bold text-teal-600'>Python</span> <br />
                                            NestJS<br />
                                            <span className='font-bold text-teal-600'>Python</span> <br />
                                            NestJS<br />
                                        </p>
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