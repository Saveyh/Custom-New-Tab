const STORAGE_KEY = "navigateur.newtab.v1";
const DATA_VERSION = 2;
const DEFAULT_DASHBOARD_ID = "work";

const searchEngines = [
  {
    id: "google",
    label: "Google",
    iconDomain: "google.com",
    placeholder: "Search Google...",
    buildUrl: (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}`
  },
  {
    id: "youtube",
    label: "YouTube",
    iconDomain: "youtube.com",
    placeholder: "Search YouTube...",
    buildUrl: (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
  },
  {
    id: "github",
    label: "GitHub",
    iconDomain: "github.com",
    placeholder: "Search GitHub...",
    buildUrl: (query) => `https://github.com/search?q=${encodeURIComponent(query)}`
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    iconDomain: "chatgpt.com",
    placeholder: "Message ChatGPT...",
    buildUrl: (query) => `https://chatgpt.com/?q=${encodeURIComponent(query)}`
  },
  {
    id: "stackoverflow",
    label: "Stack Overflow",
    iconDomain: "stackoverflow.com",
    placeholder: "Search Stack Overflow...",
    buildUrl: (query) => `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`
  }
];

const sectionIconOptions = [
  { id: "sparkles", label: "Sparkles" },
  { id: "code", label: "Code" },
  { id: "cloud", label: "Cloud" },
  { id: "grid", label: "Grid" },
  { id: "folder", label: "Folder" }
];

const dashboardViews = [
  {
    id: "work",
    label: "Travail",
    icon: "terminal",
    sectionIds: ["section_ai_services", "section_developer_resources", "section_hosting_deployment"]
  },
  {
    id: "university",
    label: "Universite",
    icon: "graduation",
    sectionIds: ["section_travail", "section_universite", "section_creation"]
  },
  {
    id: "leisure",
    label: "Loisirs",
    icon: "gamepad",
    sectionIds: ["section_loisirs", "section_achats"]
  },
  {
    id: "all",
    label: "Tout",
    icon: "grid",
    sectionIds: []
  }
];

const defaultData = {
  version: DATA_VERSION,
  selectedEngine: "google",
  selectedDashboard: DEFAULT_DASHBOARD_ID,
  sections: [
    {
      id: "section_ai_services",
      title: "AI Services",
      icon: "sparkles",
      links: [
        createSeedLink("ChatGPT", "https://chatgpt.com/"),
        createSeedLink("Claude", "https://claude.ai/"),
        createSeedLink("Gemini", "https://gemini.google.com/"),
        createSeedLink("NotebookLM", "https://notebooklm.google.com/"),
        createSeedLink("Mistral", "https://chat.mistral.ai/"),
        createSeedLink("Cloud AI", "https://cloud.ai/")
      ]
    },
    {
      id: "section_developer_resources",
      title: "Developpement",
      icon: "code",
      links: [
        createSeedLink("GitHub", "https://github.com/"),
        createSeedLink("Supabase", "https://supabase.com/")
      ]
    },
    {
      id: "section_hosting_deployment",
      title: "Hosting & Monitoring",
      icon: "cloud",
      links: [
        createSeedLink("Vercel", "https://vercel.com/dashboard"),
        createSeedLink("Netlify", "https://app.netlify.com/"),
        createSeedLink("UptimeRobot", "https://dashboard.uptimerobot.com/"),
        createSeedLink("Infomaniak Manager", "https://manager.infomaniak.com/")
      ]
    },
    {
      id: "section_travail",
      title: "Travail",
      icon: "folder",
      links: [
        createSeedLink("Microsoft 365", "https://m365.cloud.microsoft/"),
        createSeedLink("Osmo Supply", "https://osmo.supply/"),
        createSeedLink("Intranet MCProd", "https://intranet-agence-mcprod.netlify.app/")
      ]
    },
    {
      id: "section_universite",
      title: "Universite",
      icon: "folder",
      links: [
        createSeedLink("Academia UniNE", "https://academia.unine.ch/"),
        createSeedLink("Moodle UniNE", "https://moodle.unine.ch/")
      ]
    },
    {
      id: "section_creation",
      title: "Creation",
      icon: "grid",
      links: [
        createSeedLink("Canva", "https://canva.com/"),
        createSeedLink("Pinterest", "https://fr.pinterest.com/")
      ]
    },
    {
      id: "section_loisirs",
      title: "Loisirs",
      icon: "grid",
      links: [
        createSeedLink("YouTube", "https://www.youtube.com/"),
        createSeedLink("Twitch", "https://www.twitch.tv/"),
        createSeedLink("MyTennis", "https://mytennis.ch/")
      ]
    },
    {
      id: "section_achats",
      title: "Achats",
      icon: "folder",
      links: [
        createSeedLink("Galaxus", "https://www.galaxus.ch/")
      ]
    }
  ]
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
  "Webflow Dashboard"
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
  "www.perplexity.ai"
];

