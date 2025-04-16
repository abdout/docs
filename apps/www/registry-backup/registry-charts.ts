import { type Registry } from "shadcn/registry"

export const charts: Registry["items"] = [
  // Area Charts
  {
    name: "chart-area-axes",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-axes.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-default",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-default.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-gradient",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-gradient.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-icons",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-icons.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-interactive",
    type: "registry:template",
    registryDependencies: ["card", "chart", "select"],
    files: [
      {
        path: "charts/chart-area-interactive.tsx",
        type: "registry:component",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-legend",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-legend.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-linear",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-linear.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-stacked-expand",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked-expand.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-stacked",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-step",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-step.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-area"],
  },

  // Bar Charts
  {
    name: "chart-bar-active",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-active.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-default",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-default.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-horizontal",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-horizontal.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-interactive",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-interactive.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-label-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-label-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-label",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-label.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-mixed",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-mixed.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-multiple",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-multiple.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-negative",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-negative.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },
  {
    name: "chart-bar-stacked",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-stacked.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-bar"],
  },

  // Line Charts
  {
    name: "chart-line-default",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-default.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-dots-colors",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots-colors.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-dots-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-dots",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-interactive",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-interactive.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-label-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-label-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-label",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-label.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-linear",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-linear.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-multiple",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-multiple.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },
  {
    name: "chart-line-step",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-step.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-line"],
  },

  // Pie Charts
  {
    name: "chart-pie-donut-active",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut-active.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-donut-text",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut-text.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-donut",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-interactive",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-interactive.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-label-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-label-list",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label-list.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-label",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-legend",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-legend.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-separator-none",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-separator-none.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-simple",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-simple.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },
  {
    name: "chart-pie-stacked",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-stacked.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-pie"],
  },

  // Radar Charts
  {
    name: "chart-radar-default",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-default.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-dots",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-dots.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-circle-fill",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle-fill.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-circle-no-lines",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle-no-lines.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-circle",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-fill",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-fill.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-grid-none",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-none.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-icons",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-icons.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-label-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-label-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-legend",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-legend.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-lines-only",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-lines-only.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-multiple",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-multiple.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },
  {
    name: "chart-radar-radius",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-radius.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radar"],
  },

  // Radial Charts
  {
    name: "chart-radial-grid",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-grid.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-radial-label",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-label.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-radial-shape",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-shape.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-radial-simple",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-simple.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-radial-stacked",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-stacked.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-radial-text",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-text.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-radial"],
  },
  {
    name: "chart-tooltip-default",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-default.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-indicator-line",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-indicator-line.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-indicator-none",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-indicator-none.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-label-none",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-none.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-label-custom",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-custom.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-label-formatter",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-formatter.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-formatter",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-formatter.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-icons",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-icons.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
  {
    name: "chart-tooltip-advanced",
    type: "registry:template",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-advanced.tsx",
        type: "registry:template",
      },
    ],
    categories: ["charts", "charts-tooltip"],
  },
]
