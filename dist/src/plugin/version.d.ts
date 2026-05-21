/**
 * Remote Antigravity version fetcher.
 *
 * Mirrors the Antigravity-Manager's version resolution strategy, with an
 * additional first step that detects the locally installed `agy` binary:
 *   1. Local `agy --version` (most accurate — reflects installed CLI)
 *   2. Auto-updater API (plain text with semver)
 *   3. Changelog page scrape (first 5000 chars)
 *   4. Hardcoded fallback in constants.ts
 *
 * Called once at plugin startup to ensure headers use the latest
 * supported version, avoiding "version no longer supported" errors.
 *
 * @see https://github.com/lbjlaq/Antigravity-Manager (src-tauri/src/constants.rs)
 */
/**
 * Fetch the latest Antigravity version and update the global constant.
 * Safe to call before logger is initialized (will silently skip logging).
 */
export declare function initAntigravityVersion(): Promise<void>;
//# sourceMappingURL=version.d.ts.map