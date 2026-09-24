import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import Logo from "../public/transparenticon.png"
import Image from 'next/image'
import { Aref_Ruqaa, Noto_Naskh_Arabic, Rakkas } from 'next/font/google';
import localFont from "next/font/local"
import History from "../public/icons/history.svg"
import Schedule from "../public/icons/schedule.svg"
import Calendar from "../public/icons/calendar.svg"
import Home from "../public/icons/home.svg"



const rakkas = Rakkas({ subsets: ['latin'], weight: ['400'] });
const samarkan = localFont({
    src: '../public/font/samarkan.ttf', // Adjust the path based on your file location
    variable: '--font-samarkan',         // Defines a CSS variable name
})
const notoNaskh = Noto_Naskh_Arabic({ subsets: ['latin'], weight: ['700'] });

const arefRuqaa = Aref_Ruqaa({
    subsets: ["arabic"], // or ["latin", "arabic"] if you want both
    weight: ["400", "700"], // available weights
    variable: "--font-aref-ruqaa",
    display: "swap",
});

const navigation = [
    { name: 'Home', href: '/', current: true, icon: Home },
    { name: 'Duroos', href: '/duroos', current: false, icon: Calendar },
    { name: 'Schedule', href: '/lecture-schedule', current: false, icon: Schedule },
    { name: 'Biography', href: '/about', current: false, icon: History },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="relative bg-logogrey after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-row-reverse items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <div className="xxl:flex lg:flex xl:flex space-x-4 hidden">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-950/50 font-bold text-white text-lg' : 'text-white text-2xl hover:bg-white/5 hover:text-white',
                                            'px-2 py-[19px]  font-medium text-lg',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <div className='flex gap-3 lg:flex xxl:flex xl:flex md:flex xs:hidden sm:hidden s:hidden xxs:hidden'>
                                    <a href="https://whatsapp.com/channel/0029Vb8QxVX8F2pF5Nrbjj1Y" target='_blank'>
                                        <svg className="h-7 w-7 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#25D366">
                                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.45 17.5 2 12.04 2M12.05 20.03C10.58 20.03 9.14 19.64 7.89 18.89L7.59 18.71L4.43 19.55L5.28 16.44L5.09 16.14C4.29 14.87 3.87 13.41 3.87 11.91C3.87 7.42 7.51 3.78 12.05 3.78C16.59 3.78 20.22 7.42 20.22 11.92C20.22 16.41 16.59 20.03 12.05 20.03M16.73 13.96C16.49 13.84 15.33 13.27 15.11 13.19C14.9 13.11 14.74 13.07 14.58 13.31C14.42 13.55 13.96 14.1 13.82 14.26C13.68 14.42 13.54 14.44 13.3 14.32C13.06 14.2 12.28 13.94 11.36 13.12C10.63 12.47 10.14 11.68 10 11.44C9.86 11.2 9.98 11.07 10.1 10.95C10.21 10.84 10.35 10.66 10.49 10.49C10.63 10.32 10.68 10.2 10.76 10.04C10.84 9.88 10.8 9.74 10.74 9.62C10.68 9.5 10.12 8.12 9.89 7.56C9.66 7.01 9.43 7.09 9.27 7.09C9.13 7.09 8.97 7.09 8.81 7.09C8.65 7.09 8.39 7.15 8.17 7.39C7.95 7.63 7.33 8.21 7.33 9.4C7.33 10.59 8.19 11.74 8.31 11.9C8.43 12.06 10.02 14.51 12.45 15.58C13.03 15.83 13.48 15.98 13.83 16.1C14.4 16.29 14.92 16.26 15.33 16.2C15.79 16.13 16.73 15.63 16.92 15.07C17.11 14.51 17.11 14.04 17.05 13.96C16.99 13.88 16.85 13.84 16.73 13.96Z" />
                                        </svg>
                                    </a>
                                    <a href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1" target='_blank'>
                                        <CalendarDaysIcon className='h-7 w-7 mt-5 text-amber-300 animate-[pulse_1.2s_cubic-bezier(0.4,0,0.9,1)_3]' />
                                    </a>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <div className="flex sm:ml-6 sm:block xs:block xxs:block md:block">
                            <div dir="rtl" className="flex items-center whitespace-nowrap">
                                <div className='lg:hidden xxl:hidden xl:hidden flex'>
                                    <a href="https://whatsapp.com/channel/0029Vb8QxVX8F2pF5Nrbjj1Y" target='_blank'>
                                        <svg className="h-11 w-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#25D366">
                                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.45 17.5 2 12.04 2M12.05 20.03C10.58 20.03 9.14 19.64 7.89 18.89L7.59 18.71L4.43 19.55L5.28 16.44L5.09 16.14C4.29 14.87 3.87 13.41 3.87 11.91C3.87 7.42 7.51 3.78 12.05 3.78C16.59 3.78 20.22 7.42 20.22 11.92C20.22 16.41 16.59 20.03 12.05 20.03M16.73 13.96C16.49 13.84 15.33 13.27 15.11 13.19C14.9 13.11 14.74 13.07 14.58 13.31C14.42 13.55 13.96 14.1 13.82 14.26C13.68 14.42 13.54 14.44 13.3 14.32C13.06 14.2 12.28 13.94 11.36 13.12C10.63 12.47 10.14 11.68 10 11.44C9.86 11.2 9.98 11.07 10.1 10.95C10.21 10.84 10.35 10.66 10.49 10.49C10.63 10.32 10.68 10.2 10.76 10.04C10.84 9.88 10.8 9.74 10.74 9.62C10.68 9.5 10.12 8.12 9.89 7.56C9.66 7.01 9.43 7.09 9.27 7.09C9.13 7.09 8.97 7.09 8.81 7.09C8.65 7.09 8.39 7.15 8.17 7.39C7.95 7.63 7.33 8.21 7.33 9.4C7.33 10.59 8.19 11.74 8.31 11.9C8.43 12.06 10.02 14.51 12.45 15.58C13.03 15.83 13.48 15.98 13.83 16.1C14.4 16.29 14.92 16.26 15.33 16.2C15.79 16.13 16.73 15.63 16.92 15.07C17.11 14.51 17.11 14.04 17.05 13.96C16.99 13.88 16.85 13.84 16.73 13.96Z" />
                                        </svg>
                                    </a>
                                    <a href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1" target='_blank'>
                                        <CalendarDaysIcon className='h-11 w-11 text-amber-300 animate-[pulse_1.2s_cubic-bezier(0.4,0,0.9,1)_3]' />
                                    </a>

                                </div>
                                <Image
                                    alt="Zafar-ul-Hasan Madani logo"
                                    src={Logo}
                                    className="w-12 h-12 shrink-0 min-[425px]:mr-30 xs:mr-20 xxs:mr-20 sm:mr-40 md:mr-70 lg:mr-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center xl:hidden xxl:hidden lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center  rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-9 font-extrabold text-amber-300 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-9 text-amber-300 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel
                transition
                className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/95 transition duration-300 ease-in-out data-closed:opacity-0 data-closed:scale-95"
            >
                {/* Close button */}
                <DisclosureButton className="absolute top-5 right-8 text-amber-300 hover:text-white">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-10 w-10" />
                </DisclosureButton>

                <div className="space-y-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                                'flex rounded-md px-3 py-2 text-lg font-medium transition-colors',
                            )}
                        >
                            <Image
                                src={item.icon}
                                alt="Zafar-ul-Hasan Madani logo"
                                width={30}
                                height={30}
                                priority
                                className="h-7 w-7 mr-2 object-contain"
                            />{item.name}
                        </DisclosureButton>
                    ))}
                    <a
                        href="/"
                        type="button"
                        className={`w-full mt-20 text-lg border-[#25D366] bg-[#25D366] border-[1px] min-[640px]:w-auto px-3 rounded-full py-2 bg-button-primary font-bold text-[#06402B] hover:bg-button-hover transition-colors flex items-center justify-center ${arefRuqaa.className}`}
                    >
                        <svg className="h-7 w-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#06402B">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.45 17.5 2 12.04 2M12.05 20.03C10.58 20.03 9.14 19.64 7.89 18.89L7.59 18.71L4.43 19.55L5.28 16.44L5.09 16.14C4.29 14.87 3.87 13.41 3.87 11.91C3.87 7.42 7.51 3.78 12.05 3.78C16.59 3.78 20.22 7.42 20.22 11.92C20.22 16.41 16.59 20.03 12.05 20.03M16.73 13.96C16.49 13.84 15.33 13.27 15.11 13.19C14.9 13.11 14.74 13.07 14.58 13.31C14.42 13.55 13.96 14.1 13.82 14.26C13.68 14.42 13.54 14.44 13.3 14.32C13.06 14.2 12.28 13.94 11.36 13.12C10.63 12.47 10.14 11.68 10 11.44C9.86 11.2 9.98 11.07 10.1 10.95C10.21 10.84 10.35 10.66 10.49 10.49C10.63 10.32 10.68 10.2 10.76 10.04C10.84 9.88 10.8 9.74 10.74 9.62C10.68 9.5 10.12 8.12 9.89 7.56C9.66 7.01 9.43 7.09 9.27 7.09C9.13 7.09 8.97 7.09 8.81 7.09C8.65 7.09 8.39 7.15 8.17 7.39C7.95 7.63 7.33 8.21 7.33 9.4C7.33 10.59 8.19 11.74 8.31 11.9C8.43 12.06 10.02 14.51 12.45 15.58C13.03 15.83 13.48 15.98 13.83 16.1C14.4 16.29 14.92 16.26 15.33 16.2C15.79 16.13 16.73 15.63 16.92 15.07C17.11 14.51 17.11 14.04 17.05 13.96C16.99 13.88 16.85 13.84 16.73 13.96Z" />
                        </svg>WhatsApp
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
