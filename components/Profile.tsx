"use client";

import { Avatar, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "@/utils/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function UserProfile() {
  const router = useRouter();
  const session = useSession();

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }

  return (
    <div className="p-3 space-y-3">
      <div className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-200/60">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <Avatar className="h-10 w-10 ring-2 ring-slate-100">
              <AvatarImage
                src="/images/user_placeholder.png"
                alt="User Avatar"
              />
            </Avatar>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-slate-900 truncate">
              {session.data?.user.name}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {session.data?.user.role}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 h-9 font-medium"
          size="sm"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Odhlásit se
        </Button>
      </div>
    </div>
  );
}
