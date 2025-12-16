import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon | string;
  gradient: string;
}

const ServiceCard1 = ({ title, description, icon: Icon, gradient }: ServiceCardProps) => {
  return (
    <div className={`bg-linear-to-br ${gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {typeof Icon === 'string' ? (
        <div className="text-4xl mb-4">{Icon}</div>
      ) : (
        <Icon className="w-10 h-10 mb-4" />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
};

export default ServiceCard1