const STORAGE_KEY = "navigateur.newtab.v1";
const DATA_VERSION = 7;
const DEFAULT_DASHBOARD_ID = "home";
const DASHBOARD_DRAG_SWITCH_DELAY_MS = 260;
const DRAG_AUTO_SCROLL_EDGE_PX = 84;
const DRAG_AUTO_SCROLL_MAX_STEP_PX = 26;
const POMODORO_WORK_SECONDS = 25 * 60;
const POMODORO_BREAK_SECONDS = 5 * 60;
const POMODORO_TOTAL_SESSIONS = 8;

const searchEngines = [
  {
    id: "google",
    label: "Google",
    iconDomain: "google.com",
    placeholder: "Search Google...",
    buildUrl: (query) =>
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
  },
  {
    id: "youtube",
    label: "YouTube",
    iconDomain: "youtube.com",
    placeholder: "Search YouTube...",
    buildUrl: (query) =>
      `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
  },
  {
    id: "github",
    label: "GitHub",
    iconDomain: "github.com",
    placeholder: "Search GitHub...",
    buildUrl: (query) =>
      `https://github.com/search?q=${encodeURIComponent(query)}`,
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    iconDomain: "chatgpt.com",
    placeholder: "Message ChatGPT...",
    buildUrl: (query) => `https://chatgpt.com/?q=${encodeURIComponent(query)}`,
  },
];

const sectionIconOptions = [
  { id: "sparkles", label: "Sparkles" },
  { id: "code", label: "Code" },
  { id: "cloud", label: "Cloud" },
  { id: "grid", label: "Grid" },
  { id: "folder", label: "Folder" },
];

const defaultDashboards = [
  {
    id: "home",
    label: "Home",
    icon: "home",
    order: 0,
  },
  {
    id: "workspace",
    label: "Workspace",
    icon: "briefcase",
    order: 1,
  },
  {
    id: "focus",
    label: "Focus",
    icon: "target",
    order: 2,
  },
];

const qrVersionDefinitions = [
  { version: 1, dataCodewords: 19, eccCodewords: 7, alignment: [] },
  { version: 2, dataCodewords: 34, eccCodewords: 10, alignment: [6, 18] },
  { version: 3, dataCodewords: 55, eccCodewords: 15, alignment: [6, 22] },
  { version: 4, dataCodewords: 80, eccCodewords: 20, alignment: [6, 26] },
  { version: 5, dataCodewords: 108, eccCodewords: 26, alignment: [6, 30] },
];

const dashboardIconOptions = [
  { id: "terminal", label: "Terminal" },
  { id: "graduation", label: "Graduation" },
  { id: "gamepad", label: "Gamepad" },
  { id: "sparkles", label: "Sparkles" },
  { id: "code", label: "Code" },
  { id: "cloud", label: "Cloud" },
  { id: "folder", label: "Folder" },
  { id: "grid", label: "Grid" },
  { id: "briefcase", label: "Briefcase" },
  { id: "rocket", label: "Rocket" },
  { id: "book", label: "Book" },
  { id: "bookmark", label: "Bookmark" },
  { id: "brain", label: "Brain" },
  { id: "camera", label: "Camera" },
  { id: "compass", label: "Compass" },
  { id: "cpu", label: "CPU" },
  { id: "database", label: "Database" },
  { id: "flask", label: "Flask" },
  { id: "globe", label: "Globe" },
  { id: "headphones", label: "Headphones" },
  { id: "heart", label: "Heart" },
  { id: "home", label: "Home" },
  { id: "image", label: "Image" },
  { id: "key", label: "Key" },
  { id: "lightning", label: "Lightning" },
  { id: "lock", label: "Lock" },
  { id: "map", label: "Map" },
  { id: "moon", label: "Moon" },
  { id: "music", label: "Music" },
  { id: "palette", label: "Palette" },
  { id: "pencil", label: "Pencil" },
  { id: "shield", label: "Shield" },
  { id: "star", label: "Star" },
  { id: "sun", label: "Sun" },
  { id: "target", label: "Target" },
  { id: "timer", label: "Timer" },
  { id: "wrench", label: "Wrench" },
];

const widgetDefinitions = [
  {
    type: "search",
    label: "Search",
    icon: "search",
    description: "Smart search bar with selectable destination engine",
  },
  {
    type: "link-list",
    label: "Link List",
    icon: "grid",
    description: "Create a section of shortcuts and favorite links",
  },
  {
    type: "spacer",
    label: "Spacer",
    icon: "spacer",
    description: "Use it to add breathing room between widgets",
  },
  {
    type: "todo",
    label: "Todo",
    icon: "check-list",
    description: "A simple task list to manage your daily priorities",
  },
  {
    type: "quick-note",
    label: "Quick Note",
    icon: "note",
    description:
      "Capture ideas, code snippets, tasks, or reminders directly on your start page",
  },
  {
    type: "qr-code",
    label: "QR Code Generator",
    icon: "qr",
    description: "Generate QR codes from text or URLs",
  },
  {
    type: "markdown-editor",
    label: "Markdown Editor",
    icon: "markdown",
    description: "Write and preview Markdown with a live editable preview",
  },
  {
    type: "text-diff",
    label: "Text Diff",
    icon: "diff",
    description:
      "Compare two texts side by side and see additions, deletions, and changes highlighted",
  },
  {
    type: "calendar",
    label: "Calendar",
    icon: "calendar",
    description: "A simple calendar showing the current day, week, or month",
  },
  {
    type: "clock",
    label: "Clock",
    icon: "timer",
    description: "An analog clock synced with the current local device time",
  },
  {
    type: "pomodoro",
    label: "Pomodoro Timer",
    icon: "timer",
    description: "A focused 25/5 pomodoro cycle with 8 work sessions",
  },
  {
    type: "kanban",
    label: "Kanban Tasks",
    icon: "kanban",
    description: "A kanban board to organize and track your tasks",
  },
  {
    type: "daily-quiz",
    label: "Daily Quiz",
    icon: "quiz",
    description: "A fun daily quiz with trivia questions",
  },
  {
    type: "image-compression",
    label: "Image Compression",
    icon: "compress",
    description:
      "Compress and convert images (PNG, JPG, WebP) in batches, directly in your browser",
  },
  {
    type: "uptime-monitor",
    label: "Uptime Monitor",
    icon: "uptime",
    description: "Monitor website availability and response times",
  },
  {
    type: "browser-session",
    label: "Browser Sessions",
    icon: "windows",
    description:
      "Save a set of open windows and tabs, then restore them in one click",
  },
];

const defaultSectionDashboardIds = {
  section_home_favorites: ["home"],
  section_workspace_google: ["workspace"],
  section_workspace_tools: ["workspace"],
};

const defaultData = {
  version: DATA_VERSION,
  selectedEngine: "google",
  selectedDashboard: DEFAULT_DASHBOARD_ID,
  dashboards: defaultDashboards.map((dashboard) => ({ ...dashboard })),
  widgets: createDefaultWidgets(),
  sections: [
    {
      id: "section_home_favorites",
      title: "Favoris",
      icon: "home",
      links: [
        createSeedLink("Gmail", "https://mail.google.com/"),
        createSeedLink("Google Calendar", "https://calendar.google.com/"),
        createSeedLink("Google Drive", "https://drive.google.com/"),
        createSeedLink("YouTube", "https://www.youtube.com/"),
      ],
    },
    {
      id: "section_workspace_google",
      title: "Google Workspace",
      icon: "folder",
      links: [
        createSeedLink("Google Drive", "https://drive.google.com/"),
        createSeedLink("Google Docs", "https://docs.google.com/document/"),
        createSeedLink("Google Sheets", "https://docs.google.com/spreadsheets/"),
        createSeedLink("Google Calendar", "https://calendar.google.com/"),
        createSeedLink("Notion", "https://www.notion.so/"),
        createSeedLink("Slack", "https://slack.com/signin"),
      ],
    },
    {
      id: "section_workspace_tools",
      title: "Tools",
      icon: "briefcase",
      links: [
        createSeedLink("GitHub", "https://github.com/"),
        createSeedLink("Vercel", "https://vercel.com/dashboard"),
        createSeedLink("Netlify", "https://app.netlify.com/"),
        createSeedLink("Osmo", "https://osmo.supply/"),
      ],
    },
  ],
};

const removedSeedLinks = [
  "App Store Connect",
  "Apple Developer",
  "AWS Console",
  "Cloudflare Dashboard",
  "Dev.to",
  "DigitalOcean",
  "FAL",
  "Framer",
  "Full",
  "GitHub Copilot",
  "Google AI Studio",
  "Google Cloud Console",
  "Grok",
  "Hacker News",
  "npm",
  "OpenAI Platform",
  "OpenRouter",
  "Perplexity",
  "Postman",
  "Railway",
  "Stack Overflow",
  "Test",
  "Test QA",
  "Webflow Dashboard",
];

const removedSeedHosts = [
  "appstoreconnect.apple.com",
  "cloud.digitalocean.com",
  "console.aws.amazon.com",
  "console.cloud.google.com",
  "dash.cloudflare.com",
  "dev.to",
  "developer.apple.com",
  "fal.ai",
  "framer.com",
  "github.com/features/copilot",
  "grok.com",
  "news.ycombinator.com",
  "openrouter.ai",
  "platform.openai.com",
  "postman.com",
  "railway.app",
  "stackoverflow.com",
  "webflow.com",
  "www.npmjs.com",
  "www.perplexity.ai",
];

const state = {
  data: cloneData(defaultData),
  dialog: null,
  contextMenu: null,
  drag: null,
  dragAutoScrollFrame: null,
  dragAutoScrollDirection: 0,
  dragAutoScrollClientY: null,
  dragDashboardSwitchTimer: null,
  dragDashboardSwitchId: null,
  editMode: false,
  editModeNoticeDismissed: false,
  resize: null,
  statusTimer: null,
  uptimeCheckedWidgets: new Set(),
  searchMenuWidgetId: null,
  clockTimer: null,
  pomodoroTimer: null,
};

const ui = {
  body: document.body,
  dashboardNav: document.getElementById("dashboardNav"),
  dashboardNavActions: document.getElementById("dashboardNavActions"),
  editToggle: document.getElementById("editToggle"),
  sectionsRoot: document.getElementById("sectionsRoot"),
  statusMessage: document.getElementById("statusMessage"),
  editModeNotice: document.getElementById("editModeNotice"),
  editorDialog: document.getElementById("editorDialog"),
  editorForm: document.getElementById("editorForm"),
  dialogTitle: document.getElementById("dialogTitle"),
  dialogFields: document.getElementById("dialogFields"),
  dialogSubmit: document.getElementById("dialogSubmit"),
  dialogClose: document.getElementById("dialogClose"),
  dialogCancel: document.getElementById("dialogCancel"),
  formError: document.getElementById("formError"),
  contextMenuLayer: document.getElementById("contextMenuLayer"),
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  paintStaticIcons();
  renderDashboardNav();
  bindEvents();
  ensureClockTickerRunning();
  ensurePomodoroTickerRunning();

  try {
    state.data = await loadData();
  } catch (error) {
    console.error(error);
    state.data = cloneData(defaultData);
    showStatus(
      "Stockage local indisponible. Les donnees par defaut sont chargees.",
    );
  }

  syncDashboardNav();
  render();
}

function bindEvents() {
  ui.dashboardNav.addEventListener("click", handleDashboardNavClick);
  ui.editToggle.addEventListener("click", toggleEditMode);
  ui.editorForm.addEventListener("submit", handleDialogSubmit);
  ui.dialogClose.addEventListener("click", closeDialog);
  ui.dialogCancel.addEventListener("click", closeDialog);
  ui.editorDialog.addEventListener("click", handleDialogBackdropClick);

  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("contextmenu", handleDocumentContextMenu);
  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("input", handleDocumentInput);
  document.addEventListener("change", handleDocumentChange);
  document.addEventListener("pointerdown", handleDocumentPointerDown);
  document.addEventListener("pointermove", handleDocumentPointerMove);
  document.addEventListener("pointerup", handleDocumentPointerUp);
  document.addEventListener("pointercancel", handleDocumentPointerUp);
  document.addEventListener("submit", handleDocumentSubmit);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("dragover", handleDragOver);
  document.addEventListener("dragleave", handleDragLeave);
  document.addEventListener("drop", handleDrop);
  document.addEventListener("dragend", clearDragState);

  document.addEventListener(
    "error",
    (event) => {
      if (
        event.target instanceof HTMLImageElement &&
        event.target.matches("[data-role='favicon']")
      ) {
        const icon = event.target.closest(".link-icon");
        if (icon) {
          icon.dataset.hasError = "true";
        }
      }

      if (
        event.target instanceof HTMLImageElement &&
        event.target.matches("[data-role='engine-icon']")
      ) {
        const icon = event.target.closest(".engine-logo");
        if (icon) {
          icon.dataset.hasError = "true";
        }
      }
    },
    true,
  );

  document.addEventListener(
    "load",
    (event) => {
      if (
        event.target instanceof HTMLImageElement &&
        event.target.matches("[data-role='favicon']")
      ) {
        const icon = event.target.closest(".link-icon");
        if (icon) {
          icon.dataset.hasImage = "true";
          icon.dataset.hasError = "false";
        }
      }

      if (
        event.target instanceof HTMLImageElement &&
        event.target.matches("[data-role='engine-icon']")
      ) {
        const icon = event.target.closest(".engine-logo");
        if (icon) {
          icon.dataset.hasImage = "true";
          icon.dataset.hasError = "false";
        }
      }
    },
    true,
  );
}

function paintStaticIcons() {
  ui.editToggle.innerHTML = createIcon("edit");
  ui.dialogClose.innerHTML = createIcon("close");

  const addWidgetButton = document.querySelector("[data-action='add-widget']");
  if (addWidgetButton) {
    addWidgetButton.innerHTML = createIcon("plus");
  }
}

function renderDashboardNav() {
  const dashboards = getDashboardViews();
  const addDashboardMarkup = `
    <button class="dashboard-add-button" type="button" data-action="add-dashboard" aria-label="Ajouter un dashboard" title="Ajouter un dashboard">
      ${createIcon("plus")}
      <span>Nouveau</span>
    </button>
  `;

  ui.dashboardNav.innerHTML = dashboards
    .map(
      (dashboard) => `
        <div
          class="dashboard-tab-item dashboard-tab-draggable"
          data-dashboard-drag-id="${dashboard.id}"
          draggable="${state.editMode ? "true" : "false"}"
        >
          <button
            class="dashboard-tab"
            type="button"
            data-dashboard-id="${dashboard.id}"
            aria-pressed="false"
          >
            <span class="dashboard-tab-icon" aria-hidden="true">${createIcon(dashboard.icon)}</span>
            <span class="dashboard-tab-label">${escapeHtml(dashboard.label)}</span>
          </button>
          ${
            state.editMode
              ? `
                <div class="dashboard-tab-actions">
                  <button class="small-icon-button" type="button" data-action="edit-dashboard" data-dashboard-id="${dashboard.id}" aria-label="Modifier le dashboard" title="Modifier">${createIcon("edit")}</button>
                  <button class="small-icon-button" type="button" data-action="delete-dashboard" data-dashboard-id="${dashboard.id}" aria-label="Supprimer le dashboard" title="Supprimer">${createIcon("trash")}</button>
                </div>
              `
              : ""
          }
        </div>
      `,
    )
    .join("");

  if (ui.dashboardNavActions) {
    ui.dashboardNavActions.innerHTML = state.editMode ? addDashboardMarkup : "";
  } else if (state.editMode) {
    ui.dashboardNav.insertAdjacentHTML("beforeend", addDashboardMarkup);
  }
}

function createSearchEngineMenuMarkup(widgetId, selectedEngineId) {
  return searchEngines
    .map((engine) =>
      createEngineOptionMarkup(engine, selectedEngineId, widgetId),
    )
    .join("");
}

function createEngineOptionMarkup(engine, selectedEngineId, widgetId) {
  const isSelected = engine.id === selectedEngineId;
  return `
    <button
      class="engine-option"
      type="button"
      data-action="select-search-engine"
      data-engine-id="${engine.id}"
      data-widget-id="${widgetId}"
      aria-selected="${String(isSelected)}"
      tabindex="${isSelected ? "0" : "-1"}"
    >
      <span class="engine-option-state" aria-hidden="true"></span>
      ${createEngineLogoMarkup(engine)}
      <span class="engine-option-label">${escapeHtml(engine.label)}</span>
    </button>
  `;
}

function createEngineLogoMarkup(engine) {
  const iconUrl = getFaviconUrl(`https://${engine.iconDomain}`);
  return `
    <span class="engine-logo" data-has-image="true" data-has-error="false">
      <img data-role="engine-icon" src="${escapeHtml(iconUrl)}" alt="" loading="lazy" />
      <span class="engine-logo-fallback" aria-hidden="true">${escapeHtml(getInitials(engine.label))}</span>
    </span>
  `;
}

async function handleSearchSubmit(event) {
  const form = event.target.closest("[data-search-widget-form]");
  if (!form) {
    return;
  }

  event.preventDefault();

  const input = form.querySelector("[data-search-query]");
  const query = input?.value.trim() || "";
  if (!query) {
    input?.focus();
    return;
  }

  const widget = getWidget(form.dataset.widgetId);
  const engine = getSelectedEngine(widget?.config?.engineId);
  if (widget) {
    widget.config.engineId = engine.id;
  }
  state.data.selectedEngine = engine.id;
  await saveData(state.data);
  window.location.assign(engine.buildUrl(query));
}

async function handleDashboardNavClick(event) {
  const tab = event.target.closest(".dashboard-tab[data-dashboard-id]");
  if (!tab) {
    return;
  }

  await selectDashboard(tab.dataset.dashboardId, {
    save: true,
    scrollTop: true,
    scrollBehavior: "smooth",
  });
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape") {
    closeContextMenu();
    closeSearchMenus();
    return;
  }

  if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
    const linkCard = event.target.closest(".link-card");
    if (!linkCard) {
      return;
    }

    event.preventDefault();
    const rect = linkCard.getBoundingClientRect();
    openContextMenu({
      sectionId: linkCard.dataset.sectionId,
      linkId: linkCard.dataset.linkId,
      x: rect.left + Math.min(rect.width - 18, 42),
      y: rect.top + Math.min(rect.height - 18, 42),
    });
  }
}

async function selectSearchEngine(widgetId, engineId) {
  const engine = searchEngines.find((item) => item.id === engineId);
  if (!engine) {
    return;
  }

  const widget = getWidget(widgetId);
  if (widget) {
    widget.config.engineId = engine.id;
  }
  state.data.selectedEngine = engine.id;
  closeSearchMenus();
  render();
  await saveData(state.data);
  showStatus("Moteur mis a jour.");
}

function getSelectedEngine(engineId = state.data.selectedEngine) {
  return (
    searchEngines.find((engine) => engine.id === engineId) || searchEngines[0]
  );
}

function closeSearchMenus() {
  if (state.searchMenuWidgetId) {
    state.searchMenuWidgetId = null;
    render();
  }
}

function toggleEditMode() {
  if (state.editMode && state.resize) {
    clearClockResizeState();
  }
  closeContextMenu();
  state.editMode = !state.editMode;
  state.editModeNoticeDismissed = !state.editMode;
  ui.body.classList.toggle("is-editing", state.editMode);
  ui.editToggle.setAttribute(
    "aria-label",
    state.editMode ? "Quitter l'edition" : "Activer l'edition",
  );
  render();
}

