const LANGUAGE_STORAGE_KEY = "personal-card-language";
const LANGUAGE_FADE_OUT_MS = 120;
const LANGUAGE_LAYOUT_UNLOCK_MS = 420;
const LANGUAGE_LOCK_SELECTORS = [
  ".site-header",
  ".hero",
  "#focus",
  "#skills",
  "#experience",
  "#projects",
  "#contacts"
];

const dictionary = {
  ru: {
    "nav.skills": "Навыки",
    "nav.experience": "Опыт",
    "nav.projects": "Кейс",
    "nav.contacts": "Контакты",
    "actions.download": "Скачать CV",
    "hero.status": "Java Backend Developer",
    "hero.firstName": "Валерий",
    "hero.lastName": "Труфанов",
    "hero.role": "Java / Spring / PostgreSQL / Docker",
    "hero.lead": "Проектирую и развиваю Java/Spring Boot backend для корпоративных систем, где важны данные, роли, интеграции и стабильный production. Беру на себя REST API, PostgreSQL, ORM/SQL-оптимизацию, асинхронную обработку и разбор сложных инцидентов.",
    "hero.cta": "Обсудить задачу",
    "hero.secondary": "Что я делаю",
    "metrics.title": "Ключевые показатели",
    "metrics.concurrency.label": "EXPERIENCE",
    "metrics.concurrency.value": "3+",
    "metrics.concurrency.text": "года разработки",
    "metrics.performance.label": "SQL / ORM",
    "metrics.performance.text": "ускорение запросов",
    "metrics.access.label": "DATASETS",
    "metrics.access.value": "100k+",
    "metrics.access.text": "записей без OOM",
    "metrics.experience.label": "DELIVERY",
    "metrics.experience.text": "задач · 160+ high priority",
    "focus.title": "Инженерный фокус",
    "focus.solveTitle": "Что реально решаю",
    "focus.card1": "Сложные выборки и data layer",
    "focus.result1": "→ JOIN explosion, ограничения ORM, большие данные",
    "focus.card2": "Многопоточность и асинхронка",
    "focus.result2": "→ race conditions, очереди, нестабильные сценарии",
    "focus.card3": "Поиск и индексация",
    "focus.result3": "→ согласованность данных и работа Solr",
    "focus.card4": "Доступ и бизнес-логика",
    "focus.result4": "→ сложные права и backend-фильтрация",
    "system.title": "Состояние системы",
    "system.status": "status:",
    "system.online": "online",
    "system.build": "build:",
    "system.stack": "stack:",
    "system.uptime": "uptime:",
    "system.stable": "stable",
    "skills.title": "Стек и сильные стороны",
    "skills.backend.label": "Backend",
    "skills.backend.text": "Java 8/17, Spring Boot, Spring Framework 6, REST API",
    "skills.data.label": "Data",
    "skills.data.text": "PostgreSQL, Hibernate, Liquibase, оптимизация SQL/ORM",
    "skills.infra.label": "Infra",
    "skills.infra.text": "Docker, Tomcat, Jenkins, Groovy, Shell",
    "skills.search.label": "Search",
    "skills.search.text": "Apache Solr 7, схемы индексации, диагностика поиска",
    "skills.async.label": "Async",
    "skills.async.text": "JMS, ActiveMQ, event-driven подход, concurrency",
    "skills.quality.label": "Quality",
    "skills.quality.text": "JUnit, Mockito, SonarQube, Logback, MDC",
    "skills.mobile.label": "Mobile",
    "skills.mobile.text": "Kotlin, Android SDK, MVVM, Retrofit",
    "skills.ai.label": "AI/RAG",
    "skills.ai.text": "LangChain, Ollama, Supabase Vector, OpenRouter",
    "skills.ops.label": "IT Ops",
    "skills.ops.text": "Linux, Windows Server, Active Directory, DNS",
    "experience.title": "Опыт работы",
    "job1.period": "Май 2024 — настоящее время · Москва",
    "job1.item1": "Развивал backend корпоративной LMS: заменил полные выборки на безопасную пагинацию и стриминг, чтобы обрабатывать 100k+ записей без OOM и деградации.",
    "job1.item2": "Ускорял отчеты и тяжелые выборки до 50% за счет оптимизации SQL, ORM-логики и снижения лишних запросов к базе.",
    "job1.item3": "Закрывал production-инциденты в конкурентном доступе: thread-safe хранение, атомарные операции и разбор многопоточности.",
    "job1.item4": "Проектировал REST API вокруг ролевой модели, фильтрации и расширяемых прав; реализовал RolePermissionsService без изменений core.",
    "job1.item5": "Разбирал рассинхронизацию internal/external контуров, FK-зависимости, routing данных и сбои в JMS/ActiveMQ.",
    "job1.item6": "Дорабатывал CI/CD на Jenkins, Groovy и Shell; собирал окружения на Docker, Tomcat, Solr, Liquibase и PostgreSQL.",
    "job2.period": "Февраль 2023 — апрель 2024 · Новосибирск",
    "job2.item1": "Разрабатывал и поддерживал нативные Android-приложения на Kotlin с MVVM и Single Activity Architecture.",
    "job2.item2": "Повышал стабильность TCP/IP-взаимодействия: динамическая буферизация пакетов, handshake и стартовые сообщения.",
    "job2.item3": "Интегрировал REST API через Retrofit, асинхронные сценарии через Coroutines и LiveData.",
    "job2.item4": "Настроил GitLab CI, Firebase, Gradle flavors, релизные сборки APK/AAB и публикацию в Google Play.",
    "job2.item5": "Работал с Material Design 3, темной темой, локализацией, RTL-поддержкой, code review и техдокументацией.",
    "job3.period": "Октябрь 2021 — июнь 2022 · Томск",
    "job3.title": "НПП Томская электронная компания · IT-отдел",
    "job3.item1": "Внедрил IT-регламенты по информационной безопасности, резервному копированию, учетным записям и доступам.",
    "job3.item2": "Настроил YouTrack, интеграцию с корпоративной почтой, обработку инцидентов, SLA и приоритизацию тикетов.",
    "job3.item3": "Администрировал корпоративную сеть, рабочие станции, Linux/Windows-серверы, Active Directory, DNS и DHCP.",
    "job3.item4": "Организовал автоматические бэкапы, проверки восстановления, антивирусную защиту и мониторинг активности сети.",
    "projects.title": "Практический кейс",
    "case1.label": "SQL optimization",
    "case1.title": "Ускорил тяжелые отчеты до 50%",
    "case1.result": "→ меньше лишних JOIN, ORM-шума и запросов к БД",
    "case2.label": "Large datasets",
    "case2.title": "Обрабатывал 100k+ записей без падений",
    "case2.result": "→ пагинация и стриминг вместо полной загрузки в память",
    "case3.label": "RAG system",
    "case3.title": "Собрал AI-поиск по Jira",
    "case3.result": "→ 3 n8n workflow: чат, Jira ETL и импорт в vector store",
    "rag.label": "RAG system",
    "rag.title": "RAG-система для поиска по Jira",
    "rag.lead": "Автоматизировал поиск контекста по задачам, комментариям и вложениям Jira.",
    "rag.problem.label": "Контекст",
    "rag.problem.text": "→ поиск по задачам, комментариям и вложениям",
    "rag.scope.label": "Архитектура",
    "rag.scope.text": "→ ETL + векторная база + LLM",
    "rag.context.label": "Контекст",
    "rag.context.text": "Текст задач, комментарии и описания изображений собираются в единый поисковый слой.",
    "rag.value.label": "Результат",
    "rag.value.text": "→ убрал необходимость ручного анализа задач",
    "rag.step1": "Источник Jira",
    "rag.step1.text": "задачи, темы, комментарии",
    "rag.step2": "Контекст изображений",
    "rag.step2.text": "скриншоты → текст",
    "rag.step3": "Векторный индекс",
    "rag.step3.text": "фрагменты + embeddings",
    "rag.step4": "Поиск контекста",
    "rag.step4.text": "ближайшие Jira-задачи",
    "rag.step5": "Ответ AI",
    "rag.step5.text": "ответ из Jira-контекста",
    "rag.term1": "> source = jira",
    "rag.term2": "> output = contextual_answer",
    "education.label": "Образование",
    "education.title": "Томский политехнический университет",
    "education.text": "Бакалавр, программная инженерия · 2023",
    "format.title": "Формат работы",
    "format.text": "Полная занятость · офис · удаленно · гибрид · готов к переезду и командировкам",
    "contacts.title": "Контакты",
    "contacts.phone": "Телефон"
  },
  en: {
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Case",
    "nav.contacts": "Contacts",
    "actions.download": "Download CV",
    "hero.status": "Designing systems for real-world problems",
    "hero.firstName": "Valerii",
    "hero.lastName": "Trufanov",
    "hero.role": "Java / Spring / PostgreSQL / Docker",
    "hero.lead": "I design and evolve Java/Spring Boot backends for corporate systems where data, roles, integrations, and production stability matter. I work across REST APIs, PostgreSQL, SQL/ORM optimization, async processing, and complex incident analysis.",
    "hero.cta": "Discuss a task",
    "hero.secondary": "What I do",
    "metrics.title": "Key Metrics",
    "metrics.concurrency.label": "EXPERIENCE",
    "metrics.concurrency.value": "3+",
    "metrics.concurrency.text": "years of development",
    "metrics.performance.label": "SQL / ORM",
    "metrics.performance.text": "query speed-up",
    "metrics.access.label": "DATASETS",
    "metrics.access.value": "100k+",
    "metrics.access.text": "records without OOM",
    "metrics.experience.label": "DELIVERY",
    "metrics.experience.text": "tasks · 160+ high priority",
    "focus.title": "Engineering Focus",
    "focus.solveTitle": "What I actually solve",
    "focus.card1": "Complex selections and data layer",
    "focus.result1": "→ JOIN explosion, ORM limits, large data",
    "focus.card2": "Concurrency and async flows",
    "focus.result2": "→ race conditions, queues, unstable scenarios",
    "focus.card3": "Search and indexing",
    "focus.result3": "→ data consistency and Solr search",
    "focus.card4": "Access and business logic",
    "focus.result4": "→ complex permissions and backend filtering",
    "system.title": "System Status",
    "system.status": "status:",
    "system.online": "online",
    "system.build": "build:",
    "system.stack": "stack:",
    "system.uptime": "uptime:",
    "system.stable": "stable",
    "skills.title": "Stack and Strengths",
    "skills.backend.label": "Backend",
    "skills.backend.text": "Java 8/17, Spring Boot, Spring Framework 6, REST API",
    "skills.data.label": "Data",
    "skills.data.text": "PostgreSQL, Hibernate, Liquibase, SQL/ORM optimization",
    "skills.infra.label": "Infra",
    "skills.infra.text": "Docker, Tomcat, Jenkins, Groovy, Shell",
    "skills.search.label": "Search",
    "skills.search.text": "Apache Solr 7, indexing schemas, search diagnostics",
    "skills.async.label": "Async",
    "skills.async.text": "JMS, ActiveMQ, event-driven approach, concurrency",
    "skills.quality.label": "Quality",
    "skills.quality.text": "JUnit, Mockito, SonarQube, Logback, MDC",
    "skills.mobile.label": "Mobile",
    "skills.mobile.text": "Kotlin, Android SDK, MVVM, Retrofit",
    "skills.ai.label": "AI/RAG",
    "skills.ai.text": "LangChain, Ollama, Supabase Vector, OpenRouter",
    "skills.ops.label": "IT Ops",
    "skills.ops.text": "Linux, Windows Server, Active Directory, DNS",
    "experience.title": "Work Experience",
    "job1.period": "May 2024 — Present · Moscow",
    "job1.item1": "Developed a corporate LMS backend: replaced full in-memory selections with safe pagination and streaming to process 100k+ records without OOM or degradation.",
    "job1.item2": "Improved heavy reports and selections by up to 50% through SQL tuning, ORM optimization, and reducing unnecessary database calls.",
    "job1.item3": "Resolved production concurrency incidents with thread-safe storage, atomic operations, and multi-threading analysis.",
    "job1.item4": "Designed REST APIs around role-based access, filtering, and extensible permissions; implemented RolePermissionsService without changing core.",
    "job1.item5": "Investigated internal/external cluster desynchronization, FK dependencies, data routing, and JMS/ActiveMQ failures.",
    "job1.item6": "Improved CI/CD with Jenkins, Groovy, and Shell; built environments with Docker, Tomcat, Solr, Liquibase, and PostgreSQL.",
    "job2.period": "February 2023 — April 2024 · Novosibirsk",
    "job2.item1": "Developed and supported native Android applications in Kotlin with MVVM and Single Activity Architecture.",
    "job2.item2": "Improved TCP/IP stability with dynamic packet buffering, handshake handling, and initial message processing.",
    "job2.item3": "Integrated REST APIs with Retrofit and asynchronous flows with Coroutines and LiveData.",
    "job2.item4": "Configured GitLab CI, Firebase, Gradle flavors, APK/AAB release builds, and Google Play publishing.",
    "job2.item5": "Worked on Material Design 3 UI, dark theme, localization, RTL support, code review, and technical documentation.",
    "job3.period": "October 2021 — June 2022 · Tomsk",
    "job3.title": "Tomsk Electronic Company · IT Department",
    "job3.item1": "Introduced IT policies for information security, backups, account management, and access control.",
    "job3.item2": "Configured YouTrack, corporate email integration, incident handling, SLA tracking, and ticket prioritization.",
    "job3.item3": "Administered corporate network, workstations, Linux/Windows servers, Active Directory, DNS, and DHCP.",
    "job3.item4": "Organized automated backups, restore checks, antivirus protection, and network activity monitoring.",
    "projects.title": "Practical Case",
    "case1.label": "SQL optimization",
    "case1.title": "Made heavy reports up to 50% faster",
    "case1.result": "→ fewer redundant JOINs, ORM overhead, and database calls",
    "case2.label": "Large datasets",
    "case2.title": "Processed 100k+ records without crashes",
    "case2.result": "→ pagination and streaming instead of full memory loading",
    "case3.label": "RAG system",
    "case3.title": "Built AI search over Jira",
    "case3.result": "→ 3 n8n workflows: chat, Jira ETL, and vector-store import",
    "rag.label": "RAG system",
    "rag.title": "RAG system for Jira search",
    "rag.lead": "Automated context search across Jira tasks, comments, and attachments.",
    "rag.problem.label": "Context",
    "rag.problem.text": "→ search across tasks, comments, and attachments",
    "rag.scope.label": "Architecture",
    "rag.scope.text": "→ ETL + vector database + LLM",
    "rag.context.label": "Context",
    "rag.context.text": "Task text, comments, and image descriptions become one searchable layer.",
    "rag.value.label": "Outcome",
    "rag.value.text": "→ removed manual task analysis",
    "rag.step1": "Jira source",
    "rag.step1.text": "issues, summaries, comments",
    "rag.step2": "Image context",
    "rag.step2.text": "screenshots → text",
    "rag.step3": "Vector index",
    "rag.step3.text": "chunks + embeddings",
    "rag.step4": "Retrieval",
    "rag.step4.text": "nearest Jira tasks",
    "rag.step5": "AI answer",
    "rag.step5.text": "response from Jira context",
    "rag.term1": "> source = jira",
    "rag.term2": "> output = contextual_answer",
    "education.label": "Education",
    "education.title": "Tomsk Polytechnic University",
    "education.text": "Bachelor's degree, Software Engineering · 2023",
    "format.title": "Work Format",
    "format.text": "Full-time · office · remote · hybrid · open to relocation and business trips",
    "contacts.title": "Contacts",
    "contacts.phone": "Phone"
  }
};

