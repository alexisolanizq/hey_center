import axiosInstance from "@/plugins/axiosInstance";
import { onMounted, ref } from "vue";

const useLeftsidebar = () => {
  const loadingContacts = ref(true);
  const contacts = ref([]);

  const getContacts = async () => {
    const response = await axiosInstance.get("/629a8125b2d313190810212f.json");
    console.log(response);
  };

  onMounted(() => {
    getContacts()
  });

  return { contacts, loadingContacts };
};

export default useLeftsidebar;
