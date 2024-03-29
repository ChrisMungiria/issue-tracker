/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

// Uncomment this line to test the API call to add an issue
// export const publicRoutes = ["/", "/api/issues"];

/**
 * This is an array of routes used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth/";

/**
 * Default redirect path after a user logs in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
