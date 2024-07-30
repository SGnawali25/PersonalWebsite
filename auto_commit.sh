#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Stage all changes
git add .

# Commit the changes with the provided message
git commit -m "$1"

# Push the changes to the current branch
git push

# Optional: Print a success message
echo "Changes have been pushed successfully!"