async function handleDocumentClick(event) {
  if (!event.target.closest(".context-menu")) {
    closeContextMenu();
  }

  if (!event.target.closest(".search-engine-control")) {
    closeSearchMenus();
  }

  const linkHit = event.target.closest(".link-hit");
  if (state.editMode && linkHit) {
    event.preventDefault();
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  try {
    switch (actionTarget.dataset.action) {
      case "dismiss-edit-mode-notice":
        state.editModeNoticeDismissed = true;
        renderEditModeNotice();
        break;
      case "select-dashboard-icon":
        selectDashboardIcon(actionTarget.dataset.iconId);
        break;
      case "add-dashboard":
        openDashboardDialog();
        break;
      case "edit-dashboard":
        openDashboardDialog(
          getMutableDashboards().find(
            (dashboard) => dashboard.id === actionTarget.dataset.dashboardId,
          ) || null,
        );
        break;
      case "delete-dashboard":
        await deleteDashboard(actionTarget.dataset.dashboardId);
        break;
      case "add-widget":
        openWidgetSelectorDialog();
        break;
      case "create-widget":
        await createWidgetFromType(actionTarget.dataset.widgetType);
        break;
      case "toggle-search-engine-menu":
        closeContextMenu();
        state.searchMenuWidgetId =
          state.searchMenuWidgetId === actionTarget.dataset.widgetId
            ? null
            : actionTarget.dataset.widgetId;
        render();
        break;
      case "select-search-engine":
        await selectSearchEngine(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.engineId,
        );
        break;
      case "delete-widget":
        closeContextMenu();
        await deleteWidget(actionTarget.dataset.widgetId);
        break;
      case "add-section":
        closeContextMenu();
        openSectionDialog();
        break;
      case "edit-section":
        closeContextMenu();
        openSectionDialog(getSection(actionTarget.dataset.sectionId));
        break;
      case "delete-section":
        closeContextMenu();
        await deleteSection(actionTarget.dataset.sectionId);
        break;
      case "add-link":
        closeContextMenu();
        openLinkDialog(null, actionTarget.dataset.sectionId);
        break;
      case "edit-link":
        closeContextMenu();
        openLinkDialog(
          getLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId),
          actionTarget.dataset.sectionId,
        );
        break;
      case "delete-link":
        closeContextMenu();
        await deleteLink(
          actionTarget.dataset.sectionId,
          actionTarget.dataset.linkId,
        );
        break;
      case "open-link-new-tab":
        closeContextMenu();
        await openLinkInNewTab(
          actionTarget.dataset.sectionId,
          actionTarget.dataset.linkId,
        );
        break;
      case "copy-link-url":
        closeContextMenu();
        await copyLinkUrl(
          actionTarget.dataset.sectionId,
          actionTarget.dataset.linkId,
        );
        break;
      case "share-link":
        closeContextMenu();
        await shareLink(
          actionTarget.dataset.sectionId,
          actionTarget.dataset.linkId,
        );
        break;
      case "duplicate-link":
        closeContextMenu();
        await duplicateLink(
          actionTarget.dataset.sectionId,
          actionTarget.dataset.linkId,
        );
        break;
      case "move-widget":
      case "move-link-list-widget":
        closeContextMenu();
        await moveWidgetByDirection(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.direction,
        );
        break;
      case "duplicate-link-list-widget":
        closeContextMenu();
        await duplicateLinkListWidget(actionTarget.dataset.widgetId);
        break;
      case "open-link-list-widget-settings":
        closeContextMenu();
        openLinkListWidgetSettings(actionTarget.dataset.widgetId);
        break;
      case "delete-link-list-widget":
        closeContextMenu();
        await deleteLinkListWidget(actionTarget.dataset.widgetId);
        break;
      case "add-todo":
        await addTodoItem(actionTarget.dataset.widgetId);
        break;
      case "toggle-todo":
        await toggleTodoItem(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.todoId,
        );
        break;
      case "delete-todo":
        await deleteTodoItem(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.todoId,
        );
        break;
      case "copy-note":
        await copyWidgetText(actionTarget.dataset.widgetId, "text");
        break;
      case "clear-note":
        await updateWidgetConfig(
          actionTarget.dataset.widgetId,
          { text: "", updatedAt: new Date().toISOString() },
          { render: true, message: "Note cleared." },
        );
        break;
      case "reset-qr":
        await updateWidgetConfig(
          actionTarget.dataset.widgetId,
          { value: "" },
          { render: true, message: "QR reset." },
        );
        break;
      case "download-qr-preview":
        downloadPseudoQR(actionTarget.dataset.widgetId);
        break;
      case "set-markdown-mode":
        await updateWidgetConfig(
          actionTarget.dataset.widgetId,
          { mode: actionTarget.dataset.mode },
          { render: true },
        );
        break;
      case "copy-markdown":
        await copyWidgetText(actionTarget.dataset.widgetId, "markdown");
        break;
      case "download-markdown":
        downloadTextFile(
          "note.md",
          getWidget(actionTarget.dataset.widgetId)?.config?.markdown || "",
          "text/markdown",
        );
        break;
      case "copy-diff":
        await copyText(
          renderDiffText(getWidget(actionTarget.dataset.widgetId)),
        );
        break;
      case "reset-diff":
        await updateWidgetConfig(
          actionTarget.dataset.widgetId,
          { original: "", modified: "" },
          { render: true, message: "Diff reset." },
        );
        break;
      case "calendar-prev":
        await shiftCalendarMonth(actionTarget.dataset.widgetId, -1);
        break;
      case "calendar-next":
        await shiftCalendarMonth(actionTarget.dataset.widgetId, 1);
        break;
      case "calendar-today":
        await updateWidgetConfig(
          actionTarget.dataset.widgetId,
          { month: new Date().toISOString() },
          { render: true },
        );
        break;
      case "toggle-pomodoro":
        await togglePomodoro(actionTarget.dataset.widgetId);
        break;
      case "skip-pomodoro":
        await skipPomodoroPhase(actionTarget.dataset.widgetId);
        break;
      case "reset-pomodoro":
        await resetPomodoro(actionTarget.dataset.widgetId);
        break;
      case "add-kanban-card":
        await addKanbanCard(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.kanbanColumn,
        );
        break;
      case "move-kanban-card":
        await moveKanbanCard(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.kanbanColumn,
          actionTarget.dataset.cardId,
          actionTarget.dataset.direction,
        );
        break;
      case "delete-kanban-card":
        await deleteKanbanCard(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.kanbanColumn,
          actionTarget.dataset.cardId,
        );
        break;
      case "answer-quiz":
        await answerDailyQuiz(
          actionTarget.dataset.widgetId,
          Number(actionTarget.dataset.answerIndex),
        );
        break;
      case "download-compressed-image":
        downloadCompressedImage(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.imageId,
        );
        break;
      case "refresh-uptime":
        await checkUptimeWidget(actionTarget.dataset.widgetId, { force: true });
        break;
      case "delete-uptime-service":
        await deleteUptimeService(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.serviceId,
        );
        break;
      case "save-browser-session":
        await saveBrowserSession(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.sessionId || null,
        );
        break;
      case "open-browser-session":
        await openBrowserSession(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.sessionId,
        );
        break;
      case "copy-browser-session-links":
        await copyBrowserSessionLinks(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.sessionId,
        );
        break;
      case "delete-browser-session":
        await deleteBrowserSession(
          actionTarget.dataset.widgetId,
          actionTarget.dataset.sessionId,
        );
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
    showStatus(getActionErrorMessage(error, "Action impossible."));
  }
}

function handleDocumentSubmit(event) {
  if (event.target.closest("[data-search-widget-form]")) {
    handleSearchSubmit(event).catch((error) => {
      console.error(error);
      showStatus("Recherche impossible.");
    });
    return;
  }

  const uptimeForm = event.target.closest("[data-uptime-add-form]");
  if (uptimeForm) {
    event.preventDefault();
    addUptimeService(uptimeForm.dataset.widgetId, uptimeForm).catch((error) => {
      console.error(error);
      showStatus("Site impossible a ajouter.");
    });
  }
}

async function handleDocumentInput(event) {
  const input = event.target.closest("[data-widget-input]");
  if (!input) {
    return;
  }

  const widgetId = input.dataset.widgetId;
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  switch (input.dataset.widgetInput) {
    case "spacer-height":
      await updateWidgetConfig(
        widgetId,
        { height: Number(input.value) },
        { render: false },
      );
      input
        .closest(".spacer-widget-panel")
        ?.style.setProperty("min-height", `${input.value}px`);
      input
        .closest(".spacer-widget-panel")
        ?.querySelector(".spacer-preview")
        ?.style.setProperty("height", `${input.value}px`);
      input
        .closest(".widget-field-inline")
        ?.querySelector(".widget-value")
        ?.replaceChildren(`${input.value}px`);
      break;
    case "todo-text":
      await updateTodoText(widgetId, input.dataset.todoId, input.value);
      break;
    case "quick-note-text":
      await updateWidgetConfig(
        widgetId,
        { text: input.value, updatedAt: new Date().toISOString() },
        { render: false },
      );
      break;
    case "qr-value":
      await updateWidgetConfig(
        widgetId,
        { value: input.value },
        { render: false },
      );
      refreshQRCodePreview(widgetId, input);
      break;
    case "markdown-text":
      await updateWidgetConfig(
        widgetId,
        { markdown: input.value },
        { render: false },
      );
      {
        const preview = input
          .closest(".markdown-widget")
          ?.querySelector(".markdown-preview-pane");
        if (preview) {
          preview.innerHTML = renderMarkdownPreview(input.value);
        }
      }
      break;
    case "diff-original":
      await updateWidgetConfig(
        widgetId,
        { original: input.value },
        { render: false },
      );
      refreshDiffPreview(widgetId, input);
      break;
    case "diff-modified":
      await updateWidgetConfig(
        widgetId,
        { modified: input.value },
        { render: false },
      );
      refreshDiffPreview(widgetId, input);
      break;
    case "image-quality":
      await updateWidgetConfig(
        widgetId,
        { quality: Number(input.value) },
        { render: false },
      );
      refreshImageQualityValue(input);
      break;
    case "kanban-card-title":
      await updateKanbanCardTitle(
        widgetId,
        input.dataset.kanbanColumn,
        input.dataset.cardId,
        input.value,
      );
      break;
    default:
      break;
  }
}

async function handleDocumentChange(event) {
  const input = event.target.closest("[data-widget-input]");
  if (!input) {
    return;
  }

  if (input.dataset.widgetInput === "image-files") {
    await compressSelectedImages(input.dataset.widgetId, input.files);
    input.value = "";
  }
}

function handleDocumentPointerDown(event) {
  if (!state.editMode) {
    return;
  }

  const handle = event.target.closest("[data-clock-resize-handle='true']");
  if (!handle) {
    return;
  }

  const widgetId = handle.dataset.widgetId;
  const widget = getWidget(widgetId);
  const face = handle.closest("[data-clock-widget='true']");
  if (!widget || !face) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const rect = face.getBoundingClientRect();
  state.resize = {
    widgetId,
    pointerId: event.pointerId,
    faceSelector: `[data-widget-id="${widgetId}"] [data-clock-widget="true"]`,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height / 2,
    liveSize: getClockWidgetSize(widget),
  };

  handle.setPointerCapture?.(event.pointerId);
  ui.body.classList.add("is-resizing-clock");
}

function handleDocumentPointerMove(event) {
  if (!state.resize || state.resize.pointerId !== event.pointerId) {
    return;
  }

  event.preventDefault();

  const nextSize = clampClockSizeFromPointer(
    event.clientX,
    event.clientY,
    state.resize.centerX,
    state.resize.centerY,
  );
  state.resize.liveSize = nextSize;

  const face = document.querySelector(state.resize.faceSelector);
  if (face instanceof HTMLElement) {
    face.style.setProperty("--clock-size", `${nextSize}px`);
  }
}

async function handleDocumentPointerUp(event) {
  if (!state.resize || state.resize.pointerId !== event.pointerId) {
    return;
  }

  const resizeState = state.resize;
  clearClockResizeState();

  await updateWidgetConfig(
    resizeState.widgetId,
    { size: resizeState.liveSize },
    { render: true, message: "Taille de l'horloge mise a jour." },
  );
}

function clampClockSizeFromPointer(clientX, clientY, centerX, centerY) {
  const horizontal = Math.max(110, clientX - centerX);
  const vertical = Math.max(110, clientY - centerY);
  return clampNumber(Math.max(horizontal, vertical) * 2, 220, 520, 320);
}

function clearClockResizeState() {
  state.resize = null;
  ui.body.classList.remove("is-resizing-clock");
}

function handleDocumentContextMenu(event) {
  event.preventDefault();

  if (event.target.closest(".context-menu")) {
    return;
  }

  const linkCard = event.target.closest(".link-card");
  if (!linkCard) {
    closeContextMenu();
    return;
  }

  openContextMenu({
    sectionId: linkCard.dataset.sectionId,
    linkId: linkCard.dataset.linkId,
    x: event.clientX,
    y: event.clientY,
  });
}

function render() {
  ui.body.classList.toggle("is-editing", state.editMode);
  renderDashboardNav();
  syncDashboardNav();
  renderWidgets();
  renderEditModeNotice();
  renderContextMenu();
  updateClockWidgets();
  updatePomodoroWidgets();
  scheduleVisibleUptimeChecks();
}

function renderEditModeNotice() {
  const shouldShowNotice = state.editMode && !state.editModeNoticeDismissed;
  ui.editModeNotice.classList.toggle("is-visible", shouldShowNotice);
  ui.editModeNotice.setAttribute("aria-hidden", shouldShowNotice ? "false" : "true");

  if (!shouldShowNotice) {
    ui.editModeNotice.innerHTML = "";
    return;
  }

  ui.editModeNotice.innerHTML = `
    <div class="edit-mode-notice-card">
      <span class="edit-mode-notice-text">Edit mode is enabled.</span>
      <button
        class="edit-mode-notice-close"
        type="button"
        data-action="dismiss-edit-mode-notice"
        aria-label="Masquer la notification du mode edition"
        title="Masquer"
      >${createIcon("close")}</button>
    </div>
  `;
}

function renderWidgets() {
  const visibleWidgets = getVisibleWidgets();

  if (!visibleWidgets.length) {
    ui.sectionsRoot.innerHTML = `
      <div class="empty-state">
        <span>Aucun widget</span>
      </div>
    `;
    return;
  }

  ui.sectionsRoot.innerHTML = visibleWidgets
    .map((widget) => renderWidget(widget))
    .join("");
}

function getVisibleWidgets() {
  const dashboard = getSelectedDashboard();
  const widgets = state.data.widgets.slice().sort((a, b) => a.order - b.order);
  return widgets.filter((widget) => widget.dashboardIds.includes(dashboard.id));
}

function renderWidget(widget) {
  const renderer = widgetRegistry[widget.type] || renderUnknownWidget;
  return renderer(widget);
}

const widgetRegistry = {
  search: renderSearchWidget,
  "link-list": renderLinkListWidget,
  spacer: renderSpacerWidget,
  todo: renderTodoWidget,
  "quick-note": renderQuickNoteWidget,
  "qr-code": renderQRCodeWidget,
  "markdown-editor": renderMarkdownEditorWidget,
  "text-diff": renderTextDiffWidget,
  calendar: renderCalendarWidget,
  clock: renderClockWidget,
  pomodoro: renderPomodoroWidget,
  kanban: renderKanbanWidget,
  "daily-quiz": renderDailyQuizWidget,
  "image-compression": renderImageCompressionWidget,
  "uptime-monitor": renderUptimeMonitorWidget,
  "browser-session": renderBrowserSessionWidget,
};

function renderSearchWidget(widget) {
  const engine = getSelectedEngine(widget.config?.engineId);
  const isMenuOpen = state.searchMenuWidgetId === widget.id;

  return `
    <section
      class="dashboard-widget search-widget ${state.editMode ? "search-widget-editable" : ""}"
      data-widget-id="${widget.id}"
      data-widget-type="${widget.type}"
      draggable="${state.editMode ? "true" : "false"}"
    >
      ${
        state.editMode
          ? `
            <div class="search-widget-actions">
              ${renderWidgetEditControls(widget.id)}
            </div>
          `
          : ""
      }
      <form class="smart-search" autocomplete="off" data-search-widget-form="true" data-widget-id="${widget.id}">
        <span class="search-glyph" aria-hidden="true">${createIcon("search")}</span>

        <input
          name="query"
          type="search"
          placeholder="${escapeHtml(engine.placeholder)}"
          autocomplete="off"
          spellcheck="false"
          data-search-query="true"
        />

        <div class="engine-picker search-engine-control ${isMenuOpen ? "is-open" : ""}">
          <button
            class="engine-button"
            type="button"
            data-action="toggle-search-engine-menu"
            data-widget-id="${widget.id}"
            aria-haspopup="listbox"
            aria-expanded="${String(isMenuOpen)}"
            aria-label="Choisir le moteur de recherche"
          >
            ${createEngineLogoMarkup(engine)}
            <span class="engine-button-label">${escapeHtml(engine.label)}</span>
            <span class="engine-chevron" aria-hidden="true">${createIcon("chevron-down")}</span>
          </button>
          <div class="engine-menu" role="listbox" aria-label="Moteur de recherche" ${isMenuOpen ? "" : "hidden"}>
            ${createSearchEngineMenuMarkup(widget.id, engine.id)}
          </div>
        </div>

        <button class="submit-button" type="submit" aria-label="Lancer la recherche">
          ${createIcon("arrow-right")}
        </button>
      </form>
    </section>
  `;
}

function renderLinkListWidget(widget) {
  const section = getSection(widget.config?.sectionId);
  if (!section) {
    return renderUnknownWidget({ ...widget, title: "Link List introuvable" });
  }

  return `
    <section
      class="dashboard-widget link-section"
      data-widget-id="${widget.id}"
      data-widget-type="${widget.type}"
      data-section-id="${section.id}"
      draggable="${state.editMode ? "true" : "false"}"
    >
      <div class="section-header">
        <div class="section-title">
          <span class="section-symbol" aria-hidden="true">${createIcon(section.icon || "grid")}</span>
          <h2>${escapeHtml(section.title)}</h2>
        </div>
        <div class="section-actions">
          ${renderWidgetMoveControls(widget.id, { className: "widget-move-controls-inline" })}
          <button
            class="section-action-add"
            type="button"
            data-action="add-link"
            data-section-id="${section.id}"
            aria-label="Ajouter un lien"
            title="Ajouter un lien"
          >
            <span aria-hidden="true">${createIcon("plus")}</span>
            <span>Ajouter un lien</span>
          </button>
          <div class="section-action-bubbles" aria-label="Edition de la section">
            <button
              class="small-icon-button"
              type="button"
              data-action="edit-section"
              data-section-id="${section.id}"
              aria-label="Modifier la ligne"
              title="Modifier la ligne"
            >${createIcon("edit")}</button>
            <button
              class="small-icon-button"
              type="button"
              data-action="delete-section"
              data-section-id="${section.id}"
              aria-label="Supprimer la ligne"
              title="Supprimer la ligne"
            >${createIcon("trash")}</button>
          </div>
        </div>
      </div>

      <div class="links-grid" data-section-id="${section.id}">
        ${
          section.links.length
            ? section.links
                .map((link) => createLinkMarkup(section.id, link))
                .join("")
            : `<div class="empty-state"><span>Aucun lien</span></div>`
        }
      </div>
    </section>
  `;
}

function renderWidgetCard(widget, bodyMarkup, options = {}) {
  const definition = getWidgetDefinition(widget.type) || widgetDefinitions[0];
  const title = options.title || widget.title || definition.label;
  const description = options.description || "";
  const compactClass = options.compact ? " widget-card-compact" : "";
  const cardClass = options.cardClass || "";

  return `
    <section
      class="dashboard-widget widget-card${compactClass}${cardClass}"
      data-widget-id="${widget.id}"
      data-widget-type="${widget.type}"
      draggable="${state.editMode ? "true" : "false"}"
    >
      <div class="widget-header">
        <div class="widget-title">
          <span class="widget-title-icon" aria-hidden="true">${createIcon(definition.icon)}</span>
          <h2>${escapeHtml(title)}</h2>
        </div>
        <div class="widget-actions">
          ${
            state.editMode
              ? renderWidgetEditControls(widget.id)
              : ""
          }
          ${options.actions || ""}
        </div>
      </div>
      <div class="widget-body">
        ${bodyMarkup}
      </div>
      ${description ? `<p class="widget-description">${escapeHtml(description)}</p>` : ""}
    </section>
  `;
}

function renderUnknownWidget(widget) {
  return renderWidgetCard(
    widget,
    `<div class="widget-panel"><p class="widget-muted">Widget indisponible ou incomplet.</p></div>`,
    {
      title: widget.title || "Widget",
      description: "Renderer missing for this widget type.",
    },
  );
}

function renderSpacerWidget(widget) {
  const height = clampNumber(widget.config?.height, 32, 220, 80);
  if (!state.editMode) {
    return `
      <section
        class="dashboard-widget spacer-gap"
        data-widget-id="${widget.id}"
        data-widget-type="${widget.type}"
        style="height: ${height}px"
      ></section>
    `;
  }

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel spacer-widget-panel" style="min-height: ${height}px">
        <div class="spacer-preview" style="height: ${height}px"></div>
        <label class="widget-field-inline">
          <span>Height</span>
          <input class="widget-range" type="range" min="32" max="220" value="${height}" data-widget-input="spacer-height" data-widget-id="${widget.id}" />
          <span class="widget-value">${height}px</span>
        </label>
      </div>
    `,
    { compact: true },
  );
}

function renderTodoWidget(widget) {
  const items = getTodoItems(widget);
  const rows = items.length
    ? items
        .map(
          (item) => `
            <div class="todo-row ${item.done ? "is-done" : ""}">
              <button class="todo-check" type="button" data-action="toggle-todo" data-widget-id="${widget.id}" data-todo-id="${item.id}" aria-label="Basculer la tache">
                ${item.done ? createIcon("check") : ""}
              </button>
              <input class="todo-text-input" type="text" value="${escapeHtml(item.text)}" data-widget-id="${widget.id}" data-todo-id="${item.id}" data-widget-input="todo-text" />
              <button class="small-icon-button" type="button" data-action="delete-todo" data-widget-id="${widget.id}" data-todo-id="${item.id}" aria-label="Supprimer la tache" title="Supprimer">
                ${createIcon("close")}
              </button>
            </div>
          `,
        )
        .join("")
    : `<p class="widget-muted">Aucune tache pour le moment.</p>`;

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel todo-widget">
        <div class="todo-add-row">
          <input class="widget-input" type="text" placeholder="Add a new todo..." data-widget-id="${widget.id}" data-widget-input="todo-new" />
          <button class="text-button" type="button" data-action="add-todo" data-widget-id="${widget.id}">Add</button>
        </div>
        <div class="todo-list">${rows}</div>
      </div>
    `,
  );
}

function renderQuickNoteWidget(widget) {
  const text = toStringValue(widget.config?.text);
  const updatedAt = normalizeText(widget.config?.updatedAt);
  const meta = updatedAt
    ? `Last edit ${formatDateTime(updatedAt)}`
    : "Autosaved locally";

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel quick-note-widget">
        <textarea class="widget-textarea quick-note-area" data-widget-id="${widget.id}" data-widget-input="quick-note-text" placeholder="Write a quick note...">${escapeHtml(text)}</textarea>
        <div class="widget-footer-row">
          <span class="widget-muted">${escapeHtml(meta)}</span>
          <span class="widget-button-row">
            <button class="text-button" type="button" data-action="copy-note" data-widget-id="${widget.id}">Copy</button>
            <button class="text-button" type="button" data-action="clear-note" data-widget-id="${widget.id}">Clear</button>
          </span>
        </div>
      </div>
    `,
  );
}

function renderQRCodeWidget(widget) {
  const value =
    normalizeText(widget.config?.value) || "https://startpagehq.com";
  const qrCode = createQRCodeModel(value);
  const cells = qrCode.matrix ? renderQRCodeCells(qrCode.matrix) : "";
  const errorMarkup = qrCode.error
    ? `<p class="widget-muted" data-qr-error>${escapeHtml(qrCode.error)}</p>`
    : `<p class="widget-muted" data-qr-error hidden></p>`;
  const downloadDisabled = qrCode.matrix ? "" : "disabled";
  const qrSize = qrCode.size || 29;

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel qr-widget">
        <div class="widget-toolbar-row">
          <input class="widget-input" type="text" value="${escapeHtml(value)}" data-widget-id="${widget.id}" data-widget-input="qr-value" placeholder="Text or URL" />
          <button class="text-button" type="button" data-action="download-qr-preview" data-widget-id="${widget.id}" ${downloadDisabled}>Download</button>
          <button class="text-button" type="button" data-action="reset-qr" data-widget-id="${widget.id}">Reset</button>
        </div>
        <div class="qr-preview" data-qr-preview style="--qr-size: ${qrSize}" aria-label="QR preview">${cells}</div>
        ${errorMarkup}
      </div>
    `,
  );
}

function renderContextMenu() {
  if (!ui.contextMenuLayer) {
    return;
  }

  const menuState = state.contextMenu;
  if (!menuState) {
    ui.contextMenuLayer.innerHTML = "";
    return;
  }

  const link = getLink(menuState.sectionId, menuState.linkId);
  const section = getSection(menuState.sectionId);
  const widget = getLinkListWidgetBySectionId(menuState.sectionId);
  if (
    !link ||
    !section ||
    !widget ||
    !isWidgetVisibleOnDashboard(widget, state.data.selectedDashboard)
  ) {
    state.contextMenu = null;
    ui.contextMenuLayer.innerHTML = "";
    return;
  }

  ui.contextMenuLayer.innerHTML = `
    <div class="context-menu" role="menu" aria-label="Link actions">
      <div class="context-menu-section">
        ${createContextMenuItemMarkup("open-link-new-tab", "external-link", "Open in New Tab", menuState)}
        ${createContextMenuItemMarkup("copy-link-url", "copy", "Copy Link URL", menuState)}
        ${createContextMenuItemMarkup("share-link", "share", "Share Link", menuState)}
        ${createContextMenuItemMarkup("edit-link", "edit", "Edit Link", menuState)}
        ${createContextMenuItemMarkup("duplicate-link", "duplicate", "Duplicate Link", menuState)}
        ${createContextMenuItemMarkup("delete-link", "trash", "Delete Link", menuState, { danger: true })}
      </div>
      <div class="context-menu-separator"></div>
      <div class="context-menu-section">
        <div class="context-menu-label">WIDGET LINKS</div>
        ${createContextMenuItemMarkup("add-link", "plus", "Add Link", menuState)}
        ${createContextMenuMoveMarkup(widget.id)}
        ${createContextMenuItemMarkup("duplicate-link-list-widget", "duplicate-plus", "Duplicate Widget", { widgetId: widget.id })}
        ${createContextMenuItemMarkup("open-link-list-widget-settings", "settings", "Widget Settings", { widgetId: widget.id })}
        ${createContextMenuItemMarkup("delete-link-list-widget", "trash", "Delete Widget", { widgetId: widget.id }, { danger: true })}
      </div>
    </div>
  `;

  const menu = ui.contextMenuLayer.querySelector(".context-menu");
  if (menu) {
    positionContextMenu(menu, menuState.x, menuState.y);
  }
}

function createContextMenuItemMarkup(
  action,
  icon,
  label,
  data = {},
  options = {},
) {
  const attributes = Object.entries(data)
    .filter(([, value]) => normalizeText(value))
    .map(
      ([key, value]) =>
        ` data-${camelToKebab(key)}="${escapeHtml(String(value))}"`,
    )
    .join("");

  return `
    <button
      class="context-menu-item${options.danger ? " is-danger" : ""}"
      type="button"
      role="menuitem"
      data-action="${action}"${attributes}
    >
      <span class="context-menu-icon" aria-hidden="true">${createIcon(icon)}</span>
      <span class="context-menu-text">${label}</span>
    </button>
  `;
}

function createContextMenuMoveMarkup(widgetId) {
  return `
    <div class="context-menu-move">
      <span class="context-menu-icon" aria-hidden="true">${createIcon("move-vertical")}</span>
      <span class="context-menu-text">Move</span>
      <div class="context-menu-move-controls" role="group" aria-label="Move widget">
        <button class="context-menu-move-button" type="button" data-action="move-link-list-widget" data-widget-id="${widgetId}" data-direction="bottom" aria-label="Move to bottom" title="Move to bottom">${createIcon("arrow-down-to-line")}</button>
        <button class="context-menu-move-button" type="button" data-action="move-link-list-widget" data-widget-id="${widgetId}" data-direction="down" aria-label="Move down" title="Move down">${createIcon("arrow-down")}</button>
        <button class="context-menu-move-button" type="button" data-action="move-link-list-widget" data-widget-id="${widgetId}" data-direction="up" aria-label="Move up" title="Move up">${createIcon("arrow-up")}</button>
        <button class="context-menu-move-button" type="button" data-action="move-link-list-widget" data-widget-id="${widgetId}" data-direction="top" aria-label="Move to top" title="Move to top">${createIcon("arrow-up-to-line")}</button>
      </div>
    </div>
  `;
}

function renderWidgetEditControls(widgetId, options = {}) {
  const className = normalizeText(options.className);

  return `
    <div class="widget-edit-controls${className ? ` ${className}` : ""}" role="group" aria-label="Actions du widget">
      ${renderWidgetMoveControls(widgetId, { className: "widget-move-controls-inline" })}
      <div class="widget-edit-controls-divider" aria-hidden="true"></div>
      <button class="small-icon-button" type="button" data-action="delete-widget" data-widget-id="${widgetId}" aria-label="Supprimer le widget" title="Supprimer le widget">${createIcon("trash")}</button>
    </div>
  `;
}

