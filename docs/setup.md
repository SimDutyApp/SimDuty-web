[PAGE]
slug: docs/setup.html
menu_label: Setup Guide
status: MVP

[METADATA]
title: SimDuty Setup Guide
short_summary: Configure driver profile, ATS/ETS2 save roots, HOS policy behavior, window options, support tools, keybinds, and audio.
user_goal: Leave SimDuty fully configured for daily operations with stable telemetry, correct HOS behavior, and reliable delivery synchronization.

[SEO]
meta_title: SimDuty Setup Guide - Configuration and Custom Delivery
meta_description: Learn how to configure ATS/ETS2 roots, HOS Auto vs Manual mode, notifications, topmost behavior, support bundle tools, and keybinds.

[LANGUAGE_SCOPE]
docs_language: en
runtime_dictionary: disabled
notes: Wiki pages are English-only in current scope.

[SECTIONS]
- h2: Profile and Preferences
  content:
    - Set Driver Name for HOS identity and score tracking.
    - Review User ID, local save path, and app version.
    - Configure startup behavior and notification channels (Alert overlay, Inbox messages, Speed alerts).
    - Configure Friend messages with display name and frequency.

- h2: HOS Policy Mode (Auto vs Manual)
  content:
    - Auto mode detects the active game (ATS/ETS2), applies the corresponding policy, and updates HOS limits and metrics.
    - Manual mode forces one fixed policy regardless of detected game.
    - Switching mode can change Drive Left, Shift Left, and Cycle Left values.
    - Pre-trip checks: Game detected, Policy mode, Active policy, and visible HOS limits.
    - Mismatch warning: ATS + manual Europe policy is valid but intentionally uses Europe limits.
    - Recovery flow after unexpected metrics: review mode/policy, Save changes, restart SimDuty, then re-check HOS values.

- h2: Custom Delivery and Save Roots
  content:
    - This section is required for reliable freight sync and active job manipulation.
    - Use Browse to select ATS and ETS2 save root paths.
    - Confirm Effective path text for both games.
    - Configure Yard Move speed limit and auto-disable behavior.
    - Do not select random subfolders that do not contain active game saves.

- h2: Appearance and Window Behavior
  content:
    - Choose Light or Dark theme.
    - Configure Always On Top.
    - Configure Suspend Topmost in Fullscreen for exclusive fullscreen compatibility.
    - Configure Minimize to tray for quick hide/restore.
    - Use Software Render only for compatibility troubleshooting.
    - Configure window size and scaling strategy (Overlay/Manual), including Reset Scale when needed.

- h2: Support, Keybinds, and Audio
  content:
    - Use Support mode and Include saves according to support request scope.
    - Generate support bundle, open support folder, and copy bundle path for ticket sharing.
    - Configure keybinds directly from action/binding fields.
    - Configure audio enable, volume, test audio, and HOS warning mute options.

[STEP_BY_STEP]
- step: 1
  title: Set game roots for Custom Delivery
  instructions:
    - Open More > Setup.
    - In Custom Delivery, set ATS and ETS2 roots with Browse.
    - Confirm Effective paths are correct.

- step: 2
  title: Configure policy and operational preferences
  instructions:
    - Set Units and HOS policy mode (Auto or Manual).
    - If Manual is selected, choose the fixed policy explicitly.
    - Review startup, notifications, and friend message options.

- step: 3
  title: Finalize and validate
  instructions:
    - Click Save changes in the top-right header.
    - Restart SimDuty when required.
    - Validate Home/HOS values in a short drive test.

[QUICK_MATRIX]
- item: Custom Delivery roots
  category: Required
  why: Enables delivery sync and active job data.

- item: HOS policy mode
  category: Required
  why: Defines legal limits and timer behavior.

- item: Always On Top + fullscreen behavior
  category: Recommended
  why: Improves usability on second-screen workflows.

- item: Support bundle settings
  category: Recommended
  why: Speeds up issue escalation.

- item: Keybinds and audio
  category: Optional
  why: Improves operator comfort and productivity.

[FAQ]
- question: Which folder should I select for ATS/ETS2 roots?
  answer: Select the active save root used by your game installation. Confirm the Effective path and avoid unrelated subfolders.

- question: Why did Drive Left / Shift Left change after policy updates?
  answer: Switching Auto/Manual or changing active policy can apply different HOS rule sets and therefore different timer limits.

- question: Always On Top is not staying visible over the game. What should I do?
  answer: Use Borderless mode and review Suspend Topmost in Fullscreen behavior.

[COMMON_ERRORS]
- problem: Custom jobs or active delivery data does not refresh
  likely_cause: Incorrect ATS/ETS2 roots or unsaved settings
  fix:
    - Re-check both roots and Effective paths
    - Save changes and restart SimDuty

- problem: HOS values look inconsistent after mode change
  likely_cause: Auto/Manual switch with a different active policy
  fix:
    - Confirm Game detected, Policy mode, and Active policy
    - Save changes, restart, and re-check Home/HOS

[IMAGES]
- file: docs-setup-profile-preferences.webp
  page_section: setup Profile and Preferences
  caption: Driver identity, startup options, and notification channels
  alt: Setup panel showing Driver Name, save path, and preferences toggles
  priority: High

- file: docs-setup-policy-mode.webp
  page_section: setup HOS Policy Mode
  caption: Auto vs Manual policy mode and active policy selection
  alt: Setup panel showing HOS policy mode controls and policy selector
  priority: High

- file: docs-setup-custom-delivery.webp
  page_section: setup Custom Delivery
  caption: ATS/ETS2 root mapping, effective paths, and yard move controls
  alt: Setup panel showing ATS and ETS2 roots with browse controls and yard move settings
  priority: High

- file: docs-setup-appearance-support.webp
  page_section: setup Appearance and Support
  caption: Topmost behavior, scaling controls, and support bundle tools
  alt: Setup panel showing appearance toggles and support bundle action buttons
  priority: Medium
