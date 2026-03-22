import CategoryItem from "./category-item";
import { Smartphone,Laptop, Watch, Camera, Headphones, Gamepad } from "lucide-react"

export default function CategoryNavbar(){
    return(
    <div className ="bg-gray-900 text-white px-10 py-3 flex justify-between">
        <CategoryItem icon={Smartphone} name="Phones"/>
        <CategoryItem icon={Laptop} name="Laptop"/>
        <CategoryItem icon={Watch} name="Watch"/>
        <CategoryItem icon={Camera} name="Camera"/>
        <CategoryItem icon={Headphones} name="Headphones"/>
        <CategoryItem icon={Gamepad} name="Gamepad"/>
    </div>
    )
}