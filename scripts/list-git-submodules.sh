#!/bin/bash

# Function to display a directory tree
display_tree() {
  local indent="${2:-}"
  for item in "$1"/*; do
    if [ -d "$item" ]; then
      echo "${indent}$(basename "$item")/"
      display_tree "$item" "$indent  "
    else
      echo "${indent}$(basename "$item")"
    fi
  done
}

# Display the main repository structure
#echo "Main Repository:"
#display_tree "."

# Function to display submodule structure
display_submodules() {
  git submodule foreach  'echo "$displaypath"'
}

# Display submodules
echo "Submodules:"
display_submodules
