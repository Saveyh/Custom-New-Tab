const STORAGE_KEY = "customNewTabData";

const defaultData = {
  sections: [
    {
      id: "section_ai",
      title: "IA",
      links: [
        {
          id: "link_chatgpt",
          title: "ChatGPT",
          url: "https://chatgpt.com",
          icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
        },
        {
          id: "link_claude",
          title: "Claude",
          url: "https://claude.ai",
          icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64"
        },
        {
          id: "link_gemini",
          title: "Gemini",
          url: "https://gemini.google.com",
          icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64"
        }
      ]
    },
    {
      id: "section_dev",
      title: "Developpement",
      links: [
        {
          id: "link_github",
          title: "GitHub",
          url: "https://github.com",
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
        },
        {
          id: "link_supabase",
          title: "Supabase",
          url: "https://supabase.com",
          icon: "https://www.google.com/s2/favicons?domain=supabase.com&sz=64"
        },
        {
          id: "link_netlify",
          title: "Netlify",
          url: "https://app.netlify.com",
          icon: "https://www.google.com/s2/favicons?domain=app.netlify.com&sz=64"
        }
      ]
    },
    {
      id: "section_design",
      title: "Design",
      links: [
        {
          id: "link_figma",
          title: "Figma",
          url: "https://figma.com",
          icon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64"
        },
        {
          id: "link_dribbble",
          title: "Dribbble",
          url: "https://dribbble.com",
          icon: "https://www.google.com/s2/favicons?domain=dribbble.com&sz=64"
        }
      ]
    }
  ],
  projects: [
    {
      id: "project_mcprod",
      title: "Dashboard MCProd",
      description: "Raccourcis utiles pour relancer le dashboard rapidement.",
      links: [
        {
          id: "project_link_supabase",
          title: "Supabase",
          url: "https://supabase.com",
          icon: "https://www.google.com/s2/favicons?domain=supabase.com&sz=64"
        },
        {
          id: "project_link_github",
          title: "GitHub",
          url: "https://github.com",
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
        },
        {
          id: "project_link_netlify",
          title: "Netlify",
          url: "https://app.netlify.com",
          icon: "https://www.google.com/s2/favicons?domain=app.netlify.com&sz=64"
        }
      ]
    },
    {
      id: "project_design_frontend",
      title: "Design & Front-end",
      description: "Les outils principaux pour maquette, inspiration et implementation.",
      links: [
        {
          id: "project_link_figma",
          title: "Figma",
          url: "https://figma.com",
          icon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64"
        },
        {
          id: "project_link_codepen",
          title: "CodePen",
          url: "https://codepen.io",
          icon: "https://www.google.com/s2/favicons?domain=codepen.io&sz=64"
        },
        {
          id: "project_link_github_design",
          title: "GitHub",
          url: "https://github.com",
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
        }
      ]
    }
  ]
};

const state = {
  data: cloneData(defaultData),
  searchQuery: "",
  editMode: false,
  dialog: null,
  statusTimer: null
};

const ui = {
  greetingLabel: document.getElementById("greetingLabel"),
  searchInput: document.getElementById("searchInput"),
  editModeButton: document.getElementById("editModeButton"),
  statusMessage: document.getElementById("statusMessage"),
  sectionsRoot: document.getElementById("sectionsRoot"),
  projectsRoot: document.getElementById("projectsRoot"),
  sectionsCounter: document.getElementById("sectionsCounter"),
  projectsCounter: document.getElementById("projectsCounter"),
  formDialog: document.getElementById("formDialog"),
  entityForm: document.getElementById("entityForm"),
  dialogKicker: document.getElementById("dialogKicker"),
  dialogTitle: document.getElementById("dialogTitle"),
  dialogFields: document.getElementById("dialogFields"),
  formError: document.getElementById("formError"),
  dialogCloseButton: document.getElementById("dialogCloseButton"),
  dialogCancelButton: document.getElementById("dialogCancelButton"),
  dialogSubmitButton: document.getElementById("dialogSubmitButton")
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindEvents();
  updateGreeting();

  try {
    state.data = await loadData();
    renderApp();
    showStatus("Vos liens et projets sont prets.");
  } catch (error) {
    console.error(error);
    state.data = cloneData(defaultData);
    renderApp();
    showStatus("Impossible de charger les donnees locales. Les donnees d'exemple ont ete restaurees.", "error");
  }
}

