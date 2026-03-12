"use client";

import React, { useState, useRef } from "react";
import type { TimelineRow, TimelineEffect, TimelineState } from "@keplar-404/react-timeline-editor";
import "@keplar-404/react-timeline-editor/dist/react-timeline-editor.css";

// Dynamic import wrapper for the Timeline component (avoids SSR issues)
import dynamic from "next/dynamic";

const Timeline = dynamic(
  () =>
    import("@keplar-404/react-timeline-editor").then((mod) => mod.Timeline),
  { ssr: false },
);

// ─── Basic Usage Example ──────────────────────────────────────────────────────

const basicMockData: TimelineRow[] = [
  {
    id: "0",
    actions: [
      { id: "action00", start: 0, end: 2, effectId: "effect0" },
      { id: "action01", start: 3, end: 6, effectId: "effect1" },
    ],
  },
  {
    id: "1",
    actions: [
      { id: "action10", start: 1, end: 4, effectId: "effect0" },
    ],
  },
];

const basicMockEffect: Record<string, TimelineEffect> = {
  effect0: { id: "effect0", name: "Effect 0" },
  effect1: { id: "effect1", name: "Effect 1" },
};

export function BasicTimelinePreview() {
  const [data, setData] = useState(basicMockData);
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        autoScroll={true}
      />
    </div>
  );
}

// ─── Action Config Example ────────────────────────────────────────────────────

const actionConfigData: TimelineRow[] = [
  {
    id: "0",
    actions: [
      {
        id: "action00",
        start: 0,
        end: 2,
        effectId: "effect0",
        movable: false,
      },
      {
        id: "action01",
        start: 3,
        end: 5,
        effectId: "effect0",
        flexible: false,
      },
      {
        id: "action02",
        start: 6,
        end: 8,
        effectId: "effect0",
        flexible: false,
        movable: false,
      },
    ],
  },
];

export function ActionConfigPreview() {
  const [data, setData] = useState(actionConfigData);
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
      />
    </div>
  );
}

// ─── Grid Snap Example ────────────────────────────────────────────────────────

const snapMockData: TimelineRow[] = [
  {
    id: "0",
    actions: [{ id: "action00", start: 0, end: 2, effectId: "effect0" }],
  },
];

export function GridSnapPreview() {
  const [data, setData] = useState(snapMockData);
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        gridSnap={true}
        scaleSplitCount={10}
      />
    </div>
  );
}

// ─── Auxiliary Line Snap Example ──────────────────────────────────────────────

const auxSnapData: TimelineRow[] = [
  {
    id: "0",
    actions: [{ id: "action01", start: 0, end: 2, effectId: "effect0" }],
  },
  {
    id: "1",
    actions: [{ id: "action10", start: 2, end: 4, effectId: "effect0" }],
  },
];

export function AuxSnapPreview() {
  const [data, setData] = useState(auxSnapData);
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        dragLine={true}
      />
    </div>
  );
}

// ─── Custom Style Example ─────────────────────────────────────────────────────

const customStyleEffect: Record<string, TimelineEffect> = {
  effect0: { id: "effect0", name: "Audio Effect" },
  effect1: { id: "effect1", name: "Video Effect" },
};

const customStyleData: TimelineRow[] = [
  {
    id: "track-1",
    actions: [
      { id: "action-0", start: 0, end: 2, effectId: "effect0" },
      { id: "action-1", start: 3, end: 5, effectId: "effect1" },
    ],
  },
];

export function CustomStylePreview() {
  const [data, setData] = useState(customStyleData);
  return (
    <div
      className="custom-style-preview-wrapper"
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <Timeline
        editorData={data}
        effects={customStyleEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        getActionRender={(action) => {
          if (action.effectId === "effect0") {
            return (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, #cd9541, #e6b05e)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "8px",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: 600,
                  boxSizing: "border-box",
                }}
              >
                🎵 Audio
              </div>
            );
          }
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, #7846a7, #9b6bc9)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "8px",
                color: "white",
                fontSize: "11px",
                fontWeight: 600,
                boxSizing: "border-box",
              }}
            >
              🎬 Video
            </div>
          );
        }}
      />
    </div>
  );
}

// ─── Scale Customization Preview ──────────────────────────────────────────────

export function ScaleCustomizationPreview() {
  const [scaleData] = useState<TimelineRow[]>([{ id: "0", actions: [] }]);
  const [scale, setScale] = useState(5);
  const [scaleWidth, setScaleWidth] = useState(160);

  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px 12px",
          background: "#2a2a2a",
          borderBottom: "1px solid #444",
          fontSize: "12px",
          color: "#ccc",
        }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <span>Scale: {scale}s</span>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <span>Width: {scaleWidth}px</span>
          <input
            type="range"
            min="80"
            max="300"
            step="10"
            value={scaleWidth}
            onChange={(e) => setScaleWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <Timeline
        scale={scale}
        scaleWidth={scaleWidth}
        editorData={scaleData}
        effects={{}}
      />
    </div>
  );
}

// ─── Row Drag Sorting Preview ─────────────────────────────────────────────────

const rowDragData: TimelineRow[] = [
  { id: "Track A", actions: [{ id: "a1", start: 0, end: 3, effectId: "effect0" }] },
  { id: "Track B", actions: [{ id: "b1", start: 1, end: 4, effectId: "effect1" }] },
  { id: "Track C", actions: [{ id: "c1", start: 2, end: 5, effectId: "effect0" }] },
];

export function RowDragPreview() {
  const [data, setData] = useState(rowDragData);
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <div style={{ padding: "8px 12px", background: "#2a2a2a", borderBottom: "1px solid #444", fontSize: "12px", color: "#aaa" }}>
        💡 Drag the rows to reorder them
      </div>
      <Timeline
        editorData={data}
        effects={customStyleEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        enableRowDrag={true}
        onRowDragEnd={({ editorData }) => setData(editorData as TimelineRow[])}
      />
    </div>
  );
}

// ─── Scroll Sync Preview ──────────────────────────────────────────────────────

const scrollSyncData: TimelineRow[] = Array.from({ length: 15 }).map(
  (_, i) => ({
    id: `track-${i + 1}`,
    actions: i % 2 === 0 ? [{ id: `a${i}`, start: i * 0.5, end: i * 0.5 + 3, effectId: "effect0" }] : [],
  }),
);

export function ScrollSyncPreview() {
  const [data, setData] = useState(scrollSyncData);
  const trackHeaderRef = useRef<HTMLDivElement>(null);

  const handleScroll = ({ scrollTop }: { scrollTop: number }) => {
    if (trackHeaderRef.current) {
      trackHeaderRef.current.scrollTop = scrollTop;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "220px",
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <div
        ref={trackHeaderRef}
        style={{
          width: "120px",
          background: "#2a2a2a",
          overflowY: "hidden",
          borderRight: "1px solid #444",
          flexShrink: 0,
        }}
      >
        <div style={{ marginTop: "32px" }}>
          {data.map((row) => (
            <div
              key={row.id}
              style={{
                height: "32px",
                lineHeight: "32px",
                borderBottom: "1px solid #444",
                paddingLeft: "10px",
                fontSize: "11px",
                color: "#ccc",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {row.id}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Timeline
          editorData={data}
          effects={basicMockEffect}
          onChange={(d) => setData(d as TimelineRow[])}
          onScroll={handleScroll}
        />
      </div>
    </div>
  );
}
