"use client";

import React, { useMemo } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

interface ProcessFlowDiagramProps {
  isDarkMode?: boolean;
}

export default function ProcessFlowDiagram({ isDarkMode = false }: ProcessFlowDiagramProps) {
  // Define process stages as nodes with hierarchical positioning
  const nodes: Node[] = useMemo(
    () => [
      {
        id: "created",
        type: "default",
        data: { label: "Created", count: 513 },
        position: { x: 0, y: 0 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "qualified",
        type: "default",
        data: { label: "Qualified", count: 156 },
        position: { x: 0, y: 120 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "proposal_dev",
        type: "default",
        data: { label: "Proposal Dev", count: 296 },
        position: { x: 200, y: 120 },
        style: {
          background: isDarkMode ? "#7f1d1d" : "#fee2e2",
          color: isDarkMode ? "#fecaca" : "#991b1b",
          border: `2px solid ${isDarkMode ? "#ef4444" : "#dc2626"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "proposal_delivery",
        type: "default",
        data: { label: "Proposal Delivery", count: 273 },
        position: { x: 200, y: 240 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "finalizing",
        type: "default",
        data: { label: "Finalizing", count: 280 },
        position: { x: 200, y: 360 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "received",
        type: "default",
        data: { label: "Received", count: 11 },
        position: { x: 200, y: 480 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "won",
        type: "default",
        data: { label: "Won", count: 276 },
        position: { x: 400, y: 480 },
        style: {
          background: isDarkMode ? "#1e3a8a" : "#dbeafe",
          color: isDarkMode ? "#bfdbfe" : "#1e40af",
          border: `2px solid ${isDarkMode ? "#3b82f6" : "#3b82f6"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
      {
        id: "lost",
        type: "default",
        data: { label: "Lost", count: 244 },
        position: { x: 400, y: 240 },
        style: {
          background: isDarkMode ? "#7f1d1d" : "#fee2e2",
          color: isDarkMode ? "#fecaca" : "#991b1b",
          border: `2px solid ${isDarkMode ? "#ef4444" : "#dc2626"}`,
          borderRadius: "8px",
          padding: "12px 16px",
          minWidth: "120px",
          textAlign: "center",
          fontWeight: "600",
        },
      },
    ],
    [isDarkMode]
  );

  // Define flows as edges with labels and styling
  const edges: Edge[] = useMemo(
    () => [
      // Standard flows (gray)
      {
        id: "created-qualified",
        source: "created",
        target: "qualified",
        label: "144",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      // Deviations (colored and thicker)
      {
        id: "created-proposal_dev",
        source: "created",
        target: "proposal_dev",
        label: "245",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#f87171" : "#dc2626",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#f87171" : "#dc2626",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#f87171" : "#dc2626",
        },
      },
      {
        id: "created-proposal_delivery",
        source: "created",
        target: "proposal_delivery",
        label: "79",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#fb923c" : "#ea580c",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#fb923c" : "#ea580c",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#fb923c" : "#ea580c",
        },
      },
      {
        id: "created-lost",
        source: "created",
        target: "lost",
        label: "6",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "qualified-proposal_dev",
        source: "qualified",
        target: "proposal_dev",
        label: "245",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#f87171" : "#dc2626",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#f87171" : "#dc2626",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#f87171" : "#dc2626",
        },
      },
      {
        id: "qualified-proposal_delivery",
        source: "qualified",
        target: "proposal_delivery",
        label: "79",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#fb923c" : "#ea580c",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#fb923c" : "#ea580c",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#fb923c" : "#ea580c",
        },
      },
      {
        id: "qualified-lost",
        source: "qualified",
        target: "lost",
        label: "32",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "proposal_dev-proposal_delivery",
        source: "proposal_dev",
        target: "proposal_delivery",
        label: "150",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "proposal_dev-finalizing",
        source: "proposal_dev",
        target: "finalizing",
        label: "59",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#facc15" : "#ca8a04",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#facc15" : "#ca8a04",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#facc15" : "#ca8a04",
        },
      },
      {
        id: "proposal_dev-lost",
        source: "proposal_dev",
        target: "lost",
        label: "78",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "proposal_delivery-finalizing",
        source: "proposal_delivery",
        target: "finalizing",
        label: "191",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "proposal_delivery-lost",
        source: "proposal_delivery",
        target: "lost",
        label: "67",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "finalizing-received",
        source: "finalizing",
        target: "received",
        label: "9",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "finalizing-won",
        source: "finalizing",
        target: "won",
        label: "264",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#c084fc" : "#9333ea",
          strokeWidth: 3,
        },
        labelStyle: {
          fill: isDarkMode ? "#c084fc" : "#9333ea",
          fontWeight: 700,
          fontSize: "13px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#c084fc" : "#9333ea",
        },
      },
      {
        id: "received-won",
        source: "received",
        target: "won",
        label: "241",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "12px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
    ],
    [isDarkMode]
  );

  // Custom node component to show label and count
  const nodeTypes = useMemo(
    () => ({
      default: ({ data }: { data: { label: string; count: number } }) => (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "4px" }}>
            {data.label}
          </div>
          <div style={{ fontSize: "16px", fontWeight: 700 }}>
            {data.count}
          </div>
        </div>
      ),
    }),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: isDarkMode ? "#1f2937" : "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        preventScrolling={false}
      >
        <Background
          color={isDarkMode ? "#374151" : "#e5e7eb"}
          gap={16}
          size={1}
        />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(node) => {
            if (node.id === "proposal_dev" || node.id === "lost") {
              return isDarkMode ? "#ef4444" : "#dc2626";
            }
            return isDarkMode ? "#3b82f6" : "#3b82f6";
          }}
          maskColor={isDarkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
          style={{
            background: isDarkMode ? "#1f2937" : "#f9fafb",
          }}
        />
      </ReactFlow>
    </div>
  );
}