function renderWidgetMoveControls(widgetId, options = {}) {
  const className = normalizeText(options.className);

  return `
    <div class="widget-move-controls${className ? ` ${className}` : ""}" role="group" aria-label="Deplacer le widget">
      <button class="small-icon-button" type="button" data-action="move-widget" data-widget-id="${widgetId}" data-direction="bottom" aria-label="Placer tout en bas" title="Placer tout en bas">${createIcon("arrow-down-to-line")}</button>
      <button class="small-icon-button" type="button" data-action="move-widget" data-widget-id="${widgetId}" data-direction="down" aria-label="Descendre d'un cran" title="Descendre d'un cran">${createIcon("arrow-down")}</button>
      <button class="small-icon-button" type="button" data-action="move-widget" data-widget-id="${widgetId}" data-direction="up" aria-label="Monter d'un cran" title="Monter d'un cran">${createIcon("arrow-up")}</button>
      <button class="small-icon-button" type="button" data-action="move-widget" data-widget-id="${widgetId}" data-direction="top" aria-label="Placer tout en haut" title="Placer tout en haut">${createIcon("arrow-up-to-line")}</button>
    </div>
  `;
}

function positionContextMenu(menu, x, y) {
  const gutter = 10;
  const maxLeft = Math.max(gutter, window.innerWidth - menu.offsetWidth - gutter);
  const maxTop = Math.max(gutter, window.innerHeight - menu.offsetHeight - gutter);
  const left = clampNumber(x, gutter, maxLeft, gutter);
  const top = clampNumber(y, gutter, maxTop, gutter);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

function openContextMenu({ sectionId, linkId, x, y }) {
  if (!getLink(sectionId, linkId)) {
    closeContextMenu();
    return;
  }

  state.contextMenu = { sectionId, linkId, x, y };
  renderContextMenu();
}

function closeContextMenu() {
  if (!state.contextMenu) {
    return;
  }

  state.contextMenu = null;
  renderContextMenu();
}

function renderMarkdownEditorWidget(widget) {
  const mode = normalizeText(widget.config?.mode) || "split";
  const markdown =
    toStringValue(widget.config?.markdown) ||
    "# Project README\n\nA modern dashboard application built with **local widgets**.\n\n## Features\n\n- Customizable widgets\n- Multiple dashboards\n- Browser extension support";
  const preview = renderMarkdownPreview(markdown);

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel markdown-widget" data-mode="${escapeHtml(mode)}">
        <div class="widget-toolbar-row">
          ${["edit", "split", "preview"]
            .map(
              (item) => `
                <button class="text-button ${mode === item ? "is-active" : ""}" type="button" data-action="set-markdown-mode" data-widget-id="${widget.id}" data-mode="${item}">
                  ${escapeHtml(item)}
                </button>
              `,
            )
            .join("")}
          <button class="text-button" type="button" data-action="copy-markdown" data-widget-id="${widget.id}">Copy</button>
          <button class="text-button" type="button" data-action="download-markdown" data-widget-id="${widget.id}">Download</button>
        </div>
        <div class="markdown-layout">
          <textarea class="widget-textarea markdown-editor-pane" data-widget-id="${widget.id}" data-widget-input="markdown-text">${escapeHtml(markdown)}</textarea>
          <div class="markdown-preview-pane">${preview}</div>
        </div>
      </div>
    `,
  );
}

function renderTextDiffWidget(widget) {
  const original =
    toStringValue(widget.config?.original) ||
    "function greet(name) {\n  console.log('Hello, ' + name);\n  return true;\n}";
  const modified =
    toStringValue(widget.config?.modified) ||
    "function greet(name) {\n  const message = `Hello, ${name}`;\n  console.log(message);\n  return message;\n}";
  const diff = renderDiff(original, modified);

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel text-diff-widget">
        <div class="diff-inputs">
          <label>
            <span>Original</span>
            <textarea class="widget-textarea" data-widget-id="${widget.id}" data-widget-input="diff-original">${escapeHtml(original)}</textarea>
          </label>
          <label>
            <span>Modified</span>
            <textarea class="widget-textarea" data-widget-id="${widget.id}" data-widget-input="diff-modified">${escapeHtml(modified)}</textarea>
          </label>
        </div>
        <div class="widget-toolbar-row">
          <button class="text-button" type="button" data-action="copy-diff" data-widget-id="${widget.id}">Copy diff</button>
          <button class="text-button" type="button" data-action="reset-diff" data-widget-id="${widget.id}">Reset</button>
        </div>
        <div class="diff-output">${diff}</div>
      </div>
    `,
  );
}

function renderCalendarWidget(widget) {
  const current = getCalendarDate(widget);
  const days = buildCalendarDays(current);
  const todayKey = toDateKey(new Date());

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel calendar-widget">
        <div class="calendar-head">
          <button class="small-icon-button" type="button" data-action="calendar-prev" data-widget-id="${widget.id}" aria-label="Mois precedent">${createIcon("chevron-left")}</button>
          <strong>${escapeHtml(formatMonthYear(current))}</strong>
          <button class="small-icon-button" type="button" data-action="calendar-next" data-widget-id="${widget.id}" aria-label="Mois suivant">${createIcon("chevron-right")}</button>
          <button class="text-button" type="button" data-action="calendar-today" data-widget-id="${widget.id}">Today</button>
        </div>
        <div class="calendar-grid">
          ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<span class="calendar-weekday">${day}</span>`).join("")}
          ${days
            .map(
              (day) => `
                <span class="calendar-day ${day.currentMonth ? "" : "is-muted"} ${day.key === todayKey ? "is-today" : ""}">
                  ${day.date.getDate()}
                </span>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  );
}

function renderClockWidget(widget) {
  const size = getClockWidgetSize(widget);

  return `
    <section
      class="dashboard-widget clock-widget"
      data-widget-id="${widget.id}"
      data-widget-type="${widget.type}"
      draggable="${state.editMode ? "true" : "false"}"
    >
      ${
        state.editMode
          ? `
            <div class="clock-widget-actions">
              ${renderWidgetEditControls(widget.id)}
            </div>
          `
          : ""
      }
      <div class="clock-widget-face" data-clock-widget="true" style="--clock-size: ${size}px">
        <svg class="clock-widget-dial" viewBox="0 0 320 320" aria-hidden="true">
          ${renderClockDialMarkup()}
        </svg>
        <div class="clock-hand clock-hand-hour" data-clock-hour></div>
        <div class="clock-hand clock-hand-minute" data-clock-minute></div>
        <div class="clock-center-dot"></div>
        <div class="clock-date-label" data-clock-date>${escapeHtml(formatClockDate(new Date()))}</div>
        ${
          state.editMode
            ? `
              <button
                class="clock-resize-handle"
                type="button"
                draggable="false"
                data-clock-resize-handle="true"
                data-widget-id="${widget.id}"
                aria-label="Redimensionner l'horloge"
                title="Redimensionner l'horloge"
              >${createIcon("resize-diagonal")}</button>
            `
            : ""
        }
      </div>
    </section>
  `;
}

function renderClockDialMarkup() {
  const center = 160;
  const marks = Array.from({ length: 60 }, (_, index) => {
    const angle = ((index / 60) * Math.PI * 2) - Math.PI / 2;
    const isHour = index % 5 === 0;
    const inner = isHour ? 132 : 144;
    const outer = isHour ? 154 : 150;
    const x1 = center + Math.cos(angle) * inner;
    const y1 = center + Math.sin(angle) * inner;
    const x2 = center + Math.cos(angle) * outer;
    const y2 = center + Math.sin(angle) * outer;
    return `<line class="clock-tick ${isHour ? "clock-tick-hour" : "clock-tick-minute"}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"></line>`;
  }).join("");

  const labels = Array.from({ length: 12 }, (_, index) => {
    const value = index === 0 ? 12 : index;
    const angle = ((index / 12) * Math.PI * 2) - Math.PI / 2;
    const radius = 118;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius + 8;
    return `<text class="clock-number" x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="middle">${value}</text>`;
  }).join("");

  return `${marks}${labels}`;
}

function getClockWidgetSize(widget) {
  return clampNumber(widget?.config?.size, 220, 520, 320);
}

function renderPomodoroWidget(widget) {
  const pomodoro = getResolvedPomodoroState(widget);
  const isComplete = pomodoro.phase === "complete";
  const primaryLabel = isComplete
    ? "Restart"
    : pomodoro.isRunning
      ? "Pause"
      : "Start";
  const resetDisabled =
    !pomodoro.isRunning &&
    pomodoro.phase === "work" &&
    pomodoro.workSessionsCompleted === 0 &&
    pomodoro.remainingSeconds === POMODORO_WORK_SECONDS;

  return renderWidgetCard(
    widget,
    `
      <div
        class="widget-panel pomodoro-widget"
        data-pomodoro-widget="true"
        data-widget-id="${widget.id}"
        data-phase="${escapeHtml(pomodoro.phase)}"
      >
        <button
          class="pomodoro-side-button pomodoro-reset-button"
          type="button"
          data-action="reset-pomodoro"
          data-widget-id="${widget.id}"
          ${resetDisabled ? "disabled" : ""}
          aria-label="Reset pomodoro"
          title="Reset"
        >
          <span class="pomodoro-side-button-icon" aria-hidden="true">${createIcon("reset")}</span>
          <span class="pomodoro-side-button-label">Reset</span>
        </button>

        <div class="pomodoro-main">
          <div class="pomodoro-time" data-pomodoro-time>${formatPomodoroTime(pomodoro.remainingSeconds)}</div>
          <div class="pomodoro-status" data-pomodoro-status>${escapeHtml(getPomodoroStatusLabel(pomodoro))}</div>
          <div class="pomodoro-progress" data-pomodoro-progress>${renderPomodoroProgressDots(pomodoro.workSessionsCompleted)}</div>
        </div>

        <div class="pomodoro-side-actions">
          <button
            class="pomodoro-side-button pomodoro-primary-button ${pomodoro.isRunning ? "is-running" : ""}"
            type="button"
            data-action="toggle-pomodoro"
            data-widget-id="${widget.id}"
            aria-label="${escapeHtml(primaryLabel)} pomodoro"
            title="${escapeHtml(primaryLabel)}"
          >
            <span class="pomodoro-side-button-icon" aria-hidden="true">${createIcon(
              pomodoro.isRunning ? "pause" : "play",
            )}</span>
            <span class="pomodoro-side-button-label" data-pomodoro-primary-label>${escapeHtml(primaryLabel)}</span>
          </button>
          <button
            class="pomodoro-side-button pomodoro-skip-button"
            type="button"
            data-action="skip-pomodoro"
            data-widget-id="${widget.id}"
            ${isComplete ? "disabled" : ""}
            aria-label="Skip pomodoro"
            title="Skip"
          >
            <span class="pomodoro-side-button-icon" aria-hidden="true">${createIcon("skip")}</span>
            <span class="pomodoro-side-button-label">Skip</span>
          </button>
        </div>
      </div>
    `,
    {
      cardClass: " pomodoro-widget-card",
    },
  );
}

function formatPomodoroTime(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getPomodoroStatusLabel(pomodoro) {
  if (pomodoro.phase === "complete") {
    return "Completed";
  }

  if (pomodoro.phase === "break") {
    return pomodoro.isRunning ? "Break" : "Break Ready";
  }

  if (pomodoro.isRunning) {
    return "Focus";
  }

  return pomodoro.workSessionsCompleted > 0 ? "Ready to Focus" : "Ready";
}

function renderPomodoroProgressDots(workSessionsCompleted) {
  return Array.from({ length: POMODORO_TOTAL_SESSIONS }, (_, index) => {
    const isDone = index < workSessionsCompleted;
    return `<span class="pomodoro-progress-dot ${isDone ? "is-done" : ""}" aria-hidden="true"></span>`;
  }).join("");
}

function renderKanbanWidget(widget) {
  const columns = getKanbanColumns(widget);
  const cardsMarkup = columns
    .map(
      (column) => `
        <div class="kanban-column">
          <div class="kanban-column-title">
            <span class="kanban-dot"></span>
            <strong>${escapeHtml(column.title)}</strong>
            <span>${column.cards.length}</span>
          </div>
          <div class="kanban-card-list">
            ${
              column.cards.length
                ? column.cards
                    .map(
                      (card) => `
                        <article class="kanban-card" data-card-id="${card.id}">
                          <input class="kanban-card-input" type="text" value="${escapeHtml(card.title)}" data-widget-id="${widget.id}" data-kanban-column="${column.id}" data-card-id="${card.id}" data-widget-input="kanban-card-title" />
                          <div class="kanban-card-actions">
                            <button class="small-icon-button" type="button" data-action="move-kanban-card" data-direction="left" data-widget-id="${widget.id}" data-kanban-column="${column.id}" data-card-id="${card.id}" aria-label="Deplacer a gauche">${createIcon("chevron-left")}</button>
                            <button class="small-icon-button" type="button" data-action="move-kanban-card" data-direction="right" data-widget-id="${widget.id}" data-kanban-column="${column.id}" data-card-id="${card.id}" aria-label="Deplacer a droite">${createIcon("chevron-right")}</button>
                            <button class="small-icon-button" type="button" data-action="delete-kanban-card" data-widget-id="${widget.id}" data-kanban-column="${column.id}" data-card-id="${card.id}" aria-label="Supprimer">${createIcon("close")}</button>
                          </div>
                        </article>
                      `,
                    )
                    .join("")
                : `<p class="widget-muted">No cards</p>`
            }
          </div>
          <div class="kanban-add-row">
            <input class="widget-input" type="text" placeholder="Add task" data-widget-id="${widget.id}" data-kanban-column="${column.id}" data-widget-input="kanban-new-card" />
            <button class="text-button" type="button" data-action="add-kanban-card" data-widget-id="${widget.id}" data-kanban-column="${column.id}">Add</button>
          </div>
        </div>
      `,
    )
    .join("");

  return renderWidgetCard(
    widget,
    `<div class="widget-panel kanban-widget">${cardsMarkup}</div>`,
  );
}

function renderDailyQuizWidget(widget) {
  const dayKey = toDateKey(new Date());
  const question = getDailyQuestion(dayKey);
  const history =
    widget.config?.history && typeof widget.config.history === "object"
      ? widget.config.history
      : {};
  const answer = history[dayKey];
  const answered = Number.isInteger(answer);

  const answers = question.answers
    .map(
      (text, index) => `
        <button
          class="quiz-answer ${answered && index === question.correctAnswerIndex ? "is-correct" : ""} ${answered && index === answer && index !== question.correctAnswerIndex ? "is-wrong" : ""}"
          type="button"
          data-action="answer-quiz"
          data-widget-id="${widget.id}"
          data-answer-index="${index}"
          ${answered ? "disabled" : ""}
        >
          <span>${String.fromCharCode(65 + index)}</span>
          ${escapeHtml(text)}
        </button>
      `,
    )
    .join("");

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel quiz-widget">
        <div class="quiz-category">${escapeHtml(question.category)}</div>
        <p class="quiz-question">${escapeHtml(question.question)}</p>
        <div class="quiz-answers">${answers}</div>
        ${answered ? `<p class="widget-muted">${escapeHtml(question.explanation || "Answer saved for today.")}</p>` : ""}
      </div>
    `,
  );
}

function renderImageCompressionWidget(widget) {
  const quality = clampNumber(widget.config?.quality, 0.35, 0.95, 0.72);
  const images = Array.isArray(widget.config?.images)
    ? widget.config.images
    : [];

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel image-compression-widget">
        <label class="image-drop-zone" data-widget-id="${widget.id}">
          <input type="file" accept="image/png,image/jpeg,image/webp" multiple data-widget-id="${widget.id}" data-widget-input="image-files" />
          <span>${createIcon("compress")}</span>
          <strong>Select or drop images</strong>
          <em>PNG, JPG, WebP only. Compression runs locally in your browser.</em>
        </label>
        <label class="widget-field-inline">
          <span>Quality</span>
          <input class="widget-range" type="range" min="0.35" max="0.95" step="0.05" value="${quality}" data-widget-id="${widget.id}" data-widget-input="image-quality" />
          <span class="widget-value">${Math.round(quality * 100)}%</span>
        </label>
        <div class="image-result-list">
          ${
            images.length
              ? images
                  .map(
                    (image) => `
                      <article class="image-result-card">
                        <img src="${escapeHtml(image.dataUrl)}" alt="" />
                        <strong>${escapeHtml(image.name)}</strong>
                        <span>${formatBytes(image.originalSize)} -> ${formatBytes(image.compressedSize)}</span>
                        <em>${formatReduction(image.originalSize, image.compressedSize)}</em>
                        <button class="text-button" type="button" data-action="download-compressed-image" data-widget-id="${widget.id}" data-image-id="${image.id}">Download</button>
                      </article>
                    `,
                  )
                  .join("")
              : `<p class="widget-muted">No compressed images yet.</p>`
          }
        </div>
      </div>
    `,
  );
}

function renderUptimeMonitorWidget(widget) {
  const services = getUptimeServices(widget);
  const rows = services.length
    ? services
        .map((service) => {
          const latest = service.history?.[service.history.length - 1] || null;
          const status = latest?.status || "unknown";
          return `
            <div class="uptime-row ${state.editMode ? "uptime-row-editable" : ""}">
              <span class="uptime-status is-${status}"></span>
              <strong title="${escapeHtml(service.url)}">${escapeHtml(service.name)}</strong>
              <div class="uptime-bars">${renderUptimeBars(service.history || [])}</div>
              <span class="uptime-latency">${latest?.latency ? `${latest.latency}ms` : "--"}</span>
              <span class="uptime-code">${latest?.code || status}</span>
              ${
                state.editMode
                  ? `<button class="small-icon-button" type="button" data-action="delete-uptime-service" data-widget-id="${widget.id}" data-service-id="${service.id}" aria-label="Supprimer ${escapeHtml(service.name)}" title="Supprimer">${createIcon("trash")}</button>`
                  : ""
              }
            </div>
          `;
        })
        .join("")
    : `<p class="widget-muted">Aucun site surveille.</p>`;
  const editControls = state.editMode
    ? `
      <form class="uptime-add-row" data-uptime-add-form data-widget-id="${widget.id}">
        <input class="widget-input" type="text" name="name" placeholder="Nom" autocomplete="off" data-uptime-service-name />
        <input class="widget-input" type="text" name="url" placeholder="https://exemple.com" autocomplete="off" data-uptime-service-url />
        <button class="text-button" type="submit">Ajouter</button>
      </form>
    `
    : "";

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel uptime-widget">
        <div class="widget-toolbar-row">
          <span class="widget-muted">Manual check</span>
          <button class="text-button" type="button" data-action="refresh-uptime" data-widget-id="${widget.id}">Refresh</button>
        </div>
        ${editControls}
        <div class="uptime-list">${rows}</div>
      </div>
    `,
  );
}

function renderBrowserSessionWidget(widget) {
  const sessions = getBrowserSessions(widget);
  const body = sessions.length
    ? sessions
        .map(
          (session) => `
            <article class="browser-session-item">
              <div class="browser-session-meta">
                <div class="browser-session-title-row">
                  <strong>${escapeHtml(session.name)}</strong>
                  <span>${formatBrowserSessionStats(session)}</span>
                </div>
                <span class="widget-muted">${escapeHtml(formatDateTime(session.savedAt) || "Sauvegarde locale")}</span>
              </div>
              <div class="browser-session-links">
                ${session.windows
                  .flatMap((windowItem) => windowItem.tabs)
                  .slice(0, 5)
                  .map(
                    (tab) => `
                      <span class="browser-session-link-pill" title="${escapeHtml(tab.url)}">
                        ${escapeHtml(tab.title || formatHost(tab.url))}
                      </span>
                    `,
                  )
                  .join("")}
                ${
                  countBrowserSessionTabs(session) > 5
                    ? `<span class="browser-session-link-pill browser-session-link-pill-muted">+${countBrowserSessionTabs(session) - 5}</span>`
                    : ""
                }
              </div>
              <div class="widget-button-row">
                <button class="text-button" type="button" data-action="save-browser-session" data-widget-id="${widget.id}" data-session-id="${session.id}">
                  Mettre a jour
                </button>
                <button class="text-button" type="button" data-action="open-browser-session" data-widget-id="${widget.id}" data-session-id="${session.id}">
                  Ouvrir
                </button>
                <button class="text-button" type="button" data-action="copy-browser-session-links" data-widget-id="${widget.id}" data-session-id="${session.id}">
                  Copier les liens
                </button>
                <button class="text-button" type="button" data-action="delete-browser-session" data-widget-id="${widget.id}" data-session-id="${session.id}">
                  Supprimer
                </button>
              </div>
            </article>
          `,
        )
        .join("")
    : `<p class="widget-muted">Aucune session enregistree. Capture ton contexte de travail avant de fermer l'ordinateur.</p>`;

  return renderWidgetCard(
    widget,
    `
      <div class="widget-panel browser-session-widget">
        <div class="widget-toolbar-row">
          <div>
            <p class="widget-description">Sauvegarde les fenetres et onglets ouverts, puis restaure-les plus tard en un clic.</p>
          </div>
          <button class="text-button" type="button" data-action="save-browser-session" data-widget-id="${widget.id}">
            Sauvegarder la session actuelle
          </button>
        </div>
        <div class="browser-session-list">${body}</div>
      </div>
    `,
  );
}

function getWidgetDefinition(type) {
  return (
    widgetDefinitions.find((definition) => definition.type === type) || null
  );
}

function createDefaultWidgets() {
  return [
    {
      id: "widget_clock_home",
      type: "clock",
      title: "Clock",
      dashboardIds: ["home"],
      order: 0,
      config: {},
    },
    {
      id: "widget_search_primary",
      type: "search",
      title: "Search",
      dashboardIds: ["home"],
      order: 1,
      config: { engineId: "google" },
    },
    {
      id: "widget_link_section_home_favorites",
      type: "link-list",
      title: "Favoris",
      dashboardIds: ["home"],
      order: 2,
      config: { sectionId: "section_home_favorites" },
    },
    {
      id: "widget_note_home",
      type: "quick-note",
      title: "Note",
      dashboardIds: ["home"],
      order: 3,
      config: { text: "", updatedAt: "" },
    },
    {
      id: "widget_todo_workspace",
      type: "todo",
      title: "To-Do",
      dashboardIds: ["workspace"],
      order: 4,
      config: {
        items: [
          { id: createId("todo"), text: "Review priorities", done: false },
          {
            id: createId("todo"),
            text: "Ship one useful improvement",
            done: false,
          },
        ],
      },
    },
    {
      id: "widget_link_section_workspace_google",
      type: "link-list",
      title: "Google Workspace",
      dashboardIds: ["workspace"],
      order: 5,
      config: { sectionId: "section_workspace_google" },
    },
    {
      id: "widget_link_section_workspace_tools",
      type: "link-list",
      title: "Tools",
      dashboardIds: ["workspace"],
      order: 6,
      config: { sectionId: "section_workspace_tools" },
    },
    {
      id: "widget_note_workspace",
      type: "quick-note",
      title: "Note",
      dashboardIds: ["workspace"],
      order: 7,
      config: { text: "", updatedAt: "" },
    },
    {
      id: "widget_pomodoro_focus",
      type: "pomodoro",
      title: "Pomodoro Timer",
      dashboardIds: ["focus"],
      order: 8,
      config: createPomodoroConfig(),
    },
    {
      id: "widget_kanban_focus",
      type: "kanban",
      title: "Kanban Tasks",
      dashboardIds: ["focus"],
      order: 9,
      config: createDefaultWidgetConfig("kanban"),
    },
  ];
}

function createDefaultWidgetConfig(type) {
  switch (type) {
    case "search":
      return { engineId: state.data?.selectedEngine || "google" };
    case "link-list":
      return { sectionId: "" };
    case "spacer":
      return { height: 80 };
    case "todo":
      return {
        items: [
          { id: createId("todo"), text: "Review priorities", done: false },
          {
            id: createId("todo"),
            text: "Ship one useful improvement",
            done: false,
          },
        ],
      };
    case "quick-note":
      return { text: "", updatedAt: "" };
    case "qr-code":
      return { value: "https://chatgpt.com/" };
    case "markdown-editor":
      return {
        mode: "split",
        markdown:
          "# Notes\n\nWrite Markdown on the left and keep the preview beside it.",
      };
    case "text-diff":
      return {
        original: "Before\nLine kept\nOld detail",
        modified: "Before\nLine kept\nNew detail",
      };
    case "calendar":
      return { month: new Date().toISOString() };
    case "clock":
      return { size: 320 };
    case "pomodoro":
      return createPomodoroConfig();
    case "kanban":
      return {
        columns: [
          {
            id: "todo",
            title: "Todo",
            cards: [{ id: createId("card"), title: "Plan next widget" }],
          },
          {
            id: "progress",
            title: "In Progress",
            cards: [{ id: createId("card"), title: "Polish dashboard" }],
          },
          { id: "done", title: "Done", cards: [] },
        ],
      };
    case "daily-quiz":
      return { history: {} };
    case "image-compression":
      return { quality: 0.72, images: [] };
    case "uptime-monitor":
      return {
        services: [
          {
            id: "service_intranet",
            name: "MCProd Intranet",
            url: "https://intranet-agence-mcprod.netlify.app/",
            history: [],
          },
          {
            id: "service_osmo",
            name: "Osmo Supply",
            url: "https://osmo.supply/",
            history: [],
          },
          {
            id: "service_netlify",
            name: "Netlify",
            url: "https://app.netlify.com/",
            history: [],
          },
        ],
      };
    case "browser-session":
      return { sessions: [] };
    default:
      return {};
  }
}

