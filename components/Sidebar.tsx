const menu = [
  "Dashboard",
  "Buchungs-Inbox",
  "Terminkalender",
  "Digital Twin",
  "Verfügbarkeiten",
  "Check-In",
  "Sales Workspace",
  "Leads & Follow-Ups",
  "Administration",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <div className="font-bold text-2xl mb-6">ONplAI</div>
      <nav className="space-y-2">
        {menu.map((item) => (
          <button key={item} className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
