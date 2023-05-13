import { onMounted, ref } from "vue";

const useTheme = () => {
  const userTheme = ref("light-theme");

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const getTheme = () => {
    return localStorage.getItem("user-theme");
  };

  const setTheme = (theme) => {
    localStorage.setItem("user-theme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
  });

  return {
    userTheme,
    toggleTheme
  };
};

export default useTheme;