function createWidget(type, title, dashboardIds, config = {}) {
  const definition = getWidgetDefinition(type) || widgetDefinitions[0];
  return {
    id: createId("widget"),
    type: definition.type,
    title: normalizeText(title) || definition.label,
    dashboardIds: sanitizeDashboardIds(dashboardIds),
    order: getNextWidgetOrder(),
    config: sanitizeWidgetConfig(definition.type, config),
  };
}

function getStoredDashboards(sourceData = state.data) {
  const source =
    Array.isArray(sourceData?.dashboards) && sourceData.dashboards.length
      ? sourceData.dashboards
      : defaultDashboards;

  return source
    .map((dashboard, index) => sanitizeDashboard(dashboard, index))
    .filter(Boolean)
    .sort((a, b) => a.order - b.order);
}

function getMutableDashboards() {
  if (!Array.isArray(state.data.dashboards)) {
    state.data.dashboards = getStoredDashboards().map((dashboard) => ({
      ...dashboard,
    }));
  }

  return state.data.dashboards;
}

function getDashboardViews(sourceData = state.data) {
  return getStoredDashboards(sourceData);
}

function getNextDashboardOrder() {
  const dashboards = getMutableDashboards();
  return dashboards.length
    ? Math.max(...dashboards.map((dashboard) => Number(dashboard.order) || 0)) +
        1
    : 0;
}

function createDashboardId(label) {
  const base =
    normalizeText(label)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "dashboard";
  const existingIds = new Set(
    getMutableDashboards().map((dashboard) => dashboard.id),
  );
  if (!existingIds.has(base)) {
    return base;
  }

  let index = 2;
  while (existingIds.has(`${base}-${index}`)) {
    index += 1;
  }

  return `${base}-${index}`;
}

function getNextWidgetOrder() {
  if (!Array.isArray(state.data.widgets) || !state.data.widgets.length) {
    return 0;
  }

  return (
    Math.max(...state.data.widgets.map((widget) => Number(widget.order) || 0)) +
    1
  );
}

function getWidget(widgetId) {
  return state.data.widgets.find((widget) => widget.id === widgetId) || null;
}

async function updateWidgetConfig(widgetId, updates, options = {}) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  widget.config = sanitizeWidgetConfig(widget.type, {
    ...(widget.config || {}),
    ...(updates || {}),
  });

  if (options.render) {
    await persist(options.message || "Widget mis a jour.");
    return;
  }

  state.data = sanitizeData(state.data);
  await saveData(state.data);
  if (options.message) {
    showStatus(options.message);
  }
}

async function deleteWidget(widgetId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  if (!confirm(`Supprimer "${widget.title}" ?`)) {
    return;
  }

  state.data.widgets = state.data.widgets.filter(
    (item) => item.id !== widgetId,
  );
  await persist("Widget supprime.");
}

async function deleteDashboard(dashboardId) {
  const dashboard = getMutableDashboards().find(
    (item) => item.id === dashboardId,
  );
  if (!dashboard) {
    return;
  }

  if (!confirm(`Supprimer le dashboard "${dashboard.label}" ?`)) {
    return;
  }

  state.data.dashboards = getMutableDashboards().filter(
    (item) => item.id !== dashboardId,
  );
  state.data.sections = state.data.sections.map((section) => ({
    ...section,
    dashboards: (section.dashboards || []).filter((id) => id !== dashboardId),
  }));
  state.data.widgets = state.data.widgets.map((widget) => ({
    ...widget,
    dashboardIds: (widget.dashboardIds || []).filter(
      (id) => id !== dashboardId,
    ),
  }));

  if (state.data.selectedDashboard === dashboardId) {
    state.data.selectedDashboard =
      getStoredDashboards({ dashboards: state.data.dashboards })[0]?.id ||
      DEFAULT_DASHBOARD_ID;
  }

  await persist("Dashboard supprime.");
}

function createUniqueSectionTitle(baseTitle) {
  const base = normalizeText(baseTitle) || "New Links";
  const existing = new Set(
    state.data.sections.map((section) => normalizeKey(section.title)),
  );
  if (!existing.has(normalizeKey(base))) {
    return base;
  }

  let index = 2;
  while (existing.has(normalizeKey(`${base} ${index}`))) {
    index += 1;
  }

  return `${base} ${index}`;
}

function getTodoItems(widget) {
  return Array.isArray(widget.config?.items) ? widget.config.items : [];
}

async function addTodoItem(widgetId) {
  const widget = getWidget(widgetId);
  const input = findWidgetElement(widgetId)?.querySelector(
    "[data-widget-input='todo-new']",
  );
  const text = normalizeText(input?.value);
  if (!widget || !text) {
    input?.focus();
    return;
  }

  const items = getTodoItems(widget).concat({
    id: createId("todo"),
    text,
    done: false,
  });
  await updateWidgetConfig(
    widgetId,
    { items },
    { render: true, message: "Tache ajoutee." },
  );
}

async function toggleTodoItem(widgetId, todoId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const items = getTodoItems(widget).map((item) =>
    item.id === todoId ? { ...item, done: !item.done } : item,
  );
  await updateWidgetConfig(widgetId, { items }, { render: true });
}

async function deleteTodoItem(widgetId, todoId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  await updateWidgetConfig(
    widgetId,
    { items: getTodoItems(widget).filter((item) => item.id !== todoId) },
    { render: true, message: "Tache supprimee." },
  );
}

async function updateTodoText(widgetId, todoId, text) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const items = getTodoItems(widget).map((item) =>
    item.id === todoId ? { ...item, text: toStringValue(text) } : item,
  );
  await updateWidgetConfig(widgetId, { items }, { render: false });
}

async function copyWidgetText(widgetId, field) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  await copyText(toStringValue(widget.config?.[field]));
}

async function copyText(text) {
  const value = toStringValue(text);
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  showStatus("Copie.");
}

function findWidgetElement(widgetId) {
  return (
    [...document.querySelectorAll(".dashboard-widget")].find(
      (element) => element.dataset.widgetId === widgetId,
    ) || null
  );
}

function toStringValue(value) {
  return value == null ? "" : String(value);
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, number));
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatClockDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  }).format(date);
}

function ensureClockTickerRunning() {
  if (state.clockTimer) {
    return;
  }

  state.clockTimer = window.setInterval(() => {
    updateClockWidgets();
  }, 1000);
}

function ensurePomodoroTickerRunning() {
  if (state.pomodoroTimer) {
    return;
  }

  state.pomodoroTimer = window.setInterval(() => {
    updatePomodoroWidgets();
  }, 1000);
}

function updateClockWidgets() {
  const clockElements = document.querySelectorAll("[data-clock-widget]");
  if (!clockElements.length) {
    return;
  }

  const now = new Date();
  const minutes = now.getMinutes() + now.getSeconds() / 60;
  const hours = (now.getHours() % 12) + minutes / 60;
  const hourAngle = hours * 30;
  const minuteAngle = minutes * 6;
  const dateLabel = formatClockDate(now);

  clockElements.forEach((element) => {
    const hourHand = element.querySelector("[data-clock-hour]");
    const minuteHand = element.querySelector("[data-clock-minute]");
    const dateElement = element.querySelector("[data-clock-date]");

    if (hourHand instanceof HTMLElement) {
      hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    }

    if (minuteHand instanceof HTMLElement) {
      minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    }

    if (dateElement instanceof HTMLElement) {
      dateElement.textContent = dateLabel;
    }
  });
}

function updatePomodoroWidgets() {
  const pomodoroElements = document.querySelectorAll("[data-pomodoro-widget]");
  if (!pomodoroElements.length) {
    return;
  }

  pomodoroElements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    const widgetId = element.dataset.widgetId || "";
    const widget = getWidget(widgetId);
    if (!widget) {
      return;
    }

    const pomodoro = getResolvedPomodoroState(widget);
    element.dataset.phase = pomodoro.phase;

    const timeElement = element.querySelector("[data-pomodoro-time]");
    if (timeElement instanceof HTMLElement) {
      timeElement.textContent = formatPomodoroTime(pomodoro.remainingSeconds);
    }

    const statusElement = element.querySelector("[data-pomodoro-status]");
    if (statusElement instanceof HTMLElement) {
      statusElement.textContent = getPomodoroStatusLabel(pomodoro);
    }

    const progressElement = element.querySelector("[data-pomodoro-progress]");
    if (progressElement instanceof HTMLElement) {
      progressElement.innerHTML = renderPomodoroProgressDots(
        pomodoro.workSessionsCompleted,
      );
    }

    const primaryButton = element.querySelector(
      "[data-action='toggle-pomodoro']",
    );
    const primaryLabel = element.querySelector("[data-pomodoro-primary-label]");
    const nextPrimaryLabel =
      pomodoro.phase === "complete"
        ? "Restart"
        : pomodoro.isRunning
          ? "Pause"
          : "Start";

    if (primaryButton instanceof HTMLButtonElement) {
      primaryButton.classList.toggle("is-running", pomodoro.isRunning);
      primaryButton.title = nextPrimaryLabel;
      primaryButton.setAttribute(
        "aria-label",
        `${nextPrimaryLabel} pomodoro`,
      );

      const iconTarget = primaryButton.querySelector(
        ".pomodoro-side-button-icon",
      );
      if (iconTarget instanceof HTMLElement) {
        iconTarget.innerHTML = createIcon(
          pomodoro.isRunning ? "pause" : "play",
        );
      }
    }

    if (primaryLabel instanceof HTMLElement) {
      primaryLabel.textContent = nextPrimaryLabel;
    }

    const skipButton = element.querySelector("[data-action='skip-pomodoro']");
    if (skipButton instanceof HTMLButtonElement) {
      skipButton.disabled = pomodoro.phase === "complete";
    }

    const resetButton = element.querySelector("[data-action='reset-pomodoro']");
    if (resetButton instanceof HTMLButtonElement) {
      resetButton.disabled =
        !pomodoro.isRunning &&
        pomodoro.phase === "work" &&
        pomodoro.workSessionsCompleted === 0 &&
        pomodoro.remainingSeconds === POMODORO_WORK_SECONDS;
    }
  });
}

function createPomodoroConfig(overrides = {}) {
  return {
    phase: "work",
    isRunning: false,
    workSessionsCompleted: 0,
    remainingSeconds: POMODORO_WORK_SECONDS,
    phaseEndsAt: "",
    ...overrides,
  };
}

function getPomodoroPhaseDuration(phase) {
  return phase === "break" ? POMODORO_BREAK_SECONDS : POMODORO_WORK_SECONDS;
}

function normalizePomodoroPhase(phase) {
  return ["work", "break", "complete"].includes(phase) ? phase : "work";
}

function getResolvedPomodoroState(widgetOrConfig, now = new Date()) {
  const sourceConfig =
    widgetOrConfig && widgetOrConfig.config
      ? widgetOrConfig.config
      : widgetOrConfig;
  const base = sanitizeWidgetConfig("pomodoro", sourceConfig || {});
  let phase = base.phase;
  let isRunning = base.isRunning;
  let workSessionsCompleted = base.workSessionsCompleted;
  let phaseEndsAt = base.phaseEndsAt;

  if (phase === "complete") {
    return {
      ...base,
      phase,
      isRunning: false,
      workSessionsCompleted,
      remainingSeconds: 0,
      phaseEndsAt: "",
    };
  }

  if (!isRunning) {
    return {
      ...base,
      phase,
      isRunning: false,
      workSessionsCompleted,
      remainingSeconds: clampNumber(
        base.remainingSeconds,
        0,
        POMODORO_WORK_SECONDS,
        getPomodoroPhaseDuration(phase),
      ),
      phaseEndsAt: "",
    };
  }

  let phaseEndMs = Date.parse(phaseEndsAt || "");
  if (!Number.isFinite(phaseEndMs)) {
    phaseEndMs = now.getTime() + getPomodoroPhaseDuration(phase) * 1000;
  }

  while (isRunning && phase !== "complete" && phaseEndMs <= now.getTime()) {
    const nextState = advancePomodoroState({
      phase,
      isRunning,
      workSessionsCompleted,
    });
    phase = nextState.phase;
    isRunning = nextState.isRunning;
    workSessionsCompleted = nextState.workSessionsCompleted;

    if (!isRunning || phase === "complete") {
      return {
        ...base,
        phase: "complete",
        isRunning: false,
        workSessionsCompleted,
        remainingSeconds: 0,
        phaseEndsAt: "",
      };
    }

    phaseEndMs += getPomodoroPhaseDuration(phase) * 1000;
    phaseEndsAt = new Date(phaseEndMs).toISOString();
  }

  return {
    ...base,
    phase,
    isRunning,
    workSessionsCompleted,
    remainingSeconds: Math.max(
      0,
      Math.ceil((phaseEndMs - now.getTime()) / 1000),
    ),
    phaseEndsAt: new Date(phaseEndMs).toISOString(),
  };
}

function advancePomodoroState(stateLike) {
  const phase = normalizePomodoroPhase(stateLike?.phase);
  const completed = clampNumber(
    stateLike?.workSessionsCompleted,
    0,
    POMODORO_TOTAL_SESSIONS,
    0,
  );

  if (phase === "work") {
    const nextCompleted = Math.min(POMODORO_TOTAL_SESSIONS, completed + 1);
    if (nextCompleted >= POMODORO_TOTAL_SESSIONS) {
      return {
        phase: "complete",
        isRunning: false,
        workSessionsCompleted: nextCompleted,
        remainingSeconds: 0,
        phaseEndsAt: "",
      };
    }

    return {
      phase: "break",
      isRunning: true,
      workSessionsCompleted: nextCompleted,
      remainingSeconds: POMODORO_BREAK_SECONDS,
      phaseEndsAt: "",
    };
  }

  if (phase === "break") {
    return {
      phase: "work",
      isRunning: true,
      workSessionsCompleted: completed,
      remainingSeconds: POMODORO_WORK_SECONDS,
      phaseEndsAt: "",
    };
  }

  return {
    phase: "complete",
    isRunning: false,
    workSessionsCompleted: completed,
    remainingSeconds: 0,
    phaseEndsAt: "",
  };
}

async function togglePomodoro(widgetId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const current = getResolvedPomodoroState(widget);
  const now = new Date();

  if (current.phase === "complete") {
    await updateWidgetConfig(
      widgetId,
      createPomodoroConfig({
        isRunning: true,
        phaseEndsAt: new Date(
          now.getTime() + POMODORO_WORK_SECONDS * 1000,
        ).toISOString(),
      }),
      { render: true },
    );
    return;
  }

  if (current.isRunning) {
    await updateWidgetConfig(
      widgetId,
      {
        phase: current.phase,
        isRunning: false,
        workSessionsCompleted: current.workSessionsCompleted,
        remainingSeconds: current.remainingSeconds,
        phaseEndsAt: "",
      },
      { render: true },
    );
    return;
  }

  await updateWidgetConfig(
    widgetId,
    {
      phase: current.phase,
      isRunning: true,
      workSessionsCompleted: current.workSessionsCompleted,
      remainingSeconds: current.remainingSeconds,
      phaseEndsAt: new Date(
        now.getTime() + current.remainingSeconds * 1000,
      ).toISOString(),
    },
    { render: true },
  );
}

async function skipPomodoroPhase(widgetId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const current = getResolvedPomodoroState(widget);
  if (current.phase === "complete") {
    return;
  }

  const next = advancePomodoroState(current);
  const now = new Date();
  await updateWidgetConfig(
    widgetId,
    next.phase === "complete"
      ? next
      : {
          ...next,
          isRunning: true,
          phaseEndsAt: new Date(
            now.getTime() + next.remainingSeconds * 1000,
          ).toISOString(),
        },
    { render: true },
  );
}

async function resetPomodoro(widgetId) {
  await updateWidgetConfig(widgetId, createPomodoroConfig(), { render: true });
}

function hashString(value) {
  let hash = 2166136261;
  for (const character of toStringValue(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash);
}

function downloadPseudoQR(widgetId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const qrCode = createQRCodeModel(widget.config?.value || "");
  if (!qrCode.matrix) {
    showStatus(qrCode.error || "QR impossible a generer.");
    return;
  }

  const matrix = qrCode.matrix;
  const cellSize = 10;
  const quietZone = 4;
  const canvas = document.createElement("canvas");
  const size = (matrix.length + quietZone * 2) * cellSize;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  context.fillStyle = "#f4f4f4";
  context.fillRect(0, 0, size, size);
  context.fillStyle = "#111111";

  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        context.fillRect(
          (x + quietZone) * cellSize,
          (y + quietZone) * cellSize,
          cellSize,
          cellSize,
        );
      }
    });
  });

  canvas.toBlob((blob) => {
    if (!blob) {
      return;
    }
    downloadBlob(blob, "qr-code.png");
  }, "image/png");
}

function refreshQRCodePreview(widgetId, input) {
  const widget = getWidget(widgetId);
  const panel = input.closest(".qr-widget");
  const preview = panel?.querySelector("[data-qr-preview]");
  const error = panel?.querySelector("[data-qr-error]");
  const downloadButton = panel?.querySelector(
    "[data-action='download-qr-preview']",
  );
  if (!widget || !preview) {
    return;
  }

  const qrCode = createQRCodeModel(widget.config?.value || "");
  preview.innerHTML = qrCode.matrix ? renderQRCodeCells(qrCode.matrix) : "";
  preview.style.setProperty("--qr-size", String(qrCode.size || 29));

  if (error) {
    error.textContent = qrCode.error || "";
    error.hidden = !qrCode.error;
  }

  if (downloadButton instanceof HTMLButtonElement) {
    downloadButton.disabled = !qrCode.matrix;
  }
}

function refreshImageQualityValue(input) {
  input
    .closest(".widget-field-inline")
    ?.querySelector(".widget-value")
    ?.replaceChildren(`${Math.round(Number(input.value || 0) * 100)}%`);
}

function renderQRCodeCells(matrix) {
  return matrix
    .map((row) =>
      row
        .map((cell) => `<span class="${cell ? "is-on" : ""}"></span>`)
        .join(""),
    )
    .join("");
}

function createQRCodeModel(value) {
  const bytes = new TextEncoder().encode(toStringValue(value));
  const versionDefinition = qrVersionDefinitions.find(
    (item) => getQRCodeRequiredBits(bytes.length) <= item.dataCodewords * 8,
  );
  if (!versionDefinition) {
    return {
      matrix: null,
      size: 29,
      error: "Texte trop long pour le generateur QR local (106 octets UTF-8 max).",
    };
  }

  const dataCodewords = buildQRCodeDataCodewords(
    bytes,
    versionDefinition.dataCodewords,
  );
  const eccCodewords = buildQRCodeErrorCorrectionCodewords(
    dataCodewords,
    versionDefinition.eccCodewords,
  );
  const baseMatrix = createQRCodeBaseMatrix(versionDefinition);
  placeQRCodeDataBits(
    baseMatrix.matrix,
    baseMatrix.isFunction,
    dataCodewords.concat(eccCodewords),
  );
  const bestMask = chooseQRCodeMask(baseMatrix.matrix, baseMatrix.isFunction);
  applyQRCodeMask(baseMatrix.matrix, baseMatrix.isFunction, bestMask);
  drawQRCodeFormatBits(
    baseMatrix.matrix,
    baseMatrix.isFunction,
    versionDefinition.version,
    bestMask,
  );

  return {
    matrix: baseMatrix.matrix,
    size: baseMatrix.matrix.length,
    version: versionDefinition.version,
  };
}

function getQRCodeRequiredBits(byteLength) {
  return 4 + 8 + byteLength * 8;
}

function buildQRCodeDataCodewords(bytes, dataCodewordCount) {
  const capacityBits = dataCodewordCount * 8;
  const bits = [];
  appendQRCodeBits(bits, 0b0100, 4);
  appendQRCodeBits(bits, bytes.length, 8);
  [...bytes].forEach((byte) => appendQRCodeBits(bits, byte, 8));
  appendQRCodeBits(bits, 0, Math.min(4, capacityBits - bits.length));

  while (bits.length % 8 !== 0) {
    bits.push(false);
  }

  const codewords = [];
  for (let index = 0; index < bits.length; index += 8) {
    let value = 0;
    for (let offset = 0; offset < 8; offset += 1) {
      value = (value << 1) | (bits[index + offset] ? 1 : 0);
    }
    codewords.push(value);
  }

  const padBytes = [0xec, 0x11];
  let padIndex = 0;
  while (codewords.length < dataCodewordCount) {
    codewords.push(padBytes[padIndex % padBytes.length]);
    padIndex += 1;
  }

  return codewords;
}

function appendQRCodeBits(target, value, bitCount) {
  for (let index = bitCount - 1; index >= 0; index -= 1) {
    target.push(Boolean((value >>> index) & 1));
  }
}

function buildQRCodeErrorCorrectionCodewords(dataCodewords, eccCount) {
  const generator = createQRCodeReedSolomonGenerator(eccCount);
  const remainder = Array.from({ length: eccCount }, () => 0);

  dataCodewords.forEach((codeword) => {
    const factor = codeword ^ remainder.shift();
    remainder.push(0);
    generator.forEach((coefficient, index) => {
      remainder[index] ^= multiplyQRCodeGalois(factor, coefficient);
    });
  });

  return remainder;
}

function createQRCodeReedSolomonGenerator(degree) {
  let coefficients = [1];
  for (let root = 0; root < degree; root += 1) {
    const next = Array.from({ length: coefficients.length + 1 }, () => 0);
    coefficients.forEach((coefficient, index) => {
      next[index] ^= multiplyQRCodeGalois(
        coefficient,
        getQRCodeGaloisPower(root),
      );
      next[index + 1] ^= coefficient;
    });
    coefficients = next;
  }
  return coefficients.slice(0, -1);
}

function multiplyQRCodeGalois(left, right) {
  let result = 0;
  let a = left;
  let b = right;
  while (b > 0) {
    if (b & 1) {
      result ^= a;
    }
    a <<= 1;
    if (a & 0x100) {
      a ^= 0x11d;
    }
    b >>>= 1;
  }
  return result;
}

function getQRCodeGaloisPower(exponent) {
  let result = 1;
  for (let index = 0; index < exponent; index += 1) {
    result = multiplyQRCodeGalois(result, 0x02);
  }
  return result;
}

function createQRCodeBaseMatrix(versionDefinition) {
  const size = versionDefinition.version * 4 + 17;
  const matrix = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false),
  );
  const isFunction = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false),
  );

  const setFunctionModule = (x, y, dark) => {
    if (x < 0 || y < 0 || x >= size || y >= size) {
      return;
    }
    matrix[y][x] = dark;
    isFunction[y][x] = true;
  };

  drawQRCodeFinderPattern(matrix, isFunction, 0, 0);
  drawQRCodeFinderPattern(matrix, isFunction, size - 7, 0);
  drawQRCodeFinderPattern(matrix, isFunction, 0, size - 7);

  for (let index = 8; index < size - 8; index += 1) {
    if (!isFunction[6][index]) {
      setFunctionModule(index, 6, index % 2 === 0);
    }
    if (!isFunction[index][6]) {
      setFunctionModule(6, index, index % 2 === 0);
    }
  }

  versionDefinition.alignment.forEach((centerY) => {
    versionDefinition.alignment.forEach((centerX) => {
      if (
        (centerX === 6 && centerY === 6) ||
        (centerX === 6 && centerY === size - 7) ||
        (centerX === size - 7 && centerY === 6)
      ) {
        return;
      }
      drawQRCodeAlignmentPattern(matrix, isFunction, centerX, centerY);
    });
  });

  setFunctionModule(8, size - 8, true);
  reserveQRCodeFormatArea(isFunction);

  return { matrix, isFunction };
}

function drawQRCodeFinderPattern(matrix, isFunction, startX, startY) {
  for (let y = -1; y <= 7; y += 1) {
    for (let x = -1; x <= 7; x += 1) {
      const currentX = startX + x;
      const currentY = startY + y;
      if (
        currentX < 0 ||
        currentY < 0 ||
        currentX >= matrix.length ||
        currentY >= matrix.length
      ) {
        continue;
      }

      const isSeparator = x === -1 || x === 7 || y === -1 || y === 7;
      const isOuter = x === 0 || x === 6 || y === 0 || y === 6;
      const isInner = x >= 2 && x <= 4 && y >= 2 && y <= 4;
      matrix[currentY][currentX] = !isSeparator && (isOuter || isInner);
      isFunction[currentY][currentX] = true;
    }
  }
}

