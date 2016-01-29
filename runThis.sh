# This script will create JSON files in the data Folder. 
node lib/helpingScripts/routesToJson.js data/Routes.txt
node lib/helpingScripts/busStopsToJSON.js
echo "The JSON files are created in data folder."