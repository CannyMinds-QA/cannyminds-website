"use client";

import { useEffect, useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle as CheckCircleIcon,
    Error as ErrorIcon,
    Close as CloseIcon
} from '@mui/icons-material';

export type ToastType = 'success' | 'error';

interface ToastProps {
    message: string;
    type: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export default function Toast({
    message,
    type,
    isVisible,
    onClose,
    duration = 5000
}: ToastProps) {

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-l-4 min-w-[300px] max-w-md backdrop-blur-md ${type === 'success'
                        ? 'bg-white/90 border-green-500 text-green-900'
                        : 'bg-white/90 border-red-500 text-red-900'
                        }`}
                >
                    <div className="flex-shrink-0">
                        {type === 'success' ? (
                            <CheckCircleIcon className="text-green-500" sx={{ fontSize: 28 }} />
                        ) : (
                            <ErrorIcon className="text-red-500" sx={{ fontSize: 28 }} />
                        )}
                    </div>

                    <div className="flex-grow">
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                            {type === 'success' ? 'Success' : 'Error'}
                        </h4>
                        <p className="text-sm font-medium opacity-90">{message}</p>
                    </div>

                    <button
                        onClick={onClose}
                        className={`p-1 rounded-full transition-colors ${type === 'success' ? 'hover:bg-green-100/50' : 'hover:bg-red-100/50'
                            }`}
                    >
                        <CloseIcon fontSize="small" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