function drawQRCodeAlignmentPattern(matrix, isFunction, centerX, centerY) {
  for (let y = -2; y <= 2; y += 1) {
    for (let x = -2; x <= 2; x += 1) {
      const currentX = centerX + x;
      const currentY = centerY + y;
      matrix[currentY][currentX] = Math.max(Math.abs(x), Math.abs(y)) !== 1;
      isFunction[currentY][currentX] = true;
    }
  }
}

function reserveQRCodeFormatArea(isFunction) {
  const size = isFunction.length;
  for (let index = 0; index < 9; index += 1) {
    if (index !== 6) {
      isFunction[8][index] = true;
      isFunction[index][8] = true;
    }
  }

  for (let index = 0; index < 8; index += 1) {
    isFunction[8][size - 1 - index] = true;
    isFunction[size - 1 - index][8] = true;
  }
}

function placeQRCodeDataBits(matrix, isFunction, codewords) {
  const size = matrix.length;
  let bitIndex = 0;
  let upward = true;

  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) {
      right -= 1;
    }

    for (let vertical = 0; vertical < size; vertical += 1) {
      const y = upward ? size - 1 - vertical : vertical;
      for (let offset = 0; offset < 2; offset += 1) {
        const x = right - offset;
        if (isFunction[y][x]) {
          continue;
        }
        matrix[y][x] = getQRCodeBit(codewords, bitIndex);
        bitIndex += 1;
      }
    }

    upward = !upward;
  }
}

function getQRCodeBit(codewords, bitIndex) {
  const codeword = codewords[Math.floor(bitIndex / 8)] || 0;
  return Boolean((codeword >>> (7 - (bitIndex % 8))) & 1);
}

function chooseQRCodeMask(matrix, isFunction) {
  let bestMask = 0;
  let bestPenalty = Number.POSITIVE_INFINITY;

  for (let mask = 0; mask < 8; mask += 1) {
    const candidate = matrix.map((row) => row.slice());
    applyQRCodeMask(candidate, isFunction, mask);
    drawQRCodeFormatBits(candidate, isFunction, null, mask);
    const penalty = calculateQRCodePenalty(candidate);
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      bestMask = mask;
    }
  }

  return bestMask;
}

function applyQRCodeMask(matrix, isFunction, mask) {
  const size = matrix.length;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (isFunction[y][x] || !getQRCodeMaskBit(mask, x, y)) {
        continue;
      }
      matrix[y][x] = !matrix[y][x];
    }
  }
}

function getQRCodeMaskBit(mask, x, y) {
  switch (mask) {
    case 0:
      return (x + y) % 2 === 0;
    case 1:
      return y % 2 === 0;
    case 2:
      return x % 3 === 0;
    case 3:
      return (x + y) % 3 === 0;
    case 4:
      return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
    case 5:
      return ((x * y) % 2) + ((x * y) % 3) === 0;
    case 6:
      return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
    case 7:
      return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    default:
      return false;
  }
}

function drawQRCodeFormatBits(matrix, isFunction, version, mask) {
  const size = matrix.length;
  const formatBits = getQRCodeFormatBits(mask);
  const setFormatModule = (x, y, bitIndex) => {
    matrix[y][x] = Boolean((formatBits >>> bitIndex) & 1);
    isFunction[y][x] = true;
  };

  for (let index = 0; index <= 5; index += 1) {
    setFormatModule(8, index, index);
  }
  setFormatModule(8, 7, 6);
  setFormatModule(8, 8, 7);
  setFormatModule(7, 8, 8);
  for (let index = 9; index < 15; index += 1) {
    setFormatModule(14 - index, 8, index);
  }

  for (let index = 0; index < 8; index += 1) {
    setFormatModule(size - 1 - index, 8, index);
  }
  for (let index = 8; index < 15; index += 1) {
    setFormatModule(8, size - 15 + index, index);
  }

  if (version != null) {
    matrix[size - 8][8] = true;
  }
}

function getQRCodeFormatBits(mask) {
  const data = (0b01 << 3) | mask;
  let remainder = data << 10;
  for (let bit = 14; bit >= 10; bit -= 1) {
    if ((remainder >>> bit) & 1) {
      remainder ^= 0x537 << (bit - 10);
    }
  }
  return ((data << 10) | remainder) ^ 0x5412;
}

function calculateQRCodePenalty(matrix) {
  const size = matrix.length;
  let penalty = 0;

  for (let y = 0; y < size; y += 1) {
    penalty += calculateQRCodeRunPenalty(matrix[y]);
  }

  for (let x = 0; x < size; x += 1) {
    const column = Array.from({ length: size }, (_, y) => matrix[y][x]);
    penalty += calculateQRCodeRunPenalty(column);
  }

  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const color = matrix[y][x];
      if (
        color === matrix[y][x + 1] &&
        color === matrix[y + 1][x] &&
        color === matrix[y + 1][x + 1]
      ) {
        penalty += 3;
      }
    }
  }

  const patternA = "10111010000";
  const patternB = "00001011101";
  for (let y = 0; y < size; y += 1) {
    penalty += calculateQRCodePatternPenalty(
      matrix[y],
      patternA,
      patternB,
    );
  }
  for (let x = 0; x < size; x += 1) {
    const column = Array.from({ length: size }, (_, y) => matrix[y][x]);
    penalty += calculateQRCodePatternPenalty(column, patternA, patternB);
  }

  const darkModules = matrix.reduce(
    (total, row) => total + row.filter(Boolean).length,
    0,
  );
  const totalModules = size * size;
  const darkRatio = (darkModules * 100) / totalModules;
  penalty += Math.floor(Math.abs(darkRatio - 50) / 5) * 10;

  return penalty;
}

function calculateQRCodeRunPenalty(line) {
  let penalty = 0;
  let runLength = 1;

  for (let index = 1; index <= line.length; index += 1) {
    if (index < line.length && line[index] === line[index - 1]) {
      runLength += 1;
      continue;
    }

    if (runLength >= 5) {
      penalty += runLength - 2;
    }
    runLength = 1;
  }

  return penalty;
}

function calculateQRCodePatternPenalty(line, patternA, patternB) {
  const text = line.map((item) => (item ? "1" : "0")).join("");
  let penalty = 0;
  for (let index = 0; index <= text.length - 11; index += 1) {
    const slice = text.slice(index, index + 11);
    if (slice === patternA || slice === patternB) {
      penalty += 40;
    }
  }
  return penalty;
}

function renderMarkdownPreview(markdown) {
  const lines = toStringValue(markdown).split(/\r?\n/);
  const blocks = [];
  let listItems = [];
  let codeLines = [];
  let inCode = false;

  const flushList = () => {
    if (listItems.length) {
      blocks.push(
        `<ul>${listItems.map((item) => `<li>${formatMarkdownInline(item)}</li>`).join("")}</ul>`,
      );
      listItems = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length) {
      blocks.push(
        `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
      );
      codeLines = [];
    }
  };

  lines.forEach((line) => {
    if (line.trim().startsWith("```")) {
      if (inCode) {
        flushCode();
      } else {
        flushList();
      }
      inCode = !inCode;
      return;
    }

    if (inCode) {
      codeLines.push(line);
      return;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${formatMarkdownInline(heading[2])}</h${level}>`);
      return;
    }

    const list = line.match(/^\s*[-*]\s+(.+)$/);
    if (list) {
      listItems.push(list[1]);
      return;
    }

    if (!line.trim()) {
      flushList();
      return;
    }

    flushList();
    blocks.push(`<p>${formatMarkdownInline(line)}</p>`);
  });

  flushList();
  flushCode();
  return blocks.length
    ? blocks.join("")
    : `<p class="widget-muted">Preview</p>`;
}

function formatMarkdownInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderDiff(original, modified) {
  const parts = calculateLineDiff(
    toStringValue(original),
    toStringValue(modified),
  );
  return parts
    .map(
      (part) =>
        `<div class="diff-line is-${part.type}"><span>${part.prefix}</span><code>${escapeHtml(part.text || " ")}</code></div>`,
    )
    .join("");
}

function renderDiffText(widget) {
  if (!widget) {
    return "";
  }

  return calculateLineDiff(
    widget.config?.original || "",
    widget.config?.modified || "",
  )
    .map((part) => `${part.prefix} ${part.text}`)
    .join("\n");
}

function refreshDiffPreview(widgetId, input) {
  const widget = getWidget(widgetId);
  const output = input
    .closest(".text-diff-widget")
    ?.querySelector(".diff-output");
  if (widget && output) {
    output.innerHTML = renderDiff(
      widget.config?.original || "",
      widget.config?.modified || "",
    );
  }
}

function calculateLineDiff(original, modified) {
  const a = toStringValue(original).split(/\r?\n/);
  const b = toStringValue(modified).split(/\r?\n/);
  const table = Array.from({ length: a.length + 1 }, () =>
    Array.from({ length: b.length + 1 }, () => 0),
  );

  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      table[i][j] =
        a[i] === b[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }

  const parts = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      parts.push({ type: "same", prefix: " ", text: a[i] });
      i += 1;
      j += 1;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      parts.push({ type: "removed", prefix: "-", text: a[i] });
      i += 1;
    } else {
      parts.push({ type: "added", prefix: "+", text: b[j] });
      j += 1;
    }
  }

  while (i < a.length) {
    parts.push({ type: "removed", prefix: "-", text: a[i] });
    i += 1;
  }

  while (j < b.length) {
    parts.push({ type: "added", prefix: "+", text: b[j] });
    j += 1;
  }

  return parts;
}

function getCalendarDate(widget) {
  const date = new Date(widget.config?.month || Date.now());
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function buildCalendarDays(date) {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - monthStart.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    return {
      date: day,
      key: toDateKey(day),
      currentMonth: day.getMonth() === date.getMonth(),
    };
  });
}

function toDateKey(date) {
  const value = new Date(date);
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatMonthYear(date) {
  return new Intl.DateTimeFormat("fr-CH", {
    month: "long",
    year: "numeric",
  }).format(date);
}

async function shiftCalendarMonth(widgetId, offset) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const date = getCalendarDate(widget);
  date.setMonth(date.getMonth() + offset);
  await updateWidgetConfig(
    widgetId,
    { month: date.toISOString() },
    { render: true },
  );
}

function getKanbanColumns(widget) {
  return Array.isArray(widget.config?.columns) && widget.config.columns.length
    ? widget.config.columns
    : createDefaultWidgetConfig("kanban").columns;
}

async function addKanbanCard(widgetId, columnId) {
  const widget = getWidget(widgetId);
  const input = findWidgetElement(widgetId)?.querySelector(
    `[data-widget-input='kanban-new-card'][data-kanban-column='${columnId}']`,
  );
  const title = normalizeText(input?.value);
  if (!widget || !title) {
    input?.focus();
    return;
  }

  const columns = getKanbanColumns(widget).map((column) =>
    column.id === columnId
      ? {
          ...column,
          cards: column.cards.concat({ id: createId("card"), title }),
        }
      : column,
  );
  await updateWidgetConfig(
    widgetId,
    { columns },
    { render: true, message: "Carte ajoutee." },
  );
}

async function moveKanbanCard(widgetId, columnId, cardId, direction) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const columns = getKanbanColumns(widget).map((column) => ({
    ...column,
    cards: column.cards.slice(),
  }));
  const sourceIndex = columns.findIndex((column) => column.id === columnId);
  const targetIndex = direction === "left" ? sourceIndex - 1 : sourceIndex + 1;
  if (sourceIndex < 0 || targetIndex < 0 || targetIndex >= columns.length) {
    return;
  }

  const cardIndex = columns[sourceIndex].cards.findIndex(
    (card) => card.id === cardId,
  );
  if (cardIndex < 0) {
    return;
  }

  const [card] = columns[sourceIndex].cards.splice(cardIndex, 1);
  columns[targetIndex].cards.push(card);
  await updateWidgetConfig(
    widgetId,
    { columns },
    { render: true, message: "Carte deplacee." },
  );
}

async function deleteKanbanCard(widgetId, columnId, cardId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const columns = getKanbanColumns(widget).map((column) =>
    column.id === columnId
      ? { ...column, cards: column.cards.filter((card) => card.id !== cardId) }
      : column,
  );
  await updateWidgetConfig(
    widgetId,
    { columns },
    { render: true, message: "Carte supprimee." },
  );
}

async function updateKanbanCardTitle(widgetId, columnId, cardId, title) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const columns = getKanbanColumns(widget).map((column) =>
    column.id === columnId
      ? {
          ...column,
          cards: column.cards.map((card) =>
            card.id === cardId
              ? { ...card, title: toStringValue(title) }
              : card,
          ),
        }
      : column,
  );
  await updateWidgetConfig(widgetId, { columns }, { render: false });
}

const quizQuestions = [
  {
    category: "Technology",
    question:
      "Which protocol is commonly used to resolve domain names into IP addresses?",
    answers: ["DNS", "SMTP", "SSH", "FTP"],
    correctAnswerIndex: 0,
    explanation: "DNS maps names like example.com to IP addresses.",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    answers: ["Ag", "Au", "Gd", "Go"],
    correctAnswerIndex: 1,
    explanation: "Gold uses the symbol Au.",
  },
  {
    category: "Web",
    question: "Which HTML element is used for the main heading of a page?",
    answers: ["main", "title", "h1", "header"],
    correctAnswerIndex: 2,
    explanation: "h1 represents the top-level heading in document content.",
  },
  {
    category: "Productivity",
    question: "What does a kanban board primarily visualize?",
    answers: ["Budgets", "Work stages", "Passwords", "Browser cookies"],
    correctAnswerIndex: 1,
    explanation: "Kanban boards show work moving through stages.",
  },
];

function getDailyQuestion(dayKey) {
  const index = hashString(dayKey) % quizQuestions.length;
  return quizQuestions[index];
}

async function answerDailyQuiz(widgetId, answerIndex) {
  const widget = getWidget(widgetId);
  if (!widget || !Number.isInteger(answerIndex)) {
    return;
  }

  const dayKey = toDateKey(new Date());
  const history =
    widget.config?.history && typeof widget.config.history === "object"
      ? { ...widget.config.history }
      : {};
  history[dayKey] = answerIndex;
  await updateWidgetConfig(
    widgetId,
    { history },
    { render: true, message: "Reponse enregistree." },
  );
}

async function compressSelectedImages(widgetId, fileList) {
  const widget = getWidget(widgetId);
  const files = [...(fileList || [])]
    .filter((file) =>
      ["image/png", "image/jpeg", "image/webp"].includes(file.type),
    )
    .slice(0, 6);
  if (!widget || !files.length) {
    return;
  }

  const quality = clampNumber(widget.config?.quality, 0.35, 0.95, 0.72);
  const compressed = [];
  for (const file of files) {
    const result = await compressImageFile(file, quality);
    if (result) {
      compressed.push(result);
    }
  }

  const existingImages = Array.isArray(widget.config?.images)
    ? widget.config.images
    : [];
  await updateWidgetConfig(
    widgetId,
    { images: compressed.concat(existingImages).slice(0, 8), quality },
    { render: true, message: "Images compressees." },
  );
}

async function compressImageFile(file, quality) {
  try {
    const bitmap = await createImageBitmap(file);
    const maxSize = 1600;
    const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/webp", quality),
    );
    if (!blob) {
      return null;
    }

    return {
      id: createId("image"),
      name: replaceFileExtension(file.name, "webp"),
      originalSize: file.size,
      compressedSize: blob.size,
      mime: "image/webp",
      dataUrl: await blobToDataUrl(blob),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(blob);
  });
}

function replaceFileExtension(name, extension) {
  const base = normalizeText(name).replace(/\.[^.]+$/, "") || "image";
  return `${base}.${extension}`;
}

function downloadCompressedImage(widgetId, imageId) {
  const widget = getWidget(widgetId);
  const image = widget?.config?.images?.find((item) => item.id === imageId);
  if (!image) {
    return;
  }

  downloadDataUrl(image.dataUrl, image.name);
}

function formatBytes(value) {
  const bytes = Number(value) || 0;
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 102.4) / 10} KB`;
  }
  return `${Math.round(bytes / 104857.6) / 10} MB`;
}

function formatReduction(originalSize, compressedSize) {
  const original = Number(originalSize) || 0;
  const compressed = Number(compressedSize) || 0;
  if (!original || compressed >= original) {
    return "No reduction";
  }

  return `${Math.round((1 - compressed / original) * 100)}% smaller`;
}

function getUptimeServices(widget) {
  return Array.isArray(widget.config?.services)
    ? widget.config.services
    : createDefaultWidgetConfig("uptime-monitor").services;
}

function getBrowserSessions(widget) {
  return Array.isArray(widget.config?.sessions) ? widget.config.sessions : [];
}

function countBrowserSessionTabs(session) {
  return Array.isArray(session?.windows)
    ? session.windows.reduce(
        (total, windowItem) =>
          total + (Array.isArray(windowItem.tabs) ? windowItem.tabs.length : 0),
        0,
      )
    : 0;
}

function formatBrowserSessionStats(session) {
  const windowCount = Array.isArray(session?.windows)
    ? session.windows.length
    : 0;
  const tabCount = countBrowserSessionTabs(session);
  const windowLabel = windowCount > 1 ? "fenetres" : "fenetre";
  const tabLabel = tabCount > 1 ? "onglets" : "onglet";
  return `${windowCount} ${windowLabel} - ${tabCount} ${tabLabel}`;
}

function renderUptimeBars(history) {
  const items = Array.isArray(history) ? history.slice(-18) : [];
  if (!items.length) {
    return Array.from(
      { length: 18 },
      () => `<span class="uptime-bar is-unknown"></span>`,
    ).join("");
  }

  return items
    .map(
      (item) =>
        `<span class="uptime-bar is-${escapeHtml(item.status || "unknown")}"></span>`,
    )
    .join("");
}

function scheduleVisibleUptimeChecks() {
  getVisibleWidgets()
    .filter(
      (widget) =>
        widget.type === "uptime-monitor" &&
        !state.uptimeCheckedWidgets.has(widget.id),
    )
    .forEach((widget) => {
      state.uptimeCheckedWidgets.add(widget.id);
      window.setTimeout(() => {
        checkUptimeWidget(widget.id).catch((error) => console.error(error));
      }, 200);
    });
}

async function checkUptimeWidget(widgetId, options = {}) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  if (options.force) {
    state.uptimeCheckedWidgets.add(widgetId);
  }

  const checkedServices = [];
  for (const service of getUptimeServices(widget)) {
    checkedServices.push(await checkUptimeService(service));
  }

  const latestWidget = getWidget(widgetId);
  if (!latestWidget) {
    return;
  }

  const checkedById = new Map(
    checkedServices.map((service) => [service.id, service]),
  );
  const services = getUptimeServices(latestWidget).map((service) => {
    const checkedService = checkedById.get(service.id);
    return checkedService && checkedService.url === service.url
      ? { ...service, history: checkedService.history }
      : service;
  });

  await updateWidgetConfig(
    widgetId,
    { services },
    { render: true, message: options.force ? "Uptime actualise." : undefined },
  );
}

async function addUptimeService(widgetId, form) {
  const widget = getWidget(widgetId);
  const nameInput = form?.querySelector("[data-uptime-service-name]");
  const urlInput = form?.querySelector("[data-uptime-service-url]");
  const rawUrl = normalizeText(urlInput?.value);
  if (!widget || !rawUrl) {
    urlInput?.focus();
    return;
  }

  let url;
  try {
    url = normalizeUrl(rawUrl);
  } catch (error) {
    showStatus("URL invalide.");
    urlInput?.focus();
    return;
  }

  const services = getUptimeServices(widget);
  const urlKey = normalizeUrlKey(url);
  if (services.some((service) => normalizeUrlKey(service.url) === urlKey)) {
    showStatus("Ce site est deja surveille.");
    urlInput?.focus();
    return;
  }

  const service = {
    id: createId("service"),
    name: normalizeText(nameInput?.value) || formatHost(url),
    url,
    history: [],
  };

  await updateWidgetConfig(
    widgetId,
    { services: services.concat(service) },
    { render: true, message: "Site ajoute." },
  );
}

async function deleteUptimeService(widgetId, serviceId) {
  const widget = getWidget(widgetId);
  if (!widget || !serviceId) {
    return;
  }

  const services = getUptimeServices(widget).filter(
    (service) => service.id !== serviceId,
  );
  await updateWidgetConfig(
    widgetId,
    { services },
    { render: true, message: "Site retire." },
  );
}

async function saveBrowserSession(widgetId, sessionId = null) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  ensureBrowserSessionApi();
  const snapshot = await captureCurrentBrowserSession();
  const sessions = getBrowserSessions(widget).slice();
  const existingSession = sessionId
    ? sessions.find((item) => item.id === sessionId)
    : null;
  const session = {
    id: existingSession?.id || createId("session"),
    name:
      existingSession?.name ||
      buildBrowserSessionName(snapshot, sessions.length),
    savedAt: new Date().toISOString(),
    windows: snapshot.windows,
  };

  const nextSessions = existingSession
    ? sessions.map((item) => (item.id === session.id ? session : item))
    : [session, ...sessions].slice(0, 12);

  await updateWidgetConfig(
    widgetId,
    { sessions: nextSessions },
    { render: true, message: "Session enregistree." },
  );
}

async function openBrowserSession(widgetId, sessionId) {
  const session = getBrowserSessions(getWidget(widgetId)).find(
    (item) => item.id === sessionId,
  );
  if (!session) {
    return;
  }

  ensureBrowserSessionApi();

  for (const windowItem of session.windows) {
    const urls = windowItem.tabs.map((tab) => tab.url).filter(Boolean);
    if (!urls.length) {
      continue;
    }

    await chrome.windows.create({
      url: urls,
      focused: false,
      type: "normal",
      ...(Number.isFinite(windowItem.left) ? { left: windowItem.left } : {}),
      ...(Number.isFinite(windowItem.top) ? { top: windowItem.top } : {}),
      ...(Number.isFinite(windowItem.width) ? { width: windowItem.width } : {}),
      ...(Number.isFinite(windowItem.height)
        ? { height: windowItem.height }
        : {}),
    });
  }

  showStatus("Session rouverte.");
}

async function copyBrowserSessionLinks(widgetId, sessionId) {
  const session = getBrowserSessions(getWidget(widgetId)).find(
    (item) => item.id === sessionId,
  );
  if (!session) {
    return;
  }

  const content = session.windows
    .map((windowItem, index) => {
      const lines = windowItem.tabs.map(
        (tab) => `${tab.title || formatHost(tab.url)}\n${tab.url}`,
      );
      return [`Fenetre ${index + 1}`, ...lines].join("\n");
    })
    .join("\n\n");

  await copyText(content);
}

async function deleteBrowserSession(widgetId, sessionId) {
  const widget = getWidget(widgetId);
  if (!widget) {
    return;
  }

  const session = getBrowserSessions(widget).find(
    (item) => item.id === sessionId,
  );
  if (!session) {
    return;
  }

  if (!confirm(`Supprimer la session "${session.name}" ?`)) {
    return;
  }

  await updateWidgetConfig(
    widgetId,
    {
      sessions: getBrowserSessions(widget).filter(
        (item) => item.id !== sessionId,
      ),
    },
    { render: true, message: "Session supprimee." },
  );
}

function buildBrowserSessionName(snapshot, existingCount = 0) {
  const titles = snapshot.windows
    .flatMap((windowItem) => windowItem.tabs)
    .map((tab) => normalizeText(tab.title))
    .filter(Boolean)
    .slice(0, 2);

  if (titles.length) {
    return titles.join(" + ");
  }

  return `Session ${existingCount + 1}`;
}

async function captureCurrentBrowserSession() {
  const windows = await chrome.windows.getAll({
    populate: true,
    windowTypes: ["normal"],
  });
  const currentTabUrl = location.href;
  const normalizedWindows = windows
    .map((windowItem) => ({
      left: Number.isFinite(windowItem.left) ? windowItem.left : null,
      top: Number.isFinite(windowItem.top) ? windowItem.top : null,
      width: Number.isFinite(windowItem.width) ? windowItem.width : null,
      height: Number.isFinite(windowItem.height) ? windowItem.height : null,
      tabs: (windowItem.tabs || [])
        .filter((tab) => isRestorableBrowserTab(tab, currentTabUrl))
        .map((tab) => ({
          url: tab.url,
          title: normalizeText(tab.title) || formatHost(tab.url),
        })),
    }))
    .filter((windowItem) => windowItem.tabs.length);

  if (!normalizedWindows.length) {
    throw new Error("Aucun onglet restorable trouve.");
  }

  return { windows: normalizedWindows };
}

