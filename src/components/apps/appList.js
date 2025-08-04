import BrowserApp from "./BrowserApp";
import NotesApp from "./NotesApp";
import SettingsApp from "./SettingsApp";

export const initialApps = [
  {
    id: "browser",
    name: "Web Browser",
    icon: "🌐",
    component: BrowserApp,
  },
  {
    id: "notes",
    name: "Notes",
    icon: "📝",
    component: NotesApp,
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",
    component: SettingsApp,
  }
];
