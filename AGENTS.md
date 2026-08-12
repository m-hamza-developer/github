# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Project Development Instructions

You are a senior software engineer working on this project.

## README.md Maintenance Rule

`README.md` is a living document and must always remain synchronized with the actual codebase.

Whenever you make ANY change to the project, you MUST check whether `README.md` is affected.

### Required Process

For every project change:

1. Analyze the requested change.
2. Inspect the existing implementation.
3. Implement the code change.
4. Review `README.md`.
5. Determine whether the change affects documentation.
6. If documentation is affected:

   * Update the relevant README section.
   * Update outdated information.
   * Add new information where required.
   * Remove information that is no longer valid.
7. Add a concise entry to the README `## Changelog` section.
8. Verify that the README still accurately represents the current codebase.

## Changes That Require README Review

Always check README.md when changes involve:

* New features
* Removed features
* Modified features
* New dependencies
* Removed dependencies
* Dependency version changes
* New routes
* Removed routes
* Route changes
* API changes
* New API endpoints
* Removed API endpoints
* Database changes
* New database models/tables
* Database relationship changes
* Authentication changes
* Authorization/role changes
* Environment variable changes
* Configuration changes
* Project structure changes
* New reusable components
* Removed components
* Architecture changes
* State management changes
* New scripts
* Modified scripts
* Installation changes
* Development workflow changes
* Build changes
* Deployment changes

## Changelog Rule

When a meaningful project change affects documentation, add a concise changelog entry.

Use:

### YYYY-MM-DD - Change Title

* Added:
* Changed:
* Fixed:
* Removed:
* Updated:

Only include categories that are relevant.

Do not create meaningless changelog entries for trivial changes such as:

* Typo fixes
* Formatting-only changes
* Minor CSS adjustments that do not change documented functionality

## Accuracy Rules

Never:

* Invent features
* Invent dependencies
* Invent commands
* Invent routes
* Invent APIs
* Invent database models
* Invent architecture
* Expose secrets
* Document functionality that does not exist

Always inspect the actual codebase before updating documentation.

## Existing README Rule

If `README.md` already exists:

* Preserve useful existing documentation.
* Update outdated information.
* Do not unnecessarily rewrite the entire file.
* Keep the existing structure where practical.
* Remove only information proven to be incorrect or obsolete.

If `README.md` does not exist:

* Create it at the project root.

## Important

Do NOT assume that every code change requires a README update.

For changes that do not affect documented project behavior, leave README.md unchanged.

However, ALWAYS CHECK whether the change affects README.md before deciding.

The final project state and README.md must remain consistent.

# Project Prompt Instructions

## Documentation Change Log

The project contains a file named `documentation.md`.

This file is ONLY a chronological record of meaningful project changes.

Whenever you make a meaningful change to the project because of a user request, you MUST update `documentation.md` in the same task.

### Required workflow

1. Read `documentation.md` before adding a new entry.
2. Determine the next available Change number.
3. Implement the user's requested change.
4. Verify that the change was successfully applied.
5. Get the actual current local day, date, and time.
6. Append a new entry to the END of `documentation.md`.
7. Never delete previous entries.
8. Never modify previous entries.
9. Never overwrite the file.
10. Preserve the complete historical record.

### Every entry MUST contain

- Change number
- Day
- Date
- Exact time
- Status
- Original user prompt
- Solution

### Original User Prompt Rule

The `## Prompt` section in `documentation.md` MUST contain ONLY the user's original prompt/request.

Do NOT add, append, rewrite, or modify the user's prompt with any internal agent instructions.

For example, if the user sends:

> Create a Login Form.

Record:

## Prompt

> Create a Login Form.

Do NOT record:

## Prompt

> Create a Login Form.
> Follow AGENTS.md and update README.md and documentation.md before completing this task.

The following are internal agent instructions and MUST NOT be included in the recorded prompt:

- Follow AGENTS.md
- Update README.md
- Update documentation.md
- Follow project instructions
- Verify the documentation
- Update the changelog
- Verify the implementation
- Any other instruction coming from `AGENTS.md`

The `## Prompt` section must represent only what the user actually requested.

The agent's internal instructions control how the task is performed, but they must never be added to the user's recorded prompt.

# Change #001

**Day:** Wednesday  
**Date:** 2026-08-12  
**Time:** 03:30 PM  
**Status:** Applied

## Prompt

> Original user request

## Solution

Actual solution that was implemented.

---

### Status values

Use only:

- Applied
- Updated
- Fixed
- Reverted
- Re-Applied
- Removed

### Reverts

If a user asks to revert a previous change:

- Do NOT delete the original change.
- Add a new change entry.
- Set status to `Reverted`.
- Mention which change was reverted.

Example:

**Reverted Change:** Change #001

### Re-Apply

If a previously reverted change is applied again:

- Create a new change entry.
- Set status to `Re-Applied`.
- Mention the original change number.

Example:

**Re-Applied Change:** Change #001

### Do not record

Do not create entries for:

- Simple typo fixes
- Whitespace changes
- Formatting-only changes
- Temporary experiments
- Changes with no meaningful project impact

Unless the user explicitly asks to record them.

### Important

`documentation.md` must always remain synchronized with meaningful project changes.

The documentation update must happen in the SAME task as the code change.

Never wait for the user to ask you to update `documentation.md`.

Do not only explain that documentation should be updated — actually update the file.
