import { LucideIcon } from "lucide-react";
type CategoryItemProps ={
    icon: LucideIcon;
    name: string;
};
export default function CategoryItem({icon: Icon, name}: CategoryItemProps) {
    return(
        <div className="flex items-center gap-2 text-gray-300 hover-text-white cursor-pointer hover:text-white transition-colors duration-200">
        <Icon size={18} />
        <span>{name}</span>
        </div>
    );

}