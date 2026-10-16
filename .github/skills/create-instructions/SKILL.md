---
name: create-instructions
description: create-instructions
disable-model-invocation: true
---
Take the information below and generate a concise `.instructions.md` file in `.github/instructions`, including a suitable `applyTo` frontmatter pattern. If a filename is provided, use it with the `.instructions.md` suffix; otherwise derive an appropriate kebab-case filename from the content. Update `.github/copilot-instructions.md` to reference the new guidance. If no information is provided, ask the user for the architectural layer or coding standards to document.