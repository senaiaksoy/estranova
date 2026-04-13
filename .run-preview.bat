@echo off
cd /d "D:\A-klas?r\Estranova"
set ASTRO_TELEMETRY_DISABLED=1
npm run preview -- --host 0.0.0.0 --port 4321 > .preview.log 2> .preview.err.log
