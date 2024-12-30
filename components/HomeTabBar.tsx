import { useState } from "react";
import { productType } from "@/constants/index";
import { Repeat } from "lucide-react";

interface ProductType {
    title: string;
    value: string;
}

interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

// Συνάρτηση που χωρίζει τις κατηγορίες σε ομάδες των 5
const groupBy = <T,>(array: T[], size: number): T[][] =>
    array.reduce<T[][]>((acc, _, i) => (i % size === 0 ? acc.concat([array.slice(i, i + size)]) : acc), []);

const productTypeGroups = groupBy<ProductType>(productType, 4); // Χωρίζει σε ομάδες των 5 κατηγοριών

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    const handleSwitchGroup = () => {
        setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % productTypeGroups.length);
    };

    return (
        <div className="flex items-center gap-1.5 text-sm font-semibold">
            <div className="flex items-center gap-1.5">
                {productTypeGroups[currentGroupIndex]?.map((item) => (
                    <button
                        key={item?.title}
                        onClick={() => onTabSelect(item?.title)}
                        className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect
                        ${selectedTab === item?.title ? "bg-darkColor text-white" : "bg-transparent text-darkColor"}`}
                    >
                        {item?.title}
                    </button>
                ))}
            </div>
            {/* Κουμπί για αλλαγή ομάδας */}
            <button
                onClick={handleSwitchGroup}
                className="border border-darkColor p-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect"
            >
                <Repeat className="w-5 h-5" />
            </button>
        </div>
    );
};

export default HomeTabBar;
