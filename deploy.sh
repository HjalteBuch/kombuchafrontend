#!/bin/bash

echo "Checking out to main branch..."
git checkout main

echo "Building to production..."
npm run build

echo "Uploading build to server..."
scp -r build/* hjalte@192.168.0.234:/var/www/kombucha/

echo "Done"