function isRestorableBrowserTab(tab, currentTabUrl) {
  const url = normalizeText(tab?.url);
  if (!url) {
    return false;
  }

  if (url === currentTabUrl) {
    return false;
  }

  return /^https?:\/\//.test(url);
}

function ensureBrowserSessionApi() {
  if (
    typeof chrome === "undefined" ||
    !chrome.windows?.getAll ||
    !chrome.windows?.create
  ) {
    throw new Error("Chrome windows API unavailable.");
  }
}

async function checkUptimeService(service) {
  const startedAt = performance.now();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 6500);
  let entry;

  try {
    const response = await fetchUptimeResponse(service.url, controller.signal);
    const status =
      response.status >= 200 && response.status < 400 ? "up" : "down";
    entry = {
      status,
      code: String(response.status || "unknown"),
      latency: Math.round(performance.now() - startedAt),
      checkedAt: new Date().toISOString(),
    };
  } catch (error) {
    const statusInfo = getUptimeErrorStatus(error);
    entry = {
      status: statusInfo.status,
      code: statusInfo.code,
      latency: Math.round(performance.now() - startedAt),
      checkedAt: new Date().toISOString(),
    };
  } finally {
    window.clearTimeout(timeout);
  }

  return {
    ...service,
    history: (Array.isArray(service.history) ? service.history : [])
      .concat(entry)
      .slice(-18),
  };
}

async function fetchUptimeResponse(url, signal) {
  const requestOptions = {
    cache: "no-store",
    redirect: "follow",
    signal,
  };
  try {
    return await fetch(url, {
      ...requestOptions,
      method: "HEAD",
    });
  } catch (error) {
    const isHeadOnlyFailure =
      error instanceof TypeError ||
      (error instanceof Error &&
        /head|method|405|501/i.test(error.message || ""));
    if (!isHeadOnlyFailure) {
      throw error;
    }
  }

  return fetch(url, {
    ...requestOptions,
    method: "GET",
  });
}

function getUptimeErrorStatus(error) {
  if (error?.name === "AbortError") {
    return { status: "down", code: "timeout" };
  }

  if (!isExtensionRuntimeAvailable()) {
    return { status: "unknown", code: "blocked" };
  }

  return { status: "down", code: "error" };
}

function isExtensionRuntimeAvailable() {
  return (
    typeof chrome !== "undefined" &&
    Boolean(chrome.runtime?.id) &&
    location.protocol === "chrome-extension:"
  );
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([toStringValue(content)], { type: mimeType });
  downloadBlob(blob, filename);
}

