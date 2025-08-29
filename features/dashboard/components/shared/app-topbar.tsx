"use client";

import { useState } from "react";

export default function Topbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="h-14 flex items-center justify-between px-4 gap-3">
      <div className="text-sm text-gray-600">Dashboard</div>
      <div className="flex items-center gap-3">
        <input
          className="border rounded px-3 py-1.5 text-sm"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="text-sm px-3 py-1.5 rounded border">Profile</button>
      </div>
    </div>
  );
}
