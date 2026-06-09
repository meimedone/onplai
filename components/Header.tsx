import { eventInfo } from "@/lib/demo-data";

export default function Header() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between">
      <div>
        <h1 className="font-bold text-xl">{eventInfo.name}</h1>
        <p className="text-sm text-gray-500">
          {eventInfo.location} · {eventInfo.start} - {eventInfo.end}
        </p>
      </div>
      <div className="font-medium">Demo User</div>
    </header>
  );
}
