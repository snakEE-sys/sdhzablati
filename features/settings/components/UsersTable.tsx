"use client";

import { Users } from "lucide-react";
import { SettingsCard } from "./SettingsHeader";
import { UserActions } from "./UserActions";
import { User } from "better-auth/types";

export function UsersTable({ users }: { users: User[] }) {
  return (
    <SettingsCard
      title="Uživatelé"
      description="Správa uživatelů s přístupem do administrace"
      icon={<Users className="h-5 w-5" />}
    >
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Uživatel
              </th>

              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Email
              </th>

              <th className="w-16 px-4 py-3" />
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {users.map((user: User) => (
              <tr
                key={user.id}
                className="transition-colors hover:bg-slate-50/70"
              >
                <td className="px-4 py-2">
                  <div className="font-medium text-slate-900">{user.name}</div>
                </td>

                <td className="px-4 py-2 text-sm text-slate-500">
                  {user.email}
                </td>

                <td className="px-4 py-2">
                  <UserActions userId={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SettingsCard>
  );
}
