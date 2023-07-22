import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { AiFillCloseCircle} from "react-icons/ai";

const VideoModal = ({ closeModal, isOpen,strYoutube }) => {
    const link = strYoutube.split("https://www.youtube.com/watch?v=")[1]
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                            
<AiFillCloseCircle  onClick={closeModal} className='mb-5 ml-auto text-primaryColor  w-8 h-8 cursor-pointer' />  

                                    <Dialog.Title
                                        as="div"
                                        className=" text-lg font-medium leading-6 text-gray-900"
                                    >

                                        <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${link}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>

                                    </Dialog.Title>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default VideoModal