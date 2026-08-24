"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Truck } from "lucide-react";
import React from "react";
import { DeploymentItemm } from "../types";

export function InterventionsTable({
  interventions,
}: {
  interventions: any[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Datum
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Čas
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Kategorie
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Podkategorie
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Adresa
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Jednotky
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {interventions.map((intervention) => (
              <React.Fragment key={intervention.id}>
                <tr
                  key={intervention.id}
                  onClick={() =>
                    setExpandedId(
                      expandedId === intervention.id ? null : intervention.id,
                    )
                  }
                  className="cursor-pointer hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    {new Date(intervention.date).toLocaleDateString("cs-CZ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {intervention.time}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-linear-to-r from-red-500/15 to-red-500/5 text-red-700 text-xs font-semibold">
                      {intervention.category.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 max-w-xs truncate">
                    {intervention.subCategory.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 max-w-xs truncate">
                    {intervention.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {intervention.deployment.length}x
                  </td>
                  <td className="px-6 py-4">
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        expandedId === intervention.id ? "rotate-180" : ""
                      }`}
                    />
                  </td>
                </tr>
                {expandedId === intervention.id && (
                  <tr>
                    <td colSpan={7} className="px-6 py-6 bg-slate-50">
                      <InterventionDetails intervention={intervention} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InterventionDetails({ intervention }: { intervention: any }) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-2">
          Popis zásahu
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {intervention.description}
        </p>
      </div>

      {/* Vehicles */}
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-3">
          Nasazené jednotky a technika
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {intervention.deployment.map((deployment: DeploymentItemm) => (
            <div
              key={deployment.vehicle.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200"
            >
              <div className="rounded-lg bg-slate-50 p-2">
                <Truck className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {deployment.vehicle.name}
                </p>
                <p className="text-xs text-slate-500">{deployment.unit.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
