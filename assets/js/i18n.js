const LANGUAGE_STORAGE_KEY = "personal-card-language";

const dictionary = {
  ru: {
    "nav.skills": "Навыки",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.contacts": "Контакты",
    "actions.download": "Скачать CV",
    "hero.status": "Готов к сильным backend-командам",
    "hero.firstName": "Валерий",
    "hero.lastName": "Труфанов",
    "hero.role": "Java Backend Developer / Spring / PostgreSQL / CI/CD",
    "hero.lead": "Проектирую и развиваю Java/Spring Boot backend для корпоративных систем, где важны данные, роли, интеграции и стабильный production. Беру на себя REST API, PostgreSQL, ORM/SQL-оптимизацию, асинхронную обработку, CI/CD и разбор сложных инцидентов.",
    "hero.cta": "Обсудить задачу",
    "hero.secondary": "Что я делаю",
    "metrics.title": "Ключевые показатели",
    "metrics.exp": "года опыта: backend, mobile, IT",
    "metrics.backend": "года Java / Spring Boot",
    "metrics.data": "записей в отчетах без падений",
    "metrics.speed": "быстрее тяжелые отчеты и выборки",
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
    "projects.title": "Проектный фокус",
    "projects.label": "RAG-система для поиска Jira-задач",
    "projects.heading": "Поиск, который понимает контекст задач",
    "projects.text": "Собрал end-to-end решение: ETL из Jira REST API, индексация в Supabase Vector Store, ответы через LangChain и Ollama, мультимодальные запросы через Qwen 2.5 VL и OpenRouter, OCR и парсинг PDF/DOCX на Python.",
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
    "nav.projects": "Projects",
    "nav.contacts": "Contacts",
    "actions.download": "Download CV",
    "hero.status": "Ready for strong backend teams",
    "hero.firstName": "Valerii",
    "hero.lastName": "Trufanov",
    "hero.role": "Java Backend Developer / Spring / PostgreSQL / CI/CD",
    "hero.lead": "I design and evolve Java/Spring Boot backends for corporate systems where data, roles, integrations, and production stability matter. I work across REST APIs, PostgreSQL, SQL/ORM optimization, async processing, CI/CD, and complex incident analysis.",
    "hero.cta": "Discuss a task",
    "hero.secondary": "What I do",
    "metrics.title": "Key Metrics",
    "metrics.exp": "years across backend, mobile, and IT",
    "metrics.backend": "years with Java / Spring Boot",
    "metrics.data": "records in reports without crashes",
    "metrics.speed": "faster heavy reports and selections",
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
    "projects.title": "Project Focus",
    "projects.label": "RAG system for Jira task search",
    "projects.heading": "Search that understands task context",
    "projects.text": "Built an end-to-end solution: ETL from Jira REST API, indexing in Supabase Vector Store, answers through LangChain and Ollama, multimodal requests via Qwen 2.5 VL and OpenRouter, OCR, and PDF/DOCX parsing in Python.",
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
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) || root.lang || "ru";
  let transitionTimer = null;

  applyLanguage(saved);

  toggle?.addEventListener("click", () => {
    const nextLanguage = root.lang === "ru" ? "en" : "ru";
    switchLanguage(nextLanguage);
  });

  function switchLanguage(language) {
    window.clearTimeout(transitionTimer);
    root.classList.add("language-changing");

    transitionTimer = window.setTimeout(() => {
      applyLanguage(language);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      window.requestAnimationFrame(() => root.classList.remove("language-changing"));
    }, 150);
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
}

window.initI18n = initI18n;
