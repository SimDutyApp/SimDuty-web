# SimDuty - Install Notes

## App
- Run `SimDuty.exe` from the release package.
- Recommended game settings:
  - Fatigue simulation must be OFF.
- DirectX overlay MVP (experimental):
  - treat the in-game overlay as experimental until the first compatibility round is complete.
  - prefer the graphics backend selected in `docs/directx_overlay_mvp_plan.md` for the current test cycle.
  - install `simduty_overlay.dll` as an optional SCS plugin beside `simduty.dll`; do not install it as `dxgi.dll` and do not place it inside the ReShade folder.
  - current validation focus: `CLOSE` must leave `VISIBLE=0 INPUT=0`, then the overlay UI/UX should be approved before full app integration.
- Window tips:
  - You can enable Always On Top in Settings.
  - Minimize to tray is available for quick hide/restore.
- DVIR v2:
  - DVIR now uses the single-page accordion flow (Pre-Trip/Post-Trip).
  - No minimum waiting time: submit when the checklist and signature are valid.
  - Defects require a note; Safe Mode warns if DVIR is pending.
- Logs/Saves/Config will be created in:
- `%LOCALAPPDATA%\SimDuty\Logs`
- `%LOCALAPPDATA%\SimDuty\Saves`
- `%LOCALAPPDATA%\SimDuty\Config`
- A persistência padrão usa `Config/simduty.db` (SQLite).
- Arquivos JSON de save e JSONL de auditoria podem existir como compatibilidade,
  fallback ou mirror opcional; eles não são garantidos pelo fluxo padrão.
- Consulte [`docs/persistence_and_logging.md`](persistence_and_logging.md) para
  os detalhes e os nomes condicionais de arquivos.

## Plugins (ATS / ETS)
- The DLLs located in the **plugins** folder must be installed in the game plugins directory:
  - ATS (64-bit): `...\American Truck Simulator\bin\win_x64\plugins`
  - ATS (32-bit): `...\American Truck Simulator\bin\win_x86\plugins`
  - ETS2 (64-bit): `...\Euro Truck Simulator 2\bin\win_x64\plugins`
  - ETS2 (32-bit): `...\Euro Truck Simulator 2\bin\win_x86\plugins`

## Troubleshooting
- If SimDuty does not connect, verify the plugin DLLs are in the correct game plugins folder.
- Open the Debug tab and confirm the DLL status is OK and `GET_GAME_TIME_INFO` returns a source.
- In every build, this diagnostic is intentionally sanitized: it reports only
  `SRC` and `VAL` when resolved and must not expose addresses, offsets, bases or
  pointers. `SET_TIME_BASE` and `CLEAR_TIME_BASE` are compiled only when
  `NDEBUG` is not defined and are not required for installation or normal
  operation.
- Do not copy PDB, dump, map, log, symbol/build, source/project or
  development-configuration files into the game plugin folder. The tracked
  `release.ps1` removes PDBs from staging and rejects residual prohibited
  artifacts before creating or accepting the ZIP.
