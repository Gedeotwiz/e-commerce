import GContainer from "@/componemts/Share/GContainer";
import GText from "@/componemts/Share/GText";
import { FaUser, FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

export const Heading = () => {
  const items = [
    { icon: <FaSearch />, label: "Search" },
    { icon: <FaHeart />, label: "Wishlist" },
    { icon: <FaShoppingCart />, label: "Cart" },
    { icon: <FaUser />, label: "Account" },
  ];

  return (
    <GContainer className="p-5 flex flex-wrap justify-between items-center bg-[#E7F6F2]">
      
      <GContainer>
        <GText className="font-bold text-xl text-[#2C3E50]">ALPHA</GText>
      </GContainer>

      <GContainer className="hidden md:flex flex-wrap justify-center items-center gap-10">
        <GText className="cursor-pointer hover:text-[#4390A6]">Home</GText>
        <GText className="cursor-pointer hover:text-[#4390A6]">Shops</GText>
        <GText className="cursor-pointer hover:text-[#4390A6]">Products</GText>
      </GContainer>

      <GContainer className="flex items-center justify-end gap-5 mt-3 md:mt-0 min-w-fit">
        {items.map((item, index) => (
          <GContainer
            key={index}
            className="flex flex-col items-center text-[#2C3E50] hover:text-[#4390A6] transition-colors duration-200 cursor-pointer"
          >
            <div className="text-xl">{item.icon}</div>
            <GText className="hidden sm:block text-sm">{item.label}</GText>
          </GContainer>
        ))}
      </GContainer>
    </GContainer>
  );
};