function bindEvents() {
  ui.searchInput.addEventListener("input", handleSearchInput);
  ui.editModeButton.addEventListener("click", handleToggleEditMode);
  ui.entityForm.addEventListener("submit", handleFormSubmit);
  ui.dialogCloseButton.addEventListener("click", closeDialog);
  ui.dialogCancelButton.addEventListener("click", closeDialog);
  ui.formDialog.addEventListener("click", handleDialogBackdropClick);
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='favicon']")) {
        const avatar = event.target.closest(".link-avatar");
        if (avatar) {
          avatar.dataset.hasError = "true";
        }
      }
    },
    true
  );
  document.addEventListener(
    "load",
    (event) => {
      if (event.target instanceof HTMLImageElement && event.target.matches("[data-role='favicon']")) {
        const avatar = event.target.closest(".link-avatar");
        if (avatar) {
          avatar.dataset.hasError = "false";
          avatar.dataset.hasImage = "true";
        }
      }
    },
    true
  );
}

function handleSearchInput(event) {
  state.searchQuery = event.target.value.trim().toLowerCase();
  renderApp();
}

function handleToggleEditMode() {
  state.editMode = !state.editMode;
  ui.editModeButton.textContent = state.editMode ? "Quitter l'edition" : "Mode edition";
  ui.editModeButton.classList.toggle("button", state.editMode);
  ui.editModeButton.classList.toggle("button-secondary", !state.editMode);
  renderApp();
}

function handleDialogBackdropClick(event) {
  if (event.target === ui.formDialog) {
    closeDialog();
  }
}

async function handleDocumentClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  const { action } = actionTarget.dataset;

  try {
    switch (action) {
      case "add-section":
        openSectionForm();
        break;
      case "edit-section":
        openSectionForm(getSectionById(actionTarget.dataset.sectionId));
        break;
      case "delete-section":
        await deleteSection(actionTarget.dataset.sectionId);
        break;
      case "add-link":
        openQuickLinkForm(null, actionTarget.dataset.sectionId || null);
        break;
      case "edit-link":
        openQuickLinkForm(
          getSectionLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId),
          actionTarget.dataset.sectionId
        );
        break;
      case "delete-link":
        await deleteQuickLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId);
        break;
      case "open-link":
        openQuickLink(actionTarget.dataset.sectionId, actionTarget.dataset.linkId);
        break;
      case "add-project":
        openProjectForm();
        break;
      case "edit-project":
        openProjectForm(getProjectById(actionTarget.dataset.projectId));
        break;
      case "delete-project":
        await deleteProject(actionTarget.dataset.projectId);
        break;
      case "open-project-link":
        openProjectLink(actionTarget.dataset.projectId, actionTarget.dataset.linkId);
        break;
      case "add-project-link":
        openProjectLinkForm(null, actionTarget.dataset.projectId || null);
        break;
      case "edit-project-link":
        openProjectLinkForm(
          getProjectLink(actionTarget.dataset.projectId, actionTarget.dataset.linkId),
          actionTarget.dataset.projectId
        );
        break;
      case "delete-project-link":
        await deleteProjectLink(actionTarget.dataset.projectId, actionTarget.dataset.linkId);
        break;
      case "open-project":
        await openProject(actionTarget.dataset.projectId);
        break;
      case "save-current-tabs":
        await saveCurrentTabsToProject(actionTarget.dataset.projectId);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
    showStatus("Une erreur inattendue est survenue. Reessayez.", "error");
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  ui.formError.textContent = "";

  if (!state.dialog) {
    return;
  }

  const formData = new FormData(ui.entityForm);

  try {
    switch (state.dialog.type) {
      case "section":
        await saveSectionFromForm(formData, state.dialog.sectionId || null);
        break;
      case "quick-link":
        await saveQuickLinkFromForm(formData, state.dialog.sectionId || null, state.dialog.linkId || null);
        break;
      case "project":
        await saveProjectFromForm(formData, state.dialog.projectId || null);
        break;
      case "project-link":
        await saveProjectLinkFromForm(formData, state.dialog.projectId || null, state.dialog.linkId || null);
        break;
      default:
        break;
    }
  } catch (error) {
    ui.formError.textContent = error instanceof Error ? error.message : "Le formulaire est invalide.";
  }
}

