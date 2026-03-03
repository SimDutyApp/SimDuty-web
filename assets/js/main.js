const translations = {
  "en": {
    "nav_roadmap": "Roadmap",
    "nav_discord": "Discord",
    "nav_toggle": "Toggle menu",
    "nav_features": "Features",
    "nav_install": "Installation",
    "nav_download": "Download Alpha",
    "nav_download_soon": "Download (Soon)",
    "nav_download_discord": "Download (Discord)",
    "badge_alpha": "Alpha Version Available",
    "hero_title": "Simulation Without Borders",
    "hero_desc": "The definitive <strong>Desktop App</strong> for Euro Truck Simulator 2 and American Truck Simulator. Whether on Brazilian highways, European autobahns, or American interstates, SimDuty brings <strong>professional compliance</strong> to your setup.",
    "btn_download": "Coming Soon",
    "btn_coming_soon": "Coming Soon",
    "btn_discord_download": "Get it on Discord",
    "discord_cta": "Join our Discord for updates, alpha-tester invites, and #downloads.",
    "feat_1_title": "Actual Road Laws",
    "feat_1_desc": "The game's fatigue bar is fake. We replaced it with real government regulations: <strong>EU Tachograph</strong>, <strong>US DOT</strong>, and <strong>Brazil's Driver Law</strong>. It's tougher, but it's authentic.",
    "feat_2_title": "Every Region Covered",
    "feat_2_desc": "Hauling across borders? We've got you. SimDuty includes complete rule sets for Europe and the Americas. You focus on driving, we handle the legal stuff.",
    "feat_3_title": "Second Screen Ready",
    "feat_3_desc": "Run SimDuty on a <strong>Tablet</strong> or <strong>Smartphone</strong> layout. Keep your main screen clear for the road and use your second monitor as a dedicated logistics terminal.",
    "feat_4_title": "Know Your Profit",
    "feat_4_desc": "Track every expense: <strong>fuel, tolls, fines</strong>. See exactly how much that speeding ticket or extra fuel stop cost you. Real numbers, not guesses.",
    "hos_title": "Smart HOS",
    "hos_desc_1": "<strong>No more math. No more fines.</strong>",
    "hos_desc_2": "SimDuty manages your <strong>Drive & Rest</strong> times automatically. Just drive until the clock turns red, then rest. It's that simple.",
    "hos_feat_1": "✅ Real Rules (US, EU, Brazil, Canada)",
    "hos_feat_2": "✅ Auto-Detects Rest Stops",
    "hos_feat_3": "✅ Prevents Fatigue Fines",
    "hos_rule_us_ca": "🇺🇸 USA & 🇨🇦 Canada",
    "hos_rule_eu_br": "🇪🇺 Europe & 🇧🇷 Brazil",
    "hos_rule_1": "Federal Rules",
    "hos_rule_2": "Drive & Shift Limits",
    "hos_rule_3": "Mandatory Breaks",
    "hos_rule_4": "EU Regulations",
    "hos_rule_5": "Brazil (Lei 13.103)",
    "hos_rule_6": "Rest Requirements",
    "hos_note": "Simulates <strong>Drive Left, Shift Left, and Cycle Left</strong> in real-time.",
    "hos_sim_hint": "Running Simulation...",
    "hos_gauge_label": "DRIVE LEFT",
    "hos_status": "ON DUTY",
    "hos_rest_btn": "TAKE BREAK",
    "gallery_title": "See it in Action",
    "gallery_tablet": "Tablet Mode",
    "gallery_mobile": "Smartphone Mode",
    "gallery_cap_home": "Home Screen",
    "gallery_cap_hos": "HOS Dashboard",
    "gallery_cap_econ": "Economy & Logistics",
    "gallery_cap_settings": "Settings",
    "gallery_cap_report": "Detailed Trip Reports",
    "dl_ready_title": "One App. Infinite Roads",
    "dl_ready_desc": "Downloads are available in our Discord #downloads channel. Includes the Desktop App and plugins for ATS/ETS2.",
    "dl_btn_zip": "Download .ZIP (Alpha)",
    "dl_btn_soon": "Coming Soon",
    "dl_btn_discord": "Get it on Discord",
    "dl_compat": "Compatible with Windows 10/11 x64",
    "verify_title": "Security Validation (SHA256)",
    "verify_loading": "Loading hash...",
    "verify_instr": "Verify with `Get-FileHash` (PowerShell)",
    "verify_btn_copy": "Copy Hash",
    "verify_btn_copied": "Copied!",
    "inst_title": "Quick Setup",
    "req_title": "Requirements",
    "req_1": "Windows 10/11 x64.",
    "req_2": "No .NET install required (self-contained build).",
    "req_3": "ATS/ETS2 installed to use plugins.",
    "req_4": "Game fatigue must be disabled",
    "inst_step_1_title": "Extract",
    "inst_step_1_desc": "Unzip SimDuty-Release.zip to a permanent location (e.g., Documents/SimDuty).",
    "inst_step_2_title": "Install Plugins",
    "inst_step_2_desc": "Copy the DLL files from the plugins folder into your game's installation directory.",
    "inst_step_3_title": "Drive",
    "inst_step_3_desc": "Launch SimDuty.exe first, then start your game. The system connects automatically when you enter the truck cabin.",
    "footer_rights": "&copy; 2026 SimDuty Project. Proprietary software. All rights reserved.<br>Not affiliated with SCS Software.",
    "footer_roadmap": "Roadmap",
    "footer_discord": "Discord",
    "footer_bug": "Report Issue",
    "roadmap_title": "Development Roadmap",
    "roadmap_next_btn": "What's next?",
    "roadmap_next_desc": "Phase 6 is focused on beta access and deep economy integrations.",
    "roadmap_next_item_1": "Economy sync with game data and bonuses.",
    "roadmap_next_item_2": "Localhost access for iOS/Android browsers.",
    "roadmap_next_item_3": "Dispatch assistant with WhatsApp-style chat.",
    "roadmap_highlights_title": "Development Highlights",
    "roadmap_highlight_1": "Vehicle Lock v2 with PIN, biometrics, and speed gates.",
    "roadmap_highlight_2": "Dispatch Hub with personas, badges, and inline HOS extensions.",
    "roadmap_highlight_3": "Compliance panel with records, audit log, and contestation flow.",
    "roadmap_highlight_4": "Unified notification pipeline with persona toasts.",
    "roadmap_highlight_5": "Runtime i18n (EN/PT/ES/RU) plus responsive tablet/mobile layouts.",
    "roadmap_highlight_6": "Intelligent topmost for fullscreen ATS/ETS2.",
    "phase_beta": "Beta",
    "phase_1_tag": "Phase 1",
    "phase_1_title": "Atomic Foundation",
    "phase_1_desc": "Versioned saves, atomic writes, and resilient persistence.",
    "phase_2_tag": "Phase 2",
    "phase_2_title": "Persistent Trips",
    "phase_2_desc": "Trip checkpoints, reload safety, and odometer monotonicity.",
    "phase_3_tag": "Phase 3",
    "phase_3_title": "Audit & Diagnostics",
    "phase_3_desc": "Audit log with hash chaining and debug counters.",
    "phase_4_tag": "Phase 4",
    "phase_4_title": "Policies & Stability",
    "phase_4_desc": "Modular HOS policies and runtime switching.",
    "phase_5_tag": "Phase 5",
    "phase_5_title": "GUI & UX",
    "phase_5_desc": "UI polish, alerts, and remaining UX tasks.",
    "phase_6_tag": "Phase 6",
    "phase_6_title": "Beta & Integrations",
    "phase_6_desc": "Economy sync, localhost access, and dispatch assistant.",
    "status_done": "Completed",
    "status_wip": "In Progress",
    "status_planned": "Planned",
    "vers_title": "Adaptable Interface",
    "vers_desc": "SimDuty is a <strong>Windows Application</strong> that adapts to your needs. Switch between Desktop, Tablet, and Smartphone simulation modes instantly.",
    "vers_feat_1": "Native Windows Performance",
    "vers_feat_2": "Responsive Layouts",
    "vers_feat_3": "Device Simulation Modes"
  },
  "pt-br": {
    "nav_roadmap": "Roadmap",
    "nav_discord": "Discord",
    "nav_toggle": "Abrir menu",
    "nav_features": "Funcionalidades",
    "nav_install": "Instalação",
    "nav_download": "Download Alpha",
    "nav_download_soon": "Download (Em Breve)",
    "nav_download_discord": "Download (Discord)",
    "badge_alpha": "Versão Alpha Disponível",
    "hero_title": "Simulação Sem Fronteras",
    "hero_desc": "O <strong>App Desktop</strong> definitivo para Euro Truck Simulator 2 e American Truck Simulator. Seja nas rodovias brasileiras, autobahns europeias ou interestaduais americanas, o SimDuty traz <strong>conformidade profissional</strong> para o seu setup.",
    "btn_download": "Em Breve",
    "btn_coming_soon": "Em Breve",
    "btn_discord_download": "Baixar no Discord",
    "discord_cta": "Entre no Discord para novidades, convites de alpha-tester e #downloads.",
    "feat_1_title": "Leis de Verdade",
    "feat_1_desc": "A barra de fadiga do jogo é falsa. Substituímos por regulamentações reais: <strong>Tacógrafo Europeu</strong>, <strong>DOT Americano</strong> e <strong>Lei do Motorista (BR)</strong>. É mais difícil, mas é autêntico.",
    "feat_2_title": "Todas as Regiões",
    "feat_2_desc": "Carga internacional? Estamos prontos. O SimDuty inclui regras completas para Europa e Américas. Você foca na direção, nós cuidamos da parte legal.",
    "feat_3_title": "Segunda Tela",
    "feat_3_desc": "Rode o SimDuty em layout <strong>Tablet</strong> ou <strong>Smartphone</strong>. Mantenha sua tela principal livre para a estrada e use seu segundo monitor como terminal logístico dedicado.",
    "feat_4_title": "Saiba Seu Lucro",
    "feat_4_desc": "Rastreie cada gasto: <strong>combustível, pedágios, multas</strong>. Veja exatamente quanto aquela multa ou parada extra custou. Números reais, não chutes.",
    "hos_title": "HOS Inteligente",
    "hos_desc_1": "<strong>Sem contas. Sem multas.</strong>",
    "hos_desc_2": "O SimDuty gerencia seus tempos de <strong>Direção e Descanso</strong>. Dirija até o relógio ficar vermelho, depois descanse. Simples assim.",
    "hos_feat_1": "✅ Regras Reais (EUA, UE, Brasil, Canadá)",
    "hos_feat_2": "✅ Detecta Paradas Automaticamente",
    "hos_feat_3": "✅ Evita Multas por Fadiga",
    "hos_rule_us_ca": "🇺🇸 EUA & 🇨🇦 Canadá",
    "hos_rule_eu_br": "🇪🇺 Europa & 🇧🇷 Brasil",
    "hos_rule_1": "Regras Federais",
    "hos_rule_2": "Limites de Direção e Turno",
    "hos_rule_3": "Pausas Obrigatórias",
    "hos_rule_4": "Regulamentos da UE",
    "hos_rule_5": "Brasil (Lei 13.103)",
    "hos_rule_6": "Requisitos de Descanso",
    "hos_note": "Simula <strong>Direção, Turno e Ciclo</strong> em tempo real.",
    "hos_sim_hint": "Rodando Simulação...",
    "hos_gauge_label": "DIREÇÃO RESTANTE",
    "hos_status": "EM SERVIÇO",
    "hos_rest_btn": "DESCANSAR",
    "gallery_title": "Veja em Ação",
    "gallery_tablet": "Modo Tablet",
    "gallery_mobile": "Modo Smartphone",
    "gallery_cap_home": "Tela Inicial",
    "gallery_cap_hos": "Painel HOS",
    "gallery_cap_econ": "Economia e Logística",
    "gallery_cap_settings": "Configurações",
    "gallery_cap_report": "Relatórios Detalhados",
    "dl_ready_title": "Um App. Estradas Infinitas",
    "dl_ready_desc": "Os downloads estão disponíveis no canal #downloads do Discord. Inclui o App Desktop e plugins para ATS/ETS2.",
    "dl_btn_zip": "Download .ZIP (Alpha)",
    "dl_btn_soon": "Em Breve",
    "dl_btn_discord": "Baixar no Discord",
    "dl_compat": "Compatível com Windows 10/11 x64",
    "verify_title": "Validação de Segurança (SHA256)",
    "verify_loading": "Carregando hash...",
    "verify_instr": "Verifique com `Get-FileHash` (PowerShell)",
    "verify_btn_copy": "Copiar Hash",
    "verify_btn_copied": "Copiado!",
    "inst_title": "Configuração Rápida",
    "req_title": "Requisitos",
    "req_1": "Windows 10/11 x64.",
    "req_2": "Nao precisa instalar .NET (build self-contained).",
    "req_3": "ATS/ETS2 instalado para usar os plugins.",
    "req_4": "A fadiga do jogo deve estar desabilitada",
    "inst_step_1_title": "Extrair",
    "inst_step_1_desc": "Descompacte o SimDuty-Release.zip em um local permanente (ex: Documentos/SimDuty).",
    "inst_step_2_title": "Instalar Plugins",
    "inst_step_2_desc": "Copie os arquivos DLL da pasta plugins para o diretório de instalação do jogo.",
    "inst_step_3_title": "Dirigir",
    "inst_step_3_desc": "Inicie o SimDuty.exe primeiro, depois abra seu jogo. O sistema conecta automaticamente quando você entrar na cabine.",
    "footer_rights": "&copy; 2026 SimDuty Project. Software proprietário. Todos os direitos reservados.<br>Não afiliado à SCS Software.",
    "footer_roadmap": "Roadmap",
    "footer_discord": "Discord",
    "footer_bug": "Reportar Problema",
    "roadmap_title": "Roadmap de Desenvolvimento",
    "roadmap_next_btn": "O que vem a seguir?",
    "roadmap_next_desc": "A Fase 6 foca em beta e integracoes profundas de economia.",
    "roadmap_next_item_1": "Economia integrada com dados do jogo e bonificacoes.",
    "roadmap_next_item_2": "Acesso via localhost para iOS/Android no navegador.",
    "roadmap_next_item_3": "Assistente de despacho estilo WhatsApp.",
    "roadmap_highlights_title": "Destaques do Desenvolvimento",
    "roadmap_highlight_1": "Vehicle Lock v2 com PIN, biometria e gates de velocidade.",
    "roadmap_highlight_2": "Dispatch Hub com personas, badges e extensões HOS inline.",
    "roadmap_highlight_3": "Compliance com registros, audit log e fluxo de contestação.",
    "roadmap_highlight_4": "Pipeline unificado de notificações com toasts de persona.",
    "roadmap_highlight_5": "i18n em runtime (EN/PT/ES/RU) e layouts responsivos tablet/mobile.",
    "roadmap_highlight_6": "Topmost inteligente para fullscreen ATS/ETS2.",
    "phase_beta": "Beta",
    "phase_1_tag": "Fase 1",
    "phase_1_title": "Fundação Atômica",
    "phase_1_desc": "Saves versionados, escrita atômica e persistência resiliente.",
    "phase_2_tag": "Fase 2",
    "phase_2_title": "Viagens Persistentes",
    "phase_2_desc": "Checkpoints de viagem, segurança em reload e monotonicidade do odômetro.",
    "phase_3_tag": "Fase 3",
    "phase_3_title": "Auditoria & Diagnóstico",
    "phase_3_desc": "Audit log com hash chaining e contadores de debug.",
    "phase_4_tag": "Fase 4",
    "phase_4_title": "Políticas & Estabilidade",
    "phase_4_desc": "Políticas HOS modulares e troca em runtime.",
    "phase_5_tag": "Fase 5",
    "phase_5_title": "GUI & UX",
    "phase_5_desc": "Ajustes de UI, alertas e pendências de UX.",
    "phase_6_tag": "Fase 6",
    "phase_6_title": "Beta & Integrações",
    "phase_6_desc": "Economia integrada, acesso localhost e assistente de despacho.",
    "status_done": "Concluído",
    "status_wip": "Em Andamento",
    "status_planned": "Planejado",
    "vers_title": "Interface Adaptável",
    "vers_desc": "O SimDuty é uma <strong>Aplicação Windows</strong> que se adapta ao seu estilo. Alterne entre os modos Desktop, Tablet e Smartphone simulados instantaneamente.",
    "vers_feat_1": "Desempenho Nativo do Windows",
    "vers_feat_2": "Layouts Responsivos",
    "vers_feat_3": "Modos de Simulação de Dispositivo"
  },
  "es": {
    "nav_roadmap": "Roadmap",
    "nav_discord": "Discord",
    "nav_toggle": "Abrir menu",
    "nav_features": "Características",
    "nav_install": "Instalación",
    "nav_download": "Descargar Alpha",
    "nav_download_soon": "Descargar (Pronto)",
    "nav_download_discord": "Descargar (Discord)",
    "badge_alpha": "Versión Alpha Disponible",
    "hero_title": "Simulación Sin Fronteras",
    "hero_desc": "La <strong>Aplicación de Escritorio</strong> definitiva para Euro Truck Simulator 2 y American Truck Simulator. Ya sea en carreteras brasileñas, autobahns europeias o interestatales americanas, SimDuty trae <strong>conformidad profesional</strong> a tu setup.",
    "btn_download": "Pronto",
    "btn_coming_soon": "Pronto",
    "btn_discord_download": "Descargar en Discord",
    "discord_cta": "Únete al Discord para novedades, invitaciones de alpha-tester y #downloads.",
    "feat_1_title": "Leyes Reales",
    "feat_1_desc": "La barra de fatiga del juego es falsa. La reemplazamos con regulaciones gubernamentales reales: <strong>Tacógrafo UE</strong>, <strong>DOT de EE. UU.</strong> y <strong>Ley del Conductor (BR)</strong>. Es más difícil, pero es auténtico.",
    "feat_2_title": "Todas las Regiones",
    "feat_2_desc": "¿Transporte internacional? Te tenemos cubierto. SimDuty incluye reglas completas para Europa y las Américas. Tú te enfocas en conducir, nosotros manejamos lo legal.",
    "feat_3_title": "Segunda Pantalla",
    "feat_3_desc": "Ejecuta SimDuty en diseño <strong>Tablet</strong> o <strong>Smartphone</strong>. Mantén tu pantalla principal despejada para la carretera y usa tu segundo monitor como terminal logístico dedicado.",
    "feat_4_title": "Conoce Tu Ganancia",
    "feat_4_desc": "Rastrea cada gasto: <strong>combustible, peajes, multas</strong>. Ve exactamente cuánto te costó esa multa o parada extra. Números reales, no estimaciones.",
    "hos_title": "HOS Inteligente",
    "hos_desc_1": "<strong>Sin cálculos. Sin multas.</strong>",
    "hos_desc_2": "SimDuty gestiona tus tiempos de <strong>Conducción y Descanso</strong>. Conduce hasta que el reloj se ponga rojo, luego descansa. Así de simple.",
    "hos_feat_1": "✅ Reglas Reales (EEUU, UE, Brasil, Canadá)",
    "hos_feat_2": "✅ Detecta Paradas Automáticamente",
    "hos_feat_3": "✅ Evita Multas por Fatiga",
    "hos_rule_us_ca": "🇺🇸 EEUU & 🇨🇦 Canadá",
    "hos_rule_eu_br": "🇪🇺 Europa & 🇧🇷 Brasil",
    "hos_rule_1": "Reglas Federales",
    "hos_rule_2": "Límites de Conducción y Turno",
    "hos_rule_3": "Pausas Obligatorias",
    "hos_rule_4": "Regulaciones de la UE",
    "hos_rule_5": "Brasil (Lei 13.103)",
    "hos_rule_6": "Requisitos de Descanso",
    "hos_note": "Simula <strong>Conducción, Turno y Ciclo</strong> en tiempo real.",
    "hos_sim_hint": "Ejecutando Simulación...",
    "hos_gauge_label": "CONDUCCIÓN RESTANTE",
    "hos_status": "EN SERVICIO",
    "hos_rest_btn": "DESCANSAR",
    "gallery_title": "Ver en Acción",
    "gallery_tablet": "Modo Tablet",
    "gallery_mobile": "Modo Smartphone",
    "gallery_cap_home": "Pantalla de Inicio",
    "gallery_cap_hos": "Tablero HOS",
    "gallery_cap_econ": "Economía y Logística",
    "gallery_cap_settings": "Configuración",
    "gallery_cap_report": "Informes Detallados",
    "dl_ready_title": "Una App. Caminos Infinitos",
    "dl_ready_desc": "Las descargas están disponibles en el canal #downloads de Discord. Incluye la App de escritorio y plugins para ATS/ETS2.",
    "dl_btn_zip": "Descargar .ZIP (Alpha)",
    "dl_btn_soon": "Pronto",
    "dl_btn_discord": "Descargar en Discord",
    "dl_compat": "Compatible con Windows 10/11 x64",
    "verify_title": "Validación de Seguridad (SHA256)",
    "verify_loading": "Cargando hash...",
    "verify_instr": "Verificar con `Get-FileHash` (PowerShell)",
    "verify_btn_copy": "Copiar Hash",
    "verify_btn_copied": "¡Copiado!",
    "inst_title": "Configuración Rápida",
    "req_title": "Requisitos",
    "req_1": "Windows 10/11 x64.",
    "req_2": "No se requiere instalar .NET (build self-contained).",
    "req_3": "ATS/ETS2 instalado para usar los plugins.",
    "req_4": "La fatiga del juego debe estar deshabilitada",
    "inst_step_1_title": "Extraer",
    "inst_step_1_desc": "Descomprime SimDuty-Release.zip en una ubicación permanente (ej: Documentos/SimDuty).",
    "inst_step_2_title": "Instalar Plugins",
    "inst_step_2_desc": "Copia los archivos DLL de la carpeta plugins al directorio de instalación del juego.",
    "inst_step_3_title": "Conducir",
    "inst_step_3_desc": "Inicia SimDuty.exe primero, luego abre tu juego. El sistema se conecta automáticamente cuando entras en la cabina.",
    "footer_rights": "&copy; 2026 Proyecto SimDuty. Software propietario. Todos los derechos reservados.<br>No afiliado a SCS Software.",
    "footer_roadmap": "Roadmap",
    "footer_discord": "Discord",
    "footer_bug": "Reportar Problema",
    "roadmap_title": "Hoja de Ruta",
    "roadmap_next_btn": "¿Que viene?",
    "roadmap_next_desc": "La Fase 6 se enfoca en beta e integraciones profundas de economia.",
    "roadmap_next_item_1": "Economia integrada con datos del juego y bonificaciones.",
    "roadmap_next_item_2": "Acceso localhost para iOS/Android en el navegador.",
    "roadmap_next_item_3": "Asistente de despacho estilo WhatsApp.",
    "roadmap_highlights_title": "Destacados del Desarrollo",
    "roadmap_highlight_1": "Vehicle Lock v2 con PIN, biometría y gates de velocidad.",
    "roadmap_highlight_2": "Dispatch Hub con personas, badges y extensiones HOS inline.",
    "roadmap_highlight_3": "Compliance con registros, audit log y flujo de contestación.",
    "roadmap_highlight_4": "Pipeline unificado de notificaciones con toasts de persona.",
    "roadmap_highlight_5": "i18n en runtime (EN/PT/ES/RU) y layouts responsivos tablet/mobile.",
    "roadmap_highlight_6": "Topmost inteligente para fullscreen ATS/ETS2.",
    "phase_beta": "Beta",
    "phase_1_tag": "Fase 1",
    "phase_1_title": "Fundación Atómica",
    "phase_1_desc": "Guardados versionados, escritura atómica y persistencia resiliente.",
    "phase_2_tag": "Fase 2",
    "phase_2_title": "Viajes Persistentes",
    "phase_2_desc": "Checkpoints de viaje, seguridad ante recargas y monotonicidad del odómetro.",
    "phase_3_tag": "Fase 3",
    "phase_3_title": "Auditoría y Diagnóstico",
    "phase_3_desc": "Audit log con hash chaining y contadores de debug.",
    "phase_4_tag": "Fase 4",
    "phase_4_title": "Políticas y Estabilidad",
    "phase_4_desc": "Políticas HOS modulares y cambio en tiempo de ejecución.",
    "phase_5_tag": "Fase 5",
    "phase_5_title": "GUI y UX",
    "phase_5_desc": "Ajustes de UI, alertas y tareas pendientes de UX.",
    "phase_6_tag": "Fase 6",
    "phase_6_title": "Beta e Integraciones",
    "phase_6_desc": "Economía integrada, acceso localhost y asistente de despacho.",
    "status_done": "Completado",
    "status_wip": "En Progreso",
    "status_planned": "Planeado",
    "vers_title": "Interfaz Adaptable",
    "vers_desc": "SimDuty es una <strong>Aplicación de Windows</strong> que se adapta a ti. Cambia entre los modos de simulación de Escritorio, Tableta y Smartphone al instante.",
    "vers_feat_1": "Rendimiento Nativo de Windows",
    "vers_feat_2": "Diseños Responsivos",
    "vers_feat_3": "Modos de Simulación de Dispositivos"
  },
  "ru": {
    "nav_roadmap": "План развития",
    "nav_discord": "Discord",
    "nav_toggle": "Открыть меню",
    "nav_features": "Функции",
    "nav_install": "Установка",
    "nav_download": "Скачать Alpha",
    "nav_download_soon": "Скачать (Скоро)",
    "nav_download_discord": "Скачать (Discord)",
    "badge_alpha": "Доступна Alpha-версия",
    "hero_title": "Симуляция Без Границ",
    "hero_desc": "Окончательное <strong>Приложение для Windows</strong> для Euro Truck Simulator 2 и American Truck Simulator. Будь то на дорогах Бразилии, автобанах Европы или в Америке, SimDuty привносит <strong>профессиональное соответствие</strong> в ваш сетап.",
    "btn_download": "Скоро",
    "btn_coming_soon": "Скоро",
    "btn_discord_download": "Скачать через Discord",
    "discord_cta": "Присоединяйтесь к Discord за новостями, инвайтами для alpha‑tester и #downloads.",
    "feat_1_title": "Настоящие Законы",
    "feat_1_desc": "Полоска усталости в игре фальшивая. Мы заменили её настоящими государственными правилами: <strong>Тахограф ЕС</strong>, <strong>DOT США</strong> и <strong>Закон водителя (BR)</strong>. Сложнее, но аутентично.",
    "feat_2_title": "Все Регионы",
    "feat_2_desc": "Международные перевозки? Мы готовы. SimDuty включает полные правила для Европы и Америки. Вы фокусируетесь на вождении, мы занимаемся юридической частью.",
    "feat_3_title": "Второй Экран",
    "feat_3_desc": "Запустите SimDuty в режиме <strong>Планшет</strong> или <strong>Смартфон</strong>. Держите основной экран чистым для дороги и используйте второй монитор как выделенный логистический терминал.",
    "feat_4_title": "Знайте Прибыль",
    "feat_4_desc": "Отслеживайте каждый расход: <strong>топливо, сборы, штрафы</strong>. Смотрите точно, сколько вам стоил тот штраф или дополнительная остановка. Реальные цифры, не догадки.",
    "hos_title": "Умный HOS",
    "hos_desc_1": "<strong>Без математики. Без штрафов.</strong>",
    "hos_desc_2": "SimDuty управляет временем <strong>Вождения и Отдыха</strong>. Просто ведите, пока часы не станут красными, затем отдыхайте.",
    "hos_feat_1": "✅ Реальные Правила (США, ЕС, Бразилия)",
    "hos_feat_2": "✅ Авто-Определение Остановок",
    "hos_feat_3": "✅ Предотвращает Штрафы",
    "hos_rule_us_ca": "🇺🇸 США и 🇨🇦 Канада",
    "hos_rule_eu_br": "🇪🇺 Европа и 🇧🇷 Бразилия",
    "hos_rule_1": "Федеральные Правила",
    "hos_rule_2": "Лимиты Вождения и Смены",
    "hos_rule_3": "Обязательные Перерывы",
    "hos_rule_4": "Регламенты ЕС",
    "hos_rule_5": "Бразилия (Lei 13.103)",
    "hos_rule_6": "Требования к Отдыху",
    "hos_note": "Симулирует <strong>Вождение, Смену и Цикл</strong> в реальном времени.",
    "hos_sim_hint": "Запуск Симуляции...",
    "hos_gauge_label": "ОСТАЛОСЬ ВОЖДЕНИЯ",
    "hos_status": "НА СМЕНЕ",
    "hos_rest_btn": "ОТДЫХАТЬ",
    "gallery_title": "Смотрите в Действии",
    "gallery_tablet": "Режим Планшета",
    "gallery_mobile": "Режим Смартфона",
    "gallery_cap_home": "Главный Экран",
    "gallery_cap_hos": "Панель HOS",
    "gallery_cap_econ": "Экономика и Логистика",
    "gallery_cap_settings": "Настройки",
    "gallery_cap_report": "Детальные Отчеты",
    "dl_ready_title": "Одно Приложение. Бесконечные Дороги",
    "dl_ready_desc": "Загрузки доступны в канале Discord #downloads. Включает настольное приложение и плагины для ATS/ETS2.",
    "dl_btn_zip": "Скачать .ZIP (Alpha)",
    "dl_btn_soon": "Скоро",
    "dl_btn_discord": "Скачать через Discord",
    "dl_compat": "Совместимо с Windows 10/11 x64",
    "verify_title": "Проверка безопасности (SHA256)",
    "verify_loading": "Загрузка хэша...",
    "verify_instr": "Проверить через `Get-FileHash` (PowerShell)",
    "verify_btn_copy": "Копировать Хэш",
    "verify_btn_copied": "Скопировано!",
    "inst_title": "Быстрая Настройка",
    "req_title": "Требования",
    "req_1": "Windows 10/11 x64.",
    "req_2": "Установка .NET не требуется (самодостаточная сборка).",
    "req_3": "ATS/ETS2 установлен для использования плагинов.",
    "req_4": "Усталость в игре должна быть отключена",
    "inst_step_1_title": "Извлечь",
    "inst_step_1_desc": "Распакуйте SimDuty-Release.zip в постоянное место (например, Документы/SimDuty).",
    "inst_step_2_title": "Установить Плагины",
    "inst_step_2_desc": "Скопируйте DLL-файлы из папки plugins в каталог установки игры.",
    "inst_step_3_title": "Водить",
    "inst_step_3_desc": "Сначала запустите SimDuty.exe, затем откройте игру. Система подключится автоматически при входе в кабину.",
    "footer_rights": "&copy; 2026 SimDuty Project. Проприетарное ПО. Все права защищены.<br>Не связано с SCS Software.",
    "footer_roadmap": "План развития",
    "footer_discord": "Discord",
    "footer_bug": "Сообщить об ошибке",
    "roadmap_title": "План Развития",
    "roadmap_next_btn": "Что дальше?",
    "roadmap_next_desc": "Фаза 6: бета и глубокая интеграция экономики.",
    "roadmap_next_item_1": "Интеграция экономики с данными игры и бонусами.",
    "roadmap_next_item_2": "Доступ через localhost для iOS/Android в браузере.",
    "roadmap_next_item_3": "Диспетчер-ассистент в стиле WhatsApp.",
    "roadmap_highlights_title": "Ключевые обновления разработки",
    "roadmap_highlight_1": "Vehicle Lock v2 с PIN, биометрией и скоростными гейтами.",
    "roadmap_highlight_2": "Dispatch Hub с персонами, бейджами и HOS-расширениями в чате.",
    "roadmap_highlight_3": "Compliance-панель с записями, audit log и оспариванием.",
    "roadmap_highlight_4": "Единый pipeline уведомлений с персона-тостами.",
    "roadmap_highlight_5": "i18n в рантайме (EN/PT/ES/RU) и адаптивные макеты tablet/mobile.",
    "roadmap_highlight_6": "Интеллектуальный topmost для полноэкранных ATS/ETS2.",
    "phase_beta": "Бета",
    "phase_1_tag": "Фаза 1",
    "phase_1_title": "Атомная основа",
    "phase_1_desc": "Версионированные сохранения, атомарная запись и устойчивое состояние.",
    "phase_2_tag": "Фаза 2",
    "phase_2_title": "Постоянные рейсы",
    "phase_2_desc": "Контрольные точки рейса, защита от перезагрузок и монотонность одометра.",
    "phase_3_tag": "Фаза 3",
    "phase_3_title": "Аудит и диагностика",
    "phase_3_desc": "Audit log с хеш-цепочкой и счетчиками отладки.",
    "phase_4_tag": "Фаза 4",
    "phase_4_title": "Политики и стабильность",
    "phase_4_desc": "Модульные HOS-политики и переключение в рантайме.",
    "phase_5_tag": "Фаза 5",
    "phase_5_title": "GUI и UX",
    "phase_5_desc": "Полировка UI, алерты и оставшиеся UX-задачи.",
    "phase_6_tag": "Фаза 6",
    "phase_6_title": "Бета и интеграции",
    "phase_6_desc": "Интеграция экономики, localhost-доступ и диспетчер-ассистент.",
    "status_done": "Завершено",
    "status_wip": "В Процессе",
    "status_planned": "Запланировано",
    "vers_title": "Адаптивный Интерфейс",
    "vers_desc": "SimDuty — это <strong>Приложение для Windows</strong>. Мгновенно переключайтесь между режимами симуляции рабочего стола, планшета и смартфона.",
    "vers_feat_1": "Нативная Производительность Windows",
    "vers_feat_2": "Адаптивные Макеты",
    "vers_feat_3": "Режимы Симуляции Устройств"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const hashElement = document.getElementById('sha256-hash');
  const copyBtn = document.getElementById('copy-hash-btn');
  const hashUrl = 'releases/latest/SHA256SUMS.txt';
  const metaUrl = 'latest.json';
  const downloadBtn = document.getElementById('download-zip');
  const langSelect = document.getElementById('language-selector');
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');

  // --- I18n Logic ---
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en'; // fallback

    document.documentElement.lang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Save preference
    localStorage.setItem('simduty_lang', lang);
  }

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Detect language
  const savedLang = localStorage.getItem('simduty_lang');
  const browserLang = navigator.language.split('-')[0].toLowerCase();

  // Check if browser lang is supported, otherwise default to 'en'
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'en');

  // Update selector and set text
  if (langSelect) {
    langSelect.value = initialLang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(initialLang);


  // --- SHA256 Logic ---
  async function fetchReleaseMeta() {
    try {
      const response = await fetch(metaUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error('Meta fetch failed');

      const data = await response.json();

      if (downloadBtn && data.url) {
        // downloadBtn.href = data.url; 
      }

      if (hashElement && data.sha256) {
        hashElement.textContent = data.sha256;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  async function fetchHash() {
    try {
      const response = await fetch(hashUrl);
      if (!response.ok) throw new Error('Fetch failed');

      const text = await response.text();
      const hash = text.split(/\s+/)[0];

      if (hashElement) {
        hashElement.textContent = hash;
      }
    } catch (error) {
      console.warn('SHA256 fetch error:', error);
      if (hashElement) {
        hashElement.textContent = 'Error loading hash (check manually)';
        hashElement.style.color = 'var(--status-critical)';
      }
    }
  }

  if (copyBtn && hashElement) {
    copyBtn.addEventListener('click', () => {
      const hash = hashElement.textContent;
      if (!hash) return;

      const currentLang = document.documentElement.lang || 'en';
      const originalText = translations[currentLang]['verify_btn_copy'];
      const copiedText = translations[currentLang]['verify_btn_copied'];

      navigator.clipboard.writeText(hash).then(() => {
        copyBtn.textContent = copiedText;
        setTimeout(() => {
          // Reset text based on CURRENT language
          const activeLang = document.documentElement.lang || 'en';
          copyBtn.textContent = translations[activeLang]['verify_btn_copy'];
        }, 2000);
      }).catch(err => console.error(err));
    });
  }

  fetchReleaseMeta().then((ok) => {
    if (!ok) {
      fetchHash();
    }
  });

  // --- Carousel Logic ---
  const track = document.querySelector('.carousel-track');
  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;

    // Arrange slides next to each other (not strictly needed with flex, but good for explicit width calc if complex)
    // Styles handle flex layout, so we just translate percentage

    const updateCarousel = (index) => {
      const amountToMove = '-' + (index * 100) + '%';
      track.style.transform = 'translateX(' + amountToMove + ')';

      // Update dots
      dots.forEach(dot => dot.classList.remove('current-slide'));
      if (dots[index]) dots[index].classList.add('current-slide');

      currentIndex = index;
    };

    const nextSlide = () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      updateCarousel(newIndex);
    };

    const prevSlide = () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      updateCarousel(newIndex);
    };

    // Event Listeners
    if (nextButton) nextButton.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    if (prevButton) prevButton.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateCarousel(index);
        resetInterval();
      });
    });

    // Auto-play
    let autoPlayInterval = setInterval(nextSlide, 5000);

    const resetInterval = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(nextSlide, 5000);
    };
  }

  // --- HOS Clock Simulation (Realistic 3-Step Cycle) ---
  const hosTimer = document.getElementById('hos-timer');
  const hosProgress = document.getElementById('hos-progress');
  const hosDot = document.getElementById('hos-dot');
  const hosRestBtn = document.getElementById('hos-rest-btn');
  const hosStatusText = document.getElementById('hos-status-text');
  const hosLabel = document.getElementById('hos-label');

  if (hosTimer && hosProgress && hosRestBtn && hosLabel) {
    const totalTimeMinutes = 11 * 60; // used for ring calcs mostly
    const radius = 90;
    const circumference = 2 * Math.PI * radius;

    // Config
    let simState = 'PHASE_1_DRIVE'; // PHASE_1_DRIVE, PHASE_1_END, PHASE_2_DRIVE, PHASE_2_END, PHASE_3_RESET
    let currentMinutes = 300; // Start: 5h "Until Break" (Visual: ~40% full on 12h scale)
    let loopInterval = null;

    // Init
    hosProgress.style.strokeDasharray = `${circumference} ${circumference}`;

    const setVisuals = (minutes, color, label, status) => {
      // Text
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      hosTimer.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;

      // Ring
      // ALWAYS map relative to 12h (720m) for consistent "Clock Face" logic (1h = 30deg)
      const totalMax = 720;
      const percent = Math.min(minutes, totalMax) / totalMax;

      const offset = circumference - (percent * circumference);
      hosProgress.style.strokeDashoffset = offset;
      hosProgress.style.stroke = color;

      // Dot
      hosDot.style.backgroundColor = color;
      hosDot.style.boxShadow = `0 0 10px ${color}`;

      // Labels
      if (label) hosLabel.innerText = label;
      if (status) hosStatusText.innerText = status;
    };

    // Helper to control speed dynamically
    const setSpeed = (speed) => {
      clearInterval(loopInterval);
      loopInterval = setInterval(updateSimulation, speed);
    };

    // Cycle Logic
    const updateSimulation = () => {
      // --- PHASE 1: Driving until 8h Break ---
      if (simState === 'PHASE_1_DRIVE') {
        currentMinutes -= 5;
        // Visuals
        setVisuals(currentMinutes, '#00e5ff', 'NEXT BREAK', 'DRIVING'); // Cyan: "Next Break" is friendlier than "Until"

        // Transition
        if (currentMinutes <= 30) {
          setSpeed(200); // Slow down for drama
          setVisuals(currentMinutes, '#ff3d00', 'NEXT BREAK', 'NEED REST'); // Red: "Need Rest" is clear

          // Show Button
          hosRestBtn.innerText = "TAKE BREAK"; // Simple
          hosRestBtn.classList.add('visible');
          hosRestBtn.onclick = () => { triggerPhase2(); };

          if (currentMinutes <= 0) {
            currentMinutes = 0;
            simState = 'PHASE_1_END'; // Stop countdown
            // Auto-advance
            setTimeout(triggerPhase2, 2000);
          }
        } else {
          setSpeed(50); // Fast normal driving
        }
      }

      // --- PHASE 2: Driving until Limit (11h) ---
      else if (simState === 'PHASE_2_DRIVE') {
        currentMinutes -= 5;
        setVisuals(currentMinutes, '#00e5ff', 'DAY LEFT', 'DRIVING'); // "Day Left" implies shift end

        if (currentMinutes <= 60) {
          setSpeed(200); // Slow down near end of shift
          setVisuals(currentMinutes, '#ffea00', 'DAY LEFT', 'GO HOME'); // Yellow: "Go Home" is fun/friendly

          if (currentMinutes <= 0) {
            currentMinutes = 0;
            simState = 'PHASE_2_END';
            setVisuals(0, '#ff3d00', 'DAY LEFT', 'SLEEP TIME'); // Red: "Sleep Time"

            // Show Button
            hosRestBtn.innerText = "FINISH DAY";
            hosRestBtn.classList.add('visible');
            hosRestBtn.onclick = () => { triggerReset(); };
            // Auto-advance
            setTimeout(triggerReset, 2000);
          }
        } else {
          setSpeed(50); // Fast normal driving
        }
      }
    };

    const triggerPhase2 = () => {
      if (simState === 'TRANSITION') return; // Prevent double trigger

      // 1. Hide Button
      hosRestBtn.classList.remove('visible');
      hosStatusText.innerText = 'COFFEE...'; // Friendly status
      simState = 'TRANSITION';

      // 2. Wait & Switch
      setTimeout(() => {
        // "Add Hours": Switch to Drive Left context
        // Say we drove 8h, so 3h left of 11h limit.
        currentMinutes = 180; // 3h
        simState = 'PHASE_2_DRIVE';
        setSpeed(50); // Restore speed
      }, 1500);
    };

    const triggerReset = () => {
      if (simState === 'TRANSITION') return;

      hosRestBtn.classList.remove('visible');
      hosStatusText.innerText = 'ZZZ...'; // Sleeping
      simState = 'TRANSITION';

      setTimeout(() => {
        // Full Reset Visuals first
        currentMinutes = 660; // 11h Full (not 12h, because 11h is the limit)
        setVisuals(currentMinutes, '#00e5ff', 'DAY LEFT', 'FRESH');

        // Hold for a moment to let user see the full gauge
        setTimeout(() => {
          currentMinutes = 300; // Reset to loop start (5h)
          simState = 'PHASE_1_DRIVE';
          setSpeed(50);
        }, 3000); // 3s hold on full charge
      }, 2000); // 2s sleeping
    };

    // Start
    loopInterval = setInterval(updateSimulation, 50);
  }
});
