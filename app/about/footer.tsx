import Link from "next/link";
import { TEXT_CURSOR_STYLE, TEXTCOLOR,BACKGROUNDCOLOR } from "@/constants/ColorConstants";
import { SOCIAL_MEDIA_LINKS } from "@/constants/URLConstants";

const socialTextColor = "text-black font-bold hover:text-blue-500 transition-colors duration-300"
const TEXTCOLORFooter = "text-gray-800";

const Footer = () => {
    return (
        <div className="border-t-2 shadow-md bg-gray-100">
            <div className="w-full container mx-auto text-center ">
                <p className={TEXTCOLORFooter}>&copy; {new Date().getFullYear()} Inshorts Pte. Ltd.</p>
                <p className={TEXTCOLORFooter}>Follow us on   
                    <Link href={SOCIAL_MEDIA_LINKS.TWITTER} className={socialTextColor}> Twitter, </Link>
                    <Link href={SOCIAL_MEDIA_LINKS.FACEBOOK} className={socialTextColor}> Facebook, </Link>
                    <Link href={SOCIAL_MEDIA_LINKS.INSTAGRAM} className={socialTextColor}> Instagram </Link>
                </p>
            </div>
        </div>
    );
}

export default Footer;