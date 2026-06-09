# ONplAI – Release 1 Platform Scaffold

Webbasierte Event Operations Plattform mit Next.js und Supabase.

## Schnellstart lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

Dann öffnen: http://localhost:3000

## Supabase Setup

1. Supabase Projekt erstellen
2. SQL Editor öffnen
3. `supabase/schema.sql` ausführen
4. `supabase/seed.sql` ausführen
5. Project URL und anon key in `.env.local` eintragen

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## GitHub Upload

Dieses ZIP entpacken und alle Dateien direkt in das Repository `meimedone/onplai` hochladen.

Danach GitHub mit Vercel verbinden.

## Enthaltene Release-1 Bereiche

- Dashboard mit Absprüngen
- Buchungs-Inbox mit regelbasiertem Vorschlag
- Terminkalender
- Digital Twin Basis
- Verfügbarkeiten / Sperren
- Check-In
- Sales Workspace
- Leads & Follow-ups
- Administration / Themen / Rollen
- Event Copilot als regelbasierter Assistent
- Externe Buchungsseite `/booking`
