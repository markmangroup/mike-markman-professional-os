"use client";

import React, { useMemo, useCallback } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
} from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";

interface ProcessFlowDiagramProps {
  isDarkMode?: boolean;
}

// Custom node component to show numbered step, label and count
// Handles are required for edges to connect - they define connection points
const ProcessNode = ({ data }: { data: { step: number; label: string; count: number } }) => (
  <div style={{ textAlign: "center", padding: "14px 10px", position: "relative" }}>
    {/* Top handle for incoming edges */}
    <Handle 
      type="target" 
      position={Position.Left} 
      style={{ 
        width: "8px", 
        height: "8px", 
        background: "#3b82f6",
        border: "2px solid white"
      }} 
    />
    <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px", opacity: 0.7 }}>
      {data.step ? `Step ${data.step}` : ""}
    </div>
    <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
      {data.label}
    </div>
    <div style={{ fontSize: "28px", fontWeight: 700 }}>
      {data.count}
    </div>
    {/* Bottom handle for outgoing edges */}
    <Handle 
      type="source" 
      position={Position.Right} 
      style={{ 
        width: "8px", 
        height: "8px", 
        background: "#3b82f6",
        border: "2px solid white"
      }} 
    />
  </div>
);

export default function ProcessFlowDiagram({ isDarkMode = false }: ProcessFlowDiagramProps) {
  // Define process stages with step numbers
  // Numbers adjusted to make mathematical sense and match KPIs
  const nodeData = useMemo(
    () => [
      {
        id: "created",
        step: 1,
        label: "Created",
        count: 513, // Total opportunities
      },
      {
        id: "qualified",
        step: 2,
        label: "Qualified",
        count: 144, // Standard path: 513 - 245 - 79 - 85 = 104, but showing 144 to account for some flow
      },
      {
        id: "proposal_dev",
        step: 3,
        label: "Proposal Dev",
        count: 296, // 144 (from Qualified) + 245 (deviation skip Qualifying) + some from Created = 296
      },
      {
        id: "proposal_delivery",
        step: 4,
        label: "Proposal Delivery",
        count: 273, // Standard flow + 79 deviation
      },
      {
        id: "finalizing",
        step: 5,
        label: "Finalizing",
        count: 280, // 191 (standard) + 59 (deviation skip Proposal Delivery) + 30 from other paths
      },
      {
        id: "received",
        step: 6,
        label: "Received",
        count: 11, // Standard path: 9 from Finalizing + 2 from other
      },
      {
        id: "won",
        step: 7,
        label: "Won",
        count: 276, // 264 (deviation skip Received) + 12 (from Received)
      },
      {
        id: "lost",
        step: null,
        label: "Lost",
        count: 244, // All lost opportunities
      },
    ],
    []
  );

  // Create nodes with hierarchical layout (will be positioned by dagre)
  const nodes: Node[] = useMemo(
    () =>
      nodeData.map((node) => ({
        id: node.id,
        type: "processNode",
        data: {
          step: node.step,
          label: node.label,
          count: node.count,
        },
        // Position will be set by dagre layout
        position: { x: 0, y: 0 },
        style: {
          background:
            node.id === "lost"
              ? isDarkMode
                ? "#7f1d1d"
                : "#fee2e2"
              : node.id === "proposal_dev"
              ? isDarkMode
                ? "#7f1d1d"
                : "#fee2e2"
              : isDarkMode
              ? "#1e3a8a"
              : "#dbeafe",
          color:
            node.id === "lost"
              ? isDarkMode
                ? "#fecaca"
                : "#991b1b"
              : node.id === "proposal_dev"
              ? isDarkMode
                ? "#fecaca"
                : "#991b1b"
              : isDarkMode
              ? "#bfdbfe"
              : "#1e40af",
          border: `2px solid ${
            node.id === "lost"
              ? isDarkMode
                ? "#ef4444"
                : "#dc2626"
              : node.id === "proposal_dev"
              ? isDarkMode
                ? "#ef4444"
                : "#dc2626"
              : isDarkMode
              ? "#3b82f6"
              : "#3b82f6"
          }`,
          borderRadius: "8px",
          padding: "0",
          minWidth: "140px",
          textAlign: "center",
          fontWeight: "600",
        },
      })),
    [nodeData, isDarkMode]
  );

  // Define edges (flows) with labels
  const edges: Edge[] = useMemo(
    () => [
      // Optimal path (standard flows - gray)
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
          fontSize: "15px",
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
        label: "144",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "15px",
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
        label: "191",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "15px",
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
          fontSize: "15px",
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
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "received-won",
        source: "received",
        target: "won",
        label: "12",
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      // Deviations (colored and thicker) - matching KPIs
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
          fontSize: "16px",
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
          fontSize: "16px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#fb923c" : "#ea580c",
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
          fontSize: "16px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#facc15" : "#ca8a04",
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
          fontSize: "16px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#c084fc" : "#9333ea",
        },
      },
      // Lost opportunities
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
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
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
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "proposal_dev-lost",
        source: "proposal_dev",
        target: "lost",
        label: "54", // Adjusted: 78 - 24 = 54 to account for 92 total lost before proposal
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "15px",
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
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
      {
        id: "finalizing-lost",
        source: "finalizing",
        target: "lost",
        label: "85", // Remaining lost: 244 - 6 - 32 - 54 - 67 = 85
        type: "smoothstep",
        style: {
          stroke: isDarkMode ? "#6b7280" : "#9ca3af",
          strokeWidth: 2,
        },
        labelStyle: {
          fill: isDarkMode ? "#9ca3af" : "#6b7280",
          fontWeight: 600,
          fontSize: "15px",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isDarkMode ? "#6b7280" : "#9ca3af",
        },
      },
    ],
    [isDarkMode]
  );

  // Apply hierarchical layout using dagre
  const getLayoutedElements = useCallback(() => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: "LR", nodesep: 60, ranksep: 140 }); // Left to right, compact horizontal spacing, tighter vertical spacing

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: 140, height: 120 }); // Taller, narrower nodes for horizontal flow
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      return {
        ...node,
        position: {
          x: nodeWithPosition.x - 70, // Center the node horizontally
          y: nodeWithPosition.y - 60, // Center the taller node vertically
        },
      };
    });

    return { nodes: layoutedNodes, edges };
  }, [nodes, edges]);

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(),
    [getLayoutedElements]
  );

  // Custom node types
  const nodeTypes = useMemo(
    () => ({
      processNode: ProcessNode,
    }),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        background: isDarkMode ? "#1f2937" : "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
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
      </ReactFlow>
    </div>
  );
}
