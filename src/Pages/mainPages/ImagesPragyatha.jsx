// import React from 'react'
import { motion } from 'framer-motion'
// import Ad1 from '../images/ad1.jpg'
// import Ad2 from '../images/ad2.jpg'
// import Crackathon from '../images/winner2.jpg'
// import Crackathon2 from '../images/Crackathon2.jpg'
// import Crackathon3 from '../images/Crackathon.jpg'
// import Entror1 from '../images/entro1.jpg'
// import Entror2 from '../images/entro2.jpg'
// import Cyber1 from '../images/Cyber.jpg'
// import Cyber2 from '../images/Cyber2.jpg'
// import GitHub from '../images/github.png'
// import GitHub2 from '../images/github2.jpeg'
// import Entror3 from '../images/Entror3.jpg'

export default function ImagesPragyatha() {
    return (
        <div className="bg-black text-white">
            <div className='p-4'>
                {/* <div className="text-[100px] text-center">Events - Pragyatha</div> */}
                <br />
                <br />
                <div className='adspize'>
                    <div className="text-6xl m-4 text-center font-semibold">Adspize</div>
                    <div className="grid grid-cols-2 mb-10">

                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="ad1.jpg" alt="" className='rounded-3xl' />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="ad2.jpg" alt="" className='rounded-3xl' />
                        </motion.div>

                    </div>
                </div>

                <br />
                <hr />
                <br />
                <div className='ui'>
                    <div className="text-6xl m-4 text-center font-semibold">UI/UX <p className='text-pink-600'>Hackathon</p></div>
                    <div className="grid grid-cols-2 mb-10">

                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="ad1.jpg" alt="" className='rounded-3xl' />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <img src="ad2.jpg" alt="" className='rounded-3xl' />
                        </motion.div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='crackathon'>
                    <div className="text-6xl m-4 text-center font-semibold">Crackathon</div>
                    <div className="grid grid-cols-3 mb-10">
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="winner2.jpg" alt="" className='rounded-3xl' style={{ width: '100%', height: '300px', objectfit: 'cover' }} />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <img src="winner2.jpg" alt="" className='rounded-3xl' style={{ width: '100%', height: '300px', objectfit: 'cover' }} />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            <img src="Crackathon2.jpg" alt="" className='rounded-3xl' style={{ width: '100%', height: '300px', objectfit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>

                <br />
                <hr />
                <br />
                <div className='entrorphosis'>
                    <div className="text-6xl m-4 text-center font-semibold">Entrorphosis</div>
                    <div>
                    </div>
                    <div className="grid grid-cols-2 mb-10 ">

                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="entro1.jpg" alt="Ad1" className='rounded-3xl' />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <img src="entro2.jpg" alt="Ad1" className='rounded-3xl' />
                        </motion.div>




                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='git'>
                    <div className="text-6xl m-4 text-center font-semibold">Git && <p className='text-pink-600'>GitHub Workshop</p></div>

                    <div className="grid grid-cols-2 mb-10">
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="github2.jpeg" alt="Ad1" className='rounded-3xl' style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <img src="githubmain.png" alt="Ad1" className='rounded-3xl' style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        </motion.div>
                    </div>

                </div>
                <br />
                <hr />
                <br />
                <div className='cyber'>
                    <div className="text-6xl m-4 text-center font-semibold">Cyber Security &&<p className='text-pink-600'>Ethical Hacking</p></div>
                    <div>
                    </div>
                    <div className="grid grid-cols-2 mb-10 ">

                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src="Cyber.jpg" alt="Ad1" className='rounded-3xl' />
                        </motion.div>
                        <motion.div className='m-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <img src="Cyber2.jpg" alt="Ad1" className='rounded-3xl' />
                        </motion.div>




                    </div>
                </div>
            </div>
        </div>
    )
}
