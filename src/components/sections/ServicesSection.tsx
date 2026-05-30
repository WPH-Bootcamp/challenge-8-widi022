
import Card from "../ui/card";
import Icon, {type IconName} from "../ui/icon";

const services: { icon: IconName; title: string; desc: string } [] = [
  { icon: "webdev", title: "Web Development", desc: "Build fast, scalable..." },
  {
    icon: "mobile",
    title: "Mobile App Development",
    desc: "Native & cross-platform...",
  },
  { icon: "uiux", title: "UI/UX Design", desc: "Delight users with..." },
  { icon: "software", title: "Software Development", desc: "Custom software..." },
  { icon: "itinfrastructure", title: "IT Infrastructure", desc: "Robust IT..." },
  { icon: "cybersecurity", title: "Cybersecurity", desc: "Protect your..." },
  { icon: "qa", title: "QA & Testing", desc: "Rigorous testing..." },
  { icon: "consulting", title: "Tech Consulting", desc: "Strategic guidance..." },
  { icon: "cloud", title: "Cloud Solutions", desc: "Scalable cloud..." },
 
];

export default function ServicesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((item) => (
        <Card
          key={item.icon}
          icon={<Icon name={item.icon} size={40} />}
          title={item.title}
          description={item.desc}
          hover={true}
          className="bg-[#0a0a0a] border-gray-800"
        />
      ))}
    </div>
  );
}
