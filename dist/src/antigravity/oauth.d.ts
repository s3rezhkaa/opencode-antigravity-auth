import type { AntigravityRedirectMode } from "../constants";
/**
 * Result returned to the caller after constructing an OAuth authorization URL.
 */
export interface AntigravityAuthorization {
    url: string;
    state: string;
    verifier: string;
    projectId: string;
    expiresAt: number;
}
interface AntigravityTokenExchangeSuccess {
    type: "success";
    refresh: string;
    access: string;
    expires: number;
    email?: string;
    projectId: string;
}
interface AntigravityTokenExchangeFailure {
    type: "failed";
    error: string;
}
export type AntigravityTokenExchangeResult = AntigravityTokenExchangeSuccess | AntigravityTokenExchangeFailure;
/**
 * Build the Antigravity OAuth authorization URL including PKCE and optional project metadata.
 *
 * @param projectId - Optional GCP project ID to embed in the OAuth state.
 * @param redirectMode - Which redirect URI and auth endpoint to use.
 *   Defaults to `"local-callback"` (existing behavior).
 */
export declare function authorizeAntigravity(projectId?: string, redirectMode?: AntigravityRedirectMode): Promise<AntigravityAuthorization>;
/**
 * Exchange an authorization code for Antigravity CLI access and refresh tokens.
 *
 * @param code - Authorization code from the OAuth callback.
 * @param state - Encoded state parameter containing the PKCE verifier and project ID.
 * @param redirectMode - Which redirect URI was used during authorization.
 *   Must match the mode used in `authorizeAntigravity`. Defaults to `"local-callback"`.
 */
export declare function exchangeAntigravity(code: string, state: string, redirectMode?: AntigravityRedirectMode): Promise<AntigravityTokenExchangeResult>;
export {};
//# sourceMappingURL=oauth.d.ts.map