function downloadDataUrl(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  downloadDataUrl(url, filename);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function getSelectedDashboard() {
  return (
    getDashboardViews().find(
      (dashboard) => dashboard.id === state.data.selectedDashboard,
    ) || getDashboardViews()[0]
  );
}

function syncDashboardNav() {
  const dashboard = getSelectedDashboard();
  state.data.selectedDashboard = dashboard.id;
  ui.dashboardNav
    .querySelectorAll(".dashboard-tab[data-dashboard-id]")
    .forEach((tab) => {
      const isSelected = tab.dataset.dashboardId === dashboard.id;
      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-pressed", String(isSelected));
    });
}

function createLinkMarkup(sectionId, link) {
  const icon = escapeHtml(link.icon || getFaviconUrl(link.url));
  return `
    <article
      class="link-card"
      data-section-id="${sectionId}"
      data-link-id="${link.id}"
      draggable="${state.editMode ? "true" : "false"}"
    >
      <a class="link-hit" href="${escapeHtml(link.url)}" title="${escapeHtml(formatHost(link.url))}">
        <span class="link-icon" data-has-image="${icon ? "true" : "false"}" data-has-error="false">
          ${icon ? `<img data-role="favicon" src="${icon}" alt="" loading="lazy" />` : ""}
          <span class="link-initial" aria-hidden="true">${escapeHtml(getInitials(link.title))}</span>
        </span>
        <span class="link-name">${escapeHtml(link.title)}</span>
      </a>

      <div class="tile-actions">
        <button
          class="small-icon-button"
          type="button"
          data-action="edit-link"
          data-section-id="${sectionId}"
          data-link-id="${link.id}"
          aria-label="Modifier le lien"
          title="Modifier le lien"
        >${createIcon("edit")}</button>
        <button
          class="small-icon-button"
          type="button"
          data-action="delete-link"
          data-section-id="${sectionId}"
          data-link-id="${link.id}"
          aria-label="Supprimer le lien"
          title="Supprimer le lien"
        >${createIcon("trash")}</button>
      </div>
    </article>
  `;
}

function openWidgetSelectorDialog() {
  state.dialog = { type: "widget-selector" };
  ui.dialogTitle.textContent = "Ajouter un widget";
  ui.dialogSubmit.style.display = "none";
  ui.dialogCancel.textContent = "Fermer";
  ui.dialogFields.innerHTML = `
    <div class="widget-type-grid">
      ${widgetDefinitions
        .map(
          (definition) => `
            <button class="widget-type-option" type="button" data-action="create-widget" data-widget-type="${definition.type}">
              <span aria-hidden="true">${createIcon(definition.icon)}</span>
              <strong>${escapeHtml(definition.label)}</strong>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
  openDialog({ focusSelector: ".widget-type-option" });
}

async function createWidgetFromType(type) {
  const definition = getWidgetDefinition(type);
  if (!definition) {
    showStatus("Type de widget indisponible.");
    return;
  }

  if (type === "link-list") {
    const title = createUniqueSectionTitle("New Links");
    const section = {
      id: createId("section"),
      title,
      icon: "grid",
      dashboards: getNewWidgetDashboardIds(),
      links: [],
    };
    state.data.sections.push(section);
    state.data.widgets.push(
      createWidget("link-list", title, section.dashboards, {
        sectionId: section.id,
      }),
    );
  } else {
    state.data.widgets.push(
      createWidget(
        type,
        definition.label,
        getNewWidgetDashboardIds(),
        createDefaultWidgetConfig(type),
      ),
    );
  }

  closeDialog();
  await persist("Widget ajoute.");
}

function openSectionDialog(section = null) {
  resetDialogActions();
  state.dialog = {
    type: "section",
    sectionId: section?.id || null,
  };

  ui.dialogTitle.textContent = section ? "Modifier la ligne" : "Nouvelle ligne";
  ui.dialogSubmit.textContent = section ? "Mettre a jour" : "Creer";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="sectionTitle">Titre</label>
      <input id="sectionTitle" name="title" type="text" maxlength="64" value="${escapeHtml(section?.title || "")}" required />
    </div>
    <div class="field">
      <label for="sectionIcon">Icone</label>
      <select id="sectionIcon" name="icon">
        ${sectionIconOptions
          .map(
            (option) => `
              <option value="${option.id}" ${option.id === (section?.icon || "grid") ? "selected" : ""}>
                ${escapeHtml(option.label)}
              </option>
            `,
          )
          .join("")}
      </select>
    </div>
  `;
  openDialog();
}

function openDashboardDialog(dashboard = null) {
  resetDialogActions();
  state.dialog = {
    type: "dashboard",
    dashboardId: dashboard?.id || null,
  };

  ui.dialogTitle.textContent = dashboard
    ? "Modifier le dashboard"
    : "Nouveau dashboard";
  ui.dialogSubmit.textContent = dashboard ? "Mettre a jour" : "Creer";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="dashboardLabel">Nom</label>
      <input id="dashboardLabel" name="label" type="text" maxlength="32" value="${escapeHtml(dashboard?.label || "")}" required />
    </div>
    ${renderDashboardIconPicker(dashboard?.icon || "grid")}
  `;
  openDialog();
}

function renderDashboardIconPicker(selectedIcon) {
  const currentOption = getDashboardIconOption(selectedIcon);

  return `
    <div class="field">
      <label for="dashboardIcon">Icone</label>
      <div class="dashboard-icon-picker">
        <input id="dashboardIcon" name="icon" type="hidden" value="${escapeHtml(currentOption.id)}" />
        <div class="dashboard-icon-picker-current" data-dashboard-icon-current>
          <span class="dashboard-icon-picker-preview" aria-hidden="true">${createIcon(currentOption.id)}</span>
          <div class="dashboard-icon-picker-current-meta">
            <strong data-dashboard-icon-current-label>${escapeHtml(currentOption.label)}</strong>
            <span>Apercu de l'icone selectionnee</span>
          </div>
        </div>
        <div class="dashboard-icon-grid" role="listbox" aria-label="Choisir une icone pour le dashboard">
          ${dashboardIconOptions
            .map(
              (option) => `
                <button
                  class="dashboard-icon-option ${option.id === currentOption.id ? "is-selected" : ""}"
                  type="button"
                  data-action="select-dashboard-icon"
                  data-icon-id="${option.id}"
                  data-icon-label="${escapeHtml(option.label)}"
                  aria-label="${escapeHtml(option.label)}"
                  aria-pressed="${option.id === currentOption.id ? "true" : "false"}"
                  title="${escapeHtml(option.label)}"
                >
                  <span aria-hidden="true">${createIcon(option.id)}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function openLinkDialog(link = null, sectionId = null) {
  resetDialogActions();
  if (!state.data.sections.length) {
    showStatus("Cree une ligne avant d'ajouter un lien.");
    return;
  }

  const targetSectionId =
    sectionId || findSectionIdByLinkId(link?.id) || state.data.sections[0].id;

  state.dialog = {
    type: "link",
    sectionId: targetSectionId,
    linkId: link?.id || null,
  };

  ui.dialogTitle.textContent = link ? "Modifier le lien" : "Nouveau lien";
  ui.dialogSubmit.textContent = link ? "Mettre a jour" : "Ajouter";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="linkTitle">Nom</label>
      <input id="linkTitle" name="title" type="text" maxlength="72" value="${escapeHtml(link?.title || "")}" required data-link-title />
    </div>
    <div class="field">
      <label for="linkUrl">URL</label>
      <input id="linkUrl" name="url" type="text" value="${escapeHtml(link?.url || "")}" placeholder="https://example.com" required data-link-url />
    </div>
    <div class="field">
      <label for="linkSection">Ligne</label>
      <select id="linkSection" name="sectionId">
        ${state.data.sections
          .map(
            (section) => `
              <option value="${section.id}" ${section.id === targetSectionId ? "selected" : ""}>
                ${escapeHtml(section.title)}
              </option>
            `,
          )
          .join("")}
      </select>
    </div>
  `;

  if (!link) {
    bindSuggestedLinkTitle();
  }
  openDialog();
}

function bindSuggestedLinkTitle() {
  const titleInput = ui.dialogFields.querySelector("[data-link-title]");
  const urlInput = ui.dialogFields.querySelector("[data-link-url]");
  let titleWasModified = false;

  titleInput?.addEventListener("input", () => {
    titleWasModified = true;
  });

  urlInput?.addEventListener("input", () => {
    if (titleWasModified || !titleInput) {
      return;
    }

    const suggestedTitle = getSuggestedLinkTitle(urlInput.value);
    if (suggestedTitle) {
      titleInput.value = suggestedTitle;
    }
  });
}

function openDialog(options = {}) {
  ui.formError.textContent = "";
  if (ui.editorDialog.open) {
    ui.editorDialog.close();
  }

  ui.editorDialog.showModal();

  const firstField = ui.dialogFields.querySelector(
    options.focusSelector || "input, select",
  );
  if (firstField) {
    firstField.focus();
    if (firstField instanceof HTMLInputElement) {
      firstField.select();
    }
  }
}

function closeDialog() {
  state.dialog = null;
  ui.formError.textContent = "";
  ui.editorForm.reset();
  resetDialogActions();

  if (ui.editorDialog.open) {
    ui.editorDialog.close();
  }
}

function resetDialogActions() {
  ui.dialogSubmit.style.display = "";
  ui.dialogCancel.textContent = "Annuler";
}

function handleDialogBackdropClick(event) {
  if (event.target === ui.editorDialog) {
    closeDialog();
  }
}

async function handleDialogSubmit(event) {
  event.preventDefault();
  ui.formError.textContent = "";

  if (!state.dialog) {
    return;
  }

  const formData = new FormData(ui.editorForm);

  try {
    if (state.dialog.type === "dashboard") {
      await saveDashboard(formData, state.dialog.dashboardId);
    }

    if (state.dialog.type === "section") {
      await saveSection(formData, state.dialog.sectionId);
    }

    if (state.dialog.type === "link") {
      await saveLink(formData, state.dialog.sectionId, state.dialog.linkId);
    }
  } catch (error) {
    ui.formError.textContent =
      error instanceof Error ? error.message : "Formulaire invalide.";
  }
}

async function saveDashboard(formData, dashboardId) {
  const label = requireText(formData.get("label"), "Le nom est obligatoire.");
  const icon = dashboardIconOptions.some(
    (option) => option.id === formData.get("icon"),
  )
    ? normalizeText(formData.get("icon"))
    : "grid";

  if (dashboardId) {
    const dashboard = getMutableDashboards().find(
      (item) => item.id === dashboardId,
    );
    if (!dashboard) {
      throw new Error("Dashboard introuvable.");
    }

    dashboard.label = label;
    dashboard.icon = icon;
    await persist("Dashboard mis a jour.");
  } else {
    state.data.dashboards.push({
      id: createDashboardId(label),
      label,
      icon,
      order: getNextDashboardOrder(),
    });
    await persist("Dashboard cree.");
  }

  closeDialog();
}

async function saveSection(formData, sectionId) {
  const title = requireText(formData.get("title"), "Le titre est obligatoire.");
  const icon = normalizeText(formData.get("icon")) || "grid";

  if (sectionId) {
    const section = getSection(sectionId);
    if (!section) {
      throw new Error("Ligne introuvable.");
    }

    section.title = title;
    section.icon = icon;
    await persist("Ligne mise a jour.");
  } else {
    const section = {
      id: createId("section"),
      title,
      icon,
      dashboards: getNewWidgetDashboardIds(),
      links: [],
    };
    state.data.sections.push(section);
    state.data.widgets.push(
      createWidget("link-list", title, section.dashboards, {
        sectionId: section.id,
      }),
    );
    await persist("Ligne creee.");
  }

  closeDialog();
}

async function saveLink(formData, originalSectionId, linkId) {
  const title = requireText(formData.get("title"), "Le nom est obligatoire.");
  const url = normalizeUrl(
    requireText(formData.get("url"), "L'URL est obligatoire."),
  );
  const targetSectionId = requireText(
    formData.get("sectionId"),
    "Choisis une ligne.",
  );
  const targetSection = getSection(targetSectionId);

  if (!targetSection) {
    throw new Error("Ligne introuvable.");
  }

  if (linkId) {
    const sourceSection = getSection(originalSectionId);
    const sourceIndex =
      sourceSection?.links.findIndex((item) => item.id === linkId) ?? -1;
    const existingLink =
      sourceIndex >= 0 ? sourceSection.links[sourceIndex] : null;
    if (!sourceSection || !existingLink) {
      throw new Error("Lien introuvable.");
    }

    const updatedLink = {
      ...existingLink,
      title,
      url,
      icon: getFaviconUrl(url),
    };

    if (sourceSection.id === targetSection.id) {
      sourceSection.links.splice(sourceIndex, 1, updatedLink);
    } else {
      sourceSection.links.splice(sourceIndex, 1);
      targetSection.links.push(updatedLink);
    }

    await persist("Lien mis a jour.");
  } else {
    targetSection.links.push({
      id: createId("link"),
      title,
      url,
      icon: getFaviconUrl(url),
    });
    await persist("Lien ajoute.");
  }

  closeDialog();
}

async function deleteSection(sectionId) {
  const section = getSection(sectionId);
  if (!section) {
    return;
  }

  if (!confirm(`Supprimer "${section.title}" et ses liens ?`)) {
    return;
  }

  state.data.sections = state.data.sections.filter(
    (item) => item.id !== sectionId,
  );
  state.data.widgets = state.data.widgets.filter(
    (item) =>
      !(item.type === "link-list" && item.config?.sectionId === sectionId),
  );
  await persist("Ligne supprimee.");
}

async function deleteLink(sectionId, linkId) {
  const section = getSection(sectionId);
  const link = getLink(sectionId, linkId);
  if (!section || !link) {
    return;
  }

  if (!confirm(`Supprimer "${link.title}" ?`)) {
    return;
  }

  section.links = section.links.filter((item) => item.id !== linkId);
  await persist("Lien supprime.");
}

async function openLinkInNewTab(sectionId, linkId) {
  const link = getLink(sectionId, linkId);
  if (!link) {
    return;
  }

  if (typeof chrome !== "undefined" && chrome.tabs?.create) {
    chrome.tabs.create({ url: link.url });
    return;
  }

  window.open(link.url, "_blank", "noopener,noreferrer");
}

async function copyLinkUrl(sectionId, linkId) {
  const link = getLink(sectionId, linkId);
  if (!link) {
    return;
  }

  await copyText(link.url);
}

async function shareLink(sectionId, linkId) {
  const link = getLink(sectionId, linkId);
  if (!link) {
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({ title: link.title, url: link.url });
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  await copyText(link.url);
}

async function duplicateLink(sectionId, linkId) {
  const section = getSection(sectionId);
  const link = getLink(sectionId, linkId);
  if (!section || !link) {
    return;
  }

  const sourceIndex = section.links.findIndex((item) => item.id === linkId);
  if (sourceIndex < 0) {
    return;
  }

  const duplicate = {
    ...link,
    id: createId("link"),
    title: createDuplicateLabel(link.title),
  };

  section.links.splice(sourceIndex + 1, 0, duplicate);
  await persist("Lien duplique.");
}

function openLinkListWidgetSettings(widgetId) {
  const widget = getWidget(widgetId);
  const section = getSection(widget?.config?.sectionId);
  if (!widget || !section) {
    return;
  }

  openSectionDialog(section);
}

async function deleteLinkListWidget(widgetId) {
  const widget = getWidget(widgetId);
  const sectionId = widget?.config?.sectionId;
  if (!widget || !sectionId) {
    return;
  }

  await deleteSection(sectionId);
}

async function duplicateLinkListWidget(widgetId) {
  const widget = getWidget(widgetId);
  const section = getSection(widget?.config?.sectionId);
  if (!widget || !section) {
    return;
  }

  const clonedSection = {
    ...section,
    id: createId("section"),
    title: createDuplicateLabel(section.title),
    dashboards: sanitizeDashboardIds(widget.dashboardIds),
    links: section.links.map((link) => ({
      ...link,
      id: createId("link"),
    })),
  };

  const duplicateWidget = createWidget(
    "link-list",
    clonedSection.title,
    clonedSection.dashboards,
    { sectionId: clonedSection.id },
  );

  const orderedWidgets = state.data.widgets
    .slice()
    .sort((a, b) => a.order - b.order);
  const sourceIndex = orderedWidgets.findIndex((item) => item.id === widgetId);

  state.data.sections.push(clonedSection);
  if (sourceIndex < 0) {
    orderedWidgets.push(duplicateWidget);
  } else {
    orderedWidgets.splice(sourceIndex + 1, 0, duplicateWidget);
  }

  orderedWidgets.forEach((item, index) => {
    item.order = index;
  });
  state.data.widgets = orderedWidgets;
  await persist("Widget duplique.");
}

async function moveWidgetByDirection(widgetId, direction) {
  const visibleWidgets = getVisibleWidgets();
  const dashboardId = state.data.selectedDashboard;
  const currentIndex = visibleWidgets.findIndex((widget) => widget.id === widgetId);
  if (currentIndex < 0) {
    return;
  }

  if (direction === "top") {
    if (currentIndex === 0) {
      return;
    }
    await moveWidget(widgetId, visibleWidgets[0].id);
    return;
  }

  if (direction === "up") {
    if (currentIndex <= 0) {
      return;
    }
    await moveWidget(widgetId, visibleWidgets[currentIndex - 1].id);
    return;
  }

  if (direction === "down") {
    if (currentIndex === visibleWidgets.length - 1) {
      return;
    }
    const target = visibleWidgets[currentIndex + 1];
    await moveWidget(widgetId, target?.id || null, {
      placeAtEnd: !target,
      targetDashboardId: !target ? dashboardId : null,
    });
    return;
  }

  if (direction === "bottom") {
    if (currentIndex === visibleWidgets.length - 1) {
      return;
    }
    await moveWidget(widgetId, null, {
      placeAtEnd: true,
      targetDashboardId: dashboardId,
    });
  }
}

function handleDragStart(event) {
  if (!state.editMode) {
    event.preventDefault();
    return;
  }

  const dashboardItem = event.target.closest(".dashboard-tab-draggable");
  if (dashboardItem && !event.target.closest(".dashboard-tab-actions")) {
    state.drag = {
      type: "dashboard",
      dashboardId: dashboardItem.dataset.dashboardDragId,
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(state.drag));
    dashboardItem.classList.add("dragging");
    return;
  }

  const linkCard = event.target.closest(".link-card");
  if (linkCard) {
    state.drag = {
      type: "link",
      sectionId: linkCard.dataset.sectionId,
      linkId: linkCard.dataset.linkId,
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(state.drag));
    linkCard.classList.add("dragging");
    return;
  }

  const widget = event.target.closest(".dashboard-widget");
  if (
    widget &&
    !event.target.closest(
      "button, input, textarea, select, a, .section-actions, .widget-actions",
    )
  ) {
    state.drag = {
      type: "widget",
      widgetId: widget.dataset.widgetId,
      sourceDashboardId: state.data.selectedDashboard,
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(state.drag));
    widget.classList.add("dragging");
    return;
  }

  event.preventDefault();
}

function handleDragOver(event) {
  const imageDropZone = event.target.closest(".image-drop-zone");
  if (imageDropZone && event.dataTransfer?.types?.includes("Files")) {
    event.preventDefault();
    imageDropZone.classList.add("is-file-over");
    return;
  }

  if (!state.drag) {
    return;
  }

  updateDragAutoScroll(event);

  if (state.drag.type === "link") {
    clearDashboardDragSwitch();
    const linkCard = event.target.closest(".link-card");
    const grid = event.target.closest(".links-grid");

    if (linkCard || grid) {
      event.preventDefault();
      clearDropClasses();

      if (linkCard && linkCard.dataset.linkId !== state.drag.linkId) {
        const after = isAfterHalf(event, linkCard);
        linkCard.classList.toggle("is-drop-before", !after);
        linkCard.classList.toggle("is-drop-after", after);
      } else if (grid) {
        grid.classList.add("is-drop-target");
      }
    }
  }

  if (state.drag.type === "widget") {
    const dashboardTab = event.target.closest(".dashboard-tab[data-dashboard-id]");
    if (dashboardTab) {
      event.preventDefault();
      clearDropClasses();
      dashboardTab.closest(".dashboard-tab-item")?.classList.add("is-drop-target");
      scheduleDashboardDragSwitch(dashboardTab.dataset.dashboardId);
      return;
    }

    clearDashboardDragSwitch();

    const widget = event.target.closest(".dashboard-widget");
    const sectionsRoot = event.target.closest("#sectionsRoot");
    if (widget && widget.dataset.widgetId !== state.drag.widgetId) {
      event.preventDefault();
      clearDropClasses();
      widget.classList.add("is-drop-target");
      return;
    }

    if (sectionsRoot) {
      event.preventDefault();
      clearDropClasses();
      sectionsRoot.classList.add("is-drop-target");
    }
  }

  if (state.drag.type === "dashboard") {
    clearDashboardDragSwitch();
    const dashboardItem = event.target.closest(".dashboard-tab-draggable");
    if (
      dashboardItem &&
      dashboardItem.dataset.dashboardDragId !== state.drag.dashboardId
    ) {
      event.preventDefault();
      clearDropClasses();
      dashboardItem.classList.add("is-drop-target");
    }
  }
}

function handleDragLeave(event) {
  event.target.closest(".image-drop-zone")?.classList.remove("is-file-over");

  const nextTarget = event.relatedTarget;
  if (
    nextTarget instanceof Node &&
    event.currentTarget?.contains?.(nextTarget)
  ) {
    return;
  }
}

async function handleDrop(event) {
  const imageDropZone = event.target.closest(".image-drop-zone");
  if (imageDropZone && event.dataTransfer?.files?.length) {
    event.preventDefault();
    imageDropZone.classList.remove("is-file-over");
    await compressSelectedImages(
      imageDropZone.dataset.widgetId,
      event.dataTransfer.files,
    );
    return;
  }

  if (!state.drag) {
    return;
  }

  event.preventDefault();
  stopDragAutoScroll();
  clearDashboardDragSwitch();

  if (state.drag.type === "link") {
    const targetCard = event.target.closest(".link-card");
    const targetGrid = event.target.closest(".links-grid");

    if (targetCard) {
      const after = isAfterHalf(event, targetCard);
      await moveLink(
        state.drag.sectionId,
        state.drag.linkId,
        targetCard.dataset.sectionId,
        targetCard.dataset.linkId,
        after,
      );
      return;
    }

    if (targetGrid) {
      await moveLink(
        state.drag.sectionId,
        state.drag.linkId,
        targetGrid.dataset.sectionId,
        null,
        true,
      );
      return;
    }
  }

  if (state.drag.type === "widget") {
    const targetDashboardTab = event.target.closest(
      ".dashboard-tab[data-dashboard-id]",
    );
    const targetWidget = event.target.closest(".dashboard-widget");
    const sectionsRoot = event.target.closest("#sectionsRoot");
    const movedDashboardId = getDraggedWidgetTargetDashboardId(
      state.drag,
      state.data.selectedDashboard,
    );

    if (targetDashboardTab) {
      const targetDashboardId = targetDashboardTab.dataset.dashboardId;
      await selectDashboard(targetDashboardTab.dataset.dashboardId, {
        save: true,
        scrollTop: true,
      });
      await moveWidget(state.drag.widgetId, null, {
        targetDashboardId: getDraggedWidgetTargetDashboardId(
          state.drag,
          targetDashboardId,
        ),
        placeAtEnd: true,
      });
      return;
    }

    if (targetWidget) {
      await moveWidget(state.drag.widgetId, targetWidget.dataset.widgetId, {
        targetDashboardId: movedDashboardId,
      });
      return;
    }

    if (sectionsRoot) {
      await moveWidget(state.drag.widgetId, null, {
        targetDashboardId: movedDashboardId,
        placeAtEnd: true,
      });
    }
  }

  if (state.drag.type === "dashboard") {
    const targetDashboard = event.target.closest(".dashboard-tab-draggable");
    if (targetDashboard) {
      await moveDashboard(
        state.drag.dashboardId,
        targetDashboard.dataset.dashboardDragId,
      );
    }
  }
}

async function moveLink(
  sourceSectionId,
  linkId,
  targetSectionId,
  targetLinkId,
  placeAfter,
) {
  if (linkId === targetLinkId) {
    clearDragState();
    return;
  }

  const sourceSection = getSection(sourceSectionId);
  const targetSection = getSection(targetSectionId);
  if (!sourceSection || !targetSection) {
    clearDragState();
    return;
  }

  const sourceIndex = sourceSection.links.findIndex(
    (item) => item.id === linkId,
  );
  if (sourceIndex < 0) {
    clearDragState();
    return;
  }

  const [link] = sourceSection.links.splice(sourceIndex, 1);
  let targetIndex = targetLinkId
    ? targetSection.links.findIndex((item) => item.id === targetLinkId)
    : targetSection.links.length;

  if (targetIndex < 0) {
    targetIndex = targetSection.links.length;
  }

  if (placeAfter) {
    targetIndex += 1;
  }

  targetSection.links.splice(targetIndex, 0, link);
  await persist("Lien deplace.", { keepDrag: false });
}

async function moveWidget(sourceWidgetId, targetWidgetId, options = {}) {
  if (targetWidgetId && sourceWidgetId === targetWidgetId) {
    clearDragState();
    return;
  }

  const orderedWidgets = state.data.widgets
    .slice()
    .sort((a, b) => a.order - b.order);
  const sourceIndex = orderedWidgets.findIndex(
    (item) => item.id === sourceWidgetId,
  );
  const targetIndex = orderedWidgets.findIndex(
    (item) => item.id === targetWidgetId,
  );

  if (sourceIndex < 0 || targetIndex < 0) {
    if (!options.placeAtEnd || targetWidgetId) {
      clearDragState();
      return;
    }
  }

  const [widget] = orderedWidgets.splice(sourceIndex, 1);
  moveWidgetToDashboard(widget, options.targetDashboardId);

  let insertionIndex = targetIndex;
  if (options.placeAtEnd) {
    insertionIndex = getWidgetInsertIndexForDashboardEnd(
      orderedWidgets,
      options.targetDashboardId,
    );
  }

  if (insertionIndex < 0) {
    clearDragState();
    return;
  }

  orderedWidgets.splice(insertionIndex, 0, widget);
  orderedWidgets.forEach((item, index) => {
    item.order = index;
  });
  state.data.widgets = orderedWidgets;
  await persist("Widget deplace.", { keepDrag: false });
}

async function moveDashboard(sourceDashboardId, targetDashboardId) {
  if (sourceDashboardId === targetDashboardId) {
    clearDragState();
    return;
  }

  const dashboards = getMutableDashboards()
    .slice()
    .sort((a, b) => a.order - b.order);
  const sourceIndex = dashboards.findIndex(
    (item) => item.id === sourceDashboardId,
  );
  const targetIndex = dashboards.findIndex(
    (item) => item.id === targetDashboardId,
  );

  if (sourceIndex < 0 || targetIndex < 0) {
    clearDragState();
    return;
  }

  const [dashboard] = dashboards.splice(sourceIndex, 1);
  dashboards.splice(targetIndex, 0, dashboard);
  dashboards.forEach((item, index) => {
    item.order = index;
  });
  state.data.dashboards = dashboards;
  await persist("Dashboard deplace.", { keepDrag: false });
}

function clearDragState() {
  state.drag = null;
  clearDashboardDragSwitch();
  stopDragAutoScroll();
  clearDropClasses();
  document
    .querySelectorAll(".dragging")
    .forEach((item) => item.classList.remove("dragging"));
}

function clearDropClasses() {
  document
    .querySelectorAll(".is-drop-target, .is-drop-before, .is-drop-after")
    .forEach((item) =>
      item.classList.remove(
        "is-drop-target",
        "is-drop-before",
        "is-drop-after",
      ),
    );
}

function isAfterHalf(event, element) {
  const rect = element.getBoundingClientRect();
  return event.clientX > rect.left + rect.width / 2;
}

function scheduleDashboardDragSwitch(dashboardId) {
  if (!dashboardId || state.drag?.type !== "widget") {
    clearDashboardDragSwitch();
    return;
  }

  if (dashboardId === state.data.selectedDashboard) {
    clearDashboardDragSwitch();
    return;
  }

  if (state.dragDashboardSwitchId === dashboardId) {
    return;
  }

  clearDashboardDragSwitch();
  state.dragDashboardSwitchId = dashboardId;
  state.dragDashboardSwitchTimer = window.setTimeout(() => {
    const targetDashboardId = state.dragDashboardSwitchId;
    clearDashboardDragSwitch();
    if (!targetDashboardId || state.drag?.type !== "widget") {
      return;
    }

    void selectDashboard(targetDashboardId, {
      save: true,
      scrollTop: true,
    });
  }, DASHBOARD_DRAG_SWITCH_DELAY_MS);
}

function clearDashboardDragSwitch() {
  if (state.dragDashboardSwitchTimer) {
    window.clearTimeout(state.dragDashboardSwitchTimer);
  }

  state.dragDashboardSwitchTimer = null;
  state.dragDashboardSwitchId = null;
}

function updateDragAutoScroll(event) {
  if (!state.drag || typeof event.clientY !== "number") {
    stopDragAutoScroll();
    return;
  }

  state.dragAutoScrollClientY = event.clientY;

  const topEdge = DRAG_AUTO_SCROLL_EDGE_PX;
  const bottomEdge = window.innerHeight - DRAG_AUTO_SCROLL_EDGE_PX;
  if (event.clientY <= topEdge) {
    startDragAutoScroll(-1);
    return;
  }

  if (event.clientY >= bottomEdge) {
    startDragAutoScroll(1);
    return;
  }

  stopDragAutoScroll();
}

function startDragAutoScroll(direction) {
  if (!direction) {
    stopDragAutoScroll();
    return;
  }

  state.dragAutoScrollDirection = direction;
  if (state.dragAutoScrollFrame) {
    return;
  }

  state.dragAutoScrollFrame = window.requestAnimationFrame(runDragAutoScroll);
}

function runDragAutoScroll() {
  state.dragAutoScrollFrame = null;

  if (!state.drag || !state.dragAutoScrollDirection) {
    return;
  }

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) {
    return;
  }

  const clientY = Number(state.dragAutoScrollClientY) || 0;
  const distanceToEdge =
    state.dragAutoScrollDirection < 0
      ? Math.max(0, DRAG_AUTO_SCROLL_EDGE_PX - clientY)
      : Math.max(
          0,
          clientY - (window.innerHeight - DRAG_AUTO_SCROLL_EDGE_PX),
        );
  const intensity = Math.min(1, distanceToEdge / DRAG_AUTO_SCROLL_EDGE_PX);
  const step = Math.max(
    10,
    Math.round(DRAG_AUTO_SCROLL_MAX_STEP_PX * (0.4 + intensity * 0.6)),
  );
  const previousY = window.scrollY;
  window.scrollBy(0, state.dragAutoScrollDirection * step);

  if (window.scrollY !== previousY) {
    state.dragAutoScrollFrame = window.requestAnimationFrame(runDragAutoScroll);
    return;
  }

  stopDragAutoScroll();
}

function stopDragAutoScroll() {
  if (state.dragAutoScrollFrame) {
    window.cancelAnimationFrame(state.dragAutoScrollFrame);
  }

  state.dragAutoScrollFrame = null;
  state.dragAutoScrollDirection = 0;
  state.dragAutoScrollClientY = null;
}

function moveWidgetToDashboard(widget, targetDashboardId) {
  if (!widget || !targetDashboardId) {
    return;
  }

  const dashboardIds = sanitizeDashboardIds([targetDashboardId]);
  if (!dashboardIds.length) {
    return;
  }

  widget.dashboardIds = dashboardIds;
  if (widget.type === "link-list") {
    const section = getSection(widget.config?.sectionId);
    if (section) {
      section.dashboards = dashboardIds.slice();
    }
  }
}

function getWidgetInsertIndexForDashboardEnd(orderedWidgets, dashboardId) {
  if (!Array.isArray(orderedWidgets)) {
    return -1;
  }

  for (let index = orderedWidgets.length - 1; index >= 0; index -= 1) {
    if (isWidgetVisibleOnDashboard(orderedWidgets[index], dashboardId)) {
      return index + 1;
    }
  }

  return orderedWidgets.length;
}

function isWidgetVisibleOnDashboard(widget, dashboardId) {
  if (!widget) {
    return false;
  }

  return Array.isArray(widget.dashboardIds)
    ? widget.dashboardIds.includes(dashboardId)
    : false;
}

function getDraggedWidgetTargetDashboardId(dragState, dashboardId) {
  if (
    !dragState ||
    dragState.type !== "widget" ||
    !dashboardId ||
    dragState.sourceDashboardId === dashboardId
  ) {
    return null;
  }

  return dashboardId;
}

async function selectDashboard(
  dashboardId,
  { save = false, scrollTop = false, scrollBehavior = "auto" } = {},
) {
  const dashboard = getDashboardViews().find((item) => item.id === dashboardId);
  if (!dashboard || dashboard.id === state.data.selectedDashboard) {
    return false;
  }

  state.data.selectedDashboard = dashboard.id;
  syncDashboardNav();
  render();

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  }

  if (save) {
    await saveData(state.data);
  }

  return true;
}

async function persist(message, options = {}) {
  state.data = sanitizeData(state.data);
  await saveData(state.data);
  render();
  showStatus(message);

  if (!options.keepDrag) {
    clearDragState();
  }
}

async function loadData() {
  const stored = await storageGet(STORAGE_KEY);
  if (!stored) {
    const initialData = cloneData(defaultData);
    await saveData(initialData);
    return initialData;
  }

  const sanitized = sanitizeData(stored);
  const migrated = migrateData(sanitized);
  if (!sanitized.sections.length) {
    const initialData = cloneData(defaultData);
    await saveData(initialData);
    return initialData;
  }

  if (JSON.stringify(migrated) !== JSON.stringify(sanitized)) {
    await saveData(migrated);
  }

  return migrated;
}

async function saveData(data) {
  await storageSet(STORAGE_KEY, sanitizeData(data));
}

function sanitizeData(input) {
  const data = input && typeof input === "object" ? input : {};
  const dashboards =
    Array.isArray(data.dashboards) && data.dashboards.length
      ? data.dashboards.map(sanitizeDashboard).filter(Boolean)
      : defaultDashboards.map((dashboard) => ({ ...dashboard }));
  const allowedDashboardIds = new Set(
    dashboards.map((dashboard) => dashboard.id),
  );
  const selectedEngine = searchEngines.some(
    (engine) => engine.id === data.selectedEngine,
  )
    ? data.selectedEngine
    : defaultData.selectedEngine;
  const selectedDashboard = allowedDashboardIds.has(data.selectedDashboard)
    ? data.selectedDashboard
    : dashboards[0]?.id || DEFAULT_DASHBOARD_ID;
  const version = Number.isFinite(Number(data.version))
    ? Number(data.version)
    : 0;

  const sanitized = {
    version,
    selectedEngine,
    selectedDashboard,
    dashboards,
    widgets: Array.isArray(data.widgets)
      ? data.widgets
          .map((widget, index) =>
            sanitizeWidget(widget, index, allowedDashboardIds),
          )
          .filter(Boolean)
      : [],
    sections: Array.isArray(data.sections)
      ? data.sections
          .map((section) => sanitizeSection(section, allowedDashboardIds))
          .filter(Boolean)
      : [],
  };

  sanitized.widgets = reconcileSystemWidgets(
    sanitized.widgets,
    sanitized.dashboards,
  );
  sanitized.widgets = reconcileDefaultSeedWidgets(sanitized.widgets);
  return sanitized;
}

function getDashboardIconOption(iconId) {
  return (
    dashboardIconOptions.find((option) => option.id === iconId) ||
    dashboardIconOptions.find((option) => option.id === "grid") ||
    dashboardIconOptions[0]
  );
}

function selectDashboardIcon(iconId) {
  const option = getDashboardIconOption(iconId);
  const input = ui.dialogFields.querySelector("#dashboardIcon");
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  input.value = option.id;

  ui.dialogFields
    .querySelectorAll(".dashboard-icon-option")
    .forEach((button) => {
      const isSelected = button.dataset.iconId === option.id;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });

  const preview = ui.dialogFields.querySelector("[data-dashboard-icon-current]");
  if (preview) {
    preview.querySelector(".dashboard-icon-picker-preview").innerHTML =
      createIcon(option.id);
    const label = preview.querySelector("[data-dashboard-icon-current-label]");
    if (label) {
      label.textContent = option.label;
    }
  }
}

function sanitizeDashboard(dashboard, index = 0) {
  if (!dashboard || typeof dashboard !== "object") {
    return null;
  }

  const label = normalizeText(dashboard.label);
  if (!label) {
    return null;
  }

  return {
    id: normalizeText(dashboard.id) || createId("dashboard"),
    label,
    icon: dashboardIconOptions.some((option) => option.id === dashboard.icon)
      ? dashboard.icon
      : "grid",
    order: Number.isFinite(Number(dashboard.order))
      ? Number(dashboard.order)
      : index,
  };
}

function sanitizeSection(
  section,
  allowedDashboardIds = new Set(
    getStoredDashboards().map((dashboard) => dashboard.id),
  ),
) {
  if (!section || typeof section !== "object") {
    return null;
  }

  const title = normalizeText(section.title);
  if (!title) {
    return null;
  }

  const icon = sectionIconOptions.some((option) => option.id === section.icon)
    ? section.icon
    : "grid";
  const id = normalizeText(section.id) || createId("section");
  const dashboards = sanitizeDashboardIds(
    section.dashboards,
    allowedDashboardIds,
  );

  return {
    id,
    title,
    icon,
    dashboards: dashboards.length
      ? dashboards
      : defaultSectionDashboardIds[id] || [],
    links: Array.isArray(section.links)
      ? section.links.map(sanitizeLink).filter(Boolean)
      : [],
  };
}

function sanitizeWidget(
  widget,
  index = 0,
  allowedDashboardIds = new Set(
    getStoredDashboards().map((dashboard) => dashboard.id),
  ),
) {
  if (!widget || typeof widget !== "object") {
    return null;
  }

  const definition = getWidgetDefinition(normalizeText(widget.type));
  if (!definition) {
    return null;
  }

  const id = normalizeText(widget.id) || createId("widget");
  const order = Number.isFinite(Number(widget.order))
    ? Number(widget.order)
    : index;
  const dashboardIds = sanitizeDashboardIds(
    widget.dashboardIds,
    allowedDashboardIds,
  );

  return {
    id,
    type: definition.type,
    title: normalizeText(widget.title) || definition.label,
    dashboardIds,
    order,
    config: sanitizeWidgetConfig(definition.type, widget.config || {}),
  };
}

function sanitizeWidgetConfig(type, config) {
  const source = config && typeof config === "object" ? config : {};

  switch (type) {
    case "search":
      return {
        engineId: getSelectedEngine(normalizeText(source.engineId)).id,
      };
    case "link-list":
      return { sectionId: normalizeText(source.sectionId) };
    case "spacer":
      return { height: clampNumber(source.height, 32, 220, 80) };
    case "todo":
      return {
        items: Array.isArray(source.items)
          ? source.items
              .map((item) => ({
                id: normalizeText(item?.id) || createId("todo"),
                text: toStringValue(item?.text),
                done: Boolean(item?.done),
              }))
              .filter((item) => normalizeText(item.text))
          : [],
      };
    case "quick-note":
      return {
        text: toStringValue(source.text),
        updatedAt: normalizeText(source.updatedAt),
      };
    case "qr-code":
      return { value: toStringValue(source.value) };
    case "markdown-editor":
      return {
        mode: ["edit", "split", "preview"].includes(source.mode)
          ? source.mode
          : "split",
        markdown: toStringValue(source.markdown),
      };
    case "text-diff":
      return {
        original: toStringValue(source.original),
        modified: toStringValue(source.modified),
      };
    case "calendar":
      return {
        month: sanitizeDateString(source.month) || new Date().toISOString(),
      };
    case "clock":
      return {
        size: clampNumber(source.size, 220, 520, 320),
      };
    case "pomodoro":
      return {
        phase: normalizePomodoroPhase(source.phase),
        isRunning: Boolean(source.isRunning),
        workSessionsCompleted: clampNumber(
          source.workSessionsCompleted,
          0,
          POMODORO_TOTAL_SESSIONS,
          0,
        ),
        remainingSeconds: clampNumber(
          source.remainingSeconds,
          0,
          POMODORO_WORK_SECONDS,
          getPomodoroPhaseDuration(normalizePomodoroPhase(source.phase)),
        ),
        phaseEndsAt: normalizeText(source.phaseEndsAt),
      };
    case "kanban":
      return { columns: sanitizeKanbanColumns(source.columns) };
    case "daily-quiz":
      return { history: sanitizeQuizHistory(source.history) };
    case "image-compression":
      return {
        quality: clampNumber(source.quality, 0.35, 0.95, 0.72),
        images: sanitizeCompressedImages(source.images),
      };
    case "uptime-monitor":
      return { services: sanitizeUptimeServices(source.services) };
    case "browser-session":
      return { sessions: sanitizeBrowserSessions(source.sessions) };
    default:
      return {};
  }
}

function sanitizeDateString(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function sanitizeKanbanColumns(columns) {
  const fallback = [
    { id: "todo", title: "Todo", cards: [] },
    { id: "progress", title: "In Progress", cards: [] },
    { id: "done", title: "Done", cards: [] },
  ];
  const sourceColumns =
    Array.isArray(columns) && columns.length ? columns : fallback;

  return sourceColumns.map((column, index) => ({
    id: normalizeText(column?.id) || fallback[index]?.id || createId("column"),
    title: normalizeText(column?.title) || fallback[index]?.title || "Column",
    cards: Array.isArray(column?.cards)
      ? column.cards
          .map((card) => ({
            id: normalizeText(card?.id) || createId("card"),
            title: toStringValue(card?.title),
          }))
          .filter((card) => normalizeText(card.title))
      : [],
  }));
}

function sanitizeQuizHistory(history) {
  if (!history || typeof history !== "object" || Array.isArray(history)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(history)
      .filter(
        ([key, value]) =>
          /^\d{4}-\d{2}-\d{2}$/.test(key) && Number.isInteger(Number(value)),
      )
      .map(([key, value]) => [key, Number(value)]),
  );
}

function sanitizeCompressedImages(images) {
  if (!Array.isArray(images)) {
    return [];
  }

  return images
    .map((image) => ({
      id: normalizeText(image?.id) || createId("image"),
      name: normalizeText(image?.name) || "image.webp",
      originalSize: Math.max(0, Number(image?.originalSize) || 0),
      compressedSize: Math.max(0, Number(image?.compressedSize) || 0),
      mime: normalizeText(image?.mime) || "image/webp",
      dataUrl: toStringValue(image?.dataUrl),
    }))
    .filter((image) => image.dataUrl.startsWith("data:image/"))
    .slice(0, 8);
}

function sanitizeUptimeServices(services) {
  const fallback = [
    {
      id: "service_intranet",
      name: "MCProd Intranet",
      url: "https://intranet-agence-mcprod.netlify.app/",
      history: [],
    },
    {
      id: "service_osmo",
      name: "Osmo Supply",
      url: "https://osmo.supply/",
      history: [],
    },
    {
      id: "service_netlify",
      name: "Netlify",
      url: "https://app.netlify.com/",
      history: [],
    },
  ];
  const sourceServices = Array.isArray(services) ? services : fallback;

  return sourceServices
    .map((service, index) => {
      const url = normalizeText(service?.url);
      try {
        return {
          id:
            normalizeText(service?.id) ||
            fallback[index]?.id ||
            createId("service"),
          name: normalizeText(service?.name) || formatHost(url),
          url: normalizeUrl(url),
          history: sanitizeUptimeHistory(service?.history),
        };
      } catch (error) {
        return null;
      }
    })
    .filter(Boolean);
}

function sanitizeUptimeHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .map((entry) => ({
      status: ["up", "down", "unknown"].includes(entry?.status)
        ? entry.status
        : "unknown",
      code: normalizeText(entry?.code) || "unknown",
      latency: Math.max(0, Number(entry?.latency) || 0),
      checkedAt:
        sanitizeDateString(entry?.checkedAt) || new Date().toISOString(),
    }))
    .slice(-18);
}

function sanitizeBrowserSessions(sessions) {
  if (!Array.isArray(sessions)) {
    return [];
  }

  return sessions
    .map((session, index) => sanitizeBrowserSession(session, index))
    .filter(Boolean)
    .slice(0, 12);
}

function sanitizeBrowserSession(session, index = 0) {
  if (!session || typeof session !== "object") {
    return null;
  }

  const windows = Array.isArray(session.windows)
    ? session.windows
        .map(sanitizeBrowserSessionWindow)
        .filter((windowItem) => windowItem.tabs.length)
    : [];

  if (!windows.length) {
    return null;
  }

  return {
    id: normalizeText(session.id) || createId("session"),
    name: normalizeText(session.name) || `Session ${index + 1}`,
    savedAt: sanitizeDateString(session.savedAt) || new Date().toISOString(),
    windows,
  };
}

function sanitizeBrowserSessionWindow(windowItem) {
  const tabs = Array.isArray(windowItem?.tabs)
    ? windowItem.tabs
        .map((tab) => {
          try {
            const url = normalizeUrl(tab?.url);
            return {
              url,
              title: normalizeText(tab?.title) || formatHost(url),
            };
          } catch (error) {
            return null;
          }
        })
        .filter(Boolean)
    : [];

  return {
    left: Number.isFinite(Number(windowItem?.left))
      ? Number(windowItem.left)
      : null,
    top: Number.isFinite(Number(windowItem?.top))
      ? Number(windowItem.top)
      : null,
    width: Number.isFinite(Number(windowItem?.width))
      ? Number(windowItem.width)
      : null,
    height: Number.isFinite(Number(windowItem?.height))
      ? Number(windowItem.height)
      : null,
    tabs,
  };
}

function sanitizeDashboardIds(
  value,
  allowedDashboardIds = new Set(
    getStoredDashboards().map((dashboard) => dashboard.id),
  ),
) {
  if (!Array.isArray(value)) {
    return [];
  }

  return [
    ...new Set(
      value.map(normalizeText).filter((id) => allowedDashboardIds.has(id)),
    ),
  ];
}

function getNewWidgetDashboardIds() {
  const dashboard = getSelectedDashboard();
  return dashboard ? [dashboard.id] : [];
}

function sanitizeLink(link) {
  if (!link || typeof link !== "object") {
    return null;
  }

  const title = normalizeText(link.title);
  const rawUrl = normalizeText(link.url);
  if (!title || !rawUrl) {
    return null;
  }

  try {
    const url = normalizeUrl(rawUrl);
    return {
      id: normalizeText(link.id) || createId("link"),
      title,
      url,
      icon: normalizeText(link.icon) || getFaviconUrl(url),
    };
  } catch (error) {
    return null;
  }
}

function migrateData(data) {
  const migrated = cloneData(data);
  const removedTitles = new Set(removedSeedLinks.map(normalizeKey));
  const removedUrls = new Set(removedSeedHosts.map(normalizeUrlKey));
  const shouldApplySeedMigration = Number(data.version) < DATA_VERSION;

  migrated.version = DATA_VERSION;
  migrated.dashboards =
    Array.isArray(migrated.dashboards) && migrated.dashboards.length
      ? migrated.dashboards
      : defaultDashboards.map((dashboard) => ({ ...dashboard }));
  migrated.sections = Array.isArray(migrated.sections) ? migrated.sections : [];
  migrated.widgets = Array.isArray(migrated.widgets) ? migrated.widgets : [];

  if (shouldApplySeedMigration) {
    const existingDashboardIds = new Set(
      (migrated.dashboards || []).map((dashboard) => dashboard.id),
    );
    defaultDashboards.forEach((dashboard) => {
      if (!existingDashboardIds.has(dashboard.id)) {
        migrated.dashboards.push({ ...dashboard });
      }
    });

    migrated.sections = migrated.sections
      .filter((section) => !removedTitles.has(normalizeKey(section.title)))
      .map((section) => ({
        ...section,
        title: getMigratedSectionTitle(section),
        links: section.links.filter(
          (link) => !shouldRemoveSeedLink(link, removedTitles, removedUrls),
        ),
      }));

    defaultData.sections.forEach((seedSection) => {
      let targetSection = findMatchingSection(migrated, seedSection);

      if (!targetSection) {
        targetSection = {
          id: seedSection.id,
          title: seedSection.title,
          icon: seedSection.icon,
          dashboards: defaultSectionDashboardIds[seedSection.id] || [],
          links: [],
        };
        migrated.sections.push(targetSection);
      } else if (targetSection.id === seedSection.id) {
        targetSection.title = seedSection.title;
        targetSection.icon = seedSection.icon;
        targetSection.dashboards = targetSection.dashboards?.length
          ? targetSection.dashboards
          : defaultSectionDashboardIds[seedSection.id] || [];
      }

      seedSection.links.forEach((seedLink) => {
        if (!hasLinkWithUrl(migrated, seedLink.url)) {
          targetSection.links.push(
            createSeedLink(seedLink.title, seedLink.url),
          );
        }
      });
    });
  }

  migrated.sections = migrated.sections.map((section) => ({
    ...section,
    dashboards: section.dashboards?.length
      ? section.dashboards
      : defaultSectionDashboardIds[section.id] || [],
  }));
  migrated.widgets = reconcileWidgetsWithSections(
    migrated.widgets,
    migrated.sections,
  );
  migrated.widgets = reconcileSystemWidgets(
    migrated.widgets,
    migrated.dashboards,
  );
  migrated.selectedDashboard = migrated.dashboards.some(
    (dashboard) => dashboard.id === migrated.selectedDashboard,
  )
    ? migrated.selectedDashboard
    : migrated.dashboards[0]?.id || DEFAULT_DASHBOARD_ID;

  return sanitizeData(migrated);
}

function reconcileWidgetsWithSections(widgets, sections) {
  const sectionIds = new Set(sections.map((section) => section.id));
  const seenWidgetIds = new Set();
  const seenLinkSections = new Set();
  const reconciled = [];

  widgets
    .slice()
    .sort((a, b) => a.order - b.order)
    .forEach((widget) => {
      if (seenWidgetIds.has(widget.id)) {
        return;
      }

      if (widget.type === "link-list") {
        const sectionId = widget.config?.sectionId;
        if (!sectionIds.has(sectionId) || seenLinkSections.has(sectionId)) {
          return;
        }
        seenLinkSections.add(sectionId);
      }

      seenWidgetIds.add(widget.id);
      reconciled.push(widget);
    });

  sections.forEach((section) => {
    if (!seenLinkSections.has(section.id)) {
      reconciled.push(
        createLinkListWidgetFromSection(section, reconciled.length),
      );
      seenLinkSections.add(section.id);
    }
  });

  reconciled.forEach((widget, index) => {
    widget.order = index;
  });

  return reconciled;
}

function createLinkListWidgetFromSection(section, order) {
  return {
    id: `widget_link_${section.id}`,
    type: "link-list",
    title: section.title,
    dashboardIds: section.dashboards?.length
      ? section.dashboards
      : defaultSectionDashboardIds[section.id] || [],
    order,
    config: { sectionId: section.id },
  };
}

function reconcileSystemWidgets(widgets, dashboards) {
  const reconciled = widgets.slice().sort((a, b) => a.order - b.order);
  const searchWidget = reconciled.find((widget) => widget.type === "search");

  if (!searchWidget) {
    reconciled.unshift({
      id: "widget_search_primary",
      type: "search",
      title: "Search",
      dashboardIds: ["home"],
      order: 0,
      config: { engineId: "google" },
    });
  }

  reconciled.forEach((widget, index) => {
    widget.order = index;
  });

  return reconciled;
}

function reconcileDefaultSeedWidgets(widgets) {
  const allowedDashboardIds = new Set(
    defaultDashboards.map((dashboard) => dashboard.id),
  );
  const reconciled = widgets.slice().sort((a, b) => a.order - b.order);
  const existingIds = new Set(reconciled.map((widget) => widget.id));

  createDefaultWidgets()
    .filter((widget) => widget.type !== "link-list")
    .forEach((seedWidget) => {
      if (existingIds.has(seedWidget.id)) {
        return;
      }

      const sanitizedSeedWidget = sanitizeWidget(
        seedWidget,
        seedWidget.order,
        allowedDashboardIds,
      );
      if (!sanitizedSeedWidget) {
        return;
      }

      reconciled.push(sanitizedSeedWidget);
      existingIds.add(sanitizedSeedWidget.id);
    });

  return enforceSeedWidgetLayout(reconciled);
}

function enforceSeedWidgetLayout(widgets) {
  const orderedWidgets = widgets.slice().sort((a, b) => a.order - b.order);

  moveWidgetById(
    orderedWidgets,
    "widget_todo_workspace",
    () =>
      orderedWidgets.findIndex((widget) =>
        Array.isArray(widget.dashboardIds) &&
        widget.dashboardIds.includes("workspace"),
      ),
  );

  moveWidgetById(
    orderedWidgets,
    "widget_note_workspace",
    () => {
      let lastWorkspaceIndex = -1;
      orderedWidgets.forEach((widget, index) => {
        if (
          Array.isArray(widget.dashboardIds) &&
          widget.dashboardIds.includes("workspace")
        ) {
          lastWorkspaceIndex = index;
        }
      });

      return lastWorkspaceIndex + 1;
    },
  );

  moveWidgetById(
    orderedWidgets,
    "widget_pomodoro_focus",
    () =>
      orderedWidgets.findIndex((widget) =>
        Array.isArray(widget.dashboardIds) &&
        widget.dashboardIds.includes("focus"),
      ),
  );

  moveWidgetById(
    orderedWidgets,
    "widget_kanban_focus",
    () => {
      const focusPomodoroIndex = orderedWidgets.findIndex(
        (widget) => widget.id === "widget_pomodoro_focus",
      );
      return focusPomodoroIndex >= 0
        ? focusPomodoroIndex + 1
        : orderedWidgets.findIndex((widget) =>
            Array.isArray(widget.dashboardIds) &&
            widget.dashboardIds.includes("focus"),
          );
    },
  );

  orderedWidgets.forEach((widget, index) => {
    widget.order = index;
  });

  return orderedWidgets;
}

function moveWidgetById(widgets, widgetId, getTargetIndex) {
  const widgetIndex = widgets.findIndex((widget) => widget.id === widgetId);
  if (widgetIndex < 0) {
    return;
  }

  const [widget] = widgets.splice(widgetIndex, 1);
  const targetIndex = getTargetIndex();
  const boundedTargetIndex =
    targetIndex < 0 ? widgets.length : Math.min(targetIndex, widgets.length);
  widgets.splice(boundedTargetIndex, 0, widget);
}

function getMigratedSectionTitle(section) {
  const sectionTitles = {
    section_developer_resources: "Developpement",
    section_hosting_deployment: "Hosting & Monitoring",
  };

  return sectionTitles[section.id] || section.title;
}

function findMatchingSection(data, seedSection) {
  return (
    data.sections.find((section) => section.id === seedSection.id) ||
    data.sections.find(
      (section) =>
        normalizeKey(section.title) === normalizeKey(seedSection.title),
    ) ||
    null
  );
}

function hasLinkWithUrl(data, url) {
  const candidate = normalizeUrlKey(url);
  return data.sections.some((section) =>
    section.links.some((link) => normalizeUrlKey(link.url) === candidate),
  );
}

function shouldRemoveSeedLink(link, removedTitles, removedUrls) {
  return (
    removedTitles.has(normalizeKey(link.title)) ||
    removedUrls.has(normalizeUrlKey(link.url))
  );
}

function normalizeKey(value) {
  return normalizeText(value).toLowerCase();
}

function normalizeUrlKey(url) {
  try {
    const parsed = new URL(normalizeUrl(url));
    const pathname = parsed.pathname.replace(/\/$/, "");
    return `${parsed.hostname.replace(/^www\./, "")}${pathname}`.toLowerCase();
  } catch (error) {
    return normalizeKey(url);
  }
}

function storageGet(key) {
  if (hasChromeStorage()) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, (result) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        resolve(result[key]);
      });
    });
  }

  const raw = window.localStorage.getItem(key);
  return Promise.resolve(raw ? JSON.parse(raw) : null);
}

function storageSet(key, value) {
  if (hasChromeStorage()) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        resolve();
      });
    });
  }

  window.localStorage.setItem(key, JSON.stringify(value));
  return Promise.resolve();
}

function hasChromeStorage() {
  return typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
}

function getSection(sectionId) {
  return (
    state.data.sections.find((section) => section.id === sectionId) || null
  );
}

function getLinkListWidgetBySectionId(sectionId) {
  return (
    state.data.widgets.find(
      (widget) =>
        widget.type === "link-list" && widget.config?.sectionId === sectionId,
    ) || null
  );
}

function getLink(sectionId, linkId) {
  return (
    getSection(sectionId)?.links.find((link) => link.id === linkId) || null
  );
}

function findSectionIdByLinkId(linkId) {
  if (!linkId) {
    return null;
  }

  return (
    state.data.sections.find((section) =>
      section.links.some((link) => link.id === linkId),
    )?.id || null
  );
}

function createSeedLink(title, url) {
  return {
    id: createId("link"),
    title,
    url,
    icon: getFaviconUrl(url),
  };
}

function getFaviconUrl(url) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
  } catch (error) {
    return "";
  }
}

function formatHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url;
  }
}

function getSuggestedLinkTitle(rawUrl) {
  try {
    const hostname = new URL(normalizeUrl(rawUrl)).hostname.replace(/^www\./i, "");
    const labels = hostname.split(".").filter(Boolean);
    if (labels.length < 2) {
      return "";
    }

    const countryCodeSuffixes = new Set([
      "ac",
      "co",
      "com",
      "edu",
      "gov",
      "net",
      "org",
    ]);
    const suffixLength =
      labels.length >= 3 &&
      labels.at(-1).length === 2 &&
      countryCodeSuffixes.has(labels.at(-2))
        ? 2
        : 1;
    const siteName = labels.at(-(suffixLength + 1));

    return siteName
      ? `${siteName.charAt(0).toLocaleUpperCase()}${siteName.slice(1)}`
      : "";
  } catch (error) {
    return "";
  }
}

function normalizeUrl(rawUrl) {
  let candidate = normalizeText(rawUrl);
  if (!candidate) {
    throw new Error("URL vide.");
  }

  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(candidate)) {
    candidate = `https://${candidate}`;
  }

  const parsed = new URL(candidate);
  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error("URL http ou https uniquement.");
  }

  return parsed.toString();
}

