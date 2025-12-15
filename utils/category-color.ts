export const getCategoryColor = (category: string | null) => {
  switch (category) {
    case "Novinky":
      return "bg-green-100 text-green-800";
    case "Školení":
      return "bg-pink-100 text-pink-800";
    case "Události":
      return "bg-purple-100 text-purple-800";
    case "Soutěž":
      return "bg-red-100 text-red-800";
    case "Sbor":
      return "bg-blue-100 text-blue-800";
    case "Jednotka":
      return "bg-cyan-100 text-cyan-800";
    case "Mládež":
      return "bg-amber-100 text-amber-800";
    //Vyjezd categories
    case "Záchrana osob a zvířat":
      return "bg-green-100 text-green-800";
    case "Požár":
      return "bg-red-100 text-red-800";
    case "Technická pomoc":
      return "bg-yellow-100 text-yellow-800";
    case "Dopravní nehoda":
      return "bg-blue-100 text-blue-800";
    case "Planý poplach":
      return "bg-purple-100 text-purple-800";
    case "Ostatní pomoc":
      return "bg-amber-100 text-amber-800";
    case "Technologická pomoc":
      return "bg-cyan-100 text-cyan-800";
    case "Únik nebezpečných látek":
      return "bg-pink-100 text-pink-800";
    case "Ostatní mimořádné události":
      return "bg-indigo-100 text-indigo-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};
