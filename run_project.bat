@echo off
echo Starting Portfolio Project...
echo.
echo Note: This requires Node.js to be installed.
echo If it fails, please install Node.js from https://nodejs.org/
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting Local Server...
echo Opening http://localhost:3000/index.html
echo.
start http://localhost:3000/index.html
npx serve .
pause
