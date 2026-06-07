(function () {
  const i18n = window.AuditViewerI18n;
  const t = i18n && typeof i18n.t === "function"
    ? i18n.t
    : function (key) { return key; };

  const VALID_CONTRACT = "simduty_audit_export_v1";
  const VALID_SCHEMA = 1;

  const state = {
    raw: null,
    events: [],
    selectedDay: "all",
    selectedEventType: "all",
    search: "",
    showLocalTime: false,
    selectedEventId: null,
    activeTab: "summary"
  };

  const refs = {
    fileInput: document.getElementById("file-input"),
    dropZone: document.getElementById("drop-zone"),
    dropLabel: document.getElementById("drop-label"),
    loadStatus: document.getElementById("load-status"),
    uploadHero: document.getElementById("upload-hero"),
    loadedHeroSummary: document.getElementById("loaded-hero-summary"),
    heroLoadedFile: document.getElementById("hero-loaded-file"),
    heroLoadedMeta: document.getElementById("hero-loaded-meta"),
    viewerApp: document.getElementById("viewer-app"),
    fileName: document.getElementById("file-name"),
    fileMeta: document.getElementById("file-meta"),
    toolbarContextChips: document.getElementById("toolbar-context-chips"),
    daySelect: document.getElementById("day-select"),
    eventTypeSelect: document.getElementById("event-type-select"),
    searchInput: document.getElementById("search-input"),
    localTimeToggle: document.getElementById("local-time-toggle"),
    reloadFileButton: document.getElementById("reload-file-btn"),
    execVehicleName: document.getElementById("exec-vehicle-name"),
    execDutyStatus: document.getElementById("exec-duty-status"),
    execDutyCopy: document.getElementById("exec-duty-copy"),
    execDutyKpis: document.getElementById("exec-duty-kpis"),
    execCostName: document.getElementById("exec-cost-name"),
    execCostCopy: document.getElementById("exec-cost-copy"),
    execCostKpis: document.getElementById("exec-cost-kpis"),
    summaryPrimaryKpis: document.getElementById("summary-primary-kpis"),
    summarySupportKpis: document.getElementById("summary-support-kpis"),
    eldKpis: document.getElementById("eld-kpis"),
    dayConclusion: document.getElementById("day-conclusion"),
    shiftNarrative: document.getElementById("shift-narrative"),
    qualityKpis: document.getElementById("quality-kpis"),
    qualityWarnings: document.getElementById("quality-warnings"),
    openDefects: document.getElementById("open-defects"),
    resolvedDefects: document.getElementById("resolved-defects"),
    findingsKpis: document.getElementById("findings-kpis"),
    criticalFindings: document.getElementById("critical-findings"),
    warningFindings: document.getElementById("warning-findings"),
    infoFindings: document.getElementById("info-findings"),
    criticalCount: document.getElementById("critical-count"),
    warningCount: document.getElementById("warning-count"),
    infoCount: document.getElementById("info-count"),
    opsBadge: document.getElementById("ops-badge"),
    opsReason: document.getElementById("ops-reason"),
    financeKpis: document.getElementById("finance-kpis"),
    financeSummary: document.getElementById("finance-summary"),
    financeTableBody: document.querySelector("#finance-table tbody"),
    timelineTableBody: document.querySelector("#timeline-table tbody"),
    chkHideSnapshots: document.getElementById("chk-hide-snapshots"),
    eventDetail: document.getElementById("event-detail"),
    dutyGrid: document.getElementById("duty-grid"),
    dutySegments: document.getElementById("duty-segments"),
    dutyMarkers: document.getElementById("duty-markers"),
    dutyNowLine: document.getElementById("duty-now-line"),
    dutyLabels: document.getElementById("duty-labels"),
    tabs: Array.from(document.querySelectorAll(".audit-tab")),
    panes: {
      summary: document.getElementById("pane-summary"),
      findings: document.getElementById("pane-findings"),
      finance: document.getElementById("pane-finance"),
      timeline: document.getElementById("pane-timeline")
    },
    hudSafetyVal: document.getElementById("hud-safety-val"),
    hudSafetyRing: document.getElementById("hud-safety-ring"),
    hudComplianceVal: document.getElementById("hud-compliance-val"),
    hudComplianceRing: document.getElementById("hud-compliance-ring"),
    hudEfficiencyVal: document.getElementById("hud-efficiency-val"),
    hudEfficiencyRing: document.getElementById("hud-efficiency-ring"),
    hudCareVal: document.getElementById("hud-care-val"),
    hudCareRing: document.getElementById("hud-care-ring"),
    driverPerformanceHud: document.getElementById("driver-performance-hud")
  };

  function init() {
    if (i18n && typeof i18n.init === "function") {
      i18n.init();
    }

    if (!refs.fileInput || !refs.dropZone) {
      return;
    }

    refs.fileInput.addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        loadFile(file);
      }
    });

    refs.dropZone.addEventListener("click", () => refs.fileInput.click());
    refs.dropZone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        refs.fileInput.click();
      }
    });

    refs.dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      refs.dropZone.classList.add("is-drag-over");
    });

    refs.dropZone.addEventListener("dragleave", () => {
      refs.dropZone.classList.remove("is-drag-over");
    });

    refs.dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      refs.dropZone.classList.remove("is-drag-over");
      const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) {
        loadFile(file);
      }
    });

    if (refs.reloadFileButton) {
      refs.reloadFileButton.addEventListener("click", () => refs.fileInput.click());
    }
    // Botão CSV removido

    refs.daySelect.addEventListener("change", () => {
      state.selectedDay = refs.daySelect.value;
      render();
    });

    if (refs.chkHideSnapshots) {
      refs.chkHideSnapshots.addEventListener("change", () => {
        renderTimeline(state.events);
      });
    }

    if (refs.eventTypeSelect) {
      refs.eventTypeSelect.addEventListener("change", () => {
        state.selectedEventType = refs.eventTypeSelect.value;
        render();
      });
    }

    if (refs.searchInput) {
      refs.searchInput.addEventListener("input", () => {
        state.search = refs.searchInput.value.trim().toLowerCase();
        render();
      });
    }

    refs.localTimeToggle.addEventListener("change", () => {
      state.showLocalTime = !!refs.localTimeToggle.checked;
      render();
    });

    refs.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setTab(tab.dataset.tab || "summary");
      });
    });

    refs.eventDetail.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (target.id !== "copy-evidence-btn") {
        return;
      }
      await copySelectedEvidence();
    });

    document.addEventListener("audit-viewer-language-changed", () => {
      if (state.raw) {
        fillSelectors(false);
        render();
      }
    });
  }

  function loadFile(file) {
    refs.loadStatus.textContent = t("av.status.reading");
    refs.dropLabel.textContent = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result || "");
        const json = JSON.parse(text);
        validateContract(json);

        state.raw = json;
        state.events = normalizeEvents(json.events || []);
        state.selectedDay = "all";
        state.selectedEventType = "all";
        state.search = "";
        state.quickFilter = "none";
        state.selectedEventId = null;

        refs.searchInput.value = "";
        refs.viewerApp.classList.remove("is-hidden");
        refs.uploadHero.classList.add("is-loaded");
        refs.loadedHeroSummary.classList.remove("is-hidden");

        refs.fileName.textContent = t("av.toolbar.shift_overview");
        refs.heroLoadedFile.textContent = file.name;
        refs.loadStatus.textContent = t("av.status.loaded");

        fillSelectors(true);
        render();
      } catch (error) {
        refs.loadStatus.textContent = t("av.status.load_failed", { error: error.message });
      }
    };

    reader.onerror = () => {
      refs.loadStatus.textContent = t("av.status.read_error");
    };

    reader.readAsText(file, "utf-8");
  }

  function validateContract(json) {
    if (!json || typeof json !== "object") {
      throw new Error(t("av.error.invalid_json"));
    }
    if (json.contract !== VALID_CONTRACT) {
      throw new Error(t("av.error.contract", { contract: VALID_CONTRACT }));
    }
    if (json.schemaVersion !== VALID_SCHEMA) {
      throw new Error(t("av.error.schema", { schema: VALID_SCHEMA }));
    }
    if (!Array.isArray(json.events)) {
      throw new Error(t("av.error.events"));
    }
  }

  function normalizeEvents(events) {
    return events
      .map((event) => {
        const ts = event.realTimestampUtc || "";
        const gameTime = Number(event.gameTime || 0);
        const hasGameTime = Number.isFinite(gameTime) && gameTime >= 0;
        const complianceDay = hasGameTime ? getComplianceDayFromGameTime(gameTime) : null;
        const minuteOfDay = hasGameTime ? gameTime % 1440 : null;
        const dayKey = complianceDay == null ? "invalid-day" : String(complianceDay);
        return {
          id: Number(event.id || 0),
          schemaVersion: Number(event.schemaVersion || 0),
          plate: String(event.plate || ""),
          truckId: String(event.truckId || "").replace(/^VEHICLE\./, ""),
          eventType: String(event.eventType || "UNKNOWN").toUpperCase(),
          gameTime,
          complianceDay,
          minuteOfDay,
          realTimestampUtc: ts,
          prevHash: String(event.prevHash || ""),
          hash: String(event.hash || ""),
          payloadJson: String(event.payloadJson || ""),
          payloadObj: parsePayload(event.payloadJson),
          dayKey
        };
      })
      .sort((a, b) => a.id - b.id);
  }

  function parsePayload(raw) {
    if (typeof raw !== "string" || !raw.trim()) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function fillSelectors(defaultToLatestDay) {
    const days = Array.from(new Set(state.events.map((event) => event.dayKey)))
      .sort((a, b) => sortDayKeys(a, b));

    refs.daySelect.innerHTML = "";
    refs.daySelect.appendChild(makeOption("all", t("av.filter.days_all")));
    days.forEach((day) => refs.daySelect.appendChild(makeOption(day, formatComplianceDayLabel(day))));

    const defaultDay = findDefaultComplianceDay(days);
    if (state.selectedDay !== "all" && days.includes(state.selectedDay)) {
      refs.daySelect.value = state.selectedDay;
    } else if (defaultToLatestDay && defaultDay) {
      state.selectedDay = defaultDay;
      refs.daySelect.value = defaultDay;
    } else {
      state.selectedDay = "all";
      refs.daySelect.value = "all";
    }
  }

  function makeOption(value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }

  function sortDayKeys(a, b) {
    if (a === "invalid-day") {
      return 1;
    }
    if (b === "invalid-day") {
      return -1;
    }
    return Number(a) - Number(b);
  }

  function getComplianceDayFromGameTime(gameTime) {
    return Math.floor(gameTime / 1440);
  }

  function getComplianceDayKeyFromGameTime(gameTime) {
    const value = Number(gameTime);
    return Number.isFinite(value) && value >= 0 ? String(getComplianceDayFromGameTime(value)) : "invalid-day";
  }

  function formatComplianceDayLabel(dayKey) {
    if (dayKey === "invalid-day") {
      return t("av.filter.day_invalid");
    }
    return t("av.filter.compliance_day", { day: dayKey });
  }

  function findDefaultComplianceDay(days) {
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i] !== "invalid-day") {
        return days[i];
      }
    }
    return days[0] || null;
  }

  function render() {
    const events = getFilteredEvents();
    renderOperationalStatus(events);
    renderExportMetadata(events);
    renderExecutiveSummary(events);
    renderSummary(events);
    renderFindings(events);
    renderFinance(events);
    renderTimeline(events);
    renderDutyTimeline(events);
    renderQuality(events);
  }

  function getFilteredEvents() {
    return state.events.filter((event) => {
      if (state.selectedDay !== "all" && event.dayKey !== state.selectedDay) {
        return false;
      }
      return true;
    });
  }

  function renderExportMetadata(events) {
    if (!state.raw) {
      if (refs.heroLoadedMeta) {
        refs.heroLoadedMeta.innerHTML = "";
      }
      if (refs.toolbarContextChips) {
        refs.toolbarContextChips.innerHTML = "";
      }
      if (refs.fileMeta) {
        refs.fileMeta.textContent = t("av.meta.contract_ok");
      }
      return;
    }

    const raw = state.raw;
    const filters = raw.filters || {};
    const totalEvents = state.events.length;
    const visibleEvents = events.length;
    const vehicleParts = buildVehicleLabelParts(state.events);
    const vehicleLabel = buildVehicleLabel(state.events);
    const exportedAt = formatUtcStamp(raw.exportedAtUtc);
    const contract = String(raw.contract || "-");
    const schema = String(raw.schemaVersion ?? "-");

    if (refs.fileMeta) {
      refs.fileMeta.textContent = t("av.meta.export_summary", {
        contract,
        schema,
        events: totalEvents
      });
    }

    if (refs.heroLoadedMeta) {
      refs.heroLoadedMeta.innerHTML = "";
      appendChip(refs.heroLoadedMeta, t("av.meta.exported_at"), exportedAt || "-");
      appendChip(refs.heroLoadedMeta, t("av.kpi.events"), String(totalEvents));
      appendChip(refs.heroLoadedMeta, t("av.kpi.vehicle"), vehicleLabel);
    }

    if (refs.toolbarContextChips) {
      refs.toolbarContextChips.innerHTML = "";
      appendChip(refs.toolbarContextChips, t("av.meta.contract"), contract);
      appendChip(refs.toolbarContextChips, t("av.meta.schema"), schema);
      appendChip(refs.toolbarContextChips, t("av.kpi.day"), state.selectedDay === "all" ? t("av.kpi.day_all") : formatComplianceDayLabel(state.selectedDay));
      if (filters.plate || filters.truckId) {
        const plate = String(filters.plate || vehicleParts.plate || "-");
        const truck = String(filters.truckId ? String(filters.truckId).replace(/^VEHICLE\./, "") : vehicleParts.truckId || "-");
        appendChip(refs.toolbarContextChips, t("av.kpi.vehicle"), `${plate} / ${truck}`);
      }
      appendChip(refs.toolbarContextChips, t("av.kpi.events"), String(visibleEvents));
    }
  }

  function renderSummary(events) {
    const dayLabel = state.selectedDay === "all" ? t("av.kpi.day_all") : formatComplianceDayLabel(state.selectedDay);
    const snapshot = getLatestSnapshot(events);
    const hos = snapshot && snapshot.payloadObj ? (snapshot.payloadObj.hos || {}) : {};
    const finance = buildFinance(events);

    refs.summaryPrimaryKpis.innerHTML = "";
    refs.summarySupportKpis.innerHTML = "";
    const primaryKpis = [
      [t("av.kpi.day"), dayLabel]
    ];
    if (state.selectedDay !== "all") {
      primaryKpis.push([t("av.snapshot.drive_remaining"), formatMinutes(hos.driveTimeRemaining)]);
      primaryKpis.push([t("av.snapshot.shift_remaining"), formatMinutes(hos.shiftTimeRemaining)]);
    } else {
      const daysCount = new Set(events.map((e) => e.dayKey)).size;
      primaryKpis.push([t("av.kpi.events"), String(events.length)]);
      primaryKpis.push([t("av.kpi.days_logged"), String(daysCount)]);
    }
    primaryKpis.push([t("av.finance.net_cost"), formatMoney(finance.netCost)]);

    const transitions = countDutyTransitions(events);
    let supportKpis = [];
    if (state.selectedDay !== "all") {
      supportKpis.push([t("av.kpi.events"), String(events.length)]);
    }
    supportKpis.push([t("av.kpi.duty_transitions"), String(transitions)]);
    supportKpis.push([t("av.kpi.vehicle"), buildVehicleLabel(events)]);

    primaryKpis.forEach(([label, value]) => refs.summaryPrimaryKpis.appendChild(buildKpiCard(label, value)));
    supportKpis.forEach(([label, value]) => refs.summarySupportKpis.appendChild(buildKpiCard(label, value)));

    const findings = collectFindings(events);
    refs.dayConclusion.textContent = t("av.summary.conclusion", {
      hos: findings.hos.length,
      dvir: findings.dvir.length,
      cost: formatMoney(finance.netCost)
    });
    if (!events.length) {
      refs.dayConclusion.textContent = t("av.ops.reason_empty");
    }

    renderShiftNarrative(events, findings, finance);

    renderEldSnapshot(events);
    renderDriverPerformanceHUD(events);
  }

  function renderDriverPerformanceHUD(events) {
    if (!refs.driverPerformanceHud) return;

    refs.driverPerformanceHud.style.display = "";

    let finalScore = null;

    if (state.selectedDay === "all") {
      const snapshots = events.filter((e) => e.eventType.toLowerCase() === "snapshot" && e.payloadObj && e.payloadObj.currentScore);
      if (snapshots.length > 0) {
        let sumSafety = 0, sumCompliance = 0, sumEfficiency = 0, sumCare = 0;
        snapshots.forEach((s) => {
          sumSafety += s.payloadObj.currentScore.safetyScore || 0;
          sumCompliance += s.payloadObj.currentScore.complianceScore || 0;
          sumEfficiency += s.payloadObj.currentScore.efficiencyScore || 0;
          sumCare += s.payloadObj.currentScore.careScore || 0;
        });
        const len = snapshots.length;
        finalScore = {
          safetyScore: sumSafety / len,
          complianceScore: sumCompliance / len,
          efficiencyScore: sumEfficiency / len,
          careScore: sumCare / len
        };
      }
    } else {
      const snapshot = getLatestSnapshot(events);
      finalScore = snapshot && snapshot.payloadObj && snapshot.payloadObj.currentScore ? snapshot.payloadObj.currentScore : null;
    }
    
    updateGauge(refs.hudSafetyRing, refs.hudSafetyVal, finalScore ? finalScore.safetyScore : null);
    updateGauge(refs.hudComplianceRing, refs.hudComplianceVal, finalScore ? finalScore.complianceScore : null);
    updateGauge(refs.hudEfficiencyRing, refs.hudEfficiencyVal, finalScore ? finalScore.efficiencyScore : null);
    updateGauge(refs.hudCareRing, refs.hudCareVal, finalScore ? finalScore.careScore : null);
  }

  function updateGauge(ring, valNode, scoreValue) {
    if (!ring || !valNode) return;
    if (typeof scoreValue !== "number" || isNaN(scoreValue)) {
      valNode.textContent = "--";
      ring.style.strokeDashoffset = "314";
      return;
    }
    const val = Math.max(0, Math.min(100, Math.round(scoreValue)));
    valNode.textContent = val;
    const offset = 314 - (314 * val / 100);
    ring.style.strokeDashoffset = offset;
  }

  function renderExecutiveSummary(events) {
    const finance = buildFinance(events);
    const snapshot = getLatestSnapshot(events);
    const hos = snapshot && snapshot.payloadObj ? (snapshot.payloadObj.hos || {}) : {};

    if (refs.execVehicleName) {
      refs.execVehicleName.innerHTML = "";
      const vehicleParts = buildVehicleLabelParts(events);
      const plateSpan = document.createElement("span");
      plateSpan.className = "audit-vehicle-plate";
      plateSpan.textContent = vehicleParts.plate;
      refs.execVehicleName.appendChild(plateSpan);
      if (vehicleParts.truckId && vehicleParts.truckId !== "-") {
        const separator = document.createElement("span");
        separator.className = "audit-vehicle-separator";
        separator.textContent = "/";
        const truckSpan = document.createElement("span");
        truckSpan.className = "audit-vehicle-truck";
        truckSpan.textContent = vehicleParts.truckId;
        refs.execVehicleName.appendChild(separator);
        refs.execVehicleName.appendChild(truckSpan);
      }
    }
    if (refs.execDutyStatus) {
      refs.execDutyStatus.textContent = snapshot ? getStatusLabel(hos.currentStatus) : t("av.snapshot.not_found");
    }
    if (refs.execDutyKpis) {
      refs.execDutyKpis.innerHTML = "";
      let dutyItems = [];
      if (state.selectedDay !== "all") {
        dutyItems = [
          [t("av.snapshot.drive_remaining"), formatMinutes(hos.driveTimeRemaining)],
          [t("av.snapshot.shift_remaining"), formatMinutes(hos.shiftTimeRemaining)],
          [t("av.snapshot.break_remaining"), formatMinutes(hos.breakTimeRemaining)],
          [t("av.snapshot.cycle_remaining"), formatMinutes(hos.cycleTimeRemaining)]
        ];
      }
      if (refs.execDutyCopy) {
        refs.execDutyCopy.textContent = snapshot ? t("av.exec.capacity_copy") : t("av.ops.reason_empty");
      }
      dutyItems.forEach(([label, value]) => refs.execDutyKpis.appendChild(buildMiniKpi(label, value)));
    }

    if (refs.execCostName) {
      refs.execCostName.textContent = formatMoney(finance.netCost);
    }
    if (refs.execCostKpis) {
      refs.execCostKpis.innerHTML = "";
      const costItems = [
        [t("av.finance.fines"), formatMoney(finance.fines)],
        [t("av.finance.fuel"), formatMoney(finance.fuel)],
        [t("av.finance.tolls"), formatMoney(finance.tolls)],
        [t("av.finance.rest_credits"), formatMoney(finance.rest)]
      ];
      costItems.forEach(([label, value]) => refs.execCostKpis.appendChild(buildMiniKpi(label, value)));
    }
  }

  function getLatestSnapshot(events) {
    return [...events].reverse().find((event) => event.eventType.toLowerCase() === "snapshot" && event.payloadObj && event.payloadObj.hos) || null;
  }

  function getStatusLabel(statusValue) {
    const statusMap = ["OFF", "SB", "D", "ON"];
    const numeric = Number(statusValue);
    return Number.isFinite(numeric) ? (statusMap[numeric] || String(numeric)) : "-";
  }

  function renderShiftNarrative(events, findings, finance) {
    if (!refs.shiftNarrative) {
      return;
    }
    if (!events.length) {
      refs.shiftNarrative.innerHTML = `<p>${escapeHtml(t("av.narrative.empty"))}</p>`;
      return;
    }

    const first = events[0];
    const last = events[events.length - 1];
    const transitions = countDutyTransitions(events);
    const highRisk = classifyOperationalStatus(events).level === "stop";
    const riskLabel = highRisk ? t("av.narrative.risk_stop") : (findings.hos.length || findings.dvir.length ? t("av.narrative.risk_attention") : t("av.narrative.risk_stable"));

    const lines = [
      t("av.narrative.line_window", {
        from: escapeHtml(formatTimestamp(first.realTimestampUtc, false)),
        to: escapeHtml(formatTimestamp(last.realTimestampUtc, false))
      }),
      t("av.narrative.line_activity", { events: `<strong>${events.length}</strong>`, transitions: `<strong>${transitions}</strong>` }),
      t("av.narrative.line_findings", { hos: `<strong>${findings.hos.length}</strong>`, dvir: `<strong>${findings.dvir.length}</strong>` }),
      t("av.narrative.line_finance", { net: `<strong>${escapeHtml(formatMoney(finance.netCost))}</strong>` }),
      t("av.narrative.line_status", { status: `<strong>${escapeHtml(riskLabel)}</strong>` })
    ];

    refs.shiftNarrative.innerHTML = `<p>${lines.join(" ")}</p>`;
  }

  function countDutyTransitions(events) {
    const points = [];
    events.forEach((event) => {
      if (event.eventType.toLowerCase() !== "snapshot" || !event.payloadObj || !event.payloadObj.hos || !Array.isArray(event.payloadObj.hos.logs)) {
        return;
      }
      event.payloadObj.hos.logs.forEach((log) => {
        if (!log) {
          return;
        }
        const status = Number(log.status);
        const gameTime = Number(log.gameTime);
        if (!Number.isFinite(status) || !Number.isFinite(gameTime)) {
          return;
        }
        points.push({ status, gameTime });
      });
    });

    if (!points.length) {
      return 0;
    }

    points.sort((a, b) => a.gameTime - b.gameTime);
    let transitions = 0;
    let prevStatus = points[0].status;
    for (let i = 1; i < points.length; i++) {
      if (points[i].status !== prevStatus) {
        transitions++;
        prevStatus = points[i].status;
      }
    }
    return transitions;
  }

  function renderEldSnapshot(events) {
    refs.eldKpis.innerHTML = "";
    const snapshotEvent = [...events].reverse().find((event) => event.eventType.toLowerCase() === "snapshot" && event.payloadObj && event.payloadObj.hos);
    if (!snapshotEvent) {
      refs.eldKpis.appendChild(buildKpiCard(t("av.summary.eld_snapshot"), t("av.snapshot.not_found")));
      return;
    }

    const hos = snapshotEvent.payloadObj.hos || {};
    let kpis = [];
    if (state.selectedDay !== "all") {
      const statusMap = ["OFF", "SB", "D", "ON"];
      const currentStatus = Number.isFinite(Number(hos.currentStatus)) ? statusMap[Number(hos.currentStatus)] || String(hos.currentStatus) : "-";
      kpis = [
        [t("av.snapshot.current_status"), currentStatus],
        [t("av.snapshot.drive_used"), formatMinutes(hos.driveMinutesToday)],
        [t("av.snapshot.shift_elapsed"), formatMinutes(hos.shiftElapsedMinutesToday)],
        [t("av.snapshot.cycle_used"), formatMinutes(hos.cycleMinutesUsed)],
        [t("av.snapshot.drive_remaining"), formatMinutes(hos.driveTimeRemaining)],
        [t("av.snapshot.shift_remaining"), formatMinutes(hos.shiftTimeRemaining)],
        [t("av.snapshot.break_remaining"), formatMinutes(hos.breakTimeRemaining)],
        [t("av.snapshot.cycle_remaining"), formatMinutes(hos.cycleTimeRemaining)]
      ];
    } else {
      const findings = collectFindings(events);
      const severity = collectSeverityFindings(events);
      kpis = [
        [t("av.findings.hos_alerts"), String(findings.hos.length)],
        [t("av.findings.dvir_alerts"), String(findings.dvir.length)],
        [t("av.findings.critical"), String(severity.critical.length)],
        [t("av.findings.warning"), String(severity.warning.length)]
      ];
    }

    kpis.forEach(([label, value]) => refs.eldKpis.appendChild(buildKpiCard(label, String(value))));
  }

  function renderFindings(events) {
    const findings = collectFindings(events);
    const severity = collectSeverityFindings(events);
    refs.findingsKpis.innerHTML = "";
    const findingKpis = [
      [t("av.findings.hos_alerts"), String(findings.hos.length)],
      [t("av.findings.dvir_alerts"), String(findings.dvir.length)],
      [t("av.findings.critical"), String(severity.critical.length)],
      [t("av.findings.warning"), String(severity.warning.length)]
    ];
    findingKpis.forEach(([label, value]) => refs.findingsKpis.appendChild(buildKpiCard(label, value)));
    if (refs.criticalCount) {
      refs.criticalCount.textContent = String(severity.critical.length);
    }
    if (refs.warningCount) {
      refs.warningCount.textContent = String(severity.warning.length);
    }
    if (refs.infoCount) {
      refs.infoCount.textContent = String(severity.info.length);
    }
    renderSeverityList(refs.criticalFindings, severity.critical, t("av.findings.none_critical"));
    renderSeverityList(refs.warningFindings, severity.warning, t("av.findings.none_warning"));
    renderSeverityList(refs.infoFindings, severity.info, t("av.findings.none_info"));

    const defects = collectDefects(events);
    renderSeverityList(refs.openDefects, defects.open, t("av.findings.none_open_defects"));
    renderSeverityList(refs.resolvedDefects, defects.resolved, t("av.findings.none_resolved_defects"));
  }

  function collectDefects(events) {
    const tracked = new Map();

    events.forEach((event) => {
      if (event.eventType !== "DVIR_SUBMIT") {
        return;
      }
      const payload = event.payloadObj || {};
      const defects = Array.isArray(payload.defects) ? payload.defects : [];
      const isSafe = payload.isSafeToDrive === true;

      if (!defects.length && isSafe) {
        tracked.set("__safe__", {
          state: "resolved",
          item: buildEvidenceItemModel(event, t("av.findings.defect_mark_safe"), "info")
        });
        return;
      }

      defects.forEach((defect) => {
        const defectText = normalizeDefectLabel(defect);
        const key = defectText.toLowerCase();
        tracked.set(key, {
          state: isSafe ? "resolved" : "open",
          item: buildEvidenceItemModel(event, defectText, isSafe ? "info" : "warning")
        });
      });
    });

    const open = [];
    const resolved = [];
    tracked.forEach((value) => {
      if (value.state === "open") {
        open.push(value.item);
      } else {
        resolved.push(value.item);
      }
    });

    return { open, resolved };
  }

  function normalizeDefectLabel(defect) {
    if (!defect) {
      return t("av.findings.defect_unknown");
    }
    if (typeof defect === "string") {
      return defect;
    }
    if (typeof defect === "object") {
      return String(defect.name || defect.description || defect.code || t("av.findings.defect_unknown"));
    }
    return t("av.findings.defect_unknown");
  }

  function renderSeverityList(target, items, emptyText) {
    if (!target) {
      return;
    }
    target.innerHTML = "";
    if (!items.length) {
      target.appendChild(makeListItem(emptyText, "audit-empty-state"));
      return;
    }
    items.forEach((item) => target.appendChild(typeof item === "string" ? makeListItem(item) : makeEvidenceListItem(item)));
  }

  function renderOperationalStatus(events) {
    if (!refs.opsBadge || !refs.opsReason) {
      return;
    }

    const status = classifyOperationalStatus(events);
    refs.opsBadge.classList.remove("ops-ok", "ops-risk", "ops-stop");

    if (status.level === "stop") {
      refs.opsBadge.classList.add("ops-stop");
    } else if (status.level === "risk") {
      refs.opsBadge.classList.add("ops-risk");
    } else {
      refs.opsBadge.classList.add("ops-ok");
    }

    refs.opsBadge.textContent = status.label;
    refs.opsReason.textContent = status.reason;
  }

  function classifyOperationalStatus(events) {
    if (!events.length) {
      return {
        level: "ok",
        label: t("av.ops.ok"),
        reason: t("av.ops.reason_empty")
      };
    }

    const dvirUnsafe = events.some((event) => {
      if (event.eventType !== "DVIR_SUBMIT") {
        return false;
      }
      const payload = event.payloadObj || {};
      return payload.isSafeToDrive === false;
    });

    if (dvirUnsafe) {
      return {
        level: "stop",
        label: t("av.ops.stop"),
        reason: t("av.ops.reason_dvir_unsafe")
      };
    }

    const hosViolations = events.filter((event) => event.eventType === "HOS_VIOLATION" || event.eventType === "ECON_RULE_HOS_VIOLATION").length;
    const dvirAdvisories = events.filter((event) => event.eventType === "DVIR_ADVISORY").length;

    if (hosViolations > 0 || dvirAdvisories >= 3) {
      return {
        level: "risk",
        label: t("av.ops.risk"),
        reason: t("av.ops.reason_risk", {
          hos: hosViolations,
          dvir: dvirAdvisories
        })
      };
    }

    return {
      level: "ok",
      label: t("av.ops.ok"),
      reason: t("av.ops.reason_ok")
    };
  }

  function renderFinance(events) {
    const summary = buildFinance(events);
    refs.financeKpis.innerHTML = "";
    const kpis = [
      [t("av.finance.net_cost"), formatMoney(summary.netCost)],
      [t("av.finance.total_expenses"), formatMoney(summary.expenses)],
      [t("av.finance.fines"), formatMoney(summary.fines)],
      [t("av.finance.rest_credits"), formatMoney(summary.rest)]
    ];
    kpis.forEach(([label, value]) => refs.financeKpis.appendChild(buildKpiCard(label, value)));
    if (refs.financeSummary) {
      refs.financeSummary.textContent = t("av.finance.overview_text", {
        fines: formatMoney(summary.fines),
        fuel: formatMoney(summary.fuel),
        tolls: formatMoney(summary.tolls),
        maintenance: formatMoney(summary.maint),
        rest: formatMoney(summary.rest)
      });
    }

    refs.financeTableBody.innerHTML = "";
    summary.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${escapeHtml(formatGameTime(row.gameTime))}</td><td>${escapeHtml(row.category)}</td><td><div class="audit-event-cell"><strong>${escapeHtml(row.eventLabel)}</strong><span>${escapeHtml(row.eventType)}</span></div></td><td>${escapeHtml(formatMoney(row.amount))}</td><td>${escapeHtml(row.description)}</td>`;
      refs.financeTableBody.appendChild(tr);
    });

    if (!summary.rows.length) {
      const tr = document.createElement("tr");
      tr.className = "audit-table-empty-row";
      tr.innerHTML = `<td colspan="5">${escapeHtml(t("av.finance.none"))}</td>`;
      refs.financeTableBody.appendChild(tr);
    }
  }

  function renderTimeline(allEvents) {
    refs.timelineTableBody.innerHTML = "";
    
    let events = allEvents;
    if (refs.chkHideSnapshots && refs.chkHideSnapshots.checked) {
      events = allEvents.filter(e => e.eventType.toLowerCase() !== "snapshot");
    }

    events.forEach((event) => {
      const tr = document.createElement("tr");
      const severity = getEventSeverity(event);
      tr.classList.add(`is-${severity}`);
      if (state.selectedEventId === event.id) {
        tr.classList.add("is-selected");
      }
      tr.innerHTML = `<td>${escapeHtml(formatTimestamp(event.realTimestampUtc, state.showLocalTime))}</td><td>${escapeHtml(formatGameTime(event.gameTime))}</td><td><span class="audit-severity-badge is-${severity}">${escapeHtml(getSeverityLabel(severity))}</span></td><td><div class="audit-event-cell"><strong>${escapeHtml(getEventDisplayName(event.eventType))}</strong><span>${escapeHtml(event.eventType)}</span></div></td>`;
      tr.addEventListener("click", () => {
        state.selectedEventId = event.id;
        renderEventDetail(event);
        renderTimeline(events);
      });
      refs.timelineTableBody.appendChild(tr);
    });

    if (!events.length) {
      const tr = document.createElement("tr");
      tr.className = "audit-table-empty-row";
      tr.innerHTML = `<td colspan="4">${escapeHtml(t("av.timeline.none"))}</td>`;
      refs.timelineTableBody.appendChild(tr);
      refs.eventDetail.textContent = t("av.timeline.none_selected");
      return;
    }

    if (state.selectedEventId == null || !events.some((event) => event.id === state.selectedEventId)) {
      state.selectedEventId = events[0].id;
      renderEventDetail(events[0]);
    }
  }

  function renderDutyTimeline(events) {
    if (!refs.dutyGrid || !refs.dutySegments || !refs.dutyMarkers || !refs.dutyLabels || !refs.dutyNowLine) {
      return;
    }

    refs.dutyGrid.innerHTML = "";
    refs.dutySegments.innerHTML = "";
    refs.dutyMarkers.innerHTML = "";
    refs.dutyLabels.innerHTML = "";

    const laneY = [12, 67, 122, 178];
    const statusColor = ["#9ca3af", "#60a5fa", "#00e5ff", "#ffc107"];

    for (let i = 0; i < laneY.length; i++) {
      refs.dutyGrid.appendChild(svgLine(0, laneY[i], 1000, laneY[i], "rgba(0, 229, 255, 0.15)", 1, 0.8));
    }
    for (let h = 0; h <= 24; h++) {
      const x = (h / 24) * 1000;
      refs.dutyGrid.appendChild(svgLine(x, 0, x, 190, "rgba(0, 229, 255, 0.1)", 1, h % 6 === 0 ? 0.6 : 0.35));
      const label = document.createElement("span");
      label.textContent = h.toString().padStart(2, "0");
      refs.dutyLabels.appendChild(label);
    }

    const segments = buildDutySegments(events);
    if (!segments.length) {
      refs.dutyNowLine.style.display = "none";
      return;
    }

    segments.forEach((segment, index) => {
      const y = laneY[segment.status] ?? laneY[0];
      const x1 = (segment.start / 1440) * 1000;
      const x2 = (segment.end / 1440) * 1000;
      const color = statusColor[segment.status] || statusColor[0];
      
      const line = svgLine(x1, y, x2, y, color, 4, 1);
      line.style.filter = `drop-shadow(0 0 5px ${color})`;
      refs.dutySegments.appendChild(line);
      
      if (index > 0) {
        const prevSegment = segments[index - 1];
        const prevY = laneY[prevSegment.status] ?? laneY[0];
        
        const vLine = svgLine(x1, prevY, x1, y, color, 2, 0.4);
        refs.dutySegments.appendChild(vLine);

        const marker = svgCircle(x1, y, 2.5, color, 1);
        marker.style.filter = `drop-shadow(0 0 4px ${color})`;
        refs.dutyMarkers.appendChild(marker);
      }
    });

    const nowX = findNowMarkerX(events);
    if (nowX == null) {
      refs.dutyNowLine.style.display = "none";
    } else {
      const x = (nowX / 1440) * 1000;
      refs.dutyNowLine.setAttribute("x1", String(x));
      refs.dutyNowLine.setAttribute("x2", String(x));
      refs.dutyNowLine.style.display = "block";
    }
  }

  function buildDutySegments(events) {
    if (state.selectedDay === "all") {
      return [];
    }

    const statusFromLogs = [];
    events.forEach((event) => {
      if (event.eventType.toLowerCase() !== "snapshot" || !event.payloadObj || !event.payloadObj.hos || !Array.isArray(event.payloadObj.hos.logs)) {
        return;
      }
      event.payloadObj.hos.logs.forEach((log) => {
        if (!log) {
          return;
        }
        const gameTime = Number(log.gameTime);
        const status = Number(log.status);
        const duration = Number(log.durationMinutes || 0);
        if (!Number.isFinite(gameTime) || !Number.isFinite(status)) {
          return;
        }
        if (getComplianceDayKeyFromGameTime(gameTime) !== state.selectedDay) {
          return;
        }
        statusFromLogs.push({ gameTime, status, duration });
      });
    });

    if (!statusFromLogs.length) {
      return [];
    }

    statusFromLogs.sort((a, b) => a.gameTime - b.gameTime);
    const dedup = [];
    const seen = new Set();
    statusFromLogs.forEach((entry) => {
      const key = `${entry.gameTime}|${entry.status}`;
      if (!seen.has(key)) {
        dedup.push(entry);
        seen.add(key);
      }
    });

    const segments = [];
    for (let i = 0; i < dedup.length; i++) {
      const cur = dedup[i];
      const start = ((cur.gameTime % 1440) + 1440) % 1440;
      let end = 1440;
      if (i + 1 < dedup.length) {
        end = ((dedup[i + 1].gameTime % 1440) + 1440) % 1440;
      } else if (Number.isFinite(cur.duration) && cur.duration > 0) {
        end = Math.min(1440, start + cur.duration);
      }
      if (end <= start) {
        continue;
      }
      segments.push({ start, end, status: cur.status });
    }

    return mergeAdjacentSegments(segments);
  }

  function mergeAdjacentSegments(segments) {
    if (!segments.length) {
      return segments;
    }
    const merged = [segments[0]];
    for (let i = 1; i < segments.length; i++) {
      const prev = merged[merged.length - 1];
      const cur = segments[i];
      if (prev.status === cur.status && prev.end === cur.start) {
        prev.end = cur.end;
      } else {
        merged.push(cur);
      }
    }
    return merged;
  }

  function findNowMarkerX(events) {
    if (state.selectedDay === "all") {
      return null;
    }
    const todayEvents = events.filter((event) => event.dayKey === state.selectedDay);
    const lastSnapshot = [...todayEvents].reverse().find((event) => event.eventType.toLowerCase() === "snapshot" && event.payloadObj);
    if (!lastSnapshot || !Number.isFinite(Number(lastSnapshot.gameTime))) {
      return null;
    }
    const gm = Number(lastSnapshot.gameTime);
    return ((gm % 1440) + 1440) % 1440;
  }

  function svgLine(x1, y1, x2, y2, color, width, opacity) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(x1));
    line.setAttribute("y1", String(y1));
    line.setAttribute("x2", String(x2));
    line.setAttribute("y2", String(y2));
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", String(width));
    line.setAttribute("opacity", String(opacity));
    return line;
  }

  function svgCircle(cx, cy, r, fill, opacity) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", String(cx));
    circle.setAttribute("cy", String(cy));
    circle.setAttribute("r", String(r));
    circle.setAttribute("fill", fill);
    circle.setAttribute("opacity", String(opacity));
    return circle;
  }

  function renderEventDetail(event) {
    const payloadText = event.payloadObj
      ? JSON.stringify(event.payloadObj, null, 2)
      : event.payloadJson || t("av.detail.empty_payload");

    refs.eventDetail.innerHTML = `
      <div class="audit-detail-meta">
        <div class="audit-detail-pills">
          <span class="audit-severity-badge is-${escapeHtml(getEventSeverity(event))}">${escapeHtml(getSeverityLabel(getEventSeverity(event)))}</span>
          <span class="audit-detail-pill">${escapeHtml(formatComplianceDayLabel(event.dayKey))}</span>
          <span class="audit-detail-pill">${escapeHtml(shortHash(event.hash))}</span>
        </div>
        <p><strong>${escapeHtml(t("av.detail.id"))}</strong> ${event.id}</p>
        <p><strong>${escapeHtml(t("av.detail.event"))}</strong> ${escapeHtml(getEventDisplayName(event.eventType))}</p>
        <p><strong>${escapeHtml(t("av.detail.event_code"))}</strong> ${escapeHtml(event.eventType)}</p>
        <p><strong>${escapeHtml(t("av.detail.timestamp"))}</strong> ${escapeHtml(formatTimestamp(event.realTimestampUtc, state.showLocalTime))}</p>
        <p><strong>${escapeHtml(t("av.detail.game_time"))}</strong> ${escapeHtml(formatGameTime(event.gameTime))}</p>
        <p><strong>${escapeHtml(t("av.detail.compliance_day"))}</strong> ${escapeHtml(formatComplianceDayLabel(event.dayKey))}</p>
        <p><strong>${escapeHtml(t("av.detail.plate"))}</strong> ${escapeHtml(event.plate)}</p>
        <p><strong>${escapeHtml(t("av.detail.truck"))}</strong> ${escapeHtml(event.truckId)}</p>
        <p><strong>${escapeHtml(t("av.detail.prev_hash"))}</strong> <code>${escapeHtml(event.prevHash || "-")}</code></p>
        <p><strong>${escapeHtml(t("av.detail.hash"))}</strong> <code>${escapeHtml(event.hash)}</code></p>
      </div>
      <div class="audit-detail-actions">
        <button type="button" id="copy-evidence-btn" class="audit-copy-btn">${escapeHtml(t("av.evidence.copy"))}</button>
        <span id="copy-evidence-status" class="audit-copy-status">${escapeHtml(t("av.evidence.ready"))}</span>
      </div>
      <pre>${escapeHtml(payloadText)}</pre>
    `;
  }

  async function copySelectedEvidence() {
    if (state.selectedEventId == null) {
      return;
    }
    const event = state.events.find((item) => item.id === state.selectedEventId);
    if (!event) {
      return;
    }
    const statusEl = document.getElementById("copy-evidence-status");
    const evidenceText = buildEvidencePack(event);
    try {
      await navigator.clipboard.writeText(evidenceText);
      if (statusEl) {
        statusEl.textContent = t("av.evidence.copied");
      }
    } catch (_error) {
      if (statusEl) {
        statusEl.textContent = t("av.evidence.copy_failed");
      }
    }
  }

  function buildEvidencePack(event) {
    const payloadSummary = summarizePayload(event.payloadObj, event.payloadJson);
    return [
      `[SimDuty Evidence]`,
      `eventId: ${event.id}`,
      `timestampUtc: ${event.realTimestampUtc || "-"}`,
      `eventType: ${event.eventType || "-"}`,
      `plate: ${event.plate || "-"}`,
      `truckId: ${event.truckId || "-"}`,
      `hash: ${event.hash || "-"}`,
      `payloadSummary: ${payloadSummary}`
    ].join("\n");
  }

  function summarizePayload(payloadObj, payloadJson) {
    if (payloadObj && typeof payloadObj === "object") {
      const parts = [];
      if (Object.prototype.hasOwnProperty.call(payloadObj, "isSafeToDrive")) {
        parts.push(`isSafeToDrive=${payloadObj.isSafeToDrive}`);
      }
      if (Array.isArray(payloadObj.defects)) {
        parts.push(`defects=${payloadObj.defects.length}`);
      }
      if (Object.prototype.hasOwnProperty.call(payloadObj, "amount")) {
        parts.push(`amount=${payloadObj.amount}`);
      }
      if (parts.length) {
        return parts.join(", ");
      }
    }

    if (payloadJson && payloadJson.trim()) {
      const compact = payloadJson.replace(/\s+/g, " ").trim();
      return compact.length > 140 ? `${compact.slice(0, 140)}...` : compact;
    }

    return t("av.detail.empty_payload");
  }

  function collectFindings(events) {
    const hos = [];
    const dvir = [];

    events.forEach((event) => {
      if (event.eventType === "HOS_VIOLATION" || event.eventType === "ECON_RULE_HOS_VIOLATION") {
        hos.push(buildEvidenceItemModel(event, t("av.findings.sev_hos_violation"), "warning"));
      }

      if (event.eventType === "DVIR_ADVISORY") {
        dvir.push(buildEvidenceItemModel(event, t("av.findings.sev_dvir_advisory"), "warning"));
      }

      if (event.eventType === "DVIR_SUBMIT") {
        const payload = event.payloadObj || {};
        const hasDefects = Array.isArray(payload.defects) && payload.defects.length > 0;
        const unsafe = payload.isSafeToDrive === false;
        if (hasDefects || unsafe) {
          const submitLabel = unsafe ? t("av.findings.dvir_submit_unsafe") : t("av.findings.dvir_submit_defects");
          dvir.push(buildEvidenceItemModel(event, submitLabel, unsafe ? "critical" : "warning"));
        }
      }
    });

    return { hos, dvir };
  }

  function collectSeverityFindings(events) {
    const critical = [];
    const warning = [];
    const info = [];

    events.forEach((event) => {
      if (event.eventType === "DVIR_SUBMIT") {
        const payload = event.payloadObj || {};
        if (payload.isSafeToDrive === false) {
          critical.push(buildEvidenceItemModel(event, t("av.findings.sev_dvir_unsafe"), "critical"));
          return;
        }
      }

      if (event.eventType === "HOS_VIOLATION" || event.eventType === "ECON_RULE_HOS_VIOLATION") {
        warning.push(buildEvidenceItemModel(event, t("av.findings.sev_hos_violation"), "warning"));
        return;
      }

      if (event.eventType === "DVIR_ADVISORY") {
        warning.push(buildEvidenceItemModel(event, t("av.findings.sev_dvir_advisory"), "warning"));
        return;
      }
      // Os Snapshots de rotina (pings) foram removidos desta lista para evitar
      // inundar a caixa "Info" com centenas de eventos irrelevantes para despacho.
    });

    return { critical, warning, info };
  }

  function renderQuality(events) {
    if (!refs.qualityKpis || !refs.qualityWarnings) {
      return;
    }

    const stats = analyzeQuality(events);
    refs.qualityKpis.innerHTML = "";
    const warnings = [];
    if (stats.parseFailures > 0) {
      warnings.push(t("av.quality.warn_parse", { count: stats.parseFailures }));
    }
    if (stats.temporalRegressions > 0) {
      warnings.push(t("av.quality.warn_temporal", { count: stats.temporalRegressions }));
    }
    if (stats.hashChainBroken) {
      warnings.push(t("av.quality.warn_hash"));
    }

    if (!warnings.length) {
      refs.qualityKpis.appendChild(buildKpiCard("Signal Integrity", "100% OK"));
      refs.qualityWarnings.appendChild(makeListItem(t("av.quality.warn_none")));
      return;
    }
    
    const kpis = [
      [t("av.quality.parse_failures"), String(stats.parseFailures)],
      [t("av.quality.temporal_regressions"), String(stats.temporalRegressions)],
      [t("av.quality.hash_chain"), stats.hashChainBroken ? t("av.quality.hash_broken") : t("av.quality.hash_ok")]
    ];
    kpis.forEach(([label, value]) => refs.qualityKpis.appendChild(buildKpiCard(label, value)));

    warnings.forEach((item) => refs.qualityWarnings.appendChild(makeListItem(item)));
  }

  function analyzeQuality(events) {
    let parseFailures = 0;
    let temporalRegressions = 0;
    let hashChainBroken = false;
    let prevTs = null;
    let prevHash = null;

    events.forEach((event) => {
      if (event.payloadJson && !event.payloadObj) {
        parseFailures++;
      }

      const ts = safeDate(event.realTimestampUtc);
      if (ts && prevTs && ts.getTime() < prevTs.getTime()) {
        temporalRegressions++;
      }
      if (ts) {
        prevTs = ts;
      }

      if (prevHash && event.prevHash && event.prevHash !== prevHash) {
        hashChainBroken = true;
      }
      if (event.hash) {
        prevHash = event.hash;
      }
    });

    return { parseFailures, temporalRegressions, hashChainBroken };
  }

  function formatTimestamp(utcValue, includeLocal) {
    if (!utcValue) {
      return "-";
    }
    const date = safeDate(utcValue);
    if (!date) {
      return utcValue;
    }
    if (!includeLocal) {
      return utcValue;
    }
    return `${utcValue} | ${date.toLocaleString()}`;
  }

  function buildFinance(events) {
    const map = {
      FINE_ISSUED: "fines",
      FUEL_PURCHASE: "fuel",
      TOLL_PAID: "tolls",
      ECON_RULE_MAINT_FUND: "maint",
      ECON_RULE_REST_BONUS: "rest"
    };

    const summary = {
      fines: 0,
      fuel: 0,
      tolls: 0,
      maint: 0,
      rest: 0,
      expenses: 0,
      netCost: 0,
      rows: []
    };

    events.forEach((event) => {
      const key = map[event.eventType];
      if (!key) {
        return;
      }
      const payload = event.payloadObj || {};
      const amount = Number(payload.amount || 0);
      summary[key] += amount;
      summary.rows.push({
        time: event.realTimestampUtc,
        gameTime: event.gameTime,
        eventType: event.eventType,
        eventLabel: getEventDisplayName(event.eventType),
        category: getFinanceCategoryLabel(event.eventType),
        amount,
        description: String(payload.description || payload.offence || payload.reason || "-")
      });
    });

    const expenses = summary.fines + summary.fuel + summary.tolls + summary.maint;
    summary.expenses = expenses;
    summary.netCost = expenses - summary.rest;
    return summary;
  }

  function countByEvent(events) {
    return events.reduce((acc, event) => {
      acc[event.eventType] = (acc[event.eventType] || 0) + 1;
      return acc;
    }, {});
  }

  function setTab(tab) {
    state.activeTab = tab;
    refs.tabs.forEach((button) => {
      const isActive = button.dataset.tab === tab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    Object.keys(refs.panes).forEach((name) => {
      refs.panes[name].classList.toggle("is-hidden", name !== tab);
    });
  }

  function buildKpiCard(label, value) {
    const div = document.createElement("div");
    div.className = "audit-kpi";
    div.innerHTML = `<span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>`;
    return div;
  }

  function buildMiniKpi(label, value) {
    const div = document.createElement("div");
    div.className = "audit-mini-kpi";
    div.innerHTML = `<span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>`;
    return div;
  }

  function getEventDisplayName(eventType) {
    const labels = {
      snapshot: t("av.event.snapshot"),
      SNAPSHOT: t("av.event.snapshot"),
      HOS_VIOLATION: t("av.event.hos_violation"),
      ECON_RULE_HOS_VIOLATION: t("av.event.hos_violation"),
      DVIR_SUBMIT: t("av.event.dvir_submit"),
      DVIR_ADVISORY: t("av.event.dvir_advisory"),
      FINE_ISSUED: t("av.event.fine_issued"),
      FUEL_PURCHASE: t("av.event.fuel_purchase"),
      TOLL_PAID: t("av.event.toll_paid"),
      ECON_RULE_MAINT_FUND: t("av.event.maintenance_fund"),
      ECON_RULE_REST_BONUS: t("av.event.rest_bonus")
    };
    return labels[eventType] || eventType;
  }

  function getFinanceCategoryLabel(eventType) {
    const labels = {
      FINE_ISSUED: t("av.finance.cat_penalty"),
      FUEL_PURCHASE: t("av.finance.cat_fuel"),
      TOLL_PAID: t("av.finance.cat_toll"),
      ECON_RULE_MAINT_FUND: t("av.finance.cat_maintenance"),
      ECON_RULE_REST_BONUS: t("av.finance.cat_credit")
    };
    return labels[eventType] || t("av.finance.cat_other");
  }

  function getEventSeverity(event) {
    if (event.eventType === "DVIR_SUBMIT" && event.payloadObj && event.payloadObj.isSafeToDrive === false) {
      return "critical";
    }
    if (event.eventType === "HOS_VIOLATION" || event.eventType === "ECON_RULE_HOS_VIOLATION" || event.eventType === "DVIR_ADVISORY") {
      return "warning";
    }
    return "info";
  }

  function getSeverityLabel(severity) {
    if (severity === "critical") {
      return t("av.findings.critical");
    }
    if (severity === "warning") {
      return t("av.findings.warning");
    }
    return t("av.findings.info");
  }

  function buildFactPill(text) {
    const span = document.createElement("span");
    span.className = "audit-fact-pill";
    span.textContent = text;
    return span;
  }

  function appendChip(target, label, value) {
    if (!target) {
      return;
    }
    const chip = document.createElement("span");
    chip.className = "audit-chip";
    chip.textContent = `${label}: ${value}`;
    target.appendChild(chip);
  }

  function buildEvidenceItemModel(event, detail, severity) {
    return {
      title: getEventDisplayName(event.eventType),
      detail,
      severity,
      meta: `${formatTimestamp(event.realTimestampUtc, false)} | ${event.plate || "-"} | ${shortHash(event.hash)}`
    };
  }

  function makeEvidenceListItem(item) {
    const li = document.createElement("li");
    li.className = "audit-evidence-item";
    li.innerHTML = `
      <div class="audit-evidence-head">
        <strong>${escapeHtml(item.title || "-")}</strong>
        <span class="audit-severity-badge is-${escapeHtml(item.severity || "info")}">${escapeHtml(getSeverityLabel(item.severity || "info"))}</span>
      </div>
      <p class="audit-evidence-detail">${escapeHtml(item.detail || "-")}</p>
      <p class="audit-evidence-meta">${escapeHtml(item.meta || "-")}</p>
    `;
    return li;
  }

  function makeListItem(text, className = "") {
    const li = document.createElement("li");
    if (className) {
      li.className = className;
    }
    li.textContent = text;
    return li;
  }

  function buildVehicleLabel(events) {
    const parts = buildVehicleLabelParts(events);
    return parts.truckId && parts.truckId !== "-" ? `${parts.plate} / ${parts.truckId}` : parts.plate;
  }

  function buildVehicleLabelParts(events) {
    const first = events[0];
    if (!first) {
      return { plate: "-", truckId: "-" };
    }
    return {
      plate: first.plate || "-",
      truckId: first.truckId || "-"
    };
  }

  function shortHash(hash) {
    if (!hash) {
      return "-";
    }
    return hash.length > 10 ? `${hash.slice(0, 10)}...` : hash;
  }

  function safeDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatUtcStamp(value) {
    const date = safeDate(value);
    if (!date) {
      return String(value || "-");
    }
    const iso = date.toISOString().replace(/\.\d{3}Z$/, "Z");
    return iso.replace("T", " ").replace("Z", " UTC");
  }

  function formatMoney(value) {
    if (!Number.isFinite(value)) {
      return "$0.00";
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  function formatMinutes(value) {
    const number = Number(value);
    if (!Number.isFinite(number) || number < 0) {
      return "-";
    }
    const rounded = Math.round(number);
    const hours = Math.floor(rounded / 60);
    const minutes = rounded % 60;
    return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
  }

  function formatGameTime(value) {
    const gameTime = Number(value);
    if (!Number.isFinite(gameTime) || gameTime < 0) {
      return "-";
    }
    const day = getComplianceDayFromGameTime(gameTime);
    const minuteOfDay = ((gameTime % 1440) + 1440) % 1440;
    const hours = Math.floor(minuteOfDay / 60);
    const minutes = minuteOfDay % 60;
    return t("av.game_time.display", {
      raw: gameTime,
      day,
      time: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildFinanceEntries(events) {
    const entries = [];
    events.forEach(ev => {
      if (ev.eventType === "SIMDUTY_FINANCE_PENALTY") {
        entries.push({ time: ev.realTimestampUtc, type: "penalty", event: ev.eventType, value: ev.payload.amount, desc: ev.payload.reason });
      } else if (ev.eventType === "SIMDUTY_EVENT_TOLL_GATE") {
        entries.push({ time: ev.realTimestampUtc, type: "toll", event: ev.eventType, value: ev.payload.cost, desc: "Toll paid" });
      } else if (ev.eventType === "SIMDUTY_EVENT_REFUEL") {
        entries.push({ time: ev.realTimestampUtc, type: "fuel", event: ev.eventType, value: ev.payload.cost, desc: "Refuel" });
      } else if (ev.eventType === "SIMDUTY_EVENT_MAINTENANCE") {
        entries.push({ time: ev.realTimestampUtc, type: "maintenance", event: ev.eventType, value: ev.payload.cost, desc: "Maintenance" });
      } else if (ev.eventType === "SIMDUTY_HOS_REST_ENDED") {
        if (ev.payloadObj && ev.payloadObj.isFinancedRest && ev.payloadObj.cost > 0) {
           entries.push({ time: ev.realTimestampUtc, type: "other", event: ev.eventType, value: ev.payloadObj.cost, desc: "Financed rest period" });
        }
      }
    });
    return entries.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  }

  function formatCurrency(value) {
    return formatMoney(value);
  }

  function exportFinanceToCSV() {
    const events = filterEvents(state.allEvents);
    const entries = buildFinanceEntries(events);
    if (!entries.length) {
      alert("No financial entries to export in the current filter.");
      return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "UTC Time,Category,Event,Amount,Description\n";
    
    entries.forEach(entry => {
      const time = formatTimestamp(entry.time, state.showLocalTime);
      const row = `"${time}","${entry.type}","${entry.event}","${formatCurrency(entry.value)}","${entry.desc}"`;
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `simduty_finance_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  init();
  setTab("summary");
})();
