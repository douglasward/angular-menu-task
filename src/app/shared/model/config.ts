export interface AppConfig {
  menuItems: MenuItem[];
}

export interface MenuItem {
  name: string;
  path?: string;
  children?: MenuItem[];
}
