// ==========
// | Global |
// ==========

interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

// =======
// | API |
// =======

// Responses
type Api$Data$Get$Response = {
  email: string;
  full_name: string;
};
