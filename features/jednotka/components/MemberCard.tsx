import Image from "next/image";
import { Member } from "../types";

export function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden mb-4 w-40 h-40">
        <Image
          src={member.picture || "/placeholder.svg"}
          alt={member.name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-slate-600">{member.role}</p>
    </div>
  );
}
