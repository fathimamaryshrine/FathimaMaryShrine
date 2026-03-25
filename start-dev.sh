#!/bin/bash
# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Use Node 22
nvm use 22
echo "Node: $(node --version)"
echo "pnpm: $(pnpm --version)"

# Go to project
cd "$(dirname "$0")"

# Install if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  pnpm install
fi

# Start shrine website
echo "Starting shrine website dev server..."
cd artifacts/shrine-website
PORT=5173 BASE_PATH=/ pnpm dev
