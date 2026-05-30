interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  icon,
  title,
  description,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
      bg-[#111] border-gray-800 rounded-xl p-6 
      ${hover ? "hover:border-orange-500 hover:-translate-y-2 transition-all duration-300" : ""}
      ${className}
    `}
    >
      {icon && <div className="mb-4 text-orange-500">{icon}</div>}
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