function initI18n() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-lang-toggle]");
  const saved = readSavedLanguage(root.lang || "ru");
  let transitionTimer = null;
  let cleanupTimer = null;
  let watchdogTimer = null;
  let lockedLayout = [];

  applyLanguage(saved);

  toggle?.addEventListener("click", () => {
    const nextLanguage = root.lang === "ru" ? "en" : "ru";
    switchLanguage(nextLanguage);
  });

  function switchLanguage(language) {
    if (!dictionary[language] || root.lang === language) {
      return;
    }

    window.clearTimeout(transitionTimer);
    window.clearTimeout(cleanupTimer);
    window.clearTimeout(watchdogTimer);
    unlockLanguageLayout(lockedLayout);
    lockedLayout = lockLanguageLayout();

    root.classList.add("language-changing");
    root.classList.add("language-layout-changing");

    if (toggle) {
      toggle.disabled = true;
    }

    transitionTimer = window.setTimeout(() => {
      try {
        applyLanguage(language);
        saveLanguage(language);
      } catch (error) {
        console.error("Language switch failed", error);
      } finally {
        window.requestAnimationFrame(() => {
          resizeLockedLayout(lockedLayout);
          root.classList.remove("language-changing");

          cleanupTimer = window.setTimeout(() => {
            unlockLanguageLayout(lockedLayout);
            lockedLayout = [];
            root.classList.remove("language-layout-changing");

            if (toggle) {
              toggle.disabled = false;
            }
          }, LANGUAGE_LAYOUT_UNLOCK_MS);
        });
      }
    }, LANGUAGE_FADE_OUT_MS);

    watchdogTimer = window.setTimeout(() => {
      root.classList.remove("language-changing");
      root.classList.remove("language-layout-changing");
      unlockLanguageLayout(lockedLayout);
      lockedLayout = [];

      if (toggle) {
        toggle.disabled = false;
      }
    }, 1000);
  }

  function applyLanguage(language) {
    const phrases = dictionary[language] || dictionary.ru;
    root.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (phrases[key]) {
        node.textContent = phrases[key];
      }
    });

    if (toggle) {
      const nextLanguage = language === "ru" ? "EN" : "RU";
      toggle.textContent = nextLanguage;
      toggle.setAttribute("aria-label", language === "ru" ? "Switch to English" : "Переключить на русский");
    }
  }

  function readSavedLanguage(fallback) {
    try {
      return localStorage.getItem(LANGUAGE_STORAGE_KEY) || fallback;
    } catch {
      return fallback;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language still switches even when storage is unavailable.
    }
  }

  function lockLanguageLayout() {
    return LANGUAGE_LOCK_SELECTORS
      .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .filter((node, index, nodes) => nodes.indexOf(node) === index)
      .filter((node) => node.getClientRects().length > 0)
      .map((node) => {
        const rect = node.getBoundingClientRect();
        const previousHeight = node.style.height;
        const previousOverflow = node.style.overflow;

        node.classList.add("language-layout-lock");
        node.style.height = `${rect.height}px`;
        node.style.overflow = "hidden";

        return { node, previousHeight, previousOverflow };
      });
  }

  function resizeLockedLayout(items) {
    items.forEach(({ node }) => {
      const targetHeight = node.scrollHeight || node.getBoundingClientRect().height;
      node.style.height = `${targetHeight}px`;
    });
  }

  function unlockLanguageLayout(items) {
    items.forEach(({ node, previousHeight, previousOverflow }) => {
      node.classList.remove("language-layout-lock");
      node.style.height = previousHeight;
      node.style.overflow = previousOverflow;
    });
  }
}

window.initI18n = initI18n;
