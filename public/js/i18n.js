// Diccionario de traducciones ES / EN para el sitio de Edgardo Velásquez
const translations = {
    es: {
        'nav.about': 'Sobre Mí',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',
        'hero.subtitle': 'Desarrollador Full Stack con más de 10 años de experiencia creando soluciones tecnológicas robustas y escalables para empresas',
        'hero.cta': 'Solicitar mis servicios',
        'meta.title': 'Edgardo Velásquez | Desarrollador Fullstack',

        'about.title': 'Sobre Mí',
        'about.subtitle': 'Experto en Desarrollo de Soluciones Tecnológicas Empresariales',
        'about.p1': 'Con más de 10 años de experiencia en el ciclo completo de desarrollo de software, me especializo en crear aplicaciones web robustas y escalables utilizando tecnologías modernas tanto en frontend como en backend.',
        'about.p2': 'Mi formación en Ingeniería en Informática y mi experiencia trabajando en diversos sectores me han permitido desarrollar soluciones completas que resuelven problemas reales de negocio. Me destaco por mi capacidad para transformar requisitos complejos en arquitecturas eficientes y por entregar código limpio y bien estructurado.',
        'about.p3': 'Actualmente estoy enfocado en proveer servicios de desarrollo empresarial con arquitecturas basadas en microservicios, optimización de rendimiento y experiencias de usuario excepcionales que ayudan a mis clientes a alcanzar sus objetivos de negocio.',

        'skills.title': 'Expertise Técnico',
        'skills.databases': 'Bases de Datos & Servicios',

        'projects.title': 'Proyectos Personales',
        'projects.label': 'Proyecto personal',
        'projects.tcgmyl.desc': 'Juego de cartas coleccionables basado en <strong>Mitos y Leyendas</strong>, con frontend online y backend API propio.',
        'projects.tcgmyl.links': '<strong>Sitio:</strong> <a href="https://mylie-neon.vercel.app" target="_blank">mylie-neon.vercel.app</a> · <strong>Repo:</strong> <a href="https://github.com/evelaguti/tcgmyl" target="_blank">github.com/evelaguti/tcgmyl</a>',
        'projects.tcgmyl.tech': '<strong>Tecnologías:</strong> React + Vite + TypeScript + Tailwind CSS + Firebase + Node.js.',
        'projects.samair.desc': 'Aplicación móvil de respiración consciente y bienestar, con ejercicios guiados, audio, ciclos y pantallas de relajación.',
        'projects.samair.links': '<strong>Sitio:</strong> <a href="https://samair.vercel.app" target="_blank">samair.vercel.app</a> · <strong>Repo:</strong> <a href="https://github.com/evelaguti/samair" target="_blank">github.com/evelaguti/samair</a>',
        'projects.samair.tech': '<strong>Tecnologías:</strong> React Native + Expo SDK + TypeScript + NativeWind + Zustand + Expo AV.',

        'experience.title': 'Experiencia Profesional',

        'experience.diariomural.date': 'Agosto 2025 - Presente',
        'experience.diariomural.p1': 'Desarrollo de una plataforma para centralizar la agenda de actividades y eventos en la provincia de Curicó.',
        'experience.diariomural.p2': 'Implementación de un sistema de autenticación y almacenamiento con Firebase.',
        'experience.diariomural.p3': 'Creación de un panel de administración para la moderación de contenido.',
        'experience.diariomural.project': '<strong>Proyecto:</strong> Diario Mural Curicó - Una aplicación web para unificar y centralizar la agenda de eventos de la provincia de Curicó, fomentando la identidad cultural y la participación comunitaria.',
        'experience.diariomural.tech': '<strong>Tecnologías:</strong> React.js, Tailwind CSS, React-Bootstrap, Firebase.',

        'experience.infoxicados.date': 'Marzo 2023 - Julio 2025',
        'experience.infoxicados.p1': 'Despliegue y Desarrollo del Repositorio Digital para la Universidad Central.',
        'experience.infoxicados.p2': 'Integración de DOI y Handle Server en el Repositorio Digital.',
        'experience.infoxicados.project': '<strong>Proyecto:</strong> Universidad Central de Chile Repository - Desarrollo de un repositorio digital escalable con tecnologías como Java, Spring y PostgreSQL, enfocado en la gestión eficiente de contenido académico.',

        'experience.aureolab.date': 'Agosto 2021 - Marzo 2023',
        'experience.aureolab.p1': 'Liderazgo y Desarrollo de proyectos utilizando tecnologías como Go y Ruby on Rails.',
        'experience.aureolab.p2': 'Integración de Hubster, Webpay y Mailchimp para la plataforma Toliv.',
        'experience.aureolab.p3': 'Integración de OpenAI para la bolsa de trabajo Winit.',
        'experience.aureolab.project': '<strong>Proyecto:</strong> Toliv - Desarrollo de una plataforma integral con Go y Ruby on Rails, integrando múltiples servicios externos para optimizar la experiencia del usuario y la funcionalidad del negocio.',

        'experience.exe.date': 'Octubre 2017 - Marzo 2018',
        'experience.exe.p1': 'Migración de Ungasoft a Exedoc en la Dirección del Trabajo.',
        'experience.exe.p2': 'Desarrollo de Código Único para Exedoc en Fonasa.',
        'experience.exe.p3': 'Mejoras de rendimiento en bandejas de entrada utilizando Hibernate ORM.',
        'experience.exe.tech': '<strong>Tecnologías:</strong> Java 6, PostgreSQL 9.2, Seam 2.2.0, Hibernate 5.0, Maven 3.5.0, JAX-RS 2.0',

        'experience.acidlabs.date': 'Enero 2017 - Agosto 2017',
        'experience.acidlabs.p1': 'Desarrollo del módulo de beneficiarios para SCD utilizando Spring Boot.',
        'experience.acidlabs.project': '<strong>Proyecto:</strong> Microservices for SCD - Implementación de un sistema basado en microservicios para la gestión de beneficiarios, optimizando la escalabilidad y el rendimiento con Spring Boot y PostgreSQL.',
        'experience.acidlabs.tech': '<strong>Tecnologías:</strong> Java 8, PostgreSQL 9.2, Spring Boot, Maven, IntelliJ Ultimate.',

        'experience.aclti.date': 'Marzo 2015 - Diciembre 2016',
        'experience.aclti.p1': 'Desarrollo de una plataforma bancaria para gestionar flujos de trabajo de créditos hipotecarios.',
        'experience.aclti.tech': '<strong>Tecnologías:</strong> Java 1.7, Oracle SQL 11g, Spring Framework, JSF-PrimeFaces, WebLogic, Maven, Git.',

        'experience.siseek.date': 'Julio 2014 - Enero 2015',
        'experience.siseek.p1': 'Desarrollo de un sistema de trazabilidad para productos y especies (Sernapesca).',
        'experience.siseek.tech': '<strong>Tecnologías:</strong> HTML, JavaScript, Transact-SQL, Java, XML, JPA, Struts, Spring.',

        'contact.title': 'Solicita una Consulta',
        'contact.form.name': 'Nombre completo',
        'contact.form.email': 'Correo electrónico',
        'contact.form.type': 'Tipo de proyecto',
        'contact.form.message': 'Describa brevemente su proyecto o necesidad tecnológica',
        'contact.form.submit': 'Solicitar información',
        'contact.whatsapp.label': 'Contáctanos por WhatsApp',

        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Full Stack Developer with over 10 years of experience building robust, scalable technology solutions for businesses',
        'hero.cta': 'Request My Services',
        'meta.title': 'Edgardo Velásquez | Fullstack Developer',

        'about.title': 'About Me',
        'about.subtitle': 'Expert in Enterprise Technology Solutions Development',
        'about.p1': 'With over 10 years of experience across the full software development lifecycle, I specialize in building robust, scalable web applications using modern frontend and backend technologies.',
        'about.p2': "My background in Computer Engineering and experience across a variety of industries have allowed me to develop complete solutions that solve real business problems. I excel at turning complex requirements into efficient architectures and delivering clean, well-structured code.",
        'about.p3': "I'm currently focused on providing enterprise development services built on microservices architectures, performance optimization, and outstanding user experiences that help my clients reach their business goals.",

        'skills.title': 'Technical Expertise',
        'skills.databases': 'Databases & Services',

        'projects.title': 'Personal Projects',
        'projects.label': 'Personal project',
        'projects.tcgmyl.desc': 'A trading card game based on <strong>Mitos y Leyendas</strong>, with an online frontend and a custom API backend.',
        'projects.tcgmyl.links': '<strong>Site:</strong> <a href="https://mylie-neon.vercel.app" target="_blank">mylie-neon.vercel.app</a> · <strong>Repo:</strong> <a href="https://github.com/evelaguti/tcgmyl" target="_blank">github.com/evelaguti/tcgmyl</a>',
        'projects.tcgmyl.tech': '<strong>Technologies:</strong> React + Vite + TypeScript + Tailwind CSS + Firebase + Node.js.',
        'projects.samair.desc': 'A mindful breathing and wellness mobile app, featuring guided exercises, audio, breathing cycles, and relaxation screens.',
        'projects.samair.links': '<strong>Site:</strong> <a href="https://samair.vercel.app" target="_blank">samair.vercel.app</a> · <strong>Repo:</strong> <a href="https://github.com/evelaguti/samair" target="_blank">github.com/evelaguti/samair</a>',
        'projects.samair.tech': '<strong>Technologies:</strong> React Native + Expo SDK + TypeScript + NativeWind + Zustand + Expo AV.',

        'experience.title': 'Professional Experience',

        'experience.diariomural.date': 'August 2025 - Present',
        'experience.diariomural.p1': 'Development of a platform to centralize the schedule of activities and events across the Curicó province.',
        'experience.diariomural.p2': 'Implementation of an authentication and storage system with Firebase.',
        'experience.diariomural.p3': 'Creation of an admin panel for content moderation.',
        'experience.diariomural.project': '<strong>Project:</strong> Diario Mural Curicó – A web application that unifies and centralizes the event calendar for the Curicó province, fostering cultural identity and community participation.',
        'experience.diariomural.tech': '<strong>Technologies:</strong> React.js, Tailwind CSS, React-Bootstrap, Firebase.',

        'experience.infoxicados.date': 'March 2023 - July 2025',
        'experience.infoxicados.p1': 'Deployment and development of the Digital Repository for Universidad Central.',
        'experience.infoxicados.p2': 'Integration of DOI and Handle Server into the Digital Repository.',
        'experience.infoxicados.project': '<strong>Project:</strong> Universidad Central de Chile Repository – Development of a scalable digital repository using Java, Spring, and PostgreSQL, focused on efficient management of academic content.',

        'experience.aureolab.date': 'August 2021 - March 2023',
        'experience.aureolab.p1': 'Led development of projects using technologies such as Go and Ruby on Rails.',
        'experience.aureolab.p2': 'Integration of Hubster, Webpay, and Mailchimp for the Toliv platform.',
        'experience.aureolab.p3': 'Integration of OpenAI for the Winit job board.',
        'experience.aureolab.project': '<strong>Project:</strong> Toliv – Development of a comprehensive platform with Go and Ruby on Rails, integrating multiple external services to optimize the user experience and business functionality.',

        'experience.exe.date': 'October 2017 - March 2018',
        'experience.exe.p1': 'Migration from Ungasoft to Exedoc at the Dirección del Trabajo (Chilean Labor Directorate).',
        'experience.exe.p2': 'Development of the Unique Code feature for Exedoc at Fonasa (Chilean National Health Fund).',
        'experience.exe.p3': 'Performance improvements to inboxes using Hibernate ORM.',
        'experience.exe.tech': '<strong>Technologies:</strong> Java 6, PostgreSQL 9.2, Seam 2.2.0, Hibernate 5.0, Maven 3.5.0, JAX-RS 2.0',

        'experience.acidlabs.date': 'January 2017 - August 2017',
        'experience.acidlabs.p1': 'Development of the beneficiary management module for SCD using Spring Boot.',
        'experience.acidlabs.project': '<strong>Project:</strong> Microservices for SCD – Implementation of a microservices-based system for beneficiary management, optimizing scalability and performance with Spring Boot and PostgreSQL.',
        'experience.acidlabs.tech': '<strong>Technologies:</strong> Java 8, PostgreSQL 9.2, Spring Boot, Maven, IntelliJ Ultimate.',

        'experience.aclti.date': 'March 2015 - December 2016',
        'experience.aclti.p1': 'Development of a banking platform to manage mortgage loan workflows.',
        'experience.aclti.tech': '<strong>Technologies:</strong> Java 1.7, Oracle SQL 11g, Spring Framework, JSF-PrimeFaces, WebLogic, Maven, Git.',

        'experience.siseek.date': 'July 2014 - January 2015',
        'experience.siseek.p1': 'Development of a traceability system for products and species (Sernapesca).',
        'experience.siseek.tech': '<strong>Technologies:</strong> HTML, JavaScript, Transact-SQL, Java, XML, JPA, Struts, Spring.',

        'contact.title': 'Request a Consultation',
        'contact.form.name': 'Full name',
        'contact.form.email': 'Email address',
        'contact.form.type': 'Project type',
        'contact.form.message': 'Briefly describe your project or technology need',
        'contact.form.submit': 'Request Information',
        'contact.whatsapp.label': 'Contact us on WhatsApp',

        'footer.rights': 'All rights reserved.'
    }
};

function applyLanguage(lang, animate) {
    const dict = translations[lang] || translations.es;

    const swap = () => {
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        document.querySelectorAll('[data-href-es]').forEach((el) => {
            const href = lang === 'en' ? el.getAttribute('data-href-en') : el.getAttribute('data-href-es');
            if (href) el.setAttribute('href', href);
        });

        if (dict['meta.title']) {
            document.title = dict['meta.title'];
        }

        const toggle = document.getElementById('lang-toggle');
        if (toggle) toggle.setAttribute('data-active', lang);

        try {
            localStorage.setItem('lang', lang);
        } catch (e) {
            // localStorage no disponible; se ignora silenciosamente
        }
    };

    if (animate) {
        document.body.classList.add('lang-fade');
        window.setTimeout(() => {
            swap();
            requestAnimationFrame(() => document.body.classList.remove('lang-fade'));
        }, 180);
    } else {
        swap();
    }
}

function getInitialLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem('lang');
    } catch (e) {
        saved = null;
    }
    if (saved === 'es' || saved === 'en') return saved;

    const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    return browserLang.startsWith('en') ? 'en' : 'es';
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getInitialLanguage(), false);

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';
            applyLanguage(current === 'es' ? 'en' : 'es', true);
        });
    }
});