const state = {
  data: cloneData(defaultData),
  dialog: null,
  drag: null,
  editMode: false,
  statusTimer: null
};

const ui = {
  body: document.body,
  dashboardNav: document.getElementById("dashboardNav"),
  searchForm: document.getElementById("searchForm"),
  searchInput: document.getElementById("searchInput"),
  enginePicker: document.getElementById("enginePicker"),
  engineButton: document.getElementById("engineButton"),
  engineMenu: document.getElementById("engineMenu"),
  editToggle: document.getElementById("editToggle"),
  sectionsRoot: document.getElementById("sectionsRoot"),
  statusMessage: document.getElementById("statusMessage"),
  editorDialog: document.getElementById("editorDialog"),
  editorForm: document.getElementById("editorForm"),
  dialogTitle: document.getElementById("dialogTitle"),
  dialogFields: document.getElementById("dialogFields"),
  dialogSubmit: document.getElementById("dialogSubmit"),
  dialogClose: document.getElementById("dialogClose"),
  dialogCancel: document.getElementById("dialogCancel"),
  formError: document.getElementById("formError")
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  paintStaticIcons();
  renderSearchEngines();
  renderDashboardNav();
  bindEvents();

  try {
    state.data = await loadData();
  } catch (error) {
    console.error(error);
    state.data = cloneData(defaultData);
    showStatus("Stockage local indisponible. Les donnees par defaut sont chargees.");
  }

  syncEngineControl();
  syncDashboardNav();
  render();
}

function bindEvents() {
  ui.searchForm.addEventListener("submit", handleSearchSubmit);
  ui.dashboardNav.addEventListener("click", handleDashboardNavClick);
  ui.engineButton.addEventListener("click", toggleEngineMenu);
  ui.engineButton.addEventListener("keydown", handleEngineButtonKeydown);
  ui.engineMenu.addEventListener("click", handleEngineMenuClick);
  ui.editToggle.addEventListener("click", toggleEditMode);
  ui.editorForm.addEventListener("submit", handleDialogSubmit);
  ui.dialogClose.addEventListener("click", closeDialog);
  ui.dialogCancel.addEventListener("click", closeDialog);
  ui.editorDialog.addEventListener("click", handleDialogBackdropClick);

  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("click", handleEngineOutsideClick);
  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("dragover", handleDragOver);
  document.addEventListener("dragleave", handleDragLeave);
  document.addEventListener("drop", handleDrop);
  document.addEventListener("dragend", clearDragState);

  document.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='favicon']")) {
        const icon = event.target.closest(".link-icon");
        if (icon) {
          icon.dataset.hasError = "true";
        }
      }

      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='engine-icon']")) {
        const icon = event.target.closest(".engine-logo");
        if (icon) {
          icon.dataset.hasError = "true";
        }
      }
    },
    true
  );

  document.addEventListener(
    "load",
    (event) => {
      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='favicon']")) {
        const icon = event.target.closest(".link-icon");
        if (icon) {
          icon.dataset.hasImage = "true";
          icon.dataset.hasError = "false";
        }
      }

      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='engine-icon']")) {
        const icon = event.target.closest(".engine-logo");
        if (icon) {
          icon.dataset.hasImage = "true";
          icon.dataset.hasError = "false";
        }
      }
    },
    true
  );
}

function paintStaticIcons() {
  ui.editToggle.innerHTML = createIcon("edit");
  ui.dialogClose.innerHTML = createIcon("close");

  const addSectionButton = document.querySelector("[data-action='add-section']");
  if (addSectionButton) {
    addSectionButton.innerHTML = createIcon("plus");
  }
}

