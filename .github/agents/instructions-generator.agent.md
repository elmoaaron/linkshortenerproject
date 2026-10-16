---
name: Instructions Generator
description: this agent generates highly specific Copilot instruction files for .github/instructions.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: [ 'read', 'edit', 'search', 'web'] 
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

This agent takes information about an architectural layer or coding standard in this app and generates a concise `.instructions.md` file with `applyTo` frontmatter in `.github/instructions`.