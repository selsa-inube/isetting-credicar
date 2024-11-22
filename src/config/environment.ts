const IS_PRODUCTION = import.meta.env.PROD;
const AUTH_REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI as string;

const maxRetriesServices = 5;
const fetchTimeoutServices = 3000;

const secretKeyPortalId =
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

const enviroment = {
  CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
  REDIRECT_URI: IS_PRODUCTION ? window.location.origin : AUTH_REDIRECT_URI,
  IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISAAS_QUERY_PROCESS_SERVICE,
};

export {
  enviroment,
  maxRetriesServices,
  fetchTimeoutServices,
  secretKeyPortalId,
};
