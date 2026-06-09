import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { clinics } from "@/lib/demo-data";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#f7f4ef]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              ["Termine heute", "24"],
              ["Offene Buchungen", "7"],
              ["Konflikte", "2"],
              ["Check-Ins", "18"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-4 rounded-xl shadow">
                <div className="text-sm text-gray-500">{label}</div>
                <div className="text-3xl font-bold">{value}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold mb-3">Kliniken</h3>
            <ul className="space-y-2">
              {clinics.map((clinic) => (
                <li key={clinic}>{clinic}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
