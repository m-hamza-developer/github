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
