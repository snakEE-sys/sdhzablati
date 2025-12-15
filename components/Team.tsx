import Image from "next/image";

export const Team = () => {
  const team = [
    { name: "Jan Plasgura", funkce: "Starosta" },
    { name: "Jiří Misioř", funkce: "Hospodář" },
    { name: "Jan Plasgura", funkce: "Velitel jednotky" },
    { name: "Kateřina Laubrová", funkce: "Vedoucí mládeže" },
  ];

  return (
    <>
      <section id="tym" className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Náš tým</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.funkce} className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden mb-4 w-40 h-40">
                  <Image
                    src="/images/user_placeholder.png"
                    alt={`Člen týmu ${member}`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-slate-600 mb-2">{member.funkce}</p>
                <p className="text-sm text-slate-500 text-center"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
