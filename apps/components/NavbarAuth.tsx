import Link from "next/link"
import { motion } from "framer-motion"

const NavbarAuth = () => {
    return (
        <nav className="bg-primary-pressed">
            <div className="w-full max-w-[1440px] mx-auto px-5 py-8 md:px-24">
                <div className="">
                    <div className="w-full flex items-center justify-center md:justify-between">
                        <Link href="/">
                            <motion.div className="hover:cursor-pointer flex flex-col" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.2 }}>
                                <h1 className="font-gilroy-bold text-2xl text-neutral-10">Portfolio.</h1>
                                <p className="text-xs text-neutral-10 font-gilroy-normal">Frontend Developer</p>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAuth