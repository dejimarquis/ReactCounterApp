- Publish to blob : 
npm run-script build
az storage blob upload-batch -s .\build\ -d '$web' --account-name telemetrytutorial

