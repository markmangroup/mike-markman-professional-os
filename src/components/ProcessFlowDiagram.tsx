"use client";

import { ArrowRight, TrendingDown } from "lucide-react";

interface ProcessFlowDiagramProps {
  isDarkMode?: boolean;
}

export default function ProcessFlowDiagram({ isDarkMode = false }: ProcessFlowDiagramProps) {
  const stageStyle = (isDeviation?: boolean) => {
    if (isDeviation) {
      return isDarkMode
        ? "bg-red-900/40 border-red-700/70 text-red-200"
        : "bg-red-50 border-red-300 text-red-900";
    }
    return isDarkMode
      ? "bg-blue-900/40 border-blue-700/70 text-blue-200"
      : "bg-blue-100 border-blue-300 text-blue-900";
  };

  const arrowStyle = (isDeviation?: boolean, color?: string) => {
    if (isDeviation) {
      const colors: Record<string, string> = {
        red: isDarkMode ? "text-red-400" : "text-red-600",
        orange: isDarkMode ? "text-orange-400" : "text-orange-600",
        yellow: isDarkMode ? "text-yellow-400" : "text-yellow-600",
        purple: isDarkMode ? "text-purple-400" : "text-purple-600",
      };
      return colors[color || "red"];
    }
    return isDarkMode ? "text-gray-500" : "text-gray-400";
  };

  const badgeStyle = (isDeviation?: boolean, color?: string) => {
    if (isDeviation) {
      const base = isDarkMode
        ? `bg-${color}-900/50 text-${color}-200 border-${color}-700/70`
        : `bg-${color}-100 text-${color}-800 border-${color}-400`;
      return `rounded-full px-2 py-0.5 text-xs font-bold border-2 ${base}`;
    }
    return isDarkMode
      ? "rounded-full px-2 py-0.5 text-xs font-bold border-2 bg-gray-800 text-gray-300 border-gray-700"
      : "rounded-full px-2 py-0.5 text-xs font-bold border-2 bg-gray-200 text-gray-700 border-gray-400";
  };

  return (
    <div className={`w-full p-4 ${isDarkMode ? "bg-neutral-800" : "bg-gray-50"} rounded-lg overflow-x-auto`}>
      <div className="relative min-h-[450px] w-full" style={{ minWidth: "700px" }}>
        {/* SVG Container for cleaner rendering */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          {/* Standard flows (gray) */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isDarkMode ? "#6b7280" : "#9ca3af"}
              />
            </marker>
            <marker
              id="arrowhead-red"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isDarkMode ? "#f87171" : "#dc2626"}
              />
            </marker>
            <marker
              id="arrowhead-orange"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isDarkMode ? "#fb923c" : "#ea580c"}
              />
            </marker>
            <marker
              id="arrowhead-yellow"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isDarkMode ? "#facc15" : "#ca8a04"}
              />
            </marker>
            <marker
              id="arrowhead-purple"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={isDarkMode ? "#c084fc" : "#9333ea"}
              />
            </marker>
          </defs>

          {/* Flow lines */}
          {/* Created -> Qualified (144) */}
          <line x1="80" y1="60" x2="80" y2="140" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="90" y="100" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>144</text>

          {/* Created -> Proposal Dev (245) - DEVIATION */}
          <line x1="80" y1="60" x2="280" y2="140" stroke={isDarkMode ? "#f87171" : "#dc2626"} strokeWidth="3" markerEnd="url(#arrowhead-red)" />
          <text x="180" y="90" className="text-xs font-bold fill-red-600">245</text>

          {/* Created -> Proposal Delivery (79) - DEVIATION */}
          <line x1="80" y1="60" x2="280" y2="220" stroke={isDarkMode ? "#fb923c" : "#ea580c"} strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
          <text x="180" y="130" className="text-xs font-bold fill-orange-600">79</text>

          {/* Created -> Lost (6) */}
          <line x1="80" y1="60" x2="480" y2="220" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="280" y="130" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>6</text>

          {/* Qualified -> Proposal Dev (245) - DEVIATION */}
          <line x1="80" y1="140" x2="280" y2="140" stroke={isDarkMode ? "#f87171" : "#dc2626"} strokeWidth="3" markerEnd="url(#arrowhead-red)" />
          <text x="180" y="130" className="text-xs font-bold fill-red-600">245</text>

          {/* Qualified -> Proposal Delivery (79) - DEVIATION */}
          <line x1="80" y1="140" x2="280" y2="220" stroke={isDarkMode ? "#fb923c" : "#ea580c"} strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
          <text x="180" y="180" className="text-xs font-bold fill-orange-600">79</text>

          {/* Qualified -> Lost (32) */}
          <line x1="80" y1="140" x2="480" y2="220" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="280" y="170" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>32</text>

          {/* Proposal Dev -> Proposal Delivery (150) */}
          <line x1="280" y1="140" x2="280" y2="220" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="290" y="180" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>150</text>

          {/* Proposal Dev -> Finalizing (59) - DEVIATION */}
          <line x1="280" y1="140" x2="280" y2="300" stroke={isDarkMode ? "#facc15" : "#ca8a04"} strokeWidth="3" markerEnd="url(#arrowhead-yellow)" />
          <text x="290" y="220" className="text-xs font-bold fill-yellow-600">59</text>

          {/* Proposal Dev -> Lost (78) */}
          <line x1="280" y1="140" x2="480" y2="220" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="380" y="170" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>78</text>

          {/* Proposal Delivery -> Finalizing (191) */}
          <line x1="280" y1="220" x2="280" y2="300" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="290" y="260" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>191</text>

          {/* Proposal Delivery -> Lost (67) */}
          <line x1="280" y1="220" x2="480" y2="220" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="380" y="210" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>67</text>

          {/* Finalizing -> Received (9) */}
          <line x1="280" y1="300" x2="280" y2="380" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="290" y="340" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>9</text>

          {/* Finalizing -> Won (264) - DEVIATION */}
          <line x1="280" y1="300" x2="480" y2="380" stroke={isDarkMode ? "#c084fc" : "#9333ea"} strokeWidth="3" markerEnd="url(#arrowhead-purple)" />
          <text x="380" y="340" className="text-xs font-bold fill-purple-600">264</text>

          {/* Received -> Won (241) */}
          <line x1="280" y1="380" x2="480" y2="380" stroke={isDarkMode ? "#6b7280" : "#9ca3af"} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="380" y="370" className={`text-xs font-semibold ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>241</text>
        </svg>

        {/* Process Stages - Positioned absolutely */}
        <div className="absolute top-0 left-0">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Created</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>513</div>
          </div>
        </div>

        <div className="absolute top-20 left-0">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Qualified</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>156</div>
          </div>
        </div>

        <div className="absolute top-20 left-48">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle(true)}`}>
            <div className="text-xs font-semibold mb-1">Proposal Dev</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>296</div>
          </div>
        </div>

        <div className="absolute top-40 left-48">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Proposal Delivery</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>273</div>
          </div>
        </div>

        <div className="absolute top-60 left-48">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Finalizing</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>280</div>
          </div>
        </div>

        <div className="absolute top-80 left-48">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Received</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>11</div>
          </div>
        </div>

        <div className="absolute top-80 left-96">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${stageStyle()}`}>
            <div className="text-xs font-semibold mb-1">Won</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>276</div>
          </div>
        </div>

        <div className="absolute top-40 left-96">
          <div className={`border-2 rounded-lg px-3 py-2 text-center min-w-[120px] ${isDarkMode ? "bg-red-900/40 border-red-700/70 text-red-200" : "bg-red-50 border-red-300 text-red-900"}`}>
            <div className="text-xs font-semibold mb-1">Lost</div>
            <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>244</div>
          </div>
        </div>
      </div>
    </div>
  );
}

