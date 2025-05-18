import React from 'react'
import logo from "../public/images/icon-192x192.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dovegray text-whiterock">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="flex flex-col xl:flex-col xxl:flex-col xxs:flex-col sm:flex-row sm:justify-between gap-6">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="flex items-center">
                                <Image src={logo} height={80} width={50} alt="Logo" />
                                <span className="text-lg sm:text-xl xl:text-2xl font-semibold px-2 whitespace-normal xxs:whitespace-nowrap">
                                    فضيلة الشيخ ظفر الحسن مدني حفظه اللّه
                                </span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 s:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-6">
                            <div>
                                <h2 className="mb-4 text-sm font-semibold uppercase">Resources</h2>
                                <ul className="font-medium space-y-2">
                                    <li>
                                        <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                                    </li>
                                    <li>
                                        <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-sm font-semibold uppercase">Follow us</h2>
                                <ul className="font-medium space-y-2">
                                    <li>
                                        <Link href="https://github.com/themesberg/flowbite" className="hover:underline">Github</Link>
                                    </li>
                                    <li>
                                        <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
                                <ul className="font-medium space-y-2">
                                    <li>
                                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-whiterock">
                        <span className="text-center sm:text-left mb-4 sm:mb-0">
                            © 2023 <Link href="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
                        </span>
                        <div className="flex justify-center space-x-5">
                            {/* Social Media Icons (unchanged) */}
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
