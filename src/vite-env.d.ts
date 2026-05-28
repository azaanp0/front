/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_DEFAULT_LOCALE: string;
  readonly VITE_FREE_SHIPPING_THRESHOLD: string;
  readonly VITE_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