function normalizeText(value) {
  return String(value || "").trim();
}

function getActionErrorMessage(error, fallbackMessage) {
  const message =
    error instanceof Error ? normalizeText(error.message) : "";
  return message || fallbackMessage;
}

function requireText(value, message) {
  const text = normalizeText(value);
  if (!text) {
    throw new Error(message);
  }

  return text;
}

function getInitials(value) {
  const parts = normalizeText(value).split(/\s+/).filter(Boolean).slice(0, 2);
  if (!parts.length) {
    return ".";
  }

  return parts.map((part) => part[0].toUpperCase()).join("");
}

function createId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
}

function createDuplicateLabel(value) {
  const label = normalizeText(value) || "Item";
  return /\bcopy\b$/i.test(label) ? label : `${label} Copy`;
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function camelToKebab(value) {
  return String(value || "").replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showStatus(message) {
  ui.statusMessage.textContent = message;
  window.clearTimeout(state.statusTimer);
  state.statusTimer = window.setTimeout(() => {
    if (ui.statusMessage.textContent === message) {
      ui.statusMessage.textContent = "";
    }
  }, 2400);
}

function createIcon(name) {
  const icons = {
    plus: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
    search:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="11" cy="11" r="7"></circle><path d="m16.2 16.2 4.3 4.3"></path></svg>',
    "arrow-right":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h13"></path><path d="m13 6 6 6-6 6"></path></svg>',
    "arrow-up":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 19V5"></path><path d="m6 11 6-6 6 6"></path></svg>',
    "arrow-down":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 5v14"></path><path d="m18 13-6 6-6-6"></path></svg>',
    "arrow-up-to-line":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 5h14"></path><path d="M12 19V9"></path><path d="m6 15 6-6 6 6"></path></svg>',
    "arrow-down-to-line":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 19h14"></path><path d="M12 5v10"></path><path d="m18 13-6 6-6-6"></path></svg>',
    "chevron-down":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m7 10 5 5 5-5"></path></svg>',
    edit: '<svg viewBox="0 0 24 24" focusable="false"><path d="m4 20 4.6-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"></path><path d="m13.5 6.5 4 4"></path></svg>',
    trash:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 13h10l1-13"></path><path d="M9 7V4h6v3"></path></svg>',
    copy: '<svg viewBox="0 0 24 24" focusable="false"><rect x="9" y="9" width="11" height="11" rx="2"></rect><rect x="4" y="4" width="11" height="11" rx="2"></rect></svg>',
    close:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12"></path><path d="M18 6 6 18"></path></svg>',
    share:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 16V4"></path><path d="m7 9 5-5 5 5"></path><path d="M5 14v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"></path></svg>',
    duplicate:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><rect x="5" y="5" width="10" height="10" rx="2"></rect></svg>',
    "duplicate-plus":
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><rect x="5" y="5" width="10" height="10" rx="2"></rect><path d="M12 8v4"></path><path d="M10 10h4"></path></svg>',
    settings:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c0 .7.4 1.3 1 1.5H21a2 2 0 0 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1Z"></path></svg>',
    play:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m9 7 8 5-8 5Z"></path></svg>',
    pause:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M9 7v10"></path><path d="M15 7v10"></path></svg>',
    skip:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m6 7 7 5-7 5Z"></path><path d="m13 7 7 5-7 5Z"></path></svg>',
    reset:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4.5 10a8 8 0 1 0 2.4-4.9"></path><path d="M4 4v6h6"></path></svg>',
    "external-link":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"></path></svg>',
    "move-vertical":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m12 4-3 3"></path><path d="m12 4 3 3"></path><path d="M12 20V4"></path><path d="m12 20-3-3"></path><path d="m12 20 3-3"></path></svg>',
    terminal:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m7 10 3 2-3 2"></path><path d="M12 15h5"></path></svg>',
    graduation:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m3 8.5 9-4 9 4-9 4-9-4Z"></path><path d="M7 11v4.5c1.3 1.3 3 2 5 2s3.7-.7 5-2V11"></path><path d="M21 9v6"></path></svg>',
    gamepad:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M7 9h10a5 5 0 0 1 4.5 6.9l-.4.9a2.2 2.2 0 0 1-3.6.7L15 16H9l-2.5 2.5a2.2 2.2 0 0 1-3.6-.7l-.4-.9A5 5 0 0 1 7 9Z"></path><path d="M8 13h3"></path><path d="M9.5 11.5v3"></path><path d="M16.5 12.5h.01"></path><path d="M18.5 14.5h.01"></path></svg>',
    sparkles:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"></path><path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15Z"></path><path d="M19 14l.8 1.7 1.7.8-1.7.8L19 19l-.8-1.7-1.7-.8 1.7-.8L19 14Z"></path></svg>',
    code: '<svg viewBox="0 0 24 24" focusable="false"><path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="m14 5-4 14"></path></svg>',
    cloud:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 18h11a4 4 0 0 0 .5-8 6 6 0 0 0-11.1-1.9A4.7 4.7 0 0 0 6 18Z"></path></svg>',
    grid: '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>',
    folder:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M3 7.5h7l2 2H21v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z"></path><path d="M3 7.5V6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1.5"></path></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="7" width="18" height="12" rx="2"></rect><path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2"></path><path d="M3 11h18"></path></svg>',
    rocket:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M14 4c3 0 5 2.4 5 5.4 0 4-3.2 7.2-7.2 7.2H8.5L5 20l1.4-3.5V12.2C6.4 8.2 9.6 5 13.6 5H14Z"></path><path d="M9 15 6 12"></path><circle cx="14.5" cy="9.5" r="1.2"></circle></svg>',
    book: '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 4.5h11a3 3 0 0 1 3 3V19H8a3 3 0 0 0-3 3V4.5Z"></path><path d="M8 19h11"></path></svg>',
    bookmark:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M7 4h10v16l-5-3-5 3V4Z"></path></svg>',
    brain:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M9 6.5a3 3 0 0 1 5.5-1.6A3.2 3.2 0 0 1 19 8a3 3 0 0 1-1 5.8V15a3 3 0 0 1-3 3h-1"></path><path d="M9 6.5A3 3 0 0 0 5 9.2a3 3 0 0 0 0 5.6V15a3 3 0 0 0 3 3h1"></path><path d="M12 5v14"></path><path d="M9 10h1"></path><path d="M14 10h1"></path></svg>',
    camera:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 8h4l1.5-2h5L16 8h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>',
    compass:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"></circle><path d="m14.8 9.2-1.9 4.7-4.7 1.9 1.9-4.7 4.7-1.9Z"></path></svg>',
    cpu: '<svg viewBox="0 0 24 24" focusable="false"><rect x="7" y="7" width="10" height="10" rx="2"></rect><path d="M9 1v4"></path><path d="M15 1v4"></path><path d="M9 19v4"></path><path d="M15 19v4"></path><path d="M1 9h4"></path><path d="M1 15h4"></path><path d="M19 9h4"></path><path d="M19 15h4"></path></svg>',
    database:
      '<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"></ellipse><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"></path><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"></path></svg>',
    flask:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M10 3h4"></path><path d="M11 3v6l-5 8.2A2 2 0 0 0 7.7 20h8.6a2 2 0 0 0 1.7-2.8L13 9V3"></path><path d="M9 13h6"></path></svg>',
    globe:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path></svg>',
    headphones:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 13a8 8 0 0 1 16 0"></path><rect x="4" y="13" width="4" height="7" rx="2"></rect><rect x="16" y="13" width="4" height="7" rx="2"></rect></svg>',
    heart:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"></path></svg>',
    home: '<svg viewBox="0 0 24 24" focusable="false"><path d="m4 11 8-6 8 6"></path><path d="M6 10.5V20h12v-9.5"></path></svg>',
    image:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="m20 16-4.5-4.5L8 19"></path></svg>',
    key: '<svg viewBox="0 0 24 24" focusable="false"><circle cx="8.5" cy="15.5" r="3.5"></circle><path d="M11 13l9-9"></path><path d="M17 4h3v3"></path><path d="M15 6h3"></path></svg>',
    lightning:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z"></path></svg>',
    lock: '<svg viewBox="0 0 24 24" focusable="false"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 1 1 8 0v3"></path></svg>',
    map: '<svg viewBox="0 0 24 24" focusable="false"><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path></svg>',
    moon: '<svg viewBox="0 0 24 24" focusable="false"><path d="M19 14.5A7.5 7.5 0 1 1 9.5 5a6.5 6.5 0 0 0 9.5 9.5Z"></path></svg>',
    music:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M14 4v11.5a2.5 2.5 0 1 1-2-2.4V6l8-2v9.5a2.5 2.5 0 1 1-2-2.4V4"></path></svg>',
    palette:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4a8 8 0 1 0 0 16h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h5a3 3 0 0 0 3-3 8 8 0 0 0-8-4Z"></path><circle cx="7.5" cy="11" r="1"></circle><circle cx="10" cy="8.5" r="1"></circle><circle cx="14" cy="8.5" r="1"></circle></svg>',
    pencil:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m4 20 4.5-1 9-9a2.1 2.1 0 0 0-3-3l-9 9L4 20Z"></path><path d="m13.5 6.5 4 4"></path></svg>',
    shield:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 3 5 6v5c0 5 3.3 8 7 10 3.7-2 7-5 7-10V6l-7-3Z"></path></svg>',
    star: '<svg viewBox="0 0 24 24" focusable="false"><path d="m12 4 2.5 5.2 5.8.8-4.2 4 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4 5.8-.8L12 4Z"></path></svg>',
    sun: '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v3"></path><path d="M12 19v3"></path><path d="m4.9 4.9 2.1 2.1"></path><path d="m17 17 2.1 2.1"></path><path d="M2 12h3"></path><path d="M19 12h3"></path><path d="m4.9 19.1 2.1-2.1"></path><path d="m17 7 2.1-2.1"></path></svg>',
    target:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="1"></circle></svg>',
    timer:
      '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="13" r="7"></circle><path d="M12 13 15.5 9.5"></path><path d="M9 2h6"></path><path d="M12 6V2"></path></svg>',
    wrench:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M21 7.5a4.5 4.5 0 0 1-6.2 4.2l-7.4 7.4a1.8 1.8 0 1 1-2.5-2.5l7.4-7.4A4.5 4.5 0 0 1 16.5 3l-2.4 2.4 4.1 4.1L21 7.5Z"></path></svg>',
    spacer:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 8h16"></path><path d="M4 16h16"></path><path d="M12 8v8"></path><path d="m9 11 3-3 3 3"></path><path d="m9 13 3 3 3-3"></path></svg>',
    "check-list":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m4 7 2 2 4-4"></path><path d="M12 8h8"></path><path d="m4 17 2 2 4-4"></path><path d="M12 18h8"></path></svg>',
    note: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 3h9l3 3v15H6V3Z"></path><path d="M14 3v4h4"></path><path d="M9 12h6"></path><path d="M9 16h5"></path></svg>',
    qr: '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><path d="M14 14h2v2h-2z"></path><path d="M18 14h2v6h-4v-2"></path></svg>',
    markdown:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 15V9l3 4 3-4v6"></path><path d="M16 11v4"></path><path d="m14 13 2 2 2-2"></path></svg>',
    diff: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 7h8"></path><path d="M6 17h8"></path><path d="M18 5v6"></path><path d="M15 8h6"></path><path d="M15 17h6"></path></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4"></path><path d="M16 3v4"></path><path d="M4 10h16"></path></svg>',
    kanban:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="4" width="5" height="16" rx="1"></rect><rect x="10" y="4" width="5" height="10" rx="1"></rect><rect x="16" y="4" width="4" height="13" rx="1"></rect></svg>',
    quiz: '<svg viewBox="0 0 24 24" focusable="false"><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.9.8-1.8 1.3-1.8 2.8"></path><path d="M12 17h.01"></path><circle cx="12" cy="12" r="9"></circle></svg>',
    compress:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 9V4h5"></path><path d="m4 4 6 6"></path><path d="M20 15v5h-5"></path><path d="m20 20-6-6"></path><path d="M15 4h5v5"></path><path d="m20 4-6 6"></path><path d="M9 20H4v-5"></path><path d="m4 20 6-6"></path></svg>',
    uptime:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-5 4 10 2-5h6"></path></svg>',
    windows:
      '<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="11" height="14" rx="2"></rect><rect x="10" y="9" width="11" height="10" rx="2"></rect></svg>',
    "resize-diagonal":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="M8 16 16 8"></path><path d="M10 8h6v6"></path></svg>',
    check:
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m5 12 4 4L19 6"></path></svg>',
    "chevron-left":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m15 18-6-6 6-6"></path></svg>',
    "chevron-right":
      '<svg viewBox="0 0 24 24" focusable="false"><path d="m9 18 6-6-6-6"></path></svg>',
  };

  return icons[name] || icons.grid;
}
