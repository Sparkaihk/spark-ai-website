@echo off
cd /d C:\Users\admin\spark-ai-website
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next start -H 127.0.0.1 -p 3001 > prod-server-current-3001.log 2> prod-server-current-3001.err.log
