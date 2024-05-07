import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '@mantine/core';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { IoCloseOutline } from "react-icons/io5";


const NotificationModal = ({ isOpen, setIsOpen, title, description, status }:any) => {

    const validatedStatus = ['success', 'warning', 'error'].includes(status) ? status : 'error';

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const Icon = validatedStatus === 'success' ? CheckIcon : status === 'warning' ? ExclamationTriangleIcon : IoCloseOutline;
    const iconBgColor = status === 'success' ? 'bg-green-100' : status === 'warning' ? 'bg-yellow-100' : 'bg-red-100';
    const iconColor = status === 'success' ? 'text-green-600' : status === 'warning' ? 'text-yellow-600' : 'text-red-600';


    return (
        <Modal
            opened={isOpen}
            onClose={handleCloseModal}
            size="md"
            centered
        >
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${iconBgColor} `}>
                <Icon className={` h-8 w-8 rounded-full ${iconBgColor} ${iconColor}`} aria-hidden="true" />
            </div>

            <div className="mt-4 text-center">
                <h1 className="text-lg font-bold text-gray-500 font-quicksand">{title}</h1>
            </div>
            <div className="mt-2 text-center">
                <p className="text-sm text-gray-500 font-quicksand">{description}</p>
            </div>
            <div className="mt-4 flex justify-center pb-6">
                <Button onClick={handleCloseModal} color="blue" className='font-quicksand text-xs'>
                    Go back
                </Button>
            </div>
        </Modal>
    );
};

export default NotificationModal;