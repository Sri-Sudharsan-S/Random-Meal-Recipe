import { Linkedin, Github, Mail, } from "lucide-react";

const socialLinks = [
    { href: "https://www.linkedin.com/in/srisudharsans", icon: Linkedin },
    { href: "https://github.com/Sri-Sudharsan-S", icon: Github },
    { href: "mailto:srisudharsan432@gmail.com", icon: Mail },
    // { href: "https://www.instagram.com/arularul_7", icon: Instagram }
];

const Social = () => {
    return (
        <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <IconComponent />
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
