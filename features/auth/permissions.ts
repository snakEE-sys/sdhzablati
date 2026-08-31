import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  interventions: ["create", "read", "update", "delete"],
  posts: ["create", "read", "update", "delete"],
  settings: ["create", "read", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const dashboardUser = ac.newRole({
  interventions: ["create", "read", "update", "delete"],
  posts: ["create", "read", "update", "delete"],
});

export const admin = ac.newRole({
  interventions: ["create", "read", "update", "delete"],
  posts: ["create", "read", "update", "delete"],
  settings: ["create", "read", "update", "delete"],
  ...adminAc.statements,
});
