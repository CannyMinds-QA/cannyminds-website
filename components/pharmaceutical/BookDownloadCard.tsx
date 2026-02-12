"use client";

import { useState } from "react";
import Image from "next/image";
import {
    MenuBook,
    Download,
    Close,
    CheckCircle,
    Business,
    Person,
    Email,
    Phone,
} from "@mui/icons-material";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
}

export default function BookDownloadCard() {
    const [isCardVisible, setIsCardVisible] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.company.trim()) {
            newErrors.company = "Company name is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/download-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    resource: "pharma-guide",
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setIsSuccess(true);

                // Trigger download after a short delay
                setTimeout(() => {
                    if (data.downloadUrl) {
                        const link = document.createElement("a");
                        link.href = data.downloadUrl;
                        link.download = "CannyMinds-Pharmaceutical-Guide.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }, 500);

                // Reset after download
                setTimeout(() => {
                    setShowForm(false);
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", company: "" });
                }, 3000);
            } else {
                throw new Error("Submission failed");
            }
        } catch {
            setErrors({ email: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <>
            {/* Sticky Sidebar Card */}
            {isCardVisible && (
                <div className="sticky top-24">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsCardVisible(false)}
                            className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white text-gray-400 hover:text-gray-600 rounded-full p-1 shadow-sm transition-colors"
                            aria-label="Close download card"
                        >
                            <Close sx={{ fontSize: 18 }} />
                        </button>

                        {/* Book Cover Image */}
                        <div className="relative aspect-[3/4] bg-gray-100">
                            <Image
                                src="/pharama book/pharma-book-cover.png"
                                alt="Pharmaceutical Guide"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Download Section */}
                        <div className="p-4">
                            <p className="text-sm font-bold text-secondary mb-1 text-center">
                                Free Download
                            </p>
                            <p className="text-xs text-gray-500 mb-3 text-center">
                                Pharmaceutical Compliance Guide
                            </p>
                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download sx={{ fontSize: 18 }} />
                                Download Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setShowForm(false);
                                setErrors({});
                                setIsSuccess(false);
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                        >
                            <Close sx={{ fontSize: 24 }} />
                        </button>

                        {isSuccess ? (
                            /* Success State */
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="text-green-600" sx={{ fontSize: 40 }} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Your download will start automatically.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Check your downloads folder for the PDF.
                                </p>
                            </div>
                        ) : (
                            /* Form */
                            <>
                                <div className="bg-primary p-6 text-white">
                                    <div className="flex items-center gap-3">
                                        <MenuBook sx={{ fontSize: 32 }} />
                                        <div>
                                            <h3 className="font-bold text-lg">Download Free Guide</h3>
                                            <p className="text-white/80 text-sm">
                                                Fill in your details to download
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <Person
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                sx={{ fontSize: 20 }}
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors ${
                                                    errors.name ? "border-red-500" : "border-gray-300"
                                                }`}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Email
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                sx={{ fontSize: 20 }}
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors ${
                                                    errors.email ? "border-red-500" : "border-gray-300"
                                                }`}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                sx={{ fontSize: 20 }}
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors ${
                                                    errors.phone ? "border-red-500" : "border-gray-300"
                                                }`}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* Company Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Company Name *
                                        </label>
                                        <div className="relative">
                                            <Business
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                sx={{ fontSize: 20 }}
                                            />
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors ${
                                                    errors.company ? "border-red-500" : "border-gray-300"
                                                }`}
                                                placeholder="Pharma Corp Ltd."
                                            />
                                        </div>
                                        {errors.company && (
                                            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <Download sx={{ fontSize: 20 }} />
                                                Download PDF
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By downloading, you agree to receive occasional updates from CannyMinds.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