function renderApp() {
  renderSections();
  renderProjects();
}

function renderSections() {
  const visibleSections = filterSections(state.data.sections, state.searchQuery);
  ui.sectionsCounter.textContent = createCounterLabel(visibleSections.length, "section");

  if (!visibleSections.length) {
    ui.sectionsRoot.innerHTML = createEmptyStateMarkup(
      "Aucune section visible",
      state.searchQuery
        ? "Aucun lien rapide ne correspond a votre recherche."
        : "Ajoutez une section puis des liens rapides pour demarrer."
    );
    return;
  }

  ui.sectionsRoot.innerHTML = visibleSections
    .map((section) => {
      const linksMarkup = section.visibleLinks.length
        ? section.visibleLinks.map((link) => createQuickLinkCardMarkup(section.id, link)).join("")
        : createEmptyStateMarkup(
            "Section vide",
            "Ajoutez un premier lien rapide dans cette section."
          );

      return `
        <article class="section-card">
          <div class="section-header">
            <div>
              <h3>${escapeHtml(section.title)}</h3>
              <p class="subtle-meta">${section.visibleLinks.length} lien${section.visibleLinks.length > 1 ? "s" : ""}</p>
            </div>
            <div class="section-actions">
              <button class="toolbar-button" type="button" data-action="add-link" data-section-id="${section.id}">
                Ajouter un lien
              </button>
              ${
                state.editMode
                  ? `
                    <button class="toolbar-button" type="button" data-action="edit-section" data-section-id="${section.id}">
                      Renommer
                    </button>
                    <button class="toolbar-button chip-action-danger" type="button" data-action="delete-section" data-section-id="${section.id}">
                      Supprimer
                    </button>
                  `
                  : ""
              }
            </div>
          </div>
          <div class="section-links">
            ${linksMarkup}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  const visibleProjects = filterProjects(state.data.projects, state.searchQuery);
  ui.projectsCounter.textContent = createCounterLabel(visibleProjects.length, "projet");

  if (!visibleProjects.length) {
    ui.projectsRoot.innerHTML = createEmptyStateMarkup(
      "Aucun projet visible",
      state.searchQuery
        ? "Aucun projet ne correspond a votre recherche."
        : "Creez un projet pour sauvegarder et reouvrir vos sessions d'onglets."
    );
    return;
  }

  ui.projectsRoot.innerHTML = visibleProjects
    .map((project) => {
      const linksMarkup = project.visibleLinks.length
        ? project.visibleLinks.map((link) => createProjectLinkCardMarkup(project.id, link)).join("")
        : createEmptyStateMarkup(
            "Projet sans lien",
            "Ajoutez des liens ou sauvegardez les onglets ouverts."
          );

      return `
        <article class="project-card">
          <div class="project-head">
            <div>
              <h3>${escapeHtml(project.title)}</h3>
              <p class="project-description">
                ${escapeHtml(project.description || "Aucune description pour ce projet.")}
              </p>
            </div>
            <div class="project-actions">
              <button class="toolbar-button" type="button" data-action="open-project" data-project-id="${project.id}">
                Ouvrir tout
              </button>
              <button class="toolbar-button" type="button" data-action="save-current-tabs" data-project-id="${project.id}">
                Sauvegarder les onglets
              </button>
            </div>
          </div>
          <div class="project-toolbar">
            <button class="toolbar-button" type="button" data-action="add-project-link" data-project-id="${project.id}">
              Ajouter un lien
            </button>
            ${
              state.editMode
                ? `
                  <button class="toolbar-button" type="button" data-action="edit-project" data-project-id="${project.id}">
                    Modifier
                  </button>
                  <button class="toolbar-button chip-action-danger" type="button" data-action="delete-project" data-project-id="${project.id}">
                    Supprimer
                  </button>
                `
                : ""
            }
          </div>
          <div class="project-links">
            ${linksMarkup}
          </div>
        </article>
      `;
    })
    .join("");
}

function createQuickLinkCardMarkup(sectionId, link) {
  return `
    <article class="quick-link-card">
      <button
        class="quick-link-main"
        type="button"
        data-action="open-link"
        data-section-id="${sectionId}"
        data-link-id="${link.id}"
      >
        ${createAvatarMarkup(link)}
        <span>
          <span class="link-title">${escapeHtml(link.title)}</span>
          <span class="link-meta">${escapeHtml(formatHostname(link.url))}</span>
        </span>
      </button>
      ${
        state.editMode
          ? `
            <div class="link-chip-actions">
              <button class="chip-action" type="button" data-action="edit-link" data-section-id="${sectionId}" data-link-id="${link.id}">
                Modifier
              </button>
              <button class="chip-action chip-action-danger" type="button" data-action="delete-link" data-section-id="${sectionId}" data-link-id="${link.id}">
                Supprimer
              </button>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function createProjectLinkCardMarkup(projectId, link) {
  return `
    <article class="project-link-card">
      <button
        class="project-link-main"
        type="button"
        data-action="open-project-link"
        data-project-id="${projectId}"
        data-link-id="${link.id}"
      >
        ${createAvatarMarkup(link)}
        <span>
          <span class="link-title">${escapeHtml(link.title)}</span>
          <span class="link-meta">${escapeHtml(formatHostname(link.url))}</span>
        </span>
      </button>
      ${
        state.editMode
          ? `
            <div class="link-chip-actions">
              <button class="chip-action" type="button" data-action="edit-project-link" data-project-id="${projectId}" data-link-id="${link.id}">
                Modifier
              </button>
              <button class="chip-action chip-action-danger" type="button" data-action="delete-project-link" data-project-id="${projectId}" data-link-id="${link.id}">
                Supprimer
              </button>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function createAvatarMarkup(link) {
  const initial = getInitials(link.title);
  const icon = link.icon ? escapeHtml(link.icon) : "";
  return `
    <span class="link-avatar" data-has-image="${icon ? "true" : "false"}" data-has-error="false">
      ${icon ? `<img class="link-favicon" data-role="favicon" src="${icon}" alt="" loading="lazy" />` : ""}
      <span class="link-initial" aria-hidden="true">${escapeHtml(initial)}</span>
    </span>
  `;
}

function createEmptyStateMarkup(title, description) {
  return `
    <div class="empty-state">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function createCounterLabel(count, singular) {
  return `${count} ${count === 1 ? singular : `${singular}s`}`;
}

function filterSections(sections, searchQuery) {
  return sections
    .map((section) => {
      const visibleLinks = section.links.filter((link) => matchesQuery([section.title, link.title, link.url], searchQuery));
      const sectionMatches = matchesQuery([section.title], searchQuery);

      if (!searchQuery || sectionMatches || visibleLinks.length) {
        return {
          ...section,
          visibleLinks: searchQuery && !sectionMatches ? visibleLinks : section.links
        };
      }

      return null;
    })
    .filter(Boolean);
}

function filterProjects(projects, searchQuery) {
  return projects
    .map((project) => {
      const visibleLinks = project.links.filter((link) =>
        matchesQuery([project.title, project.description, link.title, link.url], searchQuery)
      );
      const projectMatches = matchesQuery([project.title, project.description], searchQuery);

      if (!searchQuery || projectMatches || visibleLinks.length) {
        return {
          ...project,
          visibleLinks: searchQuery && !projectMatches ? visibleLinks : project.links
        };
      }

      return null;
    })
    .filter(Boolean);
}

function matchesQuery(values, query) {
  if (!query) {
    return true;
  }

  return values.some((value) => String(value || "").toLowerCase().includes(query));
}

function openSectionForm(section = null) {
  state.dialog = {
    type: "section",
    sectionId: section?.id || null
  };

  ui.dialogKicker.textContent = section ? "Section" : "Nouvelle section";
  ui.dialogTitle.textContent = section ? "Renommer la section" : "Creer une section";
  ui.dialogSubmitButton.textContent = section ? "Mettre a jour" : "Creer";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="sectionTitle">Nom de la section</label>
      <input id="sectionTitle" name="title" type="text" maxlength="60" value="${escapeHtml(section?.title || "")}" required />
    </div>
  `;
  openDialog();
}

function openQuickLinkForm(link = null, preferredSectionId = null) {
  if (!state.data.sections.length) {
    showStatus("Creez d'abord une section avant d'ajouter un lien rapide.", "error");
    return;
  }

  state.dialog = {
    type: "quick-link",
    sectionId: preferredSectionId || findSectionIdByLinkId(link?.id) || state.data.sections[0].id,
    linkId: link?.id || null
  };

  const selectedSectionId = state.dialog.sectionId;
  ui.dialogKicker.textContent = link ? "Lien rapide" : "Nouveau lien";
  ui.dialogTitle.textContent = link ? "Modifier le lien rapide" : "Ajouter un lien rapide";
  ui.dialogSubmitButton.textContent = link ? "Mettre a jour" : "Ajouter";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="quickLinkTitle">Nom du lien</label>
      <input id="quickLinkTitle" name="title" type="text" maxlength="80" value="${escapeHtml(link?.title || "")}" required />
    </div>
    <div class="field">
      <label for="quickLinkUrl">URL</label>
      <input id="quickLinkUrl" name="url" type="text" placeholder="https://example.com" value="${escapeHtml(link?.url || "")}" required />
      <p class="form-hint">Si vous oubliez le protocole, https:// sera ajoute automatiquement.</p>
    </div>
    <div class="field">
      <label for="quickLinkSection">Section</label>
      <select id="quickLinkSection" name="sectionId" required>
        ${state.data.sections
          .map(
            (section) => `
              <option value="${section.id}" ${section.id === selectedSectionId ? "selected" : ""}>
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

function openProjectForm(project = null) {
  state.dialog = {
    type: "project",
    projectId: project?.id || null
  };

  ui.dialogKicker.textContent = project ? "Projet" : "Nouveau projet";
  ui.dialogTitle.textContent = project ? "Modifier le projet" : "Creer un projet";
  ui.dialogSubmitButton.textContent = project ? "Mettre a jour" : "Creer";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="projectTitle">Titre du projet</label>
      <input id="projectTitle" name="title" type="text" maxlength="80" value="${escapeHtml(project?.title || "")}" required />
    </div>
    <div class="field">
      <label for="projectDescription">Description</label>
      <textarea id="projectDescription" name="description" maxlength="220" placeholder="Ex. Liens utiles pour reprendre rapidement ce travail.">${escapeHtml(project?.description || "")}</textarea>
    </div>
  `;
  openDialog();
}

function openProjectLinkForm(link = null, preferredProjectId = null) {
  if (!state.data.projects.length) {
    showStatus("Creez d'abord un projet avant d'ajouter un lien de session.", "error");
    return;
  }

  state.dialog = {
    type: "project-link",
    projectId: preferredProjectId || findProjectIdByLinkId(link?.id) || state.data.projects[0].id,
    linkId: link?.id || null
  };

  const selectedProjectId = state.dialog.projectId;
  ui.dialogKicker.textContent = link ? "Lien de projet" : "Nouveau lien de projet";
  ui.dialogTitle.textContent = link ? "Modifier le lien du projet" : "Ajouter un lien au projet";
  ui.dialogSubmitButton.textContent = link ? "Mettre a jour" : "Ajouter";
  ui.dialogFields.innerHTML = `
    <div class="field">
      <label for="projectLinkTitle">Nom du lien</label>
      <input id="projectLinkTitle" name="title" type="text" maxlength="80" value="${escapeHtml(link?.title || "")}" required />
    </div>
    <div class="field">
      <label for="projectLinkUrl">URL</label>
      <input id="projectLinkUrl" name="url" type="text" placeholder="https://example.com" value="${escapeHtml(link?.url || "")}" required />
    </div>
    <div class="field">
      <label for="projectTarget">Projet</label>
      <select id="projectTarget" name="projectId" required>
        ${state.data.projects
          .map(
            (project) => `
              <option value="${project.id}" ${project.id === selectedProjectId ? "selected" : ""}>
                ${escapeHtml(project.title)}
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
  if (ui.formDialog.open) {
    ui.formDialog.close();
  }
  ui.formDialog.showModal();
  const firstInput = ui.dialogFields.querySelector("input, textarea, select");
  if (firstInput) {
    firstInput.focus();
    if (firstInput instanceof HTMLInputElement || firstInput instanceof HTMLTextAreaElement) {
      firstInput.select();
    }
  }
}

function closeDialog() {
  state.dialog = null;
  ui.formError.textContent = "";
  ui.entityForm.reset();
  if (ui.formDialog.open) {
    ui.formDialog.close();
  }
}

async function saveSectionFromForm(formData, sectionId) {
  const title = requireText(formData.get("title"), "Le nom de la section est obligatoire.");

  if (sectionId) {
    const section = getSectionById(sectionId);
    if (!section) {
      throw new Error("Section introuvable.");
    }

    section.title = title;
    await persistState("Section mise a jour.");
  } else {
    state.data.sections.push({
      id: createId("section"),
      title,
      links: []
    });
    await persistState("Section creee.");
  }

  closeDialog();
}

async function saveQuickLinkFromForm(formData, originalSectionId, linkId) {
  const title = requireText(formData.get("title"), "Le nom du lien est obligatoire.");
  const url = normalizeUrl(requireText(formData.get("url"), "L'URL du lien est obligatoire."));
  const targetSectionId = requireText(formData.get("sectionId"), "Choisissez une section.");
  const targetSection = getSectionById(targetSectionId);

  if (!targetSection) {
    throw new Error("Section introuvable.");
  }

  if (linkId) {
    const currentSection = getSectionById(originalSectionId);
    const link = currentSection?.links.find((item) => item.id === linkId);
    if (!currentSection || !link) {
      throw new Error("Lien introuvable.");
    }

    const updatedLink = {
      ...link,
      title,
      url,
      icon: getFaviconUrl(url)
    };

    currentSection.links = currentSection.links.filter((item) => item.id !== linkId);
    targetSection.links.push(updatedLink);
    await persistState("Lien rapide mis a jour.");
  } else {
    targetSection.links.push({
      id: createId("link"),
      title,
      url,
      icon: getFaviconUrl(url)
    });
    await persistState("Lien rapide ajoute.");
  }

  closeDialog();
}

async function saveProjectFromForm(formData, projectId) {
  const title = requireText(formData.get("title"), "Le titre du projet est obligatoire.");
  const description = normalizeOptionalText(formData.get("description"));

  if (projectId) {
    const project = getProjectById(projectId);
    if (!project) {
      throw new Error("Projet introuvable.");
    }

    project.title = title;
    project.description = description;
    await persistState("Projet mis a jour.");
  } else {
    state.data.projects.push({
      id: createId("project"),
      title,
      description,
      links: []
    });
    await persistState("Projet cree.");
  }

  closeDialog();
}

async function saveProjectLinkFromForm(formData, originalProjectId, linkId) {
  const title = requireText(formData.get("title"), "Le nom du lien est obligatoire.");
  const url = normalizeUrl(requireText(formData.get("url"), "L'URL du lien est obligatoire."));
  const targetProjectId = requireText(formData.get("projectId"), "Choisissez un projet.");
  const targetProject = getProjectById(targetProjectId);

  if (!targetProject) {
    throw new Error("Projet introuvable.");
  }

  if (linkId) {
    const currentProject = getProjectById(originalProjectId);
    const link = currentProject?.links.find((item) => item.id === linkId);
    if (!currentProject || !link) {
      throw new Error("Lien introuvable.");
    }

    const updatedLink = {
      ...link,
      title,
      url,
      icon: getFaviconUrl(url)
    };

    currentProject.links = currentProject.links.filter((item) => item.id !== linkId);
    targetProject.links.push(updatedLink);
    await persistState("Lien du projet mis a jour.");
  } else {
    targetProject.links.push({
      id: createId("project_link"),
      title,
      url,
      icon: getFaviconUrl(url)
    });
    await persistState("Lien ajoute au projet.");
  }

  closeDialog();
}

async function deleteSection(sectionId) {
  const section = getSectionById(sectionId);
  if (!section) {
    return;
  }

  if (!confirm(`Supprimer la section "${section.title}" et tous ses liens ?`)) {
    return;
  }

  state.data.sections = state.data.sections.filter((item) => item.id !== sectionId);
  await persistState("Section supprimee.");
}

async function deleteQuickLink(sectionId, linkId) {
  const section = getSectionById(sectionId);
  const link = getSectionLink(sectionId, linkId);
  if (!section || !link) {
    return;
  }

  if (!confirm(`Supprimer le lien "${link.title}" ?`)) {
    return;
  }

  section.links = section.links.filter((item) => item.id !== linkId);
  await persistState("Lien rapide supprime.");
}

async function deleteProject(projectId) {
  const project = getProjectById(projectId);
  if (!project) {
    return;
  }

  if (!confirm(`Supprimer le projet "${project.title}" ?`)) {
    return;
  }

  state.data.projects = state.data.projects.filter((item) => item.id !== projectId);
  await persistState("Projet supprime.");
}

async function deleteProjectLink(projectId, linkId) {
  const project = getProjectById(projectId);
  const link = getProjectLink(projectId, linkId);
  if (!project || !link) {
    return;
  }

  if (!confirm(`Supprimer le lien "${link.title}" de ce projet ?`)) {
    return;
  }

  project.links = project.links.filter((item) => item.id !== linkId);
  await persistState("Lien du projet supprime.");
}

function openQuickLink(sectionId, linkId) {
  const link = getSectionLink(sectionId, linkId);
  if (!link) {
    showStatus("Lien introuvable.", "error");
    return;
  }

  window.location.href = link.url;
}

function openProjectLink(projectId, linkId) {
  const link = getProjectLink(projectId, linkId);
  if (!link) {
    showStatus("Lien du projet introuvable.", "error");
    return;
  }

  chrome.tabs.create({ url: link.url });
}

async function openProject(projectId) {
  const project = getProjectById(projectId);
  if (!project) {
    showStatus("Projet introuvable.", "error");
    return;
  }

  if (!project.links.length) {
    showStatus("Ce projet ne contient encore aucun lien.", "error");
    return;
  }

  for (const link of project.links) {
    chrome.tabs.create({ url: link.url });
  }

  showStatus(`${project.links.length} onglet${project.links.length > 1 ? "s" : ""} ouvert${project.links.length > 1 ? "s" : ""}.`);
}

async function saveCurrentTabsToProject(projectId) {
  const project = getProjectById(projectId);
  if (!project) {
    showStatus("Projet introuvable.", "error");
    return;
  }

  const tabs = await queryCurrentWindowTabs();
  const existingUrls = new Set(project.links.map((link) => link.url));
  const newLinks = [];

  tabs.forEach((tab) => {
    if (!isSavableTab(tab?.url)) {
      return;
    }

    const normalizedUrl = normalizeUrl(tab.url);
    if (existingUrls.has(normalizedUrl)) {
      return;
    }

    existingUrls.add(normalizedUrl);
    newLinks.push({
      id: createId("project_link"),
      title: normalizeOptionalText(tab.title) || normalizedUrl,
      url: normalizedUrl,
      icon: getFaviconUrl(normalizedUrl)
    });
  });

  if (!newLinks.length) {
    showStatus("Aucun onglet valide nouveau a sauvegarder dans ce projet.", "error");
    return;
  }

  project.links.push(...newLinks);
  await persistState(`${newLinks.length} onglet${newLinks.length > 1 ? "s" : ""} ajoute${newLinks.length > 1 ? "s" : ""} au projet.`);
}

async function persistState(successMessage) {
  state.data = sanitizeData(state.data);
  await saveData(state.data);
  renderApp();
  showStatus(successMessage);
}

async function loadData() {
  const stored = await storageGet(STORAGE_KEY);

  if (!stored) {
    const initialData = cloneData(defaultData);
    await saveData(initialData);
    return initialData;
  }

  const sanitized = sanitizeData(stored);
  const shouldRestoreDefaults = !sanitized.sections.length && !sanitized.projects.length;

  if (shouldRestoreDefaults) {
    const restored = cloneData(defaultData);
    await saveData(restored);
    return restored;
  }

  if (JSON.stringify(sanitized) !== JSON.stringify(stored)) {
    await saveData(sanitized);
  }

  return sanitized;
}

async function saveData(data) {
  await storageSet(STORAGE_KEY, data);
}

function sanitizeData(input) {
  const data = input && typeof input === "object" ? input : {};
  return {
    sections: Array.isArray(data.sections)
      ? data.sections.map(sanitizeSection).filter(Boolean)
      : [],
    projects: Array.isArray(data.projects)
      ? data.projects.map(sanitizeProject).filter(Boolean)
      : []
  };
}

function sanitizeSection(section) {
  if (!section || typeof section !== "object") {
    return null;
  }

  const title = normalizeOptionalText(section.title);
  if (!title) {
    return null;
  }

  return {
    id: normalizeOptionalText(section.id) || createId("section"),
    title,
    links: Array.isArray(section.links)
      ? section.links.map((link) => sanitizeLink(link, "link")).filter(Boolean)
      : []
  };
}

function sanitizeProject(project) {
  if (!project || typeof project !== "object") {
    return null;
  }

  const title = normalizeOptionalText(project.title);
  if (!title) {
    return null;
  }

  return {
    id: normalizeOptionalText(project.id) || createId("project"),
    title,
    description: normalizeOptionalText(project.description),
    links: Array.isArray(project.links)
      ? project.links.map((link) => sanitizeLink(link, "project_link")).filter(Boolean)
      : []
  };
}

function sanitizeLink(link, prefix) {
  if (!link || typeof link !== "object") {
    return null;
  }

  const title = normalizeOptionalText(link.title);
  const rawUrl = normalizeOptionalText(link.url);
  if (!title || !rawUrl) {
    return null;
  }

  let normalizedUrl;

  try {
    normalizedUrl = normalizeUrl(rawUrl);
  } catch (error) {
    return null;
  }

  return {
    id: normalizeOptionalText(link.id) || createId(prefix),
    title,
    url: normalizedUrl,
    icon: normalizeOptionalText(link.icon) || getFaviconUrl(normalizedUrl)
  };
}

function getSectionById(sectionId) {
  return state.data.sections.find((section) => section.id === sectionId) || null;
}

function getProjectById(projectId) {
  return state.data.projects.find((project) => project.id === projectId) || null;
}

function getSectionLink(sectionId, linkId) {
  const section = getSectionById(sectionId);
  return section?.links.find((link) => link.id === linkId) || null;
}

function getProjectLink(projectId, linkId) {
  const project = getProjectById(projectId);
  return project?.links.find((link) => link.id === linkId) || null;
}

function findSectionIdByLinkId(linkId) {
  if (!linkId) {
    return null;
  }

  const section = state.data.sections.find((item) => item.links.some((link) => link.id === linkId));
  return section?.id || null;
}

function findProjectIdByLinkId(linkId) {
  if (!linkId) {
    return null;
  }

  const project = state.data.projects.find((item) => item.links.some((link) => link.id === linkId));
  return project?.id || null;
}

function requireText(value, errorMessage) {
  const text = normalizeOptionalText(value);
  if (!text) {
    throw new Error(errorMessage);
  }

  return text;
}

function normalizeOptionalText(value) {
  return String(value || "").trim();
}

function normalizeUrl(rawUrl) {
  let candidate = String(rawUrl || "").trim();
  if (!candidate) {
    throw new Error("L'URL est vide.");
  }

  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(candidate)) {
    candidate = `https://${candidate}`;
  }

  const parsed = new URL(candidate);

  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error("Utilisez une URL http:// ou https:// valide.");
  }

  return parsed.toString();
}

function getFaviconUrl(url) {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch (error) {
    return "";
  }
}

function formatHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url;
  }
}

function getInitials(value) {
  const parts = String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (!parts.length) {
    return "•";
  }

  return parts.map((part) => part[0].toUpperCase()).join("");
}

function isSavableTab(url) {
  const trimmedUrl = String(url || "").trim();
  if (!trimmedUrl) {
    return false;
  }

  if (
    trimmedUrl.startsWith("chrome://") ||
    trimmedUrl.startsWith("chrome-extension://") ||
    trimmedUrl.startsWith("edge://") ||
    trimmedUrl.startsWith("about:blank")
  ) {
    return false;
  }

  try {
    const parsed = new URL(trimmedUrl);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch (error) {
    return false;
  }
}

function updateGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    ui.greetingLabel.textContent = "Bonjour";
    return;
  }

  if (hour < 18) {
    ui.greetingLabel.textContent = "Bon apres-midi";
    return;
  }

  ui.greetingLabel.textContent = "Bonsoir";
}

function showStatus(message, tone = "neutral") {
  ui.statusMessage.textContent = message;
  ui.statusMessage.dataset.tone = tone;

  window.clearTimeout(state.statusTimer);
  state.statusTimer = window.setTimeout(() => {
    if (ui.statusMessage.textContent === message) {
      ui.statusMessage.textContent = "";
      ui.statusMessage.dataset.tone = "neutral";
    }
  }, 4200);
}

function createId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
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

function storageGet(key) {
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

function storageSet(key, value) {
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

function queryCurrentWindowTabs() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }

      resolve(Array.isArray(tabs) ? tabs : []);
    });
  });
}
