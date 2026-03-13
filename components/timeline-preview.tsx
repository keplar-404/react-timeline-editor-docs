"use client";

import React, { useState, useRef } from "react";
import type { TimelineRow, TimelineEffect, TimelineState } from "@keplar-404/react-timeline-editor";
import "@keplar-404/react-timeline-editor/dist/react-timeline-editor.css";

import { Timeline, TransportBar, LoopZoneOverlay, CutOverlay, useTimelinePlayer, splitActionInRow } from "@keplar-404/react-timeline-editor";

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
      className="timeline-preview-container"
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        autoScroll={true}
        style={{ width: "100%", height: "100%" }}
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
      className="timeline-preview-container"
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        style={{ width: "100%", height: "100%" }}
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
      className="timeline-preview-container"
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        gridSnap={true}
        scaleSplitCount={10}
        style={{ width: "100%", height: "100%" }}
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
      className="timeline-preview-container"
    >
      <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        dragLine={true}
        style={{ width: "100%", height: "100%" }}
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
      className="custom-style-preview-wrapper timeline-preview-container"
    >
      <Timeline
        editorData={data}
        effects={customStyleEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        style={{ width: "100%", height: "100%" }}
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
      className="timeline-preview-container"
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
          flexShrink: 0,
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
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
          scale={scale}
          scaleWidth={scaleWidth}
          editorData={scaleData}
          effects={{}}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
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
      className="timeline-preview-container"
    >
      <div style={{ padding: "8px 12px", background: "#2a2a2a", borderBottom: "1px solid #444", fontSize: "12px", color: "#aaa", flexShrink: 0 }}>
        💡 Drag the rows to reorder them
      </div>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
          editorData={data}
          effects={customStyleEffect}
          onChange={(d) => setData(d as TimelineRow[])}
          enableRowDrag={true}
          onRowDragEnd={({ editorData }) => setData(editorData as TimelineRow[])}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
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
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
        width: "100%",
        height: "400px",
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
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
          editorData={data}
          effects={basicMockEffect}
          onChange={(d) => setData(d as TimelineRow[])}
          onScroll={handleScroll}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

// ─── Cut Block (Blade Tool) Preview ───────────────────────────────────────────

const cutMockData: TimelineRow[] = [
  {
    id: "Track A",
    actions: [{ id: "actionA", start: 0, end: 10, effectId: "effect0" }],
  },
  {
    id: "Track B",
    actions: [{ id: "actionB", start: 2, end: 8, effectId: "effect1" }],
  },
];

export function CutBlockPreview() {
  const [data, setData] = useState(cutMockData);
  const [isCutMode, setIsCutMode] = useState(false);

  const scale = 3;
  const scaleSplitCount = 10;
  const scaleWidth = 160;
  const startLeft = 20;
  const rowHeight = 32;
  const editAreaTopOffset = 32;

  const handleCut = (rowId: string, actionId: string, cutTime: number) => {
    const newData = splitActionInRow(data, rowId, actionId, cutTime);
    setData(newData);
  };

  return (
    <div
      className="timeline-preview-container"
    >
      <div style={{ padding: "8px 12px", background: "#2a2a2a", borderBottom: "1px solid #444", display: "flex", gap: "10px", alignItems: "center", flexShrink: 0 }}>
        <button
          onClick={() => setIsCutMode(!isCutMode)}
          style={{
            padding: "4px 10px",
            background: isCutMode ? "#b91c1c" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          {isCutMode ? "Disable Blade Active" : "Enable Blade Mode (Hold 'C')"}
        </button>
        <span style={{ fontSize: "12px", color: "#aaa" }}>
          {isCutMode ? "Hover over actions and click to split them." : "Turn on blade mode to cut blocks."}
        </span>
      </div>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
          editorData={data}
          effects={basicMockEffect}
          onChange={(d) => setData(d as TimelineRow[])}
          scale={scale}
          scaleWidth={scaleWidth}
          startLeft={startLeft}
          rowHeight={rowHeight}
          disableDrag={isCutMode}
          style={{ width: "100%", height: "100%" }}
        />
        <CutOverlay
          data={data}
          scale={scale}
          scaleSplitCount={scaleSplitCount}
          scaleWidth={scaleWidth}
          startLeft={startLeft}
          rowHeight={rowHeight}
          editAreaTopOffset={editAreaTopOffset}
          gridSnap={false}
          config={{ keyboardModifier: "c", showPill: true, showBlockHighlight: true }}
          onModifierChange={setIsCutMode}
          onCut={handleCut}
        />
      </div>
    </div>
  );
}

// ─── Transport Bar Preview ────────────────────────────────────────────────────

export function TransportBarPreview() {
  const timelineRef = useRef<TimelineState | null>(null);
  const [data, setData] = useState<TimelineRow[]>([
    {
      id: "Row 1",
      actions: [
        { id: "A1", start: 0, end: 4, effectId: "effect0" },
        { id: "A2", start: 6, end: 10, effectId: "effect1" },
      ],
    },
    {
      id: "Row 2",
      actions: [
        { id: "B1", start: 2, end: 8, effectId: "effect0" },
      ],
    },
  ]);
  const [loopOn, setLoopOn] = useState(false);
  const [loopStart, setLoopStart] = useState(1);
  const [loopEnd, setLoopEnd] = useState(5);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scale = 1;
  const scaleWidth = 160;
  const startLeft = 20;

  const player = useTimelinePlayer(timelineRef as React.RefObject<TimelineState>, {
    loop: { enabled: loopOn, start: loopStart, end: loopEnd },
  });

  return (
    <div
      className="timeline-preview-container"
    >
      <div style={{ borderBottom: "1px solid #333", flexShrink: 0 }}>
        <TransportBar
          player={player}
          loop={{
            enabled: loopOn,
            start: loopStart,
            end: loopEnd,
            onToggle: () => setLoopOn(!loopOn),
            onStartChange: setLoopStart,
            onEndChange: setLoopEnd,
          }}
        />
      </div>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline 
          ref={timelineRef} 
          scale={scale}
          scaleWidth={scaleWidth}
          startLeft={startLeft}
          editorData={data} 
          effects={basicMockEffect} 
          autoScroll={true}
          onChange={(d) => setData(d as TimelineRow[])} 
          onScroll={(p) => setScrollLeft(p.scrollLeft)}
          style={{ width: "100%", height: "100%" }} 
        />
        {loopOn && (
          <LoopZoneOverlay
            scale={scale}
            scaleWidth={scaleWidth}
            startLeft={startLeft}
            scrollLeft={scrollLeft}
            loopStart={loopStart}
            loopEnd={loopEnd}
            onLoopStartChange={setLoopStart}
            onLoopEndChange={setLoopEnd}
          />
        )}
      </div>
    </div>
  );
}

// ─── Loop Zone Preview ────────────────────────────────────────────────────────

const loopZoneData: TimelineRow[] = [
  { id: "Track A", actions: [{ id: "A", start: 0, end: 10, effectId: "effect0" }] },
];

export function LoopZonePreview() {
  const [data, setData] = useState(loopZoneData);
  const [loopOn, setLoopOn] = useState(true);
  const [loopStart, setLoopStart] = useState(2);
  const [loopEnd, setLoopEnd] = useState(6);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scale = 1;
  const scaleWidth = 160;
  const startLeft = 20;

  return (
    <div
      className="timeline-preview-container"
    >
       <div style={{ padding: "8px 12px", background: "#2a2a2a", borderBottom: "1px solid #444", fontSize: "12px", color: "#aaa", flexShrink: 0 }}>
        <label style={{ display: "flex", gap: "8px", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={loopOn} onChange={(e) => setLoopOn(e.target.checked)} />
          Enable Loop Zone Overlay
        </label>
      </div>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
          scale={scale}
          scaleWidth={scaleWidth}
          startLeft={startLeft}
          editorData={data}
          effects={basicMockEffect}
          onChange={(d) => setData(d as TimelineRow[])}
          onScroll={(p) => setScrollLeft(p.scrollLeft)}
          style={{ width: "100%", height: "100%" }}
        />
        {loopOn && (
          <LoopZoneOverlay
            scale={scale}
            scaleWidth={scaleWidth}
            startLeft={startLeft}
            scrollLeft={scrollLeft}
            loopStart={loopStart}
            loopEnd={loopEnd}
            onLoopStartChange={setLoopStart}
            onLoopEndChange={setLoopEnd}
            config={{ bandColor: "#10b981", bandOpacity: 0.15, showBoundaryLines: true }}
          />
        )}
      </div>
    </div>
  );
}

// ─── Cross Row Drag Preview ───────────────────────────────────────────────────

export function CrossRowDragPreview() {
  const [data, setData] = useState(rowDragData);
  
  return (
    <div
      className="timeline-preview-container"
    >
      <div style={{ padding: "8px 12px", background: "#2a2a2a", borderBottom: "1px solid #444", fontSize: "12px", color: "#aaa", flexShrink: 0 }}>
        💡 Drag action blocks between different tracks
      </div>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
        editorData={data}
        effects={customStyleEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        enableCrossRowDrag={true}
        getGhostPreview={({ action }) => (
          <div style={{ 
            background: "rgba(59, 130, 246, 0.2)", 
            border: "2px solid #3b82f6", 
            height: "100%", 
            borderRadius: "4px", 
            display: "flex", 
            alignItems: "center", 
            padding: "0 8px", 
            color: "#3b82f6", 
            fontSize: "11px",
            fontWeight: "bold"
          }}>
             Moving: {action.id}
          </div>
        )}
        style={{ width: "100%", height: "100%" }}
      />
      </div>
    </div>
  );
}

// ─── Events Preview ───────────────────────────────────────────────────────────

export function EventsPreview() {
  const [data, setData] = useState([{ id: "Click Track", actions: [{id: "action-a", start: 0, end: 4, effectId: "effect0"}] }]);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev].slice(0, 5)); // Keep last 5 logs
  };

  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "400px",
      }}
    >
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <Timeline
        editorData={data}
        effects={basicMockEffect}
        onChange={(d) => setData(d as TimelineRow[])}
        onClickAction={(e, { action, time }) => addLog(`Single-clicked action: ${action.id} at ${time.toFixed(2)}s`)}
        onClickRow={(e, { row, time }) => addLog(`Single-clicked row: ${row.id} at ${time.toFixed(2)}s`)}
        onClickTimeArea={(time) => { addLog(`Clicked time area at: ${time.toFixed(2)}s`); return true; }}
        onDoubleClickRow={(e, { row, time }) => addLog(`Double-clicked row: ${row.id} at ${time.toFixed(2)}s`)}
        onDoubleClickAction={(e, { action, time }) => addLog(`Double-clicked action: ${action.id} at ${time.toFixed(2)}s`)}
        style={{ width: "100%", height: "100%" }}
      />
      </div>
      <div style={{ padding: "12px", background: "#111", borderTop: "1px solid #333", flexShrink: 0 }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#888", textTransform: "uppercase" }}>Event Log (Last 5)</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", minHeight: "100px" }}>
          {logs.length === 0 ? <div style={{ fontSize: "13px", color: "#555" }}>Click around the timeline to see events...</div> : null}
          {logs.map((log, i) => (
            <div key={i} style={{ fontSize: "13px", color: i === 0 ? "#fff" : "#888", fontFamily: "monospace" }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