function renderDashboardNav() {
  ui.dashboardNav.innerHTML = dashboardViews
    .map(
      (dashboard) => `
        <button
          class="dashboard-tab"
          type="button"
          data-dashboard-id="${dashboard.id}"
          aria-pressed="false"
        >
          <span class="dashboard-tab-icon" aria-hidden="true">${createIcon(dashboard.icon)}</span>
          <span class="dashboard-tab-label">${escapeHtml(dashboard.label)}</span>
        </button>
      `
    )
    .join("");
}

function renderSearchEngines() {
  ui.engineMenu.innerHTML = searchEngines
    .map((engine) => createEngineOptionMarkup(engine))
    .join("");
}

function createEngineOptionMarkup(engine) {
  return `
    <button
      class="engine-option"
      type="button"
      role="option"
      data-engine-id="${engine.id}"
      aria-selected="false"
      tabindex="-1"
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
  event.preventDefault();

  const query = ui.searchInput.value.trim();
  if (!query) {
    ui.searchInput.focus();
    return;
  }

  const engine = getSelectedEngine();
  state.data.selectedEngine = engine.id;
  await saveData(state.data);
  window.location.assign(engine.buildUrl(query));
}

async function handleDashboardNavClick(event) {
  const tab = event.target.closest("[data-dashboard-id]");
  if (!tab) {
    return;
  }

  const dashboard = dashboardViews.find((item) => item.id === tab.dataset.dashboardId);
  if (!dashboard || dashboard.id === state.data.selectedDashboard) {
    return;
  }

  state.data.selectedDashboard = dashboard.id;
  syncDashboardNav();
  render();
  await saveData(state.data);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleEngineMenu(event) {
  event.stopPropagation();
  setEngineMenuOpen(ui.engineMenu.hidden);
}

function handleEngineButtonKeydown(event) {
  if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setEngineMenuOpen(true);
    focusSelectedEngineOption();
  }
}

async function handleEngineMenuClick(event) {
  const option = event.target.closest("[data-engine-id]");
  if (!option) {
    return;
  }

  await selectSearchEngine(option.dataset.engineId);
}

function handleEngineOutsideClick(event) {
  if (!ui.enginePicker.contains(event.target)) {
    setEngineMenuOpen(false);
  }
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape") {
    setEngineMenuOpen(false);
    return;
  }

  if (ui.engineMenu.hidden || !["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)) {
    return;
  }

  const options = Array.from(ui.engineMenu.querySelectorAll("[data-engine-id]"));
  if (!options.length) {
    return;
  }

  const currentIndex = Math.max(0, options.indexOf(document.activeElement));

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.activeElement?.click?.();
    return;
  }

  event.preventDefault();

  if (event.key === "Home") {
    options[0]?.focus();
    return;
  }

  if (event.key === "End") {
    options[options.length - 1]?.focus();
    return;
  }

  const direction = event.key === "ArrowDown" ? 1 : -1;
  const nextIndex = (currentIndex + direction + options.length) % options.length;
  options[nextIndex]?.focus();
}

async function selectSearchEngine(engineId) {
  const engine = searchEngines.find((item) => item.id === engineId);
  if (!engine) {
    return;
  }

  state.data.selectedEngine = engine.id;
  syncEngineControl();
  setEngineMenuOpen(false);
  await saveData(state.data);
  showStatus("Moteur mis a jour.");
}

function syncEngineControl() {
  const engine = getSelectedEngine();
  ui.engineButton.innerHTML = `
    ${createEngineLogoMarkup(engine)}
    <span class="engine-button-label">${escapeHtml(engine.label)}</span>
    <span class="engine-chevron" aria-hidden="true">${createIcon("chevron-down")}</span>
  `;
  ui.engineButton.title = engine.label;
  ui.engineMenu.querySelectorAll("[data-engine-id]").forEach((option) => {
    const isSelected = option.dataset.engineId === engine.id;
    option.setAttribute("aria-selected", String(isSelected));
    option.tabIndex = isSelected ? 0 : -1;
  });
  syncSearchPlaceholder();
}

function setEngineMenuOpen(isOpen) {
  ui.engineMenu.hidden = !isOpen;
  ui.engineButton.setAttribute("aria-expanded", String(isOpen));
  ui.enginePicker.classList.toggle("is-open", isOpen);
}

function focusSelectedEngineOption() {
  const selectedOption =
    ui.engineMenu.querySelector("[aria-selected='true']") ||
    ui.engineMenu.querySelector("[data-engine-id]");
  selectedOption?.focus();
}

function syncSearchPlaceholder() {
  ui.searchInput.placeholder = getSelectedEngine().placeholder;
}

function getSelectedEngine() {
  return searchEngines.find((engine) => engine.id === state.data.selectedEngine) || searchEngines[0];
}

function toggleEditMode() {
  state.editMode = !state.editMode;
  ui.body.classList.toggle("is-editing", state.editMode);
  ui.editToggle.setAttribute("aria-label", state.editMode ? "Quitter l'edition" : "Activer l'edition");
  render();
}

async function handleDocumentClick(event) {
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
      case "add-section":
        openSectionDialog();
        break;
      case "edit-section":
        openSectionDialog(getSection(actionTarget.dataset.sectionId));
        break;
      case "delete-section":
        await deleteSection(actionTarget.dataset.sectionId);
        break;
      case "add-link":
        openLinkDialog(null, actionTarget.dataset.sectionId);
        break;
      case "edit-link":
        openLinkDialog(getLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId), actionTarget.dataset.sectionId);
        break;
      case "delete-link":
        await deleteLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
    showStatus("Action impossible.");
  }
}

function render() {
  ui.body.classList.toggle("is-editing", state.editMode);
  syncDashboardNav();
  renderSections();
}

function renderSections() {
  const visibleSections = getVisibleSections();

  if (!visibleSections.length) {
    ui.sectionsRoot.innerHTML = `
      <div class="empty-state">
        <span>Aucune ligne</span>
      </div>
    `;
    return;
  }

  ui.sectionsRoot.innerHTML = visibleSections
    .map(
      (section) => `
        <section
          class="link-section"
          data-section-id="${section.id}"
          draggable="${state.editMode ? "true" : "false"}"
        >
          <div class="section-header">
            <div class="section-title">
              <span class="section-symbol" aria-hidden="true">${createIcon(section.icon || "grid")}</span>
              <h2>${escapeHtml(section.title)}</h2>
            </div>
            <div class="section-actions">
              <button
                class="small-icon-button"
                type="button"
                data-action="add-link"
                data-section-id="${section.id}"
                aria-label="Ajouter un lien"
                title="Ajouter un lien"
              >${createIcon("plus")}</button>
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

          <div class="links-grid" data-section-id="${section.id}">
            ${
              section.links.length
                ? section.links.map((link) => createLinkMarkup(section.id, link)).join("")
                : `<div class="empty-state"><span>Aucun lien</span></div>`
            }
          </div>
        </section>
      `
    )
    .join("");
}

function getVisibleSections() {
  const dashboard = getSelectedDashboard();
  if (dashboard.id === "all") {
    return state.data.sections;
  }

  const sectionIds = new Set(dashboard.sectionIds);
  return state.data.sections.filter(
    (section) => sectionIds.has(section.id) || section.dashboards?.includes(dashboard.id)
  );
}

function getSelectedDashboard() {
  return dashboardViews.find((dashboard) => dashboard.id === state.data.selectedDashboard) || dashboardViews[0];
}

function syncDashboardNav() {
  const dashboard = getSelectedDashboard();
  state.data.selectedDashboard = dashboard.id;
  ui.dashboardNav.querySelectorAll("[data-dashboard-id]").forEach((tab) => {
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

function openSectionDialog(section = null) {
  state.dialog = {
    type: "section",
    sectionId: section?.id || null
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
            `
          )
          .join("")}
      </select>
    </div>
  `;
  openDialog();
}

function openLinkDialog(link = null, sectionId = null) {
  if (!state.data.sections.length) {
    showStatus("Cree une ligne avant d'ajouter un lien.");
    return;
  }

  const targetSectionId = sectionId || findSectionIdByLinkId(link?.id) || state.data.sections[0].id;

  state.dialog = {
    type: "link",
    sectionId: targetSectionId,
    linkId: link?.id || null
  };

  ui.dialogTitle.textContent = link ? "Modifier le lien" : "Nouveau lien";
  ui.dialogSubmit.textContent = link ? "Mettre a jour" : "Ajouter";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="linkTitle">Nom</label>
      <input id="linkTitle" name="title" type="text" maxlength="72" value="${escapeHtml(link?.title || "")}" required />
    </div>
    <div class="field">
      <label for="linkUrl">URL</label>
      <input id="linkUrl" name="url" type="text" value="${escapeHtml(link?.url || "")}" placeholder="https://example.com" required />
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
            `
          )
          .join("")}
      </select>
    </div>
  `;
  openDialog();
}

function openDialog() {
  ui.formError.textContent = "";
  if (ui.editorDialog.open) {
    ui.editorDialog.close();
  }

  ui.editorDialog.showModal();

  const firstField = ui.dialogFields.querySelector("input, select");
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

  if (ui.editorDialog.open) {
    ui.editorDialog.close();
  }
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
    if (state.dialog.type === "section") {
      await saveSection(formData, state.dialog.sectionId);
    }

    if (state.dialog.type === "link") {
      await saveLink(formData, state.dialog.sectionId, state.dialog.linkId);
    }
  } catch (error) {
    ui.formError.textContent = error instanceof Error ? error.message : "Formulaire invalide.";
  }
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
    state.data.sections.push({
      id: createId("section"),
      title,
      icon,
      dashboards: getNewSectionDashboards(),
      links: []
    });
    await persist("Ligne creee.");
  }

  closeDialog();
}

async function saveLink(formData, originalSectionId, linkId) {
  const title = requireText(formData.get("title"), "Le nom est obligatoire.");
  const url = normalizeUrl(requireText(formData.get("url"), "L'URL est obligatoire."));
  const targetSectionId = requireText(formData.get("sectionId"), "Choisis une ligne.");
  const targetSection = getSection(targetSectionId);

  if (!targetSection) {
    throw new Error("Ligne introuvable.");
  }

  if (linkId) {
    const sourceSection = getSection(originalSectionId);
    const sourceIndex = sourceSection?.links.findIndex((item) => item.id === linkId) ?? -1;
    const existingLink = sourceIndex >= 0 ? sourceSection.links[sourceIndex] : null;
    if (!sourceSection || !existingLink) {
      throw new Error("Lien introuvable.");
    }

    const updatedLink = {
      ...existingLink,
      title,
      url,
      icon: getFaviconUrl(url)
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
      icon: getFaviconUrl(url)
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

  state.data.sections = state.data.sections.filter((item) => item.id !== sectionId);
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

function handleDragStart(event) {
  if (!state.editMode) {
    event.preventDefault();
    return;
  }

  const linkCard = event.target.closest(".link-card");
  if (linkCard) {
    state.drag = {
      type: "link",
      sectionId: linkCard.dataset.sectionId,
      linkId: linkCard.dataset.linkId
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(state.drag));
    linkCard.classList.add("dragging");
    return;
  }

  const section = event.target.closest(".link-section");
  if (section && !event.target.closest(".section-actions")) {
    state.drag = {
      type: "section",
      sectionId: section.dataset.sectionId
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(state.drag));
    section.classList.add("dragging");
    return;
  }

  event.preventDefault();
}

function handleDragOver(event) {
  if (!state.drag) {
    return;
  }

  if (state.drag.type === "link") {
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

  if (state.drag.type === "section") {
    const section = event.target.closest(".link-section");
    if (section && section.dataset.sectionId !== state.drag.sectionId) {
      event.preventDefault();
      clearDropClasses();
      section.classList.add("is-drop-target");
    }
  }
}

function handleDragLeave(event) {
  const nextTarget = event.relatedTarget;
  if (nextTarget instanceof Node && event.currentTarget?.contains?.(nextTarget)) {
    return;
  }
}

async function handleDrop(event) {
  if (!state.drag) {
    return;
  }

  event.preventDefault();

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
        after
      );
      return;
    }

    if (targetGrid) {
      await moveLink(state.drag.sectionId, state.drag.linkId, targetGrid.dataset.sectionId, null, true);
      return;
    }
  }

  if (state.drag.type === "section") {
    const targetSection = event.target.closest(".link-section");
    if (targetSection) {
      await moveSection(state.drag.sectionId, targetSection.dataset.sectionId);
    }
  }
}

async function moveLink(sourceSectionId, linkId, targetSectionId, targetLinkId, placeAfter) {
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

  const sourceIndex = sourceSection.links.findIndex((item) => item.id === linkId);
  if (sourceIndex < 0) {
    clearDragState();
    return;
  }

  const [link] = sourceSection.links.splice(sourceIndex, 1);
  let targetIndex = targetLinkId ? targetSection.links.findIndex((item) => item.id === targetLinkId) : targetSection.links.length;

  if (targetIndex < 0) {
    targetIndex = targetSection.links.length;
  }

  if (placeAfter) {
    targetIndex += 1;
  }

  targetSection.links.splice(targetIndex, 0, link);
  await persist("Lien deplace.", { keepDrag: false });
}

async function moveSection(sourceSectionId, targetSectionId) {
  if (sourceSectionId === targetSectionId) {
    clearDragState();
    return;
  }

  const sourceIndex = state.data.sections.findIndex((item) => item.id === sourceSectionId);
  const targetIndex = state.data.sections.findIndex((item) => item.id === targetSectionId);

  if (sourceIndex < 0 || targetIndex < 0) {
    clearDragState();
    return;
  }

  const [section] = state.data.sections.splice(sourceIndex, 1);
  state.data.sections.splice(targetIndex, 0, section);
  await persist("Ligne deplacee.", { keepDrag: false });
}

function clearDragState() {
  state.drag = null;
  clearDropClasses();
  document.querySelectorAll(".dragging").forEach((item) => item.classList.remove("dragging"));
}

function clearDropClasses() {
  document
    .querySelectorAll(".is-drop-target, .is-drop-before, .is-drop-after")
    .forEach((item) => item.classList.remove("is-drop-target", "is-drop-before", "is-drop-after"));
}

function isAfterHalf(event, element) {
  const rect = element.getBoundingClientRect();
  return event.clientX > rect.left + rect.width / 2;
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
  const selectedEngine = searchEngines.some((engine) => engine.id === data.selectedEngine)
    ? data.selectedEngine
    : defaultData.selectedEngine;
  const selectedDashboard = dashboardViews.some((dashboard) => dashboard.id === data.selectedDashboard)
    ? data.selectedDashboard
    : defaultData.selectedDashboard;
  const version = Number.isFinite(Number(data.version)) ? Number(data.version) : 0;

  return {
    version,
    selectedEngine,
    selectedDashboard,
    sections: Array.isArray(data.sections)
      ? data.sections.map(sanitizeSection).filter(Boolean)
      : []
  };
}

function sanitizeSection(section) {
  if (!section || typeof section !== "object") {
    return null;
  }

  const title = normalizeText(section.title);
  if (!title) {
    return null;
  }

  const icon = sectionIconOptions.some((option) => option.id === section.icon) ? section.icon : "grid";

  return {
    id: normalizeText(section.id) || createId("section"),
    title,
    icon,
    dashboards: sanitizeDashboardIds(section.dashboards),
    links: Array.isArray(section.links) ? section.links.map(sanitizeLink).filter(Boolean) : []
  };
}

function sanitizeDashboardIds(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const validIds = new Set(dashboardViews.map((dashboard) => dashboard.id).filter((id) => id !== "all"));
  return [...new Set(value.map(normalizeText).filter((id) => validIds.has(id)))];
}

function getNewSectionDashboards() {
  const dashboard = getSelectedDashboard();
  return dashboard.id === "all" ? [] : [dashboard.id];
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
      icon: normalizeText(link.icon) || getFaviconUrl(url)
    };
  } catch (error) {
    return null;
  }
}

function migrateData(data) {
  if (Number(data.version) >= DATA_VERSION) {
    return data;
  }

  const migrated = cloneData(data);
  const removedTitles = new Set(removedSeedLinks.map(normalizeKey));
  const removedUrls = new Set(removedSeedHosts.map(normalizeUrlKey));

  migrated.version = DATA_VERSION;
  migrated.sections = migrated.sections
    .filter((section) => !removedTitles.has(normalizeKey(section.title)))
    .map((section) => ({
      ...section,
      title: getMigratedSectionTitle(section),
      links: section.links.filter((link) => !shouldRemoveSeedLink(link, removedTitles, removedUrls))
    }));

  defaultData.sections.forEach((seedSection) => {
    let targetSection = findMatchingSection(migrated, seedSection);

    if (!targetSection) {
      targetSection = {
        id: seedSection.id,
        title: seedSection.title,
        icon: seedSection.icon,
        links: []
      };
      migrated.sections.push(targetSection);
    } else if (targetSection.id === seedSection.id) {
      targetSection.title = seedSection.title;
      targetSection.icon = seedSection.icon;
    }

    seedSection.links.forEach((seedLink) => {
      if (!hasLinkWithUrl(migrated, seedLink.url)) {
        targetSection.links.push(createSeedLink(seedLink.title, seedLink.url));
      }
    });
  });

  return sanitizeData(migrated);
}

function getMigratedSectionTitle(section) {
  const sectionTitles = {
    section_developer_resources: "Developpement",
    section_hosting_deployment: "Hosting & Monitoring"
  };

  return sectionTitles[section.id] || section.title;
}

function findMatchingSection(data, seedSection) {
  return (
    data.sections.find((section) => section.id === seedSection.id) ||
    data.sections.find((section) => normalizeKey(section.title) === normalizeKey(seedSection.title)) ||
    null
  );
}

function hasLinkWithUrl(data, url) {
  const candidate = normalizeUrlKey(url);
  return data.sections.some((section) =>
    section.links.some((link) => normalizeUrlKey(link.url) === candidate)
  );
}

function shouldRemoveSeedLink(link, removedTitles, removedUrls) {
  return removedTitles.has(normalizeKey(link.title)) || removedUrls.has(normalizeUrlKey(link.url));
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
  return state.data.sections.find((section) => section.id === sectionId) || null;
}

function getLink(sectionId, linkId) {
  return getSection(sectionId)?.links.find((link) => link.id === linkId) || null;
}

function findSectionIdByLinkId(linkId) {
  if (!linkId) {
    return null;
  }

  return state.data.sections.find((section) => section.links.some((link) => link.id === linkId))?.id || null;
}

function createSeedLink(title, url) {
  return {
    id: createId("link"),
    title,
    url,
    icon: getFaviconUrl(url)
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

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
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
    "chevron-down": '<svg viewBox="0 0 24 24" focusable="false"><path d="m7 10 5 5 5-5"></path></svg>',
    edit: '<svg viewBox="0 0 24 24" focusable="false"><path d="m4 20 4.6-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"></path><path d="m13.5 6.5 4 4"></path></svg>',
    trash: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 13h10l1-13"></path><path d="M9 7V4h6v3"></path></svg>',
    close: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12"></path><path d="M18 6 6 18"></path></svg>',
    terminal: '<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m7 10 3 2-3 2"></path><path d="M12 15h5"></path></svg>',
    graduation: '<svg viewBox="0 0 24 24" focusable="false"><path d="m3 8.5 9-4 9 4-9 4-9-4Z"></path><path d="M7 11v4.5c1.3 1.3 3 2 5 2s3.7-.7 5-2V11"></path><path d="M21 9v6"></path></svg>',
    gamepad: '<svg viewBox="0 0 24 24" focusable="false"><path d="M7 9h10a5 5 0 0 1 4.5 6.9l-.4.9a2.2 2.2 0 0 1-3.6.7L15 16H9l-2.5 2.5a2.2 2.2 0 0 1-3.6-.7l-.4-.9A5 5 0 0 1 7 9Z"></path><path d="M8 13h3"></path><path d="M9.5 11.5v3"></path><path d="M16.5 12.5h.01"></path><path d="M18.5 14.5h.01"></path></svg>',
    sparkles: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"></path><path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15Z"></path><path d="M19 14l.8 1.7 1.7.8-1.7.8L19 19l-.8-1.7-1.7-.8 1.7-.8L19 14Z"></path></svg>',
    code: '<svg viewBox="0 0 24 24" focusable="false"><path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="m14 5-4 14"></path></svg>',
    cloud: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6 18h11a4 4 0 0 0 .5-8 6 6 0 0 0-11.1-1.9A4.7 4.7 0 0 0 6 18Z"></path></svg>',
    grid: '<svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>',
    folder: '<svg viewBox="0 0 24 24" focusable="false"><path d="M3 7.5h7l2 2H21v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z"></path><path d="M3 7.5V6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1.5"></path></svg>'
  };

  return icons[name] || icons.grid;
}
