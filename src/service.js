import axios from 'axios';

// Set default base URL
axios.defaults.baseURL = "http://localhost:5103/api";

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // If the request succeeds, return the response
    return response;
  },
  (error) => {
    // If there's an error in the response, log it and throw it again
    console.error('Response error:', error);
    throw error;
  }
);

const service = {
  getTasks: async () => {
    const result = await axios.get("/items");
    return result.data;
  },

  addTask: async(name) => {
    const result = await axios.post("/items", { name: name, isComplete: false });
    return result.data;
  },

  setCompleted: async(id, isComplete) => {
    const result = await axios.put(`/items/${id}`, { isComplete: isComplete });
    return result.data;
  },

  deleteTask: async(id) => {
    await axios.delete(`/items/${id}`);
    console.log('Task deleted successfully');
  }
};

export default service