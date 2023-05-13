import axiosInstance from "@/plugins/axiosInstance";
import { onMounted, ref } from "vue";

const useLeftsidebar = () => {
  const loadingContacts = ref(true);
  const contacts = ref([
    {
      id: 1,
      name: 'Julio Vásquez',
      preview: '¿Qué tal todo?',
      image: 'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png'
    },
    {
      id: 2,
      name: 'Erick Ficachi',
      preview: 'Ya voy en camino',
      image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'
    },
  ]);

  // const getContacts = async () => {
  //   const response = await axiosInstance.get("/629a8125b2d313190810212f.json");
  //   console.log(response);
  // };

  // onMounted(() => {
  //   getContacts()
  // });

  return { contacts, loadingContacts };
};

export default useLeftsidebar;
