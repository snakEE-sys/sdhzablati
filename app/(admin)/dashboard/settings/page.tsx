import { FolderTree, Settings, Users } from "lucide-react";
import { UsersTable } from "@/features/settings/components/UsersTable";
import { CategoriesManager } from "@/features/settings/components/CategoriesManager";
import { SubcategoriesManager } from "@/features/settings/components/SubcategoriesManager";
import { PostCategoriesManager } from "@/features/settings/components/PostCategoriesManager";
import {
  getCategories,
  getSubcategories,
} from "@/features/interventions/queries";
import { getCategories as getPostCategories } from "@/features/posts/queries";
import { getUsers } from "@/features/settings/queries";
import { connection } from "next/server";

export const instant = false;
export default async function SettingsPage() {
  await connection();

  const [users, categories, subcategories, postCategories] = await Promise.all([
    getUsers(),
    getCategories(),
    getSubcategories(),
    getPostCategories(),
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-red-500 p-2.5 shadow-sm">
            <Settings className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Nastavení
            </h1>

            <p className="text-sm text-slate-500">
              Správa uživatelů a konfigurace systému
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Users */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-400" />

              <h2 className="text-sm font-semibold text-slate-900">
                Uživatelé
              </h2>
            </div>

            <UsersTable users={users.users} />
          </section>

          {/* Categories */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <FolderTree className="h-4 w-4 text-slate-400" />

              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Kategorie
                </h2>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              <CategoriesManager categories={categories} />

              <SubcategoriesManager
                categories={categories}
                subcategories={subcategories}
              />

              <PostCategoriesManager categories={postCategories} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
