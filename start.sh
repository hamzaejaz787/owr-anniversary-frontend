#!/bin/sh

# Start backend in background
node backend/dist/index.js &

# Serve frontend
serve -s frontend -l 5173
