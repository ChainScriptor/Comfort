import { Clock, Mail, MapPin, Phone, Workflow } from "lucide-react";


interface Props {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: Props[] = [
    {
        title: "Visit Us",
        subtitle: "Plastira 0, 57009 ,Kaloxwri , Thessaloniki - Greece",
        icon: (<MapPin className="w-6 h-6 text-gray-600 group-hover:text-darkColor transition-colors" />)
    },
    {
        title: "Call Us",
        subtitle: "+30 2310 511191",
        icon: (<Phone className="w-6 h-6 text-gray-600 group-hover:text-darkColor transition-colors" />)
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 9:00 AM - 5:00 PM",
        icon: (<Clock className="w-6 h-6 text-gray-600 group-hover:text-darkColor transition-colors" />)
    },
    {
        title: "Email Us",
        subtitle: "info@comfortfoods.gr",
        icon: (<Mail className="w-6 h-6 text-gray-600 group-hover:text-darkColor transition-colors" />)
    },
]


const FooterTop = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
            {data?.map((item, index) => (
                <ContactItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
        </div>
    )
};
const ContactItem = ({ icon, title, subtitle }: Props) => {
    return <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
        {icon}
        <div >
            <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">{subtitle}</p>
        </div>
    </div>
}
export default FooterTop