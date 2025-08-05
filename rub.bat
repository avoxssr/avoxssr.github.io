@echo off
REM Start a simple HTTP server on port 16969 for this folder
python -m http.server 16969 --bind 192.168.1.100
