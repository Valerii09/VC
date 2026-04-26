const STORAGE_KEY = "personal-card-language";

const dictionary = {
  ru: {
    "nav.skills": "Навыки",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.contacts": "Контакты",
    "hero.status": "Открыт к сильным backend-проектам",
    "hero.firstName": "Валерий",
    "hero.lastName": "Труфанов",
    "hero.role": "Java Backend Developer / Spring / PostgreSQL / CI/CD",
    "hero.lead": "Разрабатываю backend-сервисы на Java и Spring Boot для корпоративных систем с большими объемами данных. Основной фокус: REST API, PostgreSQL, ORM/SQL-оптимизация, асинхронная обработка, CI/CD и устойчивость production-сервисов.",
    "hero.cta": "Обсудить задачу",
    "hero.secondary": "Что я делаю",
    "metrics.title": "Ключевые показатели",
    "metrics.exp": "года коммерческого опыта",
    "metrics.data": "записей в выборках без OOM",
    "metrics.speed": "сокращение времени отчетов",
    "metrics.lang": "английский для рабочих задач",
    "skills.title": "Стек и компетенции",
    "experience.title": "Опыт работы",
    "job1.period": "Май 2024 — настоящее время · Москва",
    "job1.item1": "Развивал backend корпоративной LMS-системы для выборок более 100k записей: внедрил безопасную пагинацию и стриминг вместо полной загрузки в память.",
    "job1.item2": "Оптимизировал SQL-запросы и ORM-логику, снижал количество запросов к БД и сокращал время отчетов и выборок до 50%.",
    "job1.item3": "Устранял production-проблемы конкурентного доступа: thread-safe хранение, атомарные операции, разбор многопоточности.",
    "job1.item4": "Разрабатывал REST API с учетом ролевой модели, фильтрации и расширяемой системы прав; реализовал RolePermissionsService без изменения core.",
    "job1.item5": "Диагностировал кластерную рассинхронизацию internal/external контуров, FK-зависимости, routing и проблемы JMS/ActiveMQ.",
    "job1.item6": "Дорабатывал CI/CD на Jenkins, Groovy и Shell; работал с Docker, docker-compose, Tomcat, Solr, Liquibase и PostgreSQL.",
    "job2.period": "Февраль 2023 — апрель 2024 · Новосибирск",
    "job2.item1": "Разрабатывал и поддерживал нативные Android-приложения на Kotlin с MVVM и Single Activity Architecture.",
    "job2.item2": "Улучшал TCP/IP взаимодействие: динамическая буферизация пакетов, стабильный handshake и начальные сообщения.",
    "job2.item3": "Интегрировал REST API через Retrofit, асинхронные запросы через Coroutines и LiveData.",
    "job2.item4": "Настроил GitLab CI, Firebase, Gradle flavors, релизные сборки APK/AAB и публикацию в Google Play.",
    "job2.item5": "Делал Material Design 3 UI, темную тему, локализацию, RTL-поддержку, code review и техдокументацию.",
    "job3.period": "Октябрь 2021 — июнь 2022 · Томск",
    "job3.title": "НПП Томская электронная компания · IT-отдел",
    "job3.item1": "Внедрил IT-регламенты: информационная безопасность, резервное копирование, учетные записи и доступы.",
    "job3.item2": "Настроил YouTrack, интеграцию с корпоративной почтой, обработку инцидентов, контроль SLA и приоритизацию тикетов.",
    "job3.item3": "Администрировал корпоративную сеть, рабочие станции, Linux/Windows-серверы, Active Directory, DNS и DHCP.",
    "job3.item4": "Организовал автоматические бэкапы, проверку восстановлений, антивирусную защиту и мониторинг активности в сети.",
    "projects.title": "Проектный фокус",
    "projects.label": "RAG-система для поиска Jira-задач",
    "projects.heading": "От ETL до пользовательского интерфейса",
    "projects.text": "Реализовал end-to-end решение от загрузки данных до пользовательского интерфейса: ETL из Jira REST API, индексация в Supabase Vector Store, генерация ответов через LangChain и Ollama, мультимодальные запросы через Qwen 2.5 VL и OpenRouter, OCR и парсинг PDF/DOCX на Python.",
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
    "hero.status": "Open to strong backend projects",
    "hero.firstName": "Valerii",
    "hero.lastName": "Trufanov",
    "hero.role": "Java Backend Developer / Spring / PostgreSQL / CI/CD",
    "hero.lead": "I build Java and Spring Boot backend services for corporate systems with large data volumes. My main focus is REST APIs, PostgreSQL, ORM/SQL optimization, asynchronous processing, CI/CD, and production service stability.",
    "hero.cta": "Discuss a task",
    "hero.secondary": "What I do",
    "metrics.title": "Key metrics",
    "metrics.exp": "years of commercial experience",
    "metrics.data": "records in selections without OOM",
    "metrics.speed": "shorter report runtime",
    "metrics.lang": "English for work communication",
    "skills.title": "Stack and Competencies",
    "experience.title": "Work Experience",
    "job1.period": "May 2024 — Present · Moscow",
    "job1.item1": "Developed backend features for a corporate LMS processing selections over 100k records, replacing full in-memory loading with safe pagination and streaming.",
    "job1.item2": "Optimized SQL queries and ORM logic, reduced database query count, and cut report and selection runtime by up to 50%.",
    "job1.item3": "Fixed production concurrency issues: thread-safe storage, atomic operations, and multi-threading analysis.",
    "job1.item4": "Built REST APIs around role-based access, filtering, and extensible permissions; implemented RolePermissionsService without changing core.",
    "job1.item5": "Diagnosed cluster desynchronization between internal/external circuits, FK dependencies, routing, and JMS/ActiveMQ issues.",
    "job1.item6": "Improved CI/CD with Jenkins, Groovy and Shell; worked with Docker, docker-compose, Tomcat, Solr, Liquibase and PostgreSQL.",
    "job2.period": "February 2023 — April 2024 · Novosibirsk",
    "job2.item1": "Developed and supported native Android applications in Kotlin using MVVM and Single Activity Architecture.",
    "job2.item2": "Improved TCP/IP interaction with dynamic packet buffering, stable handshake, and initial messages.",
    "job2.item3": "Integrated REST APIs through Retrofit and asynchronous requests through Coroutines and LiveData.",
    "job2.item4": "Set up GitLab CI, Firebase, Gradle flavors, APK/AAB release builds, and Google Play publishing.",
    "job2.item5": "Built Material Design 3 UI, dark theme, localization, RTL support, code review, and technical documentation.",
    "job3.period": "October 2021 — June 2022 · Tomsk",
    "job3.title": "Tomsk Electronic Company · IT Department",
    "job3.item1": "Introduced IT regulations covering information security, backups, account management, and access control.",
    "job3.item2": "Configured YouTrack, corporate mail integration, incident processing, SLA control, and ticket prioritization.",
    "job3.item3": "Administered corporate network, workstations, Linux/Windows servers, Active Directory, DNS and DHCP.",
    "job3.item4": "Organized automated backups, restore checks, antivirus protection, and network activity monitoring.",
    "projects.title": "Project Focus",
    "projects.label": "RAG system for Jira task search",
    "projects.heading": "From ETL to user interface",
    "projects.text": "Implemented an end-to-end solution from data loading to user interface: ETL from Jira REST API, indexing in Supabase Vector Store, answer generation with LangChain and Ollama, multimodal requests through Qwen 2.5 VL and OpenRouter, OCR and PDF/DOCX parsing in Python.",
    "education.label": "Education",
    "education.title": "Tomsk Polytechnic University",
    "education.text": "Bachelor's degree, Software Engineering · 2023",
    "format.title": "Work format",
    "format.text": "Full-time · office · remote · hybrid · open to relocation and business trips",
    "contacts.title": "Contacts",
    "contacts.phone": "Phone"
  }
};

export function initI18n() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-lang-toggle]");
  const saved = localStorage.getItem(STORAGE_KEY) || root.lang || "ru";

  applyLanguage(saved);

  toggle?.addEventListener("click", () => {
    const nextLanguage = root.lang === "ru" ? "en" : "ru";
    applyLanguage(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
  });

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
      toggle.textContent = language.toUpperCase();
    }
  }
}